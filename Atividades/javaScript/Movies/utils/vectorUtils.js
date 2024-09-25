// imports

// funções úteis para vetor

export function deleteElementWithId(list, id){
    const newList = [];
    for (let obj of list){
        if (obj["id"] == id){
            continue;
        }
        newList.push(obj);
    }
    return newList;
}

// função semelhante ao split, que retorna um vetor com os dados de uma dada string separando
// seus elementos por um dado separador
export function mySplit(content, separator){
    content += separator;
    let vector = [];
    let currentElement = "";

    for ( let char of content){
        if (char == separator || char == "\n"){
            vector.push(currentElement);
            currentElement = "";
            continue;
        }
        currentElement += char;
    }
    return vector;
}