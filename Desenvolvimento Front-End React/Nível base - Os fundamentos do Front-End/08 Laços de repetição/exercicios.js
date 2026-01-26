for (let contador = 1; contador <= 30; contador++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if (numero === 15) {
        console.log(`${numero} em ${contador} tentativas`);
        break;
    }
}



for (let i = 1, contador = 0; i <= 30; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if (numero % 5 === 0) {
        continue;
    }
    contador++;
}

console.log(contador);






const numeroSecreto = 8;
let numeroAleatorio = 0;
let tentativas = 0;

while (numeroSecreto !== numeroAleatorio) {
    numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    tentativas++;
}

console.log(`adivinhou em ${tentativas} tentativas`);



let numeroRandom = 0;

do {
    numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    console.log(numeroRandom);
} while (numeroRandom % 2 !== 0);

console.log(numeroRandom);



const texto = 'luz azul';

let textoInvertido = '';

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

console.log(textoInvertido);

const result = texto === textoInvertido
    ? `${texto} é palíndromo`
    : `${texto} não é palíndromo`;
        
console.log(result);