
window.addEventListener("load", function() {
    // Get the preloader element
     const preloader = document.getElementById("preloader");

    // Hide the preloader after 5 seconds
    setTimeout(function() {
        preloader.style.display = "none";
    }, 3000);
});

const hamburgerMenu1 = document.getElementById("hamburger-menu1");
const dropdownMenu1 = document.querySelector(".dropdown-menu1");
const explorebutton = document.getElementById("headbutton");
hamburgerMenu1.addEventListener("click", function () {
    dropdownMenu1.classList.toggle("show");
});
explorebutton.addEventListener("click", function () {
    dropdownMenu1.classList.toggle("show");
});