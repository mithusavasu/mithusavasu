/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close menu when a link is clicked */

const navigationLinks = document.querySelectorAll(
    ".nav-links a"
);

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});



/* =========================================================
   CURRENT YEAR
========================================================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();



/* =========================================================
   NAVBAR ON SCROLL
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(5, 5, 10, 0.92)";

    } else {

        navbar.style.background =
            "rgba(5, 5, 10, 0.7)";

    }

});



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-grid, " +
    ".experience-card, " +
    ".leadership-card, " +
    ".education-card, " +
    ".skill-category, " +
    ".project-card, " +
    ".learning-item, " +
    ".contact-content"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll(
    "section[id]"
);


const navItems = document.querySelectorAll(
    ".nav-links a"
);


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});