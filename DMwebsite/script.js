// Mobile menu

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// Contact form

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Thank you " + name +
            "! We will contact you soon."
        );

        document
            .getElementById("contactForm")
            .reset();

    });