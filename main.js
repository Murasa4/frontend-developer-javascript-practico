const email = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu")

email.addEventListener("click", menucompras);

function menucompras() {
    desktopmenu.classList.toggle("inactivo")
}