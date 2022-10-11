'use strict';

let loader = document.getElementById("load");
let porcentaje = document.getElementById("porcentaje-carga");
setTimeout(() => porcentaje.innerHTML = "20%", 1000);
setTimeout(() => porcentaje.innerHTML = "40%", 2000);
setTimeout(() => porcentaje.innerHTML = "60%", 3000);
setTimeout(() => porcentaje.innerHTML = "80%", 4000);
setTimeout(() => porcentaje.innerHTML = "100%", 5000);
setTimeout(() => loader.style.display = "none", 5500);

let categorias = document.querySelector(".categorias");
let carrito = document.querySelector(".carrito");
let menu = document.querySelector(".menu");
let buscador =document.querySelector(".buscador")

let boton_carrito = document.querySelector(".boton-carrito").addEventListener('click', desplegarCarrito => carrito.classList.toggle("carrito-mostrar"));
let boton_categorias = document.querySelector(".boton-categorias").addEventListener('click', desplegarCategorias => categorias.classList.toggle("categorias-mostrar"));
let boton_menu = document.querySelector(".boton-menu").addEventListener('click', desplegarMenu => menu.classList.toggle("menu-mostrar"));
let boton_buscdor = document.querySelector(".boton-buscador").addEventListener('click', desplegarBuscador => buscador.classList.toggle("buscador-mostrar"));

let boton_cerrar_menu = document.querySelector(".cerrar-menu").addEventListener('click', desplegarMenu => menu.classList.toggle("menu-mostrar"));
let boton_cerrar_categorias = document.querySelector(".cerrar-categorias").addEventListener('click', desplegarCategorias => categorias.classList.toggle("categorias-mostrar"));
let boton_cerrar_carrito = document.querySelector(".cerrar-carrito").addEventListener('click', desplegarCarrito => carrito.classList.toggle("carrito-mostrar"));
let boton_cerrar_buscador = document.querySelector(".cerrar-buscador").addEventListener('click', desplegarBuscador => buscador.classList.toggle("buscador-mostrar"));


let imagen_categorias = document.getElementById("imagen-categorias");
if(imagen_categorias){
    imagen_categorias.addEventListener('mouseover', hoverCategorias => imagen_categorias.src = "https://i.postimg.cc/CxN6wchR/categorias-hover.jpg")
    imagen_categorias.addEventListener('mouseleave', cancelarHoverCategorias => imagen_categorias.src = "https://i.postimg.cc/x1r6vWCJ/categorias.png");
}
let imagen_buscador = document.getElementById("imagen-buscador");
if(imagen_buscador){
    imagen_buscador.addEventListener('mouseover', hoverBuscador => imagen_buscador.src = "https://i.postimg.cc/zBLdS5nh/icono-lupa-hover.png")
    imagen_buscador.addEventListener('mouseleave', cancelarHoverBuscador => imagen_buscador.src = "https://i.postimg.cc/Hngp7V0n/icono-lupa-default.png");
}
let imagen_carrito = document.getElementById("imagen-carrito");
if(imagen_carrito){
    imagen_carrito.addEventListener('mouseover', hoverCarrito => imagen_carrito.src = "https://i.postimg.cc/PJY294Vr/icono-carrito-hover.png");
    imagen_carrito.addEventListener('mouseleave', cancelarHoverCarrito => imagen_carrito.src = "https://i.postimg.cc/NfQss2fP/icono-carrito-default.png");
}
let imagen_menu = document.getElementById("imagen-menu");
if(imagen_menu){
    imagen_menu.addEventListener('mouseover', hoverMenu => imagen_menu.src = "https://i.postimg.cc/66vj8W6J/icono-menu-hover.png");
    imagen_menu.addEventListener('mouseleave', cancelarHoverMenu => imagen_menu.src = "https://i.postimg.cc/NjMQThX6/icono-menu-default.png");
}

let boton_cerrar = document.querySelectorAll(".boton-cerrar");
if(boton_cerrar){
    for (const boton of boton_cerrar) {
        boton.addEventListener('mouseover', hoverBotonCerrar => boton.src = "https://i.postimg.cc/2SBPmQqv/icono-flecha-cerrar-hover.png")
        boton.addEventListener('mouseleave', cancelarHoverBotonCerrar => boton.src = "https://i.postimg.cc/ZKYbTMZN/icono-flecha-cerrar-default.png");    
    }
    
}

let personaje_renderizar = 0;




let imagenes_personajes = [
    {
        "Nombre": "Mario",
    "Imagen": "https://i.postimg.cc/Y9SVGSwH/mario.jpg",
    "Descripcion":" Enamorado de la Princesa Peach, será el encargado de liberarla de el terrible Bowser" },
    {
        "Nombre": "Luigi",
        "Imagen": "https://i.postimg.cc/j2pkFQnx/luigi.jpg",
        "Descripcion": "Hermano de Mario, será el encargado de cooperar con él para vencer a Bowser"
    },
    {
        "Nombre": "Peach",
        "Imagen": "https://i.postimg.cc/N0GYDBwN/peach.jpg",
        "Descripcion": "Princesa del reino Champiñon, secuestrada en el castillo bajo las garras de Bowser"
    },
    {
        "Nombre": "Yoshi",
        "Imagen": "https://i.postimg.cc/qB6rj19d/yoshi.jpg",
        "Descripcion": "Es un dinosaurio, el mejor amigo de Mario, será su complice durante el juego"
    }
];


function personajeSiguiente(){
    if(personaje_renderizar < 3){
        personaje_renderizar++;
        renderPersonaje(personaje_renderizar);
    }else{
    personaje_renderizar = 0;
        renderPersonaje(personaje_renderizar)
    }
}

function personajeAnterior(){
    if(personaje_renderizar > 1){
        personaje_renderizar--;
        renderPersonaje(personaje_renderizar);
    }else{
    personaje_renderizar = 3;
        renderPersonaje(personaje_renderizar)
    }
}

function renderPersonaje(nuevo_personaje){
    console.log(nuevo_personaje);
    let nombre_personaje = document.getElementById("nombre-personaje");
    let imagen_personaje = document.getElementById("imagen-personaje");
    let descripcion_personaje= document.getElementById("descripcion-personaje");
    console.log("Renderizando imagen")

    nombre_personaje.innerHTML = imagenes_personajes[nuevo_personaje].Nombre;
    imagen_personaje.src = imagenes_personajes[nuevo_personaje].Imagen;
    descripcion_personaje.innerHTML = imagenes_personajes[nuevo_personaje].Descripcion;
}

renderPersonaje(personaje_renderizar);
let boton_personaje_siguiente = document.getElementById("flecha-adelante-personaje").addEventListener('click', personajeSiguiente);
let boton_personaje_atras = document.getElementById("flecha-atras-personaje").addEventListener('click', personajeAnterior);