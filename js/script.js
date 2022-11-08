"use strict"
// ========== typing animation ==========
var typed = new Typed(".typing", {
    strings:["","Web Developer", "", "UI/UX Designer", "", "Graphic Designer"],
    typeSpeed: 80,
    backSpeed: 25,
    loop: true
});


// ========== aside ==========
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavlist = navList.length;
const allSection = document.querySelectorAll(".section");
const totalsection = allSection.length;

for(let i = 0; i < totalNavlist; i++) {
    // console.log(navList[i]);
    const a = navList[i].querySelector("a");
    // console.log(a);
    a.addEventListener("click", function() {
        // console.log(this);
        for(let i = 0; i < totalsection; i++) {
            allSection[i].classList.remove("back-section"); 
        }

        for(let j = 0; j < totalNavlist; j++) {
            if(navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200) {
           closeMenu();
        }
    })
}

function showSection(element) {
    // console.log(element);
    // const href = element.getAttribute("href").split("#");
    // var target = href[1];
    // console.log(target);
    for(let i = 0; i < totalsection; i++) {
        allSection[i].classList.remove("active"); 
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}


const hamburgerMenu = document.querySelector(".nav-toggler");
const asideHeader = document.querySelector(".aside");

hamburgerMenu.addEventListener("click", () => {
    closeMenu();
})

function closeMenu() {
    hamburgerMenu.classList.toggle("open");
    asideHeader.classList.toggle("open");
}

 
// const menuA = document.querySelectorAll(".nav li a");
// console.log(menuA);

// for(let i = 0; i < menuA.length; i++) {
//     menuA[i].addEventListener('click', () => {
//         hamburgerMenu.classList.toggle("open");
//         asideHeader.classList.toggle("open");
//     })
// }


