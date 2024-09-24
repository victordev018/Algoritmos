// imports
import { clearScreen, getNumberInRange, getPositiveNumber, getText, pressEnterToContinue, print } from "./ioUtils.js";

// funções de crud para os filmes

export function createMovie(list){

    clearScreen();
    // atributos de um filme: nome, ano, bilheteria e imdb
    print("\n|----------- dados filmes -----------");
    list.push({
        "nome" : getText("|> nome: "),
        "ano" : getPositiveNumber("|> ano de lancamento: "),
        "bilheteria" : getText("|> arrecadacao: "),
        "imdb" : getNumberInRange("|> nota na IMDB: ", 0, 10)
    });

    pressEnterToContinue("\n| filme criado com sucesso!\n| Pressione enter para voltar...")
}

export function showAllMovies(list){

    clearScreen();
    const quantityMovies = list.length;
    
    if (quantityMovies < 1){
        pressEnterToContinue("\n| Erro! a lista esta vazia...");
        return;
    }

    print("\n| ..... " + quantityMovies + " filmes encontradaos .....|");
    print("------------------------------------");
    
    for (let obj of list){
        print("| nome           : " + obj["nome"]);
        print("| ano lancamento : " + obj["ano"]);
        print("| alocaocao      : " + obj["bilheteria"]);
        print("| nota IMDB      : " + obj["imdb"]);
        print("------------------------------------");
    }

    pressEnterToContinue("\n| Pressione enter para voltar...");
}