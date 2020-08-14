var menuButton = document.querySelector(".menu-btn");
menuButton.addEventListener("click", function () {
  document
    .querySelector(".navbar-menu")
    .classList.toggle("navbar-menu--visible");
});
