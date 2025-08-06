const burgerButton = document.querySelector("#burger");
const burgerMenu = document.querySelector(".burger-menu");

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger-menu-open");
});
