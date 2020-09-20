const letras = document.querySelectorAll('.letra')
const mensaje = document.getElementById('inputList')
console.log(letras)

const teclado = (e)=>{
    const textoTarget = e.target.innerText

    if(textoTarget == "space"){
        mensaje.innerHTML += "&nbsp"        
    }else if(textoTarget == "<--"){
        mensaje.innerHTML = mensaje.innerText.slice(0, -1)        
    }else{
        mensaje.innerText += textoTarget
    }
}

for(let i = 0; i<letras.length; i+= 1){
    letras[i].addEventListener('click', teclado)
}
