const arr = [1, 2, 3, 4];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

arr[5] = 10;
delete arr[5];
console.log(arr);



function criaArrNum(inicio, fim) {
  const arr = [];
  let elemento = inicio;

  for(let i = 0, j = 0; j < fim; i++, elemento++) {
    arr[i] = elemento;
    j = elemento;
  }
  return arr;
}

console.log(criaArrNum(456, 560));