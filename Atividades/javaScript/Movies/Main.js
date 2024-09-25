// imports
import { loadFile, saveData} from "./utils/fileUtil.js";
import { clearScreen, getNumberInRange, print, pressEnterToContinue} from "./utils/ioUtils.js";
import { createMovie, showAllMovies, updateMovie, removeMovie, fillVector } from "./utils/movieCrud.js";
import { mySplit } from "./utils/vectorUtils.js";

// main


function main(){

    // menu principal
    const menu = `
    |----------------- FILMES ----------------|
    |> 1 - criar filme
    |> 2 - ver todos os filmes
    |> 3 - atualizar filmes
    |> 4 - apagar filme
    |> 5 - salvar dados
    |> 0 - sair
    |-----------------------------------------|`;

    // lendo opção e direcionando para funcionalidade

    let option;

    // precarregando vetor com os dados do arquivo
    let movieList = [];
    const dataAsCharacters = loadFile("./filmes_registrados.txt");
    if (dataAsCharacters.length > 0){
        const dataAsVector = mySplit(dataAsCharacters, ",");
        movieList = fillVector(dataAsVector, ["id", "nome", "ano", "bilheteria", "imdb"]);
    }

    do{

        clearScreen();
        print(menu);
        option = getNumberInRange("\n> opcao: ", 0, 5);

        switch(option){
            case 1:
                // criar filme
                createMovie(movieList);
                break;
            case 2:
                // ver todos os filme
                showAllMovies(movieList);
                pressEnterToContinue("\n| Pressione enter para continuar...");
                break;
            case 3:
                // atualizar filme
                updateMovie(movieList);
                break;
            case 4:
                movieList = removeMovie(movieList);
                // remover filme
                break;
            case 5:
                // salvar dados em filmes_registrados.txt
                saveData(movieList);
                break;
            case 0:
                return;
        }

    }while(option != 0);

}

main();