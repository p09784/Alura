const idadeVinny = 36;
const minhaIdade = 35;

const saoIguais = idadeVinny == minhaIdade;
console.log("São iguais?", saoIguais);

const saoDiferentes = idadeVinny != minhaIdade;
console.log("São diferentes?", saoDiferentes);

console.log("É maior?", idadeVinny > minhaIdade);
console.log("É menor?", idadeVinny < minhaIdade);
console.log("Maior ou igual?", idadeVinny >= minhaIdade);
console.log("Menor ou igual?", idadeVinny <= minhaIdade);

const idade = 36;
const idadeIrmao = 16;
const souMaiorDeIdade = idade >= 18;
const meuIrmaoMaior = idadeIrmao >= 18;
console.log("Sou maior de idade?", souMaiorDeIdade);
console.log("Meu irmão é maior de idade?", meuIrmaoMaior);

console.log("36 == '36'?", 36 == "36");
console.log("36 === '36'?", 36 === "36");

console.log("36 != '36'?", 36 != "36");
console.log("36 !== '36'?", 36 !== "36");
