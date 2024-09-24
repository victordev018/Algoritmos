// imports
import { clearScreen, getNumberInRange, print } from "./utils/ioUtils.js";
import { createMovie } from "./utils/movieCrud.js";

// main


function main(){

    // menu principal
    const menu = `
    |----------------- FILMES ----------------|
    |> 1 - criar filme
    |> 2 - ver todos os filmes
    |> 3 - atualizar filmes
    |> 4 - apagar filme
    |> 0 - sair
    |-----------------------------------------|`;

    // lendo opção e direcionando para funcionalidade

    let option;
    const movieList = [];

    do{

        clearScreen();
        print(menu);
        option = getNumberInRange("|> opcao: ", 0, 4);

        switch(option){
            case 1:
                // criar filme
                createMovie(movieList);
                break;
            case 2:
                // ver todos os filme
                break;
            case 3:
                // atualizar filme
                break;
            case 4:
                // remover filme
                break;
            case 0:
                return;
        }

    }while(option != 0)

}

main();