
/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (nav.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   HEADER SCROLL
========================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================
   ACTIVE NAV LINK
========================================= */

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


/* =========================================
   PROPERTY FAVORITE BUTTON
========================================= */

document.querySelectorAll(".favorite").forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("liked");

        const icon = button.querySelector("i");

        if (button.classList.contains("liked")) {

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

        } else {

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

        }

    });

});


/* =========================================
   PROPERTY SEARCH FILTER
========================================= */

const locationFilter = document.getElementById("locationFilter");
const typeFilter = document.getElementById("typeFilter");
const priceFilter = document.getElementById("priceFilter");

const searchBtn = document.getElementById("searchBtn");

const propertyCards = document.querySelectorAll(".property-card");


searchBtn.addEventListener("click", () => {

    const location = locationFilter.value;
    const type = typeFilter.value;
    const price = priceFilter.value;

    let visibleCount = 0;


    propertyCards.forEach(card => {

        const cardLocation = card.dataset.location;
        const cardType = card.dataset.type;
        const cardPrice = Number(card.dataset.price);

        let locationMatch =
            location === "all" ||
            location === cardLocation;

        let typeMatch =
            type === "all" ||
            type === cardType;

        let priceMatch = true;


        if (price === "50") {

            priceMatch = cardPrice < 50;

        } else if (price === "100") {

            priceMatch = cardPrice >= 50 && cardPrice <= 100;

        } else if (price === "200") {

            priceMatch = cardPrice > 100 && cardPrice <= 200;

        } else if (price === "300") {

            priceMatch = cardPrice > 200;

        }


        if (locationMatch && typeMatch && priceMatch) {

            card.classList.remove("hidden");

            visibleCount++;

        } else {

            card.classList.add("hidden");

        }

    });


    const grid = document.getElementById("propertyGrid");


    if (visibleCount === 0) {

        alert(
            "No properties found for the selected filters. Please try another search."
        );

    } else {

        grid.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

});


/* =========================================
   VIEW PROPERTY
========================================= */

function openProperty(propertyName) {

    const message =
        `Hello Dhanuasha Real Estate,

I am interested in the property:
${propertyName}

Please share more details.`;

    const whatsappNumber = "919876543210";

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const interest =
        document.getElementById("interest").value;

    const message =
        document.getElementById("message").value.trim();


    if (!name || !phone || !email || !interest) {

        formMessage.textContent =
            "Please fill in all required fields.";

        formMessage.style.color = "#c0392b";

        return;

    }


    const whatsappMessage =
        `Hello Dhanuasha Real Estate,

Name: ${name}
Phone: ${phone}
Email: ${email}
Interested In: ${interest}

Message:
${message}`;


    const whatsappNumber = "919876543210";


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    formMessage.textContent =
        "Thank you! Opening WhatsApp to send your enquiry...";

    formMessage.style.color = "#2e7d32";


    window.open(whatsappURL, "_blank");


    contactForm.reset();

});


/* =========================================
   BACK TO TOP
========================================= */

const backTop = document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

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


/* =========================================
   SIMPLE COUNTER ANIMATION
========================================= */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    const statsSection =
        document.querySelector(".stats");

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;


        counters.forEach(counter => {

            const target =
                Number(counter.textContent);

            let current = 0;

            const duration = 1500;

            const increment =
                target / (duration / 20);


            const updateCounter = () => {

                current += increment;


                if (current < target) {

                    counter.textContent =
                        Math.floor(current);

                    setTimeout(updateCounter, 20);

                } else {

                    counter.textContent =
                        target;

                }

            };


            updateCounter();

        });

    }

}


window.addEventListener("scroll", startCounters);

startCounters();

