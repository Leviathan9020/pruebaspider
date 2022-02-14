export function agregarCarrito(carrito){


    //crear una referencia a la pildora del carrito
    let pildora=document.getElementById("pildora")

    pildora.classList.remove("invisible")

    let contador =0
    carrito.forEach(function(producto){

        contador=(contador+Number(producto.cantidad))

    })
    console.log(contador)
    pildora.textContent= contador

            

    //rutina para recorrer el carrito y sumar las cantidades de cada producto
    

}

