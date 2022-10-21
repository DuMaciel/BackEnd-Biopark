let escolhaMenu = 0;
let pedidos = [];

while(escolhaMenu = parseInt(prompt("Digite sua escolhaMenu:\n0-Sair\n1-Vender\n2-Pedidos\n3-Caixa"))){
    if(escolhaMenu == 1){
        let escolhaItem = 1;
        let cachorroQuente=[];
        let assado=[];
        let sanduiche=[];
        let tapioca=[];
        let refrigerante=[];
        while(!(escolhaItem==0 || escolhaItem==10)){
            escolhaItem = parseInt(prompt("Digite sua escolhaMenu:\n0-Sair\n1-Cachorro quente\n2-Assado\n3-Sanduiche\n4-Tapioca\n5-Refrigerante\n10-Fechar pedido"));
            switch(escolhaItem){
                case 1:
                    let qCachorro = parseInt(prompt("1 por 8 reais.\n2 por 15 reais.\nDigite quantos cachorros quentes você quer:"));
                    let tCachorro = parseInt(qCachorro/2)*15.00 + qCachorro%2 * 8.00; 
                    cachorroQuente.push({Quantidade :qCachorro,Total: tCachorro});
                    break;
                case 2:
                    let qAssado = parseInt(prompt("1 por 6 reais.\n2 por 10 reais.\nDigite quantos assados você quer:"));
                    let tAssado = parseInt(qAssado/2)*10.00 + qAssado%2 * 6.00; 
                    assado.push({Quantidade :qAssado,Total: tAssado});
                    break;
                case 3:
                    let qSanduiche = parseInt(prompt("1 por 11 reais.\n2 por 20 reais.\nDigite quantos sanduiches você quer:"));
                    let tSanduiche = parseInt(qSanduiche/2)*20.00 + qSanduiche%2 * 11.00; 
                    sanduiche.push({Quantidade :qSanduiche,Total: tSanduiche});
                    break;
                case 4:
                    let qTapioca = parseInt(prompt("1 por 6 reais.\n2 por 10 reais.\nDigite quantos tapiocas você quer:"));
                    let tTapioca = parseInt(qTapioca/2)*10.00 + qTapioca%2 * 6.00; 
                    tapioca.push({Quantidade :qTapioca,Total: tTapioca});
                    break;
                case 5:
                    let qRefrigerante = parseInt(prompt("1 por 6 reais.\n2 por 10 reais.\nDigite quantos refrigerantes você quer:"));
                    let tRefrigerante = parseInt(qRefrigerante/2)*10.00 + qRefrigerante%2 * 6.00; 
                    refrigerante.push({Quantidade :qRefrigerante,Total: tRefrigerante});
                    break;
                case 10:
                    let cachorroRed= cachorroQuente.reduce((prev,curr) => ({Quantidade: prev.Quantidade+curr.Quantidade, Total: prev.Total+curr.Total}),{Quantidade: 0, Total: 0})
                    let assadoRed= assado.reduce((prev,curr) => ({Quantidade: prev.Quantidade+curr.Quantidade, Total: prev.Total+curr.Total}),{Quantidade: 0, Total: 0})
                    let sanduicheRed= sanduiche.reduce((prev,curr) => ({Quantidade: prev.Quantidade+curr.Quantidade, Total: prev.Total+curr.Total}),{Quantidade: 0, Total: 0})
                    let tapiocaRed= tapioca.reduce((prev,curr) => ({Quantidade: prev.Quantidade+curr.Quantidade, Total: prev.Total+curr.Total}),{Quantidade: 0, Total: 0})
                    let refrigeranteRed= refrigerante.reduce((prev,curr) => ({Quantidade: prev.Quantidade+curr.Quantidade, Total: prev.Total+curr.Total}),{Quantidade: 0, Total: 0})
                    let total = cachorroRed.Total + assadoRed.Total + sanduicheRed.Total + tapiocaRed.Total + refrigeranteRed.Total;
                    pedidos.push({CachorroQuente: cachorroRed, Assado: assadoRed, Sanduiche: sanduicheRed, Tapioca: tapiocaRed, Refrigerante: refrigeranteRed,TotalCompra: total});
                    break;
                default:
                    alert("Escolha invalida!"); 
            }
        }
    }else if(escolhaMenu==2){
        while(escolhaItem = parseInt(prompt("Digite sua escolhaMenu:\n0-Sair\n1-Listar itens vendidos\n2-Fechar pedido"))){
            let totalCachorro = 0;
            pedidos.forEach(function(ped){
                totalCachorro += ped.CachorroQuente.Quantidade;
            })
            alert("Total de cachorro quente: "+totalCachorro);

        }
    }else if(escolhaMenu==3){
        let total = 0;
        pedidos.forEach(function(ped){
            total += ped.TotalCompra;
        })
        console.log(total);
    }else{
        alert("Escolha invalida!");
    }
};