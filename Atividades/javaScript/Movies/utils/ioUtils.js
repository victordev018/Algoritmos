// imports
import {question, questionInt} from "readline-sync";

// funções úteis de entrada e saída

export function print(content){
    console.log(content);
}

export function clearScreen(){
    console.clear();
}

export function getText(message){
    return question(message);
}

export function getNumber(message){
    return questionInt(message);
}

export function getNumberInRange(message, min, max){
    let number = getNumber(message);
    while(number < min || number > max){
        number = getNumber("> Erro! informe um valor entre " + min + " e  " + max + ": ");
    }
    return number;
}

export function getPositiveNumber(message){
    let number = getNumber(message);
    while(number < 0){
        number = getNumber("Erro! informe um valor positivo: ");
    }
    return number;
}

export function pressEnterToContinue(message){
    getText(message);
}