//funcion para llenar dinamica mente la tienda

export function llenarTienda() {

    let productos = [

        {
            nombre: "Comic Spiderman",
            precio: 201000,
            foto: "../img/1.jpg",
            descripcion: "edicion 1"
        },
        {
            nombre: "funko",
            precio: 62000,
            foto: "../img/2.jpg",
            descripcion: "fuko"
        },
        {
            nombre: "La era del Traje Negro",
            precio: 17000,
            foto: "../img/3.png",
            descripcion: "spiderman traje negro"
        },
        {
            nombre: "juego spierman ps5",
            precio: 319000,
            foto: "../img/4.jpg",
            descripcion: "juego ps4 con miles morales"
        },
        {
            nombre: "juego spiderman ps4 1era edicion",
            precio: 95000,
            foto: "../img/5.jpg",
            descripcion: "edicion 1 spiderman ps4"
        },
        {
            nombre: "Gafas estilo tony stark",
            precio: 587000,
            foto: "../img/6.jpg",
            descripcion: "gafas estilo tony stark"
        },
        {
            nombre: "Ley y Orden",
            precio: 130000,
            foto: "../img/7.jpg",
            descripcion: "de spiderman ley y el orden"
        },
        {
            nombre: "La Identidad del Duende",
            precio: 160000,
            foto: "../img/8.jpg",
            descripcion: "la identidad del duende"
        },
        {
            nombre: "El Regreso del Ladron",
            precio: 115000,
            foto: "../img/9.jpg",
            descripcion: "Regreso del ladron"
        },
        {
            nombre: "La Muerte de Gwen Stacy",
            precio: 110000,
            foto: "../img/10.jpg",
            descripcion: "la muerte de gwen staicy"
        }
    ]

    //Rutina para recorrer el arreglo y crear las tarjetas de producto 

    //Crear una referencia a un elemento "PADRE " o "BASE" donde anclaremos los demas
    let fila = document.getElementById("fila")

    //2. Necesito recorrer un arreglo
    productos.forEach(function (producto) {

        //CREAMOS LOS ELEMENTOS NECESARIOS PARA PINTAR LOS PRODUCTOS
        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("p-3")
        imagen.classList.add("h-100")
        imagen.src = producto.foto

        let separador = document.createElement("hr")
        separador.classList.add("w-50")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")


        let nombre = document.createElement("h4")
        nombre.classList.add("fw-bold")
        nombre.classList.add("text-center")
        nombre.classList.add("text-danger")
        nombre.classList.add("mx-3")
        nombre.textContent = producto.nombre

        let precio = document.createElement("h6")
        precio.classList.add("text-center")
        precio.classList.add("text-danger")
        precio.textContent = "$" + producto.precio

        let descripcion = document.createElement("p")
        descripcion.textContent = producto.descripcion
        descripcion.style.display = "none"



        let botonAmpliarinfo = document.createElement("button")
        botonAmpliarinfo.setAttribute("type", "button")
        botonAmpliarinfo.classList.add("btn")
        botonAmpliarinfo.classList.add("btn-outline-danger")
        botonAmpliarinfo.classList.add("mx-3")
        botonAmpliarinfo.classList.add("mb-3")
        botonAmpliarinfo.textContent = "Ver Producto"


        //VAMOS A ANCLAR(PONER)(DISPONER)LAS ETIQUETAS
        // QUE ACABAMOS DE CREAR EN NUESTRA BASE

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(botonAmpliarinfo)



        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })

}