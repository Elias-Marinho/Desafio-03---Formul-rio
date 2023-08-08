const btnEnviar = document.querySelector(".btn-enviar")
const preencher = document.querySelectorAll(".preencher")
const aviso = document.querySelectorAll(".obrigatorio")


btnEnviar.addEventListener("click", function () {

    preencher.forEach(function (valor) {
        if (valor.value === "") {
            valor.classList.add("invalido")
            valor.classList.remove("valido")
            aviso.forEach(function (checagem) {
                if (valor.value === ""){
                checagem.classList.remove("ocultar")
                }
            })

        } else {
            valor.classList.add("valido")
            valor.classList.remove("invalido")
            aviso.forEach(function (checagem) {
                if (valor.value === ""){
                checagem.classList.add("ocultar")
                }
            })
        }

    })

})