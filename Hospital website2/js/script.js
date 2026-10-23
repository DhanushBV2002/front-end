document.addEventListener("DOMContentLoaded", function () {


    /* MOBILE MENU */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("show");

            const icon = menuBtn.querySelector("i");

            if (navLinks.classList.contains("show")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        document.querySelectorAll(".nav-links a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("show");

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* APPOINTMENT FORM */

    const appointmentForm =
        document.getElementById("appointmentForm");

    const formMessage =
        document.getElementById("formMessage");


    if (appointmentForm) {

        appointmentForm.addEventListener("submit", function (event) {

            event.preventDefault();

            formMessage.innerHTML =
                "✓ Thank you! Your appointment request has been received. Our team will contact you shortly.";

            formMessage.style.color = "#087f8c";

            appointmentForm.reset();

        });

    }


    /* CONTACT FORM */

    const contactForm =
        document.getElementById("contactForm");

    const contactMessage =
        document.getElementById("contactMessage");


    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            contactMessage.innerHTML =
                "✓ Thank you! Your message has been submitted successfully.";

            contactMessage.style.color = "#087f8c";

            contactForm.reset();

        });

    }


    /* SET MINIMUM APPOINTMENT DATE */

    const dateInput =
        document.querySelector('input[type="date"]');

    if (dateInput) {

        const today =
            new Date().toISOString().split("T")[0];

        dateInput.setAttribute("min", today);

    }


    /* SCROLL REVEAL */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .department-card, .doctor-card-main, .value-card"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform =
                            "translateY(0)";

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .6s ease, transform .6s ease";

        observer.observe(element);

    });

});