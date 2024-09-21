// imports
import { setAreaByLetter } from "./utils/functions.js";
import { clearScreen, getPositiveNumber, getText, pressEnterToContinue } from "./utils/ioUtils.js";
import { showDatas ,copyXElements, bubbleSort } from "./utils/vectorUtils.js";

// funcionalidades de consultas


// opção 1 -> top N nacional (todas as areas)
export function topNNational(list){
    
    // solicitando o valor n
    clearScreen();
    const n = getPositiveNumber("\n> top N -> informe o N: ");

    // criando a nova lista dos top n a ser exibida
    const topNList = copyXElements(list, n);
    
    // exibindo a lista dos topN
    showDatas(topNList);
    pressEnterToContinue("\n> pressione enter para voltar...");
}

// opção 2 -> top N nacional por area
export function topNByArea(list){

    // solicitando área e o valor n
    clearScreen();
    const areaLetter = getText(`
        | escolha umas das seguintes areas:
        | (L) linguagens
        | (M) matematica
        | (CN) ciencias da natureza
        | (R) redacao
        |> opcao: `);

    let areaChoose = setAreaByLetter(areaLetter);

    const n = getPositiveNumber("\n> top N -> informe o N: ");

    // criando uma lista ordenada com os maiores valores da área escolhida
    let newList = bubbleSort(list, (obj) => obj[areaChoose], true);
    newList = copyXElements(newList, n);
    showDatas(newList);
    pressEnterToContinue("\n> pressione enter para voltar...");
}