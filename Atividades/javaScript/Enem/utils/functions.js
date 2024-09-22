// imports
import { getText } from "./ioUtils.js";

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