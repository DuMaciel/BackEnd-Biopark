let escolhaMenu = 0;
let pedidos = [];

while(escolhaMenu = parseInt(prompt("Digite sua escolhaMenu:\n0-Sair\n1-Vender\n2-Pedidos\n3-Caixa"))){
    if(escolhaMenu == 1){
        let escolhaItem = 0;
        let cachorroQuente=[];
        while(escolhaItem = parseInt(prompt("Digite sua escolhaMenu:\n0-Sair\n1-Cachorro quente\n2-Fechar pedido"))){
            if(escolhaItem == 1){
                let quantidade = parseInt(prompt("1 por 8 reais.\n2 por 15 reais.\nDigite quantos cachorros quentes você quer:"));
                let total = parseInt(quantidade/2)*15.00 + quantidade%2 * 8.00; 
                cachorroQuente.push({quantidade, total});
            }else if(escolhaItem == 2){
                let cachorroRed= cachorroQuente.reduce((prev,curr) => ({quantidade: prev.quantidade+curr.quantidade, total: prev.total+curr.total}),{quantidade: 0, total: 0})
                let total = cachorroRed.total;
                pedidos.push({CachorroQuente: cachorroRed, TotalCompra: total});
                break;
            }else{
                alert("Escolha invalida!"); 
            }
        }
    }else if(escolhaMenu==2){
        while(escolhaItem = parseInt(prompt("Digite sua escolhaMenu:\n0-Sair\n1-Listar itens vendidos\n2-Fechar pedido"))){
            let totalCachorro = 0;
            pedidos.forEach(function(ped){
                totalCachorro += ped.CachorroQuente.quantidade;
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