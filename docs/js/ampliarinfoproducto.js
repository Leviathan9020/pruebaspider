export function ampliarInfoProducto(event){
    
    let producto={}

    if(event.target.classList.contains("btn")){


        producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h4").textContent,
            precio:event.target.parentElement.querySelector("h6").textContent,
            descripcion:event.target.parentElement.querySelector("p").textContent
          
        }
        //MOSTRAMOS LOS DATROS DEL PRODUCTO EN EL MODAL
        let etiquetaFoto=document.getElementById("imagenProducto")
        etiquetaFoto.src=producto.foto

        let etiquetaNombreProducto=document.getElementById("nombreProducto")
        etiquetaNombreProducto.textContent=producto.nombre

        let etiquetaPrecio=document.getElementById("precioProducto")
        etiquetaPrecio.textContent=producto.precio

        let descripcionProducto=document.getElementById("descripcionProducto")
        descripcionProducto.textContent=producto.descripcion

        return(producto)
    }
}