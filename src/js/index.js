const campos = document.querySelectorAll(".preencher")
const botaoEnviar = document.querySelector(".btn-enviar")

botaoEnviar.addEventListener('click', (e) =>{
    e.preventDefault()

    campos.forEach((input) =>{
        if (input.value) {
            input.classList.add("valido")
            input.nextElementSibling.classList.add("ocultar")
        } else {
            input.classList.add("invalido")
            input.classList.remove("valido")
            input.nextElementSibling.classList.remove("ocultar")
        }
    })
})