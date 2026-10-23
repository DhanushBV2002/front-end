
/* =====================================================
   DHANUASHA HOTEL
   JAVASCRIPT
===================================================== */


/* ================= HEADER ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* CLOSE MOBILE MENU WHEN LINK CLICKED */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

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


/* ================= DATE VALIDATION ================= */

const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");

const today = new Date().toISOString().split("T")[0];

checkin.min = today;
checkout.min = today;


checkin.addEventListener("change", () => {

    checkout.min = checkin.value;

    if (checkout.value && checkout.value <= checkin.value) {

        checkout.value = "";

    }

});


/* ================= BOOKING FORM ================= */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", (event) => {

    event.preventDefault();

    showToast(
        "Thank you! Your availability request has been received."
    );

    bookingForm.reset();

    checkout.min = today;

});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    showToast(
        "Thank you! Your enquiry has been submitted successfully."
    );

    contactForm.reset();

});


/* ================= TOAST ================= */

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

let toastTimer;

function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}


/* ================= COUNTERS ================= */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection =
        document.querySelector(".stats-section");

    const position =
        statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const increment =
                Math.max(1, Math.ceil(target / 80));

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current;

                if (target === 4) {

                    counter.textContent = current + ".9";

                }

                if (target === 5000 && current === target) {

                    counter.textContent = "5K+";

                }

                if (target === 50 && current === target) {

                    counter.textContent = "50+";

                }

                if (target === 10 && current === target) {

                    counter.textContent = "10+";

                }

            }, 25);

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();


/* ================= TESTIMONIAL SLIDER ================= */

const testimonials =
    document.querySelectorAll(".testimonial");

const prevBtn =
    document.getElementById("prevTestimonial");

const nextBtn =
    document.getElementById("nextTestimonial");

const sliderDots =
    document.getElementById("sliderDots");

let currentTestimonial = 0;


/* CREATE DOTS */

testimonials.forEach((_, index) => {

    const dot = document.createElement("span");

    if (index === 0) {

        dot.classList.add("active");

    }

    dot.addEventListener("click", () => {

        showTestimonial(index);

    });

    sliderDots.appendChild(dot);

});


const dots = sliderDots.querySelectorAll("span");


function showTestimonial(index) {

    testimonials.forEach(item => {

        item.classList.remove("active");

    });

    dots.forEach(dot => {

        dot.classList.remove("active");

    });

    testimonials[index].classList.add("active");

    dots[index].classList.add("active");

    currentTestimonial = index;

}


nextBtn.addEventListener("click", () => {

    currentTestimonial++;

    if (currentTestimonial >= testimonials.length) {

        currentTestimonial = 0;

    }

    showTestimonial(currentTestimonial);

});


prevBtn.addEventListener("click", () => {

    currentTestimonial--;

    if (currentTestimonial < 0) {

        currentTestimonial = testimonials.length - 1;

    }

    showTestimonial(currentTestimonial);

});


/* AUTO SLIDE */

setInterval(() => {

    currentTestimonial++;

    if (currentTestimonial >= testimonials.length) {

        currentTestimonial = 0;

    }

    showTestimonial(currentTestimonial);

}, 5000);


/* ================= GALLERY LIGHTBOX ================= */

const galleryItems =
    document.querySelectorAll(".gallery-item");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image =
            item.querySelector("img");

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeLightbox();

    }

});


/* ================= BACK TO TOP ================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= IMAGE ERROR FALLBACK ================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        img.style.background =
            "linear-gradient(135deg,#292929,#777)";

        img.style.minHeight = "200px";

    });

});

