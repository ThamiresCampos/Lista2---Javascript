function celsius() {
    let f=parseInt(prompt("Insira o valor da temperatura em fahrenheit : "));

    let celsius= (f - 32) * (5 / 9);
    alert("A conversão da temperatura para celsius é : "+celsius);
}