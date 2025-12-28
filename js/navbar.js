"use strict";

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// Show sidebar
openBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

// Hide sidebar
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

// Typewriter effect
function typeWriter(elementId, text, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = "";

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter("typewriter-text", "Anderson Moreton Rodrigues", 100);
});
