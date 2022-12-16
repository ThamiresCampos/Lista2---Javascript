function custoCarro() {
    let fabrica=parseInt(prompt("Insira o valor do custo de fábrica : "));
    
    let porcentagemDistribuidor= fabrica + ( 28 / 100);
    let porcentagemImpostos= fabrica + (45 / 100);

    let custoCarro = fabrica + porcentagemDistribuidor + porcentagemImpostos;
    alert("O custo ao consumidor é de : "+custoCarro);
}