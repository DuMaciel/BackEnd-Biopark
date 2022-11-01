document.addEventListener("DOMContentLoaded", () => {
    const but = document.getElementById('but')
    const texto = document.getElementById('texto')
    but.addEventListener('click', () => {
        texto.innerText = `Tenha um bom dia, sr(a) ${prompt("Digite seu nome:")}`
    })
})