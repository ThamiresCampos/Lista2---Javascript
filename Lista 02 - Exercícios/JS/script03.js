function novoSalario() {
    let salarioAtual=parseInt(prompt("Insira o valor do seu salário atual : "));
    let reajuste=parseInt(prompt("Dígite o valor do reajuste : "));

    let porcentagemReajuste= salarioAtual * (reajuste / 100);
    let novoSalario= salarioAtual + porcentagemReajuste;

    alert("O seu novo salário é de : "+novoSalario);
}