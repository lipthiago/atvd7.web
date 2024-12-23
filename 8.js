let numeros = "";
let numero;

while (true) {

    numero = Number(prompt("digite um numero (digite 0 para parar):"));
  
    if (numero === 0) {
        break;
    }

    if (numeros !== "") {
        numeros += ", "; 
    }
    numeros += numero;
}

alert("Numeros digitados: " + numeros);
