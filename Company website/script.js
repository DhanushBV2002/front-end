/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        if (navMenu.classList.contains("show")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navMenu) {
            navMenu.classList.remove("show");
        }

        if (menuToggle) {
            menuToggle.textContent = "☰";
        }

    });

});


/* =====================================================
   PORTFOLIO FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        portfolioItems.forEach(function(item) {

            const category =
                item.getAttribute("data-category");

            if (
                filter === "all" ||
                category === filter
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill in all required fields.";

            formMessage.style.color = "#dc2626";

            return;
        }


        formMessage.textContent =
            "Thank you! Your enquiry has been received.";

        formMessage.style.color = "#16a34a";


        contactForm.reset();

    });

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".service-card, .portfolio-card, .process-card, .value-card, .mission-card"
    );


const revealObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

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


revealElements.forEach(function(element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});