document.addEventListener("DOMContentLoaded", () => {
    const but = document.getElementById('but')
    but.addEventListener('click', () => {
        (but.innerText == "Meu Botão") ? (but.innerText = "Meu Segundo Botão") : (but.innerText = "Meu Botão")
    })
})