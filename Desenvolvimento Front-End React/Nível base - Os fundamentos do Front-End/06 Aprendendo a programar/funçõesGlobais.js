function saudacao() {
  console.log('Ei aí, beleza?');
}

setTimeout(saudacao, 2000);

let contador = 0;

const idInterval = setInterval(() => {
  contador++;
  console.log('Tempo decorrido (em segundos):', contador);
  if (contador === 10) {

    clearInterval(idInterval);
    console.log('Contador finalizado com clearInterval.');
  }
}, 1000);

setTimeout(() => {
  if (typeof idInterval !== 'undefined') {
    clearInterval(idInterval);
    console.log('Intervalo limpo manualmente após 5 segundos.');
  }
}, 5000);
