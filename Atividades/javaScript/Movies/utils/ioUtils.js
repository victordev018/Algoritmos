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
    let number = questionInt(message);
    while(number < min || number > max){
        number = questionInt("> Erro! informe um valor entre " + min + " e  " + max + ": ");
    }
}