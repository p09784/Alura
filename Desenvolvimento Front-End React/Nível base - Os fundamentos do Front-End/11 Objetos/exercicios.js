const pessoa = {
    nome: 'Roberta R',
    nascimento: '2020-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};



console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);



delete pessoa.cpf;
console.log(pessoa);



function exibeTrofeus(listaTrofeus) {
    for (const trofeu of listaTrofeus) {
        console.log(`tem o troféu ${trofeu}`);
    }
}

exibeTrofeus(pessoa.trofeus);