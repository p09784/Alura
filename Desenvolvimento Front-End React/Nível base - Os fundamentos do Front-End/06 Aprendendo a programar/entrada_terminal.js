const readline = require('readline');

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Qual é o seu nome? ', (nome) => {
  console.log('Olá,', nome);

  leitor.question('Qual é a sua idade? ', (idadeStr) => {
    const idade = Number(idadeStr);

    if (Number.isNaN(idade)) {
      console.log('Idade inválida. Por favor, execute novamente e informe um número.');
    } else {
      if (idade >= 18) {
        console.log('Uau! Você já pode tirar a sua CNH.');
      } else {
        console.log('Você ainda não pode tirar a sua CNH.');
      }
    }

    leitor.close();
  });
});
