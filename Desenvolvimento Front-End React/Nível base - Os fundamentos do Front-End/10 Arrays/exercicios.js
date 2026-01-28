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



const arr1 = [[1, 2], 2, 3];

const copiaArray = (arr) => {
  const copia = [];
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      copia.push(copiaArray(elem));
    } else {
      copia.push(elem);
    }
  })
  return copia;
}

const arr2 = copiaArray(arr1);
arr1[0][0] = 5;

console.log(arr1);
console.log(arr2);



const cpfs = ['12323434545', '34658756786', 43254365434, '76547865345', 56768767564];

const result = cpfs.map(cpf => typeof cpf === 'string' ? cpf : cpf.toString());

console.log(result);