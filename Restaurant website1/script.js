/* =========================================================
   DHANUASHA RESTAURANT
   JAVASCRIPT
========================================================= */


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

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

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


/* CLOSE MOBILE MENU */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= ACTIVE NAV ================= */

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


/* ================= MENU FILTER ================= */

const menuTabs = document.querySelectorAll(".menu-tab");
const foodCards = document.querySelectorAll(".food-card");

menuTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        menuTabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        const category = tab.getAttribute("data-category");

        foodCards.forEach(card => {

            const cardCategory = card.getAttribute("data-category");

            if (
                category === "all" ||
                category === cardCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= REVIEWS ================= */

const reviewCards =
    document.querySelectorAll(".review-card");

const dots =
    document.querySelectorAll(".dot");

const nextReview =
    document.getElementById("nextReview");

const prevReview =
    document.getElementById("prevReview");

let reviewIndex = 0;


function showReview(index) {

    reviewCards.forEach(card => {
        card.classList.remove("active-review");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    reviewCards[index].classList.add("active-review");

    dots[index].classList.add("active");

}


nextReview.addEventListener("click", () => {

    reviewIndex++;

    if (reviewIndex >= reviewCards.length) {
        reviewIndex = 0;
    }

    showReview(reviewIndex);

});


prevReview.addEventListener("click", () => {

    reviewIndex--;

    if (reviewIndex < 0) {
        reviewIndex = reviewCards.length - 1;
    }

    showReview(reviewIndex);

});


/* AUTO REVIEW */

setInterval(() => {

    reviewIndex++;

    if (reviewIndex >= reviewCards.length) {
        reviewIndex = 0;
    }

    showReview(reviewIndex);

}, 5000);


/* ================= RESERVATION FORM ================= */

const reservationForm =
    document.getElementById("reservationForm");

const formMessage =
    document.getElementById("formMessage");


reservationForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        reservationForm.querySelector('[name="name"]').value;

    formMessage.textContent =
        `Thank you ${name}! Your reservation request has been received.`;

    reservationForm.reset();

});


/* ================= DATE ================= */

const dateInput =
    document.querySelector('input[type="date"]');


const today =
    new Date().toISOString().split("T")[0];


dateInput.setAttribute("min", today);


/* ================= BACK TO TOP ================= */

const backTop =
    document.getElementById("backTop");


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


/* ================= GALLERY LIGHT EFFECT ================= */

document.querySelectorAll(".gallery-item").forEach(item => {

    item.addEventListener("click", () => {

        const image =
            item.querySelector("img");

        if (!image) return;

        const overlay =
            document.createElement("div");

        overlay.className = "image-modal";

        overlay.innerHTML = `
            <div class="modal-close">
                <i class="fas fa-xmark"></i>
            </div>

            <img src="${image.src}" alt="${image.alt}">
        `;

        document.body.appendChild(overlay);

        setTimeout(() => {
            overlay.classList.add("active");
        }, 10);


        overlay.addEventListener("click", () => {

            overlay.classList.remove("active");

            setTimeout(() => {
                overlay.remove();
            }, 300);

        });

    });

});


/* ================= MODAL CSS ================= */

const modalStyle = document.createElement("style");

modalStyle.innerHTML = `

.image-modal {

    position: fixed;

    inset: 0;

    z-index: 2000;

    background: rgba(0,0,0,.92);

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 30px;

    opacity: 0;

    transition: opacity .3s ease;

}

.image-modal.active {
    opacity: 1;
}

.image-modal img {

    max-width: 100%;

    max-height: 90vh;

    width: auto;

    object-fit: contain;

}

.modal-close {

    position: absolute;

    top: 25px;

    right: 30px;

    width: 45px;

    height: 45px;

    display: grid;

    place-items: center;

    border: 1px solid rgba(255,255,255,.5);

    color: #fff;

    cursor: pointer;

    font-size: 18px;

}

`;

document.head.appendChild(modalStyle);