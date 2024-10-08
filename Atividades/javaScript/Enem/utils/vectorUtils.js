// imports

import { clearScreen, pressEnterToContinue } from "./ioUtils.js";
import { print } from "./ioUtils.js";

// funções úteis para vetor

// função que constroi um array de objetos com base em dados de um vetor
export function dataToObjectArray(arrayData, fields){
    let steps = fields.length;
    const vectorObjects = [];

    for (let i = 0; i < arrayData.length; i += steps){
        
        let obj = {};

        for (let j = 0; j < fields.length; j++){
            obj[fields[j]] = arrayData[i+j];
        }

        vectorObjects.push(obj);
    }

    return vectorObjects;
}

// função para printar a lista de dados do enem:
export function showDatas(list){
    clearScreen();
    print(list.length + " resultados:");
    print("----------------------------------------------------------------------");
    for (let obj of list){
        print("| ranking               : " + obj["ranking"]);
        print("| nome instituicao      : " + obj["nome_instituicao"]);
        print("| municipio             : " + obj["municipio"]);
        print("| uf                    : " + obj["uf"]);
        print("| rede                  : " + obj["rede"]);
        print("| permanencia           : " + obj["permanencia"]);
        print("| nivel socio economico : " + obj["nivel_socio_economico"]);
        print("| media objetivas       : " + obj["media_objetivas"]);
        print("| linguagens            : " + obj["linguagens"]);
        print("| matematica            : " + obj["matematica"]);
        print("| ciencias natureza     : " + obj["ciencias_natureza"]);
        print("| humanas               : " + obj["humanas"]);
        print("| redacao               : " + obj["redacao"]);
        print("----------------------------------------------------------------------");
    }
}

// função que faz a cópia de uma quantidade específica de elementos de uma lista para outra
export function copyXElements(list, xValues){
    const newList = [];

    // verifiando se a lista possui a quantidade xValues disponíveis
    if (list.length < xValues){
        pressEnterToContinue("\n> Erro! o tamanho da lista e inferior a " + xValues);
        return null;
    }
    
    for (let i = 0; i < xValues; i++){
        newList.push(list[i]);
    }
    return newList;
}

// função bubble sort que retorna uma lista ordenada por um critério e pode ordenar ASC ou DESC
export function bubbleSort(list, criteria, reverse){

    const newList = copyXElements(list, list.length);

    for (let i = 0; i < newList.length - 1; i++){

        for (let j = 0; j < newList.length - 1 - i; j++){

            let currentValue = newList[j];
            let nextValue = newList[j+1];

            if (!reverse){
                if (criteria(currentValue) > criteria(nextValue)){
                    // print("c1: " + criteria(currentValue) + " c2: " + criteria(nextValue))
                    // pressEnterToContinue("pula")
                    newList[j] = nextValue;
                    newList[j+1] = currentValue;
                }
            }
            else{

                if (criteria(currentValue) < criteria(nextValue)){
                    newList[j] = nextValue;
                    newList[j+1] = currentValue;
                }
            }
        }
    }
    return newList;
}