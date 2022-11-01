document.addEventListener("DOMContentLoaded", () => {
    const but = document.getElementById('but')
    const inp = document.getElementById('inp')
    but.addEventListener('click', () => {
        alert(inp.value)
    })
})