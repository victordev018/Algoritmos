// imports
import { getArea, sumValuesPerField } from "./utils/functions.js";
import { clearScreen, getPositiveNumber, getText, pressEnterToContinue, print } from "./utils/ioUtils.js";
import { showDatas ,copyXElements, bubbleSort } from "./utils/vectorUtils.js";

// funcionalidades de consultas

// opção 1 -> top N nacional (todas as areas)
export function topNNational(list){
    
    // solicitando o valor n
    clearScreen();

    // criando a nova lista dos top n a ser exibida
    const topNList = copyXElements(list, n);

    print("\n|> obtemos " + newList.length + " resultados, N deve ser menor ou igaul a " + newList.length);
    const n = getPositiveNumber("\n> top N -> informe o N: ");
    
    // exibindo a lista dos topN
    showDatas(topNList);
    pressEnterToContinue("\n> pressione enter para voltar...");
}

// opção 2 -> top N nacional por area
export function topNByArea(list){

    // solicitando área e o valor n
    clearScreen();
    const areaChoose = getArea();

    // criando uma lista ordenada com os maiores valores da área escolhida
    let newList = bubbleSort(list, (obj) => obj[areaChoose], true);

    print("\n|> obtemos " + newList.length + " resultados, N deve ser menor ou igaul a " + newList.length);
    const n = getPositiveNumber("\n> top N -> informe o N: ");

    newList = copyXElements(newList, n);
    showDatas(newList);
    pressEnterToContinue("\n> pressione enter para voltar...");
}

// opção 3 -> top N por estado
export function topNByState(list){

    // solicitando estado e o valor n
    clearScreen();
    const stateUf = getText("\n> informe o uf do estado: ");

    // lista filtrada com as escolas do dado estado
    let newList = list.filter(data => data["uf"].toLowerCase().includes(stateUf.toLowerCase()));

    print("\n|> obtemos " + newList.length + " resultados, N deve ser menor ou igaul a " + newList.length);
    const n = getPositiveNumber("\n> top N -> informe o N: ");

    newList = copyXElements(newList, n);
    showDatas(newList);
    pressEnterToContinue("\n> pressione enter para voltar...");
}

// opção 4 -> top n por estado e rede
export function topNByStateAndNetwork(list){

    // solicitando estado e rede
    clearScreen();
    const stateUf = getText("\n> informe o uf do estado: ");
    let network = getText("> Escolha o tipo de rede (ex: municipal, privada, federal ou estadual): ");
    
    // lista filtrada com as escolas de um dado estado e um tipo de rede
    let newList = list.filter(data => data["uf"].toLowerCase().includes(stateUf.toLowerCase()) &&
    data["rede"].toLowerCase().includes(network.toLowerCase()));
    
    print("\n|> obtemos " + newList.length + " resultados, N deve ser menor ou igaul a " + newList.length);

    if (newList.length == 0) return;

    const n = getPositiveNumber("\n> top N -> informe o N: ");

    // showDatas(newList)
    newList = copyXElements(newList, n);
    if (newList != null){
        showDatas(newList);
    }
    pressEnterToContinue("\n> pressione enter para voltar...");
}

// opção 5 -> media nacional por area
export function averageNationalPerArea(list){

    clearScreen();
    // solicitando a area para calcular media
    const area = getArea();
    const quantityData = list.length;
    const avgMathematics = sumValuesPerField(list, area);
    print("\n> media " + area+ ": " + `${(avgMathematics/quantityData).toFixed(2)}`);
    pressEnterToContinue("\n> pressione enter para voltar...");
}