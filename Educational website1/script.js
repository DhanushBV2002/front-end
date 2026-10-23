
/* =====================================================
   DHANUASHA EDUCATIONAL INSTITUTION
   JAVASCRIPT
===================================================== */


document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("header");
    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");
    const backTop = document.getElementById("backTop");

    const navLinks = document.querySelectorAll(".nav-link");


    /* ================= MOBILE MENU ================= */

    menuBtn.addEventListener("click", function () {

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

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("open");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


    /* ================= HEADER SCROLL ================= */

    function handleScroll() {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
            backTop.classList.add("show");
        } else {
            header.classList.remove("scrolled");
            backTop.classList.remove("show");
        }

    }

    window.addEventListener("scroll", handleScroll);


    /* ================= ACTIVE NAV LINK ================= */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveLink() {

        const scrollPosition = window.scrollY + 150;

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navLinks.forEach(function (link) {
                    link.classList.remove("active");
                });

                const activeLink =
                    document.querySelector(
                        '.nav-link[href="#' + sectionId + '"]'
                    );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);


    /* ================= BACK TO TOP ================= */

    backTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ================= SCROLL REVEAL ================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    /* ================= CONTACT FORM ================= */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const selectedClass =
            document.getElementById("class").value;

        const message =
            document.getElementById("message").value.trim();


        if (
            name === "" ||
            phone === "" ||
            selectedClass === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill in all required fields.";

            formMessage.style.color = "#d9534f";

            return;

        }


        /* Basic phone validation */

        const phonePattern = /^[0-9+\-\s()]{8,20}$/;

        if (!phonePattern.test(phone)) {

            formMessage.textContent =
                "Please enter a valid phone number.";

            formMessage.style.color = "#d9534f";

            return;

        }


        /*
            DEMO FORM SUBMISSION

            This currently does not send data to a database.

            Later you can connect this form to:
            - PHP + MySQL
            - Node.js
            - Firebase
            - Supabase
            - Formspree
            - Your own backend
        */


        console.log({
            name: name,
            phone: phone,
            email: email,
            class: selectedClass,
            message: message
        });


        formMessage.textContent =
            "Thank you! Your enquiry has been received. We will contact you soon.";

        formMessage.style.color = "#16804b";


        contactForm.reset();

    });


    /* ================= CURRENT YEAR ================= */

    const yearElement =
        document.getElementById("year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});
