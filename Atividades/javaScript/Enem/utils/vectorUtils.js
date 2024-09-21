// imports

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