document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class "menu-link"
    var menuLinks = document.querySelectorAll(".menu-link");

    // Loop through each menu-link element
    menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener("click", function(e) {
        e.preventDefault();  // Prevent default action

        // Toggle the "open" class on menu-overlay and menu elements
        document.querySelector(".menu-overlay").classList.toggle('open');
        document.querySelector(".menu").classList.toggle('open');
    });
    });
});