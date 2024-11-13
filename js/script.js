const hamMenuBtn = document.getElementById("menu-btn");
const hamMenu = document.getElementById("menu");

hamMenuBtn.addEventListener("click", handleNav);

function handleNav() {
  hamMenuBtn.classList.toggle("open");
  hamMenu.classList.toggle("flex");
  hamMenu.classList.toggle("hidden");
}
