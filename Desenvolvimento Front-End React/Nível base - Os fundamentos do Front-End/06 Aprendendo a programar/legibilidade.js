// Exemplos de legibilidade de variáveis (baseado na aula "A legibilidade de variáveis")

// Exemplo ruim: nomes sem significado
let x = 1.89; // o que é 'x'? não sabemos pelo nome
console.log(x);

// Melhor: nome que indica o que o valor representa
let altura = 1.89; // altura em metros
console.log(altura);

// Ainda melhor: indicar de quem é a altura (mais contexto)
let alturaDoAluno = 1.89;
console.log(alturaDoAluno);

// Exemplo de variáveis com significado relacionado entre si
let largura = 7;
let alturaRetangulo = 10;
let area = largura * alturaRetangulo; // area = 70
console.log('largura:', largura, 'altura:', alturaRetangulo, 'area:', area);

// Case sensitive: nomes diferentes por maiúsculas/minúsculas
let preco = 10;
let Preco = 20; // variável distinta de 'preco'
console.log('preco:', preco);
console.log('Preco:', Preco);

// Boas práticas em nomes compostos: camelCase para JS
let idadeUsuario = 20; // claro que é a idade do usuário
let nomeCompleto = 'Marcos Vinícius';
console.log('nome:', nomeCompleto, 'idade:', idadeUsuario);

// Valores booleanos: nome que indique estado
let estaAtivo = false; // mais legível que 'a' ou 'b'
console.log('ativo?', estaAtivo);
