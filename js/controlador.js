//importacion de elementos 
import {llenarTienda} from "./llenarTienda.js"
import {ampliarInfoProducto} from "./ampliarinfoproducto.js"
import{agregarCarrito} from "./agregarCarrito.js"
import {verCarrito} from "./verCarrito.js"

//VARIABLES GLOBALES DE LA TIENDA
let producto={}
let carrito=[]


//llamo a la funcion llenar tienda
llenarTienda()

//llamo a la funcion ampliarInfoProducto
let Modalinfoproducto = new bootstrap.Modal(document.getElementById('Modalinfoproducto'))
let listaProductros=document.getElementById("fila")
listaProductros.addEventListener("click",function(event){
  

   
    producto=ampliarInfoProducto(event)
    //console.log(producto)
    Modalinfoproducto.show()

})


//llamo a la funcion agregar al carrito
let botonagregarCarrito=document.getElementById("agregarCarrito")
botonagregarCarrito.addEventListener("click",function(){ 
let cantidadProducto=document.getElementById("cantidadproducto").value
producto.cantidad=cantidadProducto
 
 
    
  //agrego el producto al carrito
  carrito.push(producto)
 

  //oculto la modal de info producto
  Modalinfoproducto.hide()
  let etiquetaCantidad=document.getElementById("cantidadproducto")
    etiquetaCantidad.value=1

  //llamar la funcion agrgarCarrito
  agregarCarrito(carrito)

})

//Llamo a la funcion ver carrito 
let botonverCarrito=document.getElementById("botonCarrito")
botonverCarrito.addEventListener("click",function(){
  verCarrito(carrito)
})
