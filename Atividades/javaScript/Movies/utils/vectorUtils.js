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

// função que converte dados de um vetor de de objetos para strings, cada objeto em uma linha 
// e cada atributo de objeto separado por uma vírgula
export function vectorToString(arrayObjects){
    let textFinal = "";
    for (let obj of arrayObjects){
        let id = obj["id"];
        let name = obj["nome"];
        let ano = obj["ano"];
        let bilheteria = obj["bilheteria"];
        let imdb = obj["imdb"];
        textFinal += id + "," + name + "," + ano + "," + bilheteria + "," + imdb + "\n";
    }
    return textFinal.trim();
}