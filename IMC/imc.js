const pessoas = [];
do {
    const pessoa = {
        nome: prompt("Digite o nome:"),
        peso: parseFloat(prompt("Digite o peso:").replace(",", ".")),
        altura: parseFloat(prompt("Digite a altura:").replace(",", ".")),
        imc: 0,
    }
    pessoa.imc = calIMC(pessoa.peso, pessoa.altura);
    mostrarResultado(pessoa.imc);
    pessoas.push(pessoa);
} while (confirm("Deseja continuar"));

function calIMC(peso, altura) {
    let imc = (peso / (altura * altura)).toFixed(2)
    return imc;
}
function mostrarResultado(imc) {
    if (imc < 18.5) {
        alert("Seu IMC é " + imc + ", você está abaixo do peso")
    } else if (imc < 24.9) {
        alert("Seu IMC é " + imc + ", você está com peso normal")
    } else if (imc < 30) {
        alert("Seu IMC é " + imc + ", você está com sobrepeso")
    } else {
        alert("Seu IMC é " + imc + ", você está com obesidade")
    }
}

console.table(pessoas);