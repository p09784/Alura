for (let contador = 1; contador <= 5; contador++) {
	console.log('Número atual:', contador);
}

for (let numero = 1; numero <= 15; numero++) {
	if (numero % 2 === 0) {
		console.log('Número par encontrado:', numero);
	}
}

for (let numero = 1; numero <= 15; numero++) {
	if (numero % 2 !== 0) {
		console.log('Número ímpar encontrado:', numero);
	}
}

const palavra = 'calopsita';
for (let i = 0; i < palavra.length; i++) {
	console.log(palavra[i]);
}
