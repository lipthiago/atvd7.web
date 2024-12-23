let numeros = [4, 10, 2, 5, 7, 1];

let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] > maior) {

        maior = numeros[i];
    }
}

alert("O maior número e: " + maior);
