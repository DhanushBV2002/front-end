# =====================================================
#  Dhanuasha Digital Solutions - Live Server
#  Lightweight static file server (no installs needed)
#  Uses .NET HttpListener built into Windows / .NET
#  Usage:
#     powershell -ExecutionPolicy Bypass -File .\start-live-server.ps1
#  Then open:  http://localhost:5500
# =====================================================

param([int]$Port = 5500)

$Root    = $PSScriptRoot
$Prefix  = "http://localhost:$Port/"

$Listener = [System.Net.HttpListener]::new()
$Listener.Prefixes.Add($Prefix)
$Listener.Start()

Write-Host ""
Write-Host "================================================="
Write-Host "  Dhanuasha Digital Solutions - LIVE"
Write-Host "  URL : $Prefix"
Write-Host "  Press Ctrl+C to stop"
Write-Host "================================================="
Write-Host ""

$Mime = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".webp" = "image/webp"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
    ".txt"  = "text/plain; charset=utf-8"
    ".pdf"  = "application/pdf"
}

while ($Listener.IsListening) {

    try {
        $Context = $Listener.GetContext()
    } catch {
        break
    }

    $Request  = $Context.Request
    $Response = $Context.Response

    try {

        $UrlPath = [System.Uri]::UnescapeDataString($Request.Url.AbsolutePath)

        if ($UrlPath -eq "/") {
            $UrlPath = "/index.html"
        }

        $FullPath = [System.IO.Path]::GetFullPath(
            (Join-Path $Root $UrlPath.TrimStart('/'))
        )

        # Prevent path traversal outside the website folder
        if (-not $FullPath.StartsWith(
                $Root,
                [System.StringComparison]::OrdinalIgnoreCase
            )) {
            $Response.StatusCode = 403
            $Response.Close()
            continue
        }

        # Serve index.html when a directory is requested
        if ([System.IO.Directory]::Exists($FullPath)) {
            $FullPath = Join-Path $FullPath "index.html"
        }

        if ([System.IO.File]::Exists($FullPath)) {

            $Ext     = [System.IO.Path]::GetExtension($FullPath).ToLower()
            $MimeType = if ($Mime.ContainsKey($Ext)) {
                $Mime[$Ext]
            } else {
                "application/octet-stream"
            }

            $Bytes = [System.IO.File]::ReadAllBytes($FullPath)

            $Response.ContentType      = $MimeType
            $Response.ContentLength64  = $Bytes.Length
            $Response.OutputStream.Write($Bytes, 0, $Bytes.Length)

        } else {

            $Response.StatusCode = 404
            $Body = [System.Text.Encoding]::UTF8.GetBytes(
                "<h1>404 - Page Not Found</h1><p>" + $UrlPath + "</p>"
            )
            $Response.ContentType     = "text/html; charset=utf-8"
            $Response.ContentLength64 = $Body.Length
            $Response.OutputStream.Write($Body, 0, $Body.Length)

        }

    } catch {

        try {
            $Response.StatusCode = 500
        } catch { }

    } finally {

        try { $Response.Close() } catch { }

    }

}