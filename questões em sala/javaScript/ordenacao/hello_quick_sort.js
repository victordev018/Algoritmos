// treinando o método quick sort para ordenação

function main(){


    // criandi lista numérica qualquer
    let numbers = [24, 10, 75, 53, 35, 11, 20];

    // recebendo nova lista ordenada
    let newList = quickSort(numbers);

    // exibindo listas
    console.log(numbers);
    console.log(newList);

}

// função quick sort para poder ordenar uma lista (recursiva)
function quickSort(list){

    // caso base (em fail fast)
    if (len(list) < 2){
        return list;
    } 

    let pivot = list[0];
    let left = obterListaMenoresValores(list, pivot);
    let right = obterListaMaioresValores(list, pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}

function obterListaMenoresValores(list, pivot){
    let newList = [];
    for (let element of list){
        if (element < pivot){
            newList.push(element);
        }
    }
}

function obterListaMaioresValores(list, pivot){
    let newList = [];
    for (let element of list){
        if (element >= pivot){
            newList.push(element);
        }
    }
}

function len(list){
    let count = 0;
    for (let i in list){
        count++;
    }
    return count;
}

main();