export function ampliarInfoProducto(event){
    
    let producto={}

    if(event.target.classList.contains("btn")){


        producto={
            foto:event.target.parentElement.querySelector("img").src,
           
            precio:event.target.parentElement.querySelector("h6").textContent
          
        }
        //MOSTRAMOS LOS DATROS DEL PRODUCTO EN EL MODAL
        let etiquetaFoto=document.getElementById("imagenProducto")
        etiquetaFoto.src=producto.foto

        let etiquetaNombreProducto=document.getElementById("nombreProducto")
        etiquetaNombreProducto.textContent=producto.nombre

        let etiquetaPrecio=document.getElementById("precioProducto")
        etiquetaPrecio.textContent=producto.precio

        return(producto)
    }
}