// busca linear

// percorre qualquer tipo de lista, e retorna a posição do elemento de busca

function main(){


    // criando uma lista de pessoas
    const listPersons = [
        {"nome" : "Joao", "idade": 19},
        {"nome" : "Pedro", "idade": 18},
        {"nome" : "Caio", "idade": 16},
        {"nome" : "Jose Lucas", "idade": 24}
    ]

    // buscando a posição da pessoa que possui nome 'Caio'
    const position = getPosition(listPersons, (person, name) => person["nome"].toUpperCase() == name.toUpperCase(), "caio");

    // fail fast (caso não tenha encontrado o elemento)
    if (position == -1){
        console.log("\n| ops, nao foi encontrado este dado na lista");
        return;
    }

    // exibindo a posição do elemento
    console.log("\n| posicao encontrada: " + position)  // output: 2

}

// função que recebe uma lista, uma função que dita como será feita a igauldade e o dado de busca
function getPosition(list, equals, dado){
    for (let i = 0; i < list.length; i++){
        if (equals(list[i], dado)){
            return i;
        }
    }
    return -1;
}

main();