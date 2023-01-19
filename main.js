//correo icon
const email = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");

//menu icon
const mobilemenu = document.querySelector(".mobile-menu");
const iconmenumobile = document.querySelector(".menu");

//carrito icon
const carritoicon = document.querySelector(".navbar-shopping-cart")
const carritocompras = document.querySelector(".product-detail");


// card container del section de los productos
const cardscontainer = document.querySelector(".cards-container");

// info del producto(bici)
const biciinfo = document.querySelector(".detalle-producto");
const clickbiciinfo = document.querySelector(".cards-container")




email.addEventListener("click", menucorreo);

iconmenumobile.addEventListener("click", iconocategorias);

carritoicon.addEventListener("click", compras);

clickbiciinfo.addEventListener("click", showdetalles);


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

//detalles de la compra bici
function showdetalles() {
    biciinfo.classList.toggle("inactivo");
    mobilemenu.classList.add("inactivo");
    carritocompras.classList.add("inactivo");
    desktopmenu.classList.add("inactivo");
};


const listadeproductos = [];
listadeproductos.push({
    nombre: "bici",
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
listadeproductos.push({
    nombre: "celular",
    precio: 520,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
listadeproductos.push({
    nombre: "tv",
    precio: 250,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

/* 
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> 
*/

function productosfuncion(arrayproductos) {

    for(producto of listadeproductos) {
        productcard = document.createElement("div");
        productcard.classList.add("product-card");
    
        const productimg = document.createElement("img");
        productimg.setAttribute("src", producto.imagen);
    
        const productinfo = document.createElement("div");
        productinfo.classList.add("product-info");
    
        const productinfoDiv = document.createElement("div");
    
        const productprecio = document.createElement("p");
        productprecio.innerText = "$" + producto.precio;
    
        const productnombre = document.createElement("p");
        productnombre.innerText = producto.nombre;
    
        productinfoDiv.appendChild(productprecio);
        productinfoDiv.appendChild(productnombre);
        
        const productinfoFigure = document.createElement("figure");
        const productinfoimagen = document.createElement("img");
        productinfoimagen.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productinfoFigure.appendChild(productinfoimagen);
        
        productinfo.appendChild(productinfoDiv);
        productinfo.appendChild(productinfoFigure);
    
        productcard.appendChild(productimg);
        productcard.appendChild(productinfo);
    
        cardscontainer.appendChild(productcard);
    };

};

productosfuncion(listadeproductos)



