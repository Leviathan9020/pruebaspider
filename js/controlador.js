//importacion de elementos 
import {llenarTienda} from "./llenarTienda.js"
import {ampliarInfoProducto} from "./ampliarinfoproducto.js"


//llamo a la funcion llenar tienda
llenarTienda()

//llamo a la funcion ampliarInfoProducto

let Modalinfoproducto = new bootstrap.Modal(document.getElementById('Modalinfoproducto'))

let listaProductros=document.getElementById("fila")
listaProductros.addEventListener("click",function(event){

   
    ampliarInfoProducto(event)
    Modalinfoproducto.show()
    

})
