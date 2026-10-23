/* =====================================================
   DHANUASHA SCHOOL
   JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

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

}


/* ================= CLOSE MENU ================= */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) {

            navbar.classList.remove("show");

        }

        if (menuToggle) {

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

});


/* ================= COUNTER ================= */

const counters = document.querySelectorAll("[data-count]");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.count);

            let current = 0;

            const duration = 1500;

            const stepTime = 20;

            const increment = target / (duration / stepTime);

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {

                    counter.textContent = target + "+";

                    clearInterval(timer);

                } else {

                    counter.textContent = Math.floor(current);

                }

            }, stepTime);

            observer.unobserve(counter);

        });

    },

    {
        threshold: 0.5
    }

);

counters.forEach(counter => {

    observer.observe(counter);

});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const formMessage =
            document.getElementById("formMessage");

        formMessage.textContent =
            "Thank you! Your enquiry has been received. Our school team will contact you soon.";

        formMessage.style.color = "#123c69";

        contactForm.reset();

    });

}


/* ================= SCROLL ANIMATION ================= */

const revealElements =
    document.querySelectorAll(
        ".program-card, .feature-card, .value-card, .activity-card, .gallery-item"
    );

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.1
    }

);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(20px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    revealObserver.observe(element);

});