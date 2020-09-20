const formRegistro = document.getElementById('formRegistro')

let listaDeUsuario = [];


formRegistro.addEventListener('submit', (e)=>{
    e.preventDefault()
    const inputname = document.getElementById('name').value
    const inputcel = document.getElementById('cel').value
    const inputUsuario = document.getElementById('usuario').value
    const inputemail = document.getElementById('email').value
    const inputpassword = document.getElementById('password').value

    const usuario = {
        nombre: inputname,
        celular: inputcel,
        usuarios: inputUsuario,
        correo: inputemail,
        password: inputpassword
    }
    guardarEnStorage(usuario)
})

const guardarEnStorage =  (usuario)=>{
    if(localStorage.getItem('usuarios') == null){
            listaDeUsuario.push(usuario)
            const usuarioString = JSON.stringify(listaDeUsuario)
            localStorage.setItem('usuarios', usuarioString)
    }
        listaEnStorage = JSON.parse(localStorage.getItem("usuarios"))
        listaEnStorage.push(usuario)
        const usuarioString = JSON.stringify(listaEnStorage)
        localStorage.setItem('usuarios', usuarioString)
    
}
