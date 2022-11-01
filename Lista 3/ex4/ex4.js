document.addEventListener("DOMContentLoaded", () => {
    const mensagem = document.getElementById('mensagem')
    const inp = document.getElementById('inp')
    inp.addEventListener('keydown', () => {
        (inp.value.length == 10) ? (mensagem.innerText = 'Quantidade de digitos válida') : (mensagem.innerText = `Quantidade de digitos inválida, quantidade de digitos atual ${inp.value.length + 1}.`)
    })

    
    const validar = document.getElementById('validar')
    validar.addEventListener('click', () => {
        (inp.value.length == 10) ? (alert('Quantidade de digitos inválida')) : (
            (confirm(`Tentar validar o CPF ${inp.value}?`) && validarCPF(inp.value)) ? (incerirCPF(inp.value)) : (alert("CPF Não Validado"))
        )
        });
})

function incerirCPF(string){
    const validados = document.getElementById('validados')
    alert("CPF Validado")
    if(validados.innerText == ''){
        validados.innerText += `
        CPFs Validados`
    }
    validados.innerText += `
    ${string}`
}

function validarCPF(string){
    [...string].forEach(element => {
        if(element < '0' || element > '9'){
            return false
        }
    })
    return true;
};