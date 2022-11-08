"use strict"

// ========== toggle style switcher ==========
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");
styleSwitcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
})

// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
})


// ========== theme colors ==========
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}


// ========== theme dark light mode ==========

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("light");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("light")) {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
})