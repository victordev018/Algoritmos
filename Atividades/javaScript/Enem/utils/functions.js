// imports
import { getText, pressEnterToContinue, print } from "./ioUtils.js";

// funcionalidades gerais

// função para obter área de estudo
export function getArea(){
    const areaLetter = getText(`
        | escolha umas das seguintes areas:
        | (L) linguagens
        | (M) matematica
        | (CN) ciencias da natureza
        | (R) redacao
        |> opcao: `);

    return setAreaByLetter(areaLetter);
}

// função que recebe um texto e devolve a área de estudo
export function setAreaByLetter(letter){

    if (letter.toUpperCase() == "L"){
        return "linguagens";
    }

    if (letter.toUpperCase() == "M"){
        return "matematica";
    }

    if (letter.toUpperCase() == "CN"){
        return "ciencias_natureza";
    }

    return "redacao";
}

// função que soma valores por campo
export function sumValuesPerField(list, field){
    let sum = 0;
    for (let obj of list){
        sum += parseFloat(obj[field]);
    }
    return sum;
}

// função que retorna um valor para cada renda onde o valor mais alto é 8 e o menor é 1
export function getIncome(obj){
    let text = obj["nivel_socio_economico"];
    if (text == "Muito Alto") return 8;
    if (text == "Alto") return 7;
    if (text == "Médio Alto") return 6;
    if (text == "Médio") return 5;
    if (text == "Médio Baixo") return 4;
    if (text == "Baixo") return 3;
    if (text == "Muito baixo") return 2;
    if (text == "Sem informação") return 1;
}