// $(".open-btn").on("click", function () {
//     $(".sidebar").addClass("active");
// });

// $(".close-btn").on("click", function () {
//     $(".sidebar").removeClass("active");
// });

"Use Strict";

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// Show sidebar when open button is clicked
openBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

//Hide sidebar when a close button is clicked
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});


// Function to create a typewriter effect
function typeWriter(elementId, text, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ""; // Clear existing content
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
// Initialize typewriter effect on DOM content loaded - adjust speed as needed
document.addEventListener("DOMContentLoaded", function() {
    typeWriter("typewriter-text", "Anderson Moreton Rodrigues", 100);
});
