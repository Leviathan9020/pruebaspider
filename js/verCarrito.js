export function verCarrito(carrito){
    let modalVerCarrito = new bootstrap.Modal(document.getElementById('modalvercarrito'))
   
    let contenedor=document.getElementById("contenedorCarrito")
    contenedor.innerHTML=""

    let subtotales=[]


    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12")
        columna1.classList.add("col-md-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12")
        columna2.classList.add("col-md-8")

        let fotoProducto=document.createElement("img")
        fotoProducto.classList.add("img-fluid")
        fotoProducto.classList.add("w-100")
        fotoProducto.src=producto.foto       

        let nombreProducto=document.createElement("h3")
        nombreProducto.textContent=producto.nombre 
              
        let separador = document.createElement("hr")

        let subtotal = document.createElement("h5")
        subtotal.textContent="Subtotal: "+ producto.cantidad * producto.precio.slice(1)
        

        let precioProducto=document.createElement("h4")
        precioProducto.textContent=producto.precio
        let cantidad=document.createElement("h6")
        cantidad.textContent=producto.cantidad+" Und"
       
       
       
        //padres e hijos        
        columna1.appendChild(fotoProducto)
        columna1.appendChild(separador)
        columna2.appendChild(nombreProducto)        
        columna2.appendChild(precioProducto)
        columna2.appendChild(subtotal)
        columna2.appendChild(cantidad)
        fila.appendChild(columna1)
        fila.appendChild(columna2)

        
        contenedor.appendChild(fila)   
        subtotales.push( producto.cantidad * producto.precio.slice(1))

    })

   
    modalVerCarrito.show()

    //Se agrega boton limpiar    
    let botonclear=document.getElementById("botonclear")
    botonclear.addEventListener("click", function(){
        contenedor.innerHTML=""
        carrito.length = 0
        let pildora=document.getElementById("pildora")
        pildora.innerHTML=""
  
    })

    
    let total = 0
    subtotales.forEach(subtotal=>{
        total=total+subtotal
    })

    let todo = document.getElementById("Total")
    todo.textContent="total: "+total

    //aqui voy hacer el boton de convesion a usd

    let botonconversion = document.getElementById("botonconversion")
    botonconversion.addEventListener("click", function(){
        total = total * 0.00025 

        todo.textContent = "total: $" + total 
    },{once:true})


}

