const menuIcon = document.querySelector(".hamburger-menu");

const navbar = document.querySelectorAll(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.ClassList.toggle("change");
 
});