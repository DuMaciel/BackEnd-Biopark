const idosos = [
    { id: 0, nome: "genoveva", idade: "65", vivo: true },
    { id: 1, nome: "creitons", idade: "58", vivo: true },
    { id: 2, nome: "genival", idade: "81", vivo: false },
    { id: 3, nome: "irineu", idade: "60", vivo: null },
    { id: 4, nome: "iracema", idade: "32", vivo: true },
    { id: 5, nome: "mirileu", idade: "85", vivo: false },
    { id: 6, nome: "virmondo", idade: "123", vivo: true },
    { id: 7, nome: "vinhado", idade: "12", vivo: false },
    { id: 8, nome: "Lindomar", idade: "60", vivo: true },
    { id: 9, nome: "celestino", idade: "68", vivo: true },
    { id: 10, nome: "felisberg", idade: "72", vivo: false },
    { id: 11, nome: "eunice", idade: "67", vivo: true },
    { id: 12, nome: "josefina", idade: "92", vivo: true },
    { id: 13, nome: "virosvaldo", idade: "12", vivo: false },
    { id: 14, nome: "masteromio", idade: "85", vivo: false }
]

document.addEventListener('DOMContentLoaded', () => {

    const butEscrever = document.getElementById('escrever')
    butEscrever.addEventListener("click", () => { imprimirTodos(idosos) })
   
    

    //ex 5
    const divIdosos = document.getElementById('idosos')
    //divIdosos.innerText = idosos[6]['nome']S
    //ex 5
   
    // ex 6 e 7
    //divIdosos.appendChild(criarElemento(idosos[7]))
     // ex 6 e 7

    
    //ex 8
    escreverIdosos(divIdosos,idosos)
    //ex 8

    //ex 9
    const divIdososMaiores60 = document.getElementById('idosos>60')
    escreverIdososMaiores60(divIdososMaiores60,idosos)
    //ex 9

});


function imprimirTodos(velhos) {

    const velhosReduc = idosos.reduce((prev, { id, ...curr }) => {

        return {
            ...prev,
            [id]: curr
        };

    }, {})

    console.table(velhosReduc);
}


function imprimirVivos(velhos){
    velhos = velhos.filter((item)=>{
        return item.vivo;
    })

    console.log(velhos)
    imprimirTodos(velhos);
}

function imprimirMortos(velhos){
    velhos = velhos.filter((item)=>{
        return !item.vivo;
    })

    console.log(velhos)
    imprimirTodos(velhos);
}

function imprimirJovens(velhos){
    velhos = velhos.filter((item)=>{
        return item.idade<40;
    })

    console.log(velhos)
    imprimirTodos(velhos);
}



function criarElemento(idoso){
    const p = document.createElement("p")
    p.id = idoso['id'];
    p.innerText = `O ${idoso['nome']} está com ${idoso['idade']} anos , e esta ${idoso['vivo'] ? 'vivo!' : 'morto :('}`
    return p;
}


function escreverIdosos(tagLocal,idosos){
    idosos.forEach((elemento, index, vetor) => {
        tagLocal.appendChild(criarElemento(idoso))
    });
}

function escreverIdososMaiores60(tagLocal,idosos){
    idosos = idosos.filter(idoso => {
        return idoso['idade']>60;
    })
    idosos.forEach(idoso => {
        tagLocal.appendChild(criarElemento(idoso))
    });
}