/* =========================================
   DHANUASHA REAL ESTATE
   JAVASCRIPT
========================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuToggle = document.getElementById("menuToggle");

    const navbar = document.querySelector(".navbar");


    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

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

    }


    /* =====================================
       FAVORITE BUTTON
    ===================================== */

    const favorites =
        document.querySelectorAll(".favorite");


    favorites.forEach(function (button) {

        button.addEventListener("click", function () {

            const icon =
                button.querySelector("i");


            button.classList.toggle("liked");


            if (button.classList.contains("liked")) {

                icon.classList.remove("fa-regular");

                icon.classList.add("fa-solid");

            } else {

                icon.classList.remove("fa-solid");

                icon.classList.add("fa-regular");

            }

        });

    });


    /* =====================================
       PROPERTY FILTER
    ===================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");


    const filterItems =
        document.querySelectorAll(".filter-item");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {


            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            const filter =
                button.getAttribute("data-filter");


            filterItems.forEach(function (item) {


                if (
                    filter === "all" ||
                    item.classList.contains(filter)
                ) {

                    item.classList.remove("hidden");

                } else {

                    item.classList.add("hidden");

                }

            });

        });

    });


    /* =====================================
       CONTACT FORM
    ===================================== */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value;


            const formMessage =
                document.getElementById("formMessage");


            formMessage.textContent =
                "Thank you, " +
                name +
                "! Your enquiry has been received. Our team will contact you shortly.";


            formMessage.style.color =
                "#2c8b57";


            contactForm.reset();

        });

    }


    /* =====================================
       SCROLL TOP
    ===================================== */

    const scrollTop =
        document.getElementById("scrollTop");


    if (scrollTop) {

        window.addEventListener("scroll", function () {


            if (window.scrollY > 500) {

                scrollTop.classList.add("show");

            } else {

                scrollTop.classList.remove("show");

            }

        });


        scrollTop.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* =====================================
       PAGE FADE-IN
    ===================================== */

    document.body.classList.add("page-loaded");

});


/* =========================================
   PROPERTY SEARCH
========================================= */

function searchProperties() {


    const location =
        document.getElementById("locationSearch").value;


    const type =
        document.getElementById("typeSearch").value;


    const budget =
        document.getElementById("budgetSearch").value;


    console.log("Location:", location);

    console.log("Property Type:", type);

    console.log("Budget:", budget);


    window.location.href = "properties.html";

}