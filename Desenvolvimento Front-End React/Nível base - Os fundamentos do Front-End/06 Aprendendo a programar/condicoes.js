const nome = "";
if (nome) {
	console.log("Olá,", nome);
} else {
	console.log("Ainda não sei o seu nome");
}

const nome2 = "Vinny";
if (nome2) {
	console.log("Olá,", nome2);
}

const valorZero = 0;
if (valorZero) {
	console.log("Tem valor", valorZero);
} else {
	console.log("Valor é falsy (0)");
}

const nada = null;
if (nada) {
	console.log("Tem algo");
} else {
	console.log("É null -> falsy");
}

const ativo = false;
if (!ativo) {
	console.log("Não ativo");
}

const idade = null;
if (idade !== null && idade >= 18) {
	console.log("Maior de idade");
} else {
	console.log("Menor de idade ou idade desconhecida");
}

const idade2 = 20;
if (idade2 && idade2 >= 18) {
	console.log("Maior de idade (verificação implícita + comparação)");
}
