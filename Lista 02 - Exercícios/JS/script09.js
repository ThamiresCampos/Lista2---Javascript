function prestação() {
    let valor=parseInt(prompt("Insira o valor :"));
    let taxa=parseInt(prompt("Dígite o valor da taxa :"));
    let tempo=parseInt(prompt("Insira o tempo de atraso : "));

    let prestação= valor + (valor * taxa / 100) * tempo;
    alert("O valor da prestação atrasada é de : "+prestação);
}