const email = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");

const mobilemenu = document.querySelector(".mobile-menu");
const iconmenumobile = document.querySelector(".menu");

email.addEventListener("click", menucompras);

iconmenumobile.addEventListener("click", iconocategorias);

function menucompras() {
    desktopmenu.classList.toggle("inactivo")
}


function iconocategorias() {
    mobilemenu.classList.toggle("inactivo")
}