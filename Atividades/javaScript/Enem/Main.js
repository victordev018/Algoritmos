// imports

import {clearScreen, getNumberInRange, print} from "./utils/ioUtils.js"
import { loadFile } from "./utils/fileUtils.js";
import { dataToObjectArray, showDatas } from "./utils/vectorUtils.js";

function main(){

    // carregando dados na inicialização da aplicação
    let allDataAsVector = loadFile("./files/enem2014_nota_por_escola.txt.csv");
    const fields = [
        "ranking", "nome_instituicao", "municipio", "uf", "rede", 
        "permanencia", "nivel_socio_economico", "media_objetivas",
        "linguagens", "matematica", "ciencias_natureza", "humanas",
        "redacao"];
    const allDataAsVectorOfObjects = dataToObjectArray(allDataAsVector, fields);
    showDatas(allDataAsVectorOfObjects);

    // menu de consultas
    const menu = `
    --------------------- CONSULTAS ---------------------
    | 1 - top N nacional (todas as areas)
    | 2 - top N nacional por area
    | 3 - top N por estado
    | 4 - top N por estado e rede
    | 5 - media nacional por area
    | 6 - melhor escolha por area e estado ou BR
    | 7 - listar escolas por estado ordenada por renda
    | 8 - buscar escola especifica por parte do nome
    | 9 - ranking Enem por estado
    | 10- ranking Enem por regiao e pais
    | 11- Sair`;

    let opcao;

    do {

        // lendo opção e redirecionando para a funcionalidade escolhida
        clearScreen();
        print(menu);
        opcao = getNumberInRange("\n> opcao: ", 1, 11);
        execute(opcao, allDataAsVectorOfObjects);

    }while (opcao != 11);

    clearScreen();
    print("Saindo...")
}

function execute(option, list){

    clearScreen();
    // direcionando para a opção escolhida
    switch(option){
        case 1:
            // top N nacional (todas as áreas)
            break;
        case 11:
            // sair
            return;
    }
}

main();