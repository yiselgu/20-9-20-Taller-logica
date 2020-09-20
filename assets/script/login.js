const formLogin = document.getElementById("formLogin");
const userStorage = JSON.parse(localStorage.getItem("usuarios"));

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputemail = document.getElementById("email").value;
  const inputpassword = document.getElementById("password").value;

  validarUsuario(inputemail, inputpassword);
});

const validarUsuario = (inputemail, inputpassword) => {
  for (let index = 0; index < userStorage.length; index += 1) {
    if (
      userStorage[index].correo == inputemail &&
      userStorage[index].password == inputpassword
    ) {
      localStorage.setItem('userName', userStorage[index].nombre);
      swal("Bienvenido","Ingreso Exitoso!", "success");
      setTimeout(() => {
        window.location = ".././pages/tareas.html";
      }, 2000);
    } else {
        swal("Algo salio mal!", "Usuario invalido!", "error");
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";            
    }
  }
};
