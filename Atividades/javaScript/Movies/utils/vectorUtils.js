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

// função que retorna o valor do próximo a id a ser cadastrado baseado no último id cadastrado 
export function getNextId(list){

    // se a lista não ter nenhum elemneto, o id a ser cadastrado é 1 por ser o primeiro registro
    if (list.length < 1){
        return 1;
    }

    // coleta o index do último elemento cadastrado
    const lastIndex = list.length - 1;

    // obtém o valor do campo 'id' do útimo cadastro
    let lastId = list[lastIndex]["id"];

    // retorna o valor do próximo id (auto increment)
    return lastId+1;
}