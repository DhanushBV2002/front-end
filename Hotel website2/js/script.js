/* ==================================
   DHANUASHA HOTEL JAVASCRIPT
================================== */


/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("show");

    });

}


/* CLOSE MOBILE MENU AFTER CLICK */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("show");

    });

});


/* BOOKING FORM */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const message = document.getElementById("formMessage");

        message.textContent =
            "Thank you! Your booking request has been received. Our team will contact you shortly.";

        bookingForm.reset();

    });

}


/* SET MINIMUM DATE FOR BOOKING */

const today = new Date().toISOString().split("T")[0];

const dateInputs = document.querySelectorAll('input[type="date"]');

dateInputs.forEach(function(input) {

    input.setAttribute("min", today);

});


/* PREVENT CHECKOUT BEFORE CHECK-IN */

const checkIn = document.querySelector('input[name="checkin"]');

const checkOut = document.querySelector('input[name="checkout"]');

if (checkIn && checkOut) {

    checkIn.addEventListener("change", function() {

        checkOut.min = checkIn.value;

    });

}


/* SIMPLE SCROLL ANIMATION */

const animatedElements = document.querySelectorAll(
    ".room-card, .feature, .food-card, .gallery-item, .large-room-card"
);

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

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


animatedElements.forEach(function(element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});