function saudacao(nome) {
  console.log('Oi,', nome);
}

saudacao('Vinícius');
saudacao('Nathália');

function calcularDobro(numero) {
  return numero * 2;
}

const numeroDobrado = calcularDobro(4);
console.log('O dobro de 4 é:', numeroDobrado);

const resultado7 = calcularDobro(7);
console.log('O dobro de 7 é:', resultado7);

function mostraParametro(param) {
  console.log('mostraParametro recebeu:', param);
}

mostraParametro();

const soma = (a, b) => a + b;
console.log('2 + 3 =', soma(2, 3));

console.log('oi', 'tudo', 'bem', '?');
