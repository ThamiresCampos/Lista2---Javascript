function dias (){
    let ano = parseInt(prompt("Dígite a sua idade :"));
    let mes = parseInt(prompt("Dígite quantos meses se passaram desde seu último aniversário :"));
    let dia = parseInt(prompt("Insira o dia do seu aniversário :"));

    let dias=dia+(ano * 365) + (mes * 30)
    alert("Você já viveu : "+dias);
   
    
}