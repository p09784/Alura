const idade1 = 15;
const maiorDeIdade1 = idade1 >= 18;
const possuiCNH1 = false;

const podeDirigir1 = maiorDeIdade1 && possuiCNH1;
console.log("Pode dirigir (idade 15, sem CNH)?", podeDirigir1);

const podeViajarSozinha1 = maiorDeIdade1 || possuiCNH1;
console.log("Pode viajar sozinha (idade 15, sem CNH)?", podeViajarSozinha1);

const precisaDeAcompanhante1 = !maiorDeIdade1;
console.log("Precisa de acompanhante (idade 15)?", precisaDeAcompanhante1);

const idade2 = 18;
const maiorDeIdade2 = idade2 >= 18;
const possuiCNH2 = false;

const podeDirigir2 = maiorDeIdade2 && possuiCNH2;
console.log("Pode dirigir (idade 18, sem CNH)?", podeDirigir2);

const podeViajarSozinha2 = maiorDeIdade2 || possuiCNH2;
console.log("Pode viajar sozinha (idade 18, sem CNH)?", podeViajarSozinha2);

const precisaDeAcompanhante2 = !maiorDeIdade2;
console.log("Precisa de acompanhante (idade 18)?", precisaDeAcompanhante2);

const idade3 = 17;
const maiorDeIdade3 = idade3 >= 18;
const possuiCNH3 = true;

const podeDirigir3 = maiorDeIdade3 && possuiCNH3;
console.log("Pode dirigir (idade 17, com CNH)?", podeDirigir3);

const podeViajarSozinha3 = maiorDeIdade3 || possuiCNH3;
console.log("Pode viajar sozinha (idade 17, com CNH)?", podeViajarSozinha3);
