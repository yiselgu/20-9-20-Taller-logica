const mensajeNombre = document.getElementById('mensajeAlertaNombre')
const mensajeCelular = document.getElementById('mensajeAlertaCelular')
const mensajeUsuario = document.getElementById('mensajeAlertaUsuario')
const mensajeCorreo = document.getElementById('mensajeAlertaCorreo')
const mensajePassword = document.getElementById('mensajeAlertaPassword')

function validarFormulario(event) {
    event.preventDefault()

    let inputname = document.getElementById('name')
    let inputcel = document.getElementById('cel')
    let inputusuario = document.getElementById('usuario')
    let inputcorreo = document.getElementById('email')
    let inputPassword = document.getElementById('password')
    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6}$/;


    if (inputname.value == '') {
        mensajeNombre.innerText = "Complete el campo nombre"
        inputname.classList.add('bgcAlert')
        swal("Error", "Ingrese nombre!", "error");
    }
    else{
        inputname.classList.remove('bgcAlert')
        mensajeNombre.innerText="" }

    if (inputcel.value == '') {
        mensajeCelular.innerText = "Complete el campo Celular"
        inputcel.classList.add('bgcAlert')
        swal("Error", "Ingrese Celular!", "error");
    }
    else{inputcel.classList.remove('bgcAlert')
        mensajeCelular.innerText="" }

    if (inputusuario.value == '') {
        mensajeUsuario.innerText = "Complete el campo Usuario"
        inputusuario.classList.add('bgcAlert')
        swal("Error", "Ingrese Usuario!", "error");
    }
    else{inputusuario.classList.remove('bgcAlert')
        mensajeUsuario.innerText="" }

    if (inputcorreo.value == '') {
        mensajeCorreo.innerText = "Complete el campo Correo"
        inputcorreo.classList.add('bgcAlert')
        swal("Error", "Ingrese Correo!", "error");
    }
    else{inputcorreo.classList.remove('bgcAlert')
        mensajeCorreo.innerText="" }

    if (inputPassword.value == '') {
        mensajePassword.innerText = "Complete el campo Password"
        inputPassword.classList.add('bgcAlert')
        swal("Error", "Ingrese Password!", "error");
    }
    else if(inputPassword.value.length < 6){       
        swal("Error", "La longitud de la contraseña debe ser de 6 dígitos!", "error");
    }    
    else{inputPassword.classList.remove('bgcAlert')
        mensajePassword.innerText="" }
 
    if(inputname.value!= "" && inputcel.value !="" && inputusuario.value !="" && inputcorreo.value !="" && inputPassword.value != "") {       
        swal("Muy Bien!", "Registro Exitoso!", "success");
        setTimeout(()=>{window.location = './assets/pages/login.html'},2000)
    }else{ swal("Algo salió mal!", "Todos los campos son requeridos!", "error");}

}