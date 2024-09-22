// imports
import { getArea, getIncome, sumValuesPerField } from "./utils/functions.js";
import { clearScreen, getPositiveNumber, getText, pressEnterToContinue, print } from "./utils/ioUtils.js";
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
    const areaChoose = getArea();

    // criando uma lista ordenada com os maiores valores da área escolhida
    let newList = bubbleSort(list, (obj) => parseFloat(obj[areaChoose]), true);

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

// opção 6 -> melhor escola por área e estado ou BR
export function theBestSchool(list){

    clearScreen();

    // tomando a decisão se é por área ou estado
    const option = getPositiveNumber("\n> 1 - melhor do Brasil\n> 2 - melhor por area e estado\n> escolha: ");

    if (option == 1){
        let theBestSchool = [list[0]];
        showDatas(theBestSchool);
        pressEnterToContinue("\n> pressione enter para voltar...");
        return;
    }

    const area = getArea();
    const stateUf = getText("\n> informe o uf do estado: ");

    // pegando a melhor escola do dado estado em uma dada área
    let theBestSchool = list.filter(data => data["uf"].toLowerCase().includes(stateUf.toLowerCase()));
    theBestSchool = bubbleSort(theBestSchool, (obj) => parseFloat(obj[area]), true);
    theBestSchool = [theBestSchool[0]];
    showDatas(theBestSchool);
    pressEnterToContinue("\n> pressione enter para voltar...");
}

// opção 7 -> istar escolas por estado ordenada por renda
export function listSchoolsPerIncome(list){

    clearScreen();

    // solicitando estado
    const stateUf = getText("\n> informe o uf do estado: ");

    // pegando a lista filtrada por estado
    let newList = list.filter(data => data["uf"].toLowerCase().includes(stateUf.toLowerCase()));
    // ordenando lista por maior renda
    newList = bubbleSort(newList, getIncome, true);
    showDatas(newList);
    pressEnterToContinue("\n> pressione enter  para voltar...");
}

// opção 8 -> buscar escola especifica por parte do nome
export function listSchoolsPerName(list){

    clearScreen();

    // pegando parte do nome da escola
    const schoolName = getText("\n> insira o nome da escola: ");

    // pegando lista de escolas que possui o nome informado
    let newList = list.filter(data => data["nome_instituicao"].toLowerCase().includes(schoolName.toLowerCase()));

    showDatas(newList);
    pressEnterToContinue("\n> pressione enter  para voltar...");
}