//0. IMPORTO LIBRERIA DE AUTENTICACION
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"



import{desvanecimiento} from "./desvanecer.js"

//1.  para registrar una persona en su app


let botonLogin = document.getElementById("botonLogin")
botonLogin.addEventListener("click", function (event) {
  event.preventDefault()

  //1.1 CREO UNA REFERENCIA GLOBAL A LA VENTANA MODAL
  let modallogin = new bootstrap.Modal(document.getElementById("modalInicio"))
  let mensajeLongin = document.getElementById("mensajeInicio")


  //obtenemos el valor de input del formulario
  let email = document.getElementById("cajaemail").value
  let password = document.getElementById("cajapassword").value

  //VALIDAR EL FORMULARIO

  //AGREAGAR LA RUTINA PARA LLEVAR LOS DATOS FIRBASE
  //(HABLAR CON EL BACK)
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      mensajeLongin.textContent="Welcome"
      modallogin.show()
      

    })


    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      mensajeLongin.textContent = `Error: ${errorCode} : ${errorMessage}`
      modallogin.show()
      
    });


})

let botonRegistro = document.getElementById("botonregistro")
botonRegistro.addEventListener("click", function (event) {
  event.preventDefault()

  //1.1 CREO UNA REFERENCIA GLOBAL A LA VENTANA MODAL
  let modallogin = new bootstrap.Modal(document.getElementById("modallogin"))
  let mensajeLongin = document.getElementById("mensajelogin")


  //obtenemos el valor de input del formulario
  let email = document.getElementById("cajaemail").value
  let password = document.getElementById("cajapassword").value

  //VALIDAR EL FORMULARIO

  //AGREAGAR LA RUTINA PARA LLEVAR LOS DATOS FIRBASE
  //(HABLAR CON EL BACK)
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      mensajeLongin.textContent="Exito en el Registro. Welcome"
      modallogin.show()
      

    })


    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      mensajeLongin.textContent = `Error: ${errorCode} : ${errorMessage}`
      modallogin.show()
      
    });


})
desvanecimiento()
