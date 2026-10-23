/* =====================================================
   DHANUASHA HOSPITAL
   JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking link */

document.querySelectorAll(".nav-link, .nav-btn").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= HEADER SCROLL ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ================= BACK TO TOP ================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= APPOINTMENT FORM ================= */

const appointmentForm =
    document.getElementById("appointmentForm");


appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const patientName =
        document.getElementById("patientName").value;


    alert(
        `Thank you, ${patientName}!\n\n` +
        `Your appointment request has been received.\n\n` +
        `Dhanuasha Hospital will contact you shortly to confirm your appointment.`
    );


    appointmentForm.reset();

});


/* ================= SET MINIMUM DATE ================= */

const dateInput =
    document.querySelector('input[type="date"]');


if (dateInput) {

    const today = new Date();

    const year = today.getFullYear();

    const month =
        String(today.getMonth() + 1).padStart(2, "0");

    const day =
        String(today.getDate()).padStart(2, "0");


    dateInput.min =
        `${year}-${month}-${day}`;

}


/* ================= IMAGE ERROR HANDLING ================= */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        image.style.background =
            "#e9f8fa";

    });

});