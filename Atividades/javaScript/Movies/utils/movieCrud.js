// imports
import { clearScreen, getPositiveNumber, getText } from "./ioUtils.js";

// funções de crud para os filmes

export function createMovie(list){
    
    clearScreen();
    // atributos de um filme: nome, ano, bilheteria e imdb
    list.push({
        "nome" : getText("|> nome: "),
        "ano" : getPositiveNumber("|> ano de lancamento: "),
        "bilheteria" : getText("|> arrecadacao: "),
        "imdb" : getPositiveNumber("|> nota na IMDB: ")
    });
}