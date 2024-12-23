let numero = Number(prompt("digite um numero para ver a tabuada:"));

if (Number.isInteger(numero)) {
    
    let mensagem = "tabuada do " + numero + ":\n";
  
    for (let i = 1; i <= 10; i++) {
        mensagem += numero + " x " + i + " = " + (numero * i) + "\n";
    }
  
    alert(mensagem);

} else {

    alert("por favor, um numero valido");
}
