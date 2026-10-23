/* =========================================
   DHANUASHA RESTAURANT
   JAVASCRIPT
========================================= */


/* ---------- MOBILE MENU ---------- */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("show");

        const icon = menuToggle.querySelector("i");

        if (navbar.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("show");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* ---------- MENU FILTER ---------- */

const menuTabs = document.querySelectorAll(".menu-tab");
const menuItems = document.querySelectorAll(".menu-item");

menuTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        menuTabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        const category = tab.dataset.category;

        menuItems.forEach(item => {

            if (
                category === "all" ||
                item.dataset.category === category
            ) {

                item.style.display = "grid";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* ---------- RESERVATION FORM ---------- */

const reservationForm =
    document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            reservationForm.querySelector('[name="name"]').value;

        alert(
            `Thank you ${name}! Your reservation request has been received. Our team will contact you shortly.`
        );

        reservationForm.reset();

    });

}


/* ---------- CONTACT FORM ---------- */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            contactForm.querySelector('[name="name"]').value;

        alert(
            `Thank you ${name}! Your message has been sent successfully.`
        );

        contactForm.reset();

    });

}


/* ---------- SET MINIMUM DATE ---------- */

const dateInput =
    document.querySelector('input[type="date"]');

if (dateInput) {

    const today = new Date();

    const year = today.getFullYear();

    const month =
        String(today.getMonth() + 1).padStart(2, "0");

    const day =
        String(today.getDate()).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;

}


/* ---------- SCROLL REVEAL ---------- */

const revealElements =
    document.querySelectorAll(
        ".food-card, .feature, .value-card, .gallery-item, .menu-item"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});