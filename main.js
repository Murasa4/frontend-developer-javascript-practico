//correo icon
const email = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");

//menu icon
const mobilemenu = document.querySelector(".mobile-menu");
const iconmenumobile = document.querySelector(".menu");

//carrito icon
const carritoicon = document.querySelector(".navbar-shopping-cart")
const carritocompras = document.querySelector(".product-detail");

email.addEventListener("click", menucorreo);

iconmenumobile.addEventListener("click", iconocategorias);

carritoicon.addEventListener("click", compras);


//funcion del menu del correo
function menucorreo() {
    desktopmenu.classList.toggle("inactivo");
    mobilemenu.classList.add("inactivo");
    carritocompras.classList.add("inactivo");
};

//funcion del icono del menu movil
function iconocategorias() {
    mobilemenu.classList.toggle("inactivo");
    carritocompras.classList.add("inactivo");
    desktopmenu.classList.add("inactivo");
};

//funcion del icono del carrito
function compras() {
    carritocompras.classList.toggle("inactivo");
    mobilemenu.classList.add("inactivo");
    desktopmenu.classList.add("inactivo");
}
