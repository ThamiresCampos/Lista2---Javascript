function volume() {
    let altura=parseInt(prompt("Dígite o valor da altura da lata : "));
    let raio=parseInt(prompt("Dígite o valor do raio"));

    let volume= Math.PI * raio **2 * altura;
    
    alert("O volume da lata é de : "+volume);

}