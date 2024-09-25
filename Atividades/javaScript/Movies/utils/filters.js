// imports
import { clearScreen, getNumberInRange, getText, pressEnterToContinue, print } from "./ioUtils.js";
import { showAllMovies } from "./movieCrud.js";


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
    | 2 - por ano
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
            // por ano
            break;
        case 3:
            // por filmes com imdb maiores que x
            break;
        case 4:
            // filmes com a mesma bilheteria
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