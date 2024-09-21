// imports
import { clearScreen, getPositiveNumber, pressEnterToContinue } from "./utils/ioUtils.js";
import { showDatas ,copyXElements } from "./utils/vectorUtils.js";

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