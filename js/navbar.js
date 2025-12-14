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