// busca binária

// A busca binária só funciona em listas ordenadas. Ela reduz a quantidade de elementos a serem verificados 
// a cada passo, dividindo a lista pela metade.

// A cada iteração, verifica o elemento central da lista. Se o valor procurado for menor que o elemento
// central, continua buscando na metade inferior; se for maior, busca na metade superior. O processo se repete até encontrar
// o valor ou a lista se reduzir a zero.

function main(){

    // criando uma lista de pessoas com
    const listPersons = [
        {"nome" : "Joao", "idade": 19},
        {"nome" : "Pedro", "idade": 18},
        {"nome" : "Caio", "idade": 16},
        {"nome" : "Jose Lucas", "idade": 24},
        {"nome" : "Marcelo", "idade": 33},
        {"nome" : "Fabricio", "idade": 14},
        {"nome" : "Rogerio", "idade": 22}
    ]

    // exibindo a listagem de pessoas antes da ordenação
    showPersons("\nlista antes da ordenacao: \n", listPersons);

    // ordenando lista por idade
    bubbleSort(listPersons, (person) => person["idade"], false);

    console.log()

    // exibindo a lista ordenada por idade
    showPersons("\nlista ordenada por idade das pessoas:\n", listPersons);

    // obtendo a posição do 'Rogerio' baseado em sua idade
    const position = getPosition(listPersons, (person, age) => person["idade"] - age , 22);


    // fail fast (caso não tenha encontrado a posição buscada)
    if (position == -1){
        console.log("\n| nao foi encontrado o elemento que busca em nehuma posicao ._.");
        return;
    }

    // exibindo posição
    console.log("\n| posicao do rogerio: " + position);

}

// função que recebe uma lista, uma função que dita como será feita a igauldade e o dado de busca
function getPosition(list, equals, data){

    let startValue = 0;
    let stopValue = list.length -1;

    while(startValue <= stopValue){
        
        let centralElement = Math.floor((startValue + stopValue) / 2);
        let resultComparation = equals(list[centralElement], data);

        if (resultComparation === 0){
            return centralElement;
        }
        else if (resultComparation < 0){
            startValue = centralElement + 1;
        }
        else{
            stopValue = centralElement - 1;
        }

    }

    return -1;
}

// função para ordenar uma lista com algoritmo bubble sort
function bubbleSort(list, criteria, reverse){

    for (let i = 0; i < list.length - 1; i++ ){

        for (let j = 0; j < list.length -i -1; j++){

            let currentElement = list[j];
            let nextElement = list[j+1];

            if (!reverse){
                if (criteria(currentElement) > criteria(nextElement)){
                    list[j] = nextElement;
                    list[j+1] = currentElement;
                }
            }
            else{
                if (criteria(currentElement) < criteria(nextElement)){
                    list[j] = nextElement;
                    list[j+1] = currentElement;
                }
            }

        }

    }
}

// função de exibir pessoa de uma lista
function showPersons(message, list){
    console.log(message);
    console.log("|---------------------------|");
    for (let person of list){
        console.log("| nome  : " + person["nome"]);
        console.log("| idade : " + person["idade"]);
        console.log("|---------------------------|");
    }
}

main();