// imports
import { clearScreen, getNumberInRange, getPositiveNumber, getText, pressEnterToContinue, print } from "./ioUtils.js";
import { showAllMovies } from "./movieCrud.js";
import { hasElement } from "./vectorUtils.js";


// funções de filtragens

export function filterByAttribute(list){

    clearScreen();
    const sizelist = list.length;

    if (sizelist < 1){
        pressEnterToContinue("\n| a lista esta vaiza ._.\n| pressione enter para voltar...");
        return;
    }

    // solicitando qual o tipo de filtro o usuário deseja fazer
    const typeFilter = getNumberInRange(`
    |----------- tipo de filtro -----------
    | 1 - por nome
    | 2 - por mais recentes depois do ano x
    | 3 - por filmes com imdb maiores que x
    | 4 - da mesma bilheteria
    |
    | --> opcao: `, 1, 4);

    // direcinando para a funcionalidade escolhida

    switch (typeFilter){
        case 1:
            // por parte do nome
            perName(list);
            break;
        case 2:
            //por mais recentes depois do ano x
            perYear(list);
            break;
        case 3:
            // por filmes com imdb maiores que x
            perImdb(list);
            break;
        case 4:
            // filmes com a mesma bilheteria
            perBilheteria(list);
            break;
    }
}

// opção 1 -> por parte do nome
function perName(list){
    clearScreen();

    // solicitando parte do nome
    const name = getText("\n--> nome: ");

    // filtrando a lista com os filmes que contenha este nome informado no seu campo nome
    const filteredList = list.filter( obj => obj["nome"].includes(name));

    // exibindo nova lista
    showAllMovies(filteredList);
    pressEnterToContinue("\n| pressione enter para voltar...");
}

// opção 2 -> por mais recentes depois do ano x
function perYear(list){
    clearScreen();

    // solicitando ano que usuário deseja fazer a busca
    const minYear = getPositiveNumber("--> informe o ano x para busca: ");

    // filtrando a lista com os filmes que foram lançados no mesmo ou nos anos seguintes baseado no ano informado
    const filteredList = list.filter( obj => obj["ano"] >= minYear);

    // exibindo nova lista
    showAllMovies(filteredList);
    pressEnterToContinue("\n| pressione enter para voltar...");
}

// opção 3 -> por filmes com imdb maiores que x
function perImdb(list){
    clearScreen();

    // solicitando valor imdb que usuário deseja fazer a busca
    const minImdb = getPositiveNumber("--> informe a nota minina imdb para busca: ");

    // filtrando a lista com os filmes que tem nota imdb maior ou igual ao que o usuário informou
    const filteredList = list.filter( obj => obj["imdb"] >= minImdb);

    // exibindo nova lista
    showAllMovies(filteredList);
    pressEnterToContinue("\n| pressione enter para voltar...");
}

// opção 4 -> filmes com a mesma bilheteria
function perBilheteria(list){
    clearScreen();

    // exibindo bilheterias que distintas que possui cadastradas
    const allBilheterias = getAllBilheterias(list);
    print("| -> lista de bilheterias cadastradas:");
    print(allBilheterias);

    // solicitando o número de bilheteria que o usuário deseja fazer a busca
    const numBilheteria = getPositiveNumber("\n--> informe o numero da arecadacao para busca: ");

    // filtrando a lista com os filmes possui o mesmo valor de bilheteria que o usuário informou
    const filteredList = list.filter( obj => obj["bilheteria"] == numBilheteria);

    // exibindo nova lista
    showAllMovies(filteredList);
    pressEnterToContinue("\n| pressione enter para voltar...");
}

// função que retorna uma lista com todas as bilhterias diferentes cadastradas em uma lista de filmes
function getAllBilheterias(list){
    const listBilheteria = [];
    for (let obj of list){
        let currentBilheteria = obj["bilheteria"];
        if (hasElement(listBilheteria, currentBilheteria)){
            continue;
        }
        listBilheteria.push(currentBilheteria);
    }
    return listBilheteria;
}