function eleitores() {
    let brancos=parseInt(prompt("Insira a quantidade de votos brancos obtidos: "));
    let nulos=parseInt(prompt("Insira a quantidade de votos nulos obtidos: "));
    let validos=parseInt(prompt("Insira a quantidade de votos válidos obtidos:"));

    let eleitores= brancos + nulos + validos;

    let porcentagemBrancos= 100 * brancos / eleitores;
    let porcentagemNulos= 100 * nulos / eleitores;
    let porcentagemValidos= 100 * validos / eleitores;

    alert("A porcentagem dos votos brancos é : "+porcentagemBrancos);
    alert("A porcentagem dos votos nulos é : "+porcentagemNulos);
    alert("A porcentagem dos votos válidos é : "+porcentagemValidos)
}