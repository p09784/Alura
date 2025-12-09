const notaDoAluno = 8;

switch (notaDoAluno) {
    case 10:
    case 9:
        console.log('Excelente');
        break;

    case 8:
    case 7:
        console.log('Bom');
        break;

    case 6:
    case 5:
        console.log('Mediana');
        break;

    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log('Ruim');
        break;

    default:
        console.log('Valor inválido');
        break;
}