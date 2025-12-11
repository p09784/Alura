function calcular(num1, num2, operacao) {
  return operacao(num1, num2);
}

function soma(a, b) {
  return a + b;
}

function divisao(a, b) {
  return a / b;
}

const resultadoSoma = calcular(3, 8, soma);
console.log('Resultado da soma:', resultadoSoma);

const resultadoDivisao = calcular(8, 2, divisao);
console.log('Resultado da divisão:', resultadoDivisao);

const resultadoMultiplicacao = calcular(4, 5, function (x, y) {
  return x * y;
});
console.log('Resultado da multiplicação:', resultadoMultiplicacao);

const resultadoSubtracao = calcular(10, 3, (x, y) => x - y);
console.log('Resultado da subtração:', resultadoSubtracao);
