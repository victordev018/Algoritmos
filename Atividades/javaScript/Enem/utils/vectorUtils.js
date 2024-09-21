// imports

import { clearScreen } from "./ioUtils.js";
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