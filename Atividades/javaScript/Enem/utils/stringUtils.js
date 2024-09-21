// imports

// funções úteis para string

// my split, devolve um vetor com elementos com base em um separador
export function mySplit(data, separator){
    data += separator;
    let element = "";
    const vector = [];

    // percorrendo os dados
    for (let char of data){

        // dando push no elemento formado
        if (char == separator || char == "\n"){
            vector.push(element);
            element = "";
            continue;
        }

        // gerando elemento
        element += char;
    }

    return vector;
}