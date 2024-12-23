let resultado = 1;

for (let i = 1; i <= 5; i++) {

    let numero = Number(prompt("digite o numero " + i + ":"));

    resultado *= numero;
}

alert("o resultado da multiplicacao dos 5 números e: " + resultado);
