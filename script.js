/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen =
            navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


/* Close mobile menu when a navigation link is clicked */

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   NAVBAR ON SCROLL
========================================================= */

const navbar =
    document.querySelector(".navbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(5, 5, 10, 0.94)";

    } else {

        navbar.style.background =
            "rgba(5, 5, 10, 0.7)";

    }

}

window.addEventListener(
    "scroll",
    updateNavbar
);

updateNavbar();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".section-intro, " +
        ".about-grid, " +
        ".experience-card, " +
        ".leadership-card, " +
        ".education-card, " +
        ".skill-category, " +
        ".project-card, " +
        ".learning-item, " +
        ".contact-content"
    );


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (
            target === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================================================
   PROJECT CARD MICRO-INTERACTION
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -4;

            const rotateY =
                ((x / rect.width) - 0.5) * 4;

            card.style.transform =
                `translateY(-7px)
                 perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* =========================================================
   SMOOTH EXTERNAL LINK BEHAVIOUR
========================================================= */

const externalLinks =
    document.querySelectorAll(
        'a[target="_blank"]'
    );


externalLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            console.log(
                `Opening: ${link.href}`
            );

        }
    );

});