const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((numero) => {
  return numero % 2 === 0;
});

const numerosImpares = numeros.filter((numero) => {
  return numero % 2 !== 0;
});


const numerosDobrado = numeros.map((numero) => {
  return numero * 2;
});

console.log('Todos os números:');
numeros.forEach((n) => console.log(n));

console.log('\nNúmeros pares:', numerosPares);
console.log('Números ímpares:', numerosImpares);
console.log('Nossa lista mapeada (dobro):', numerosDobrado);
