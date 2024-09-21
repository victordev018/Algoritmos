// imports
import { question, questionInt } from "readline-sync";

// funções íteis de entrada e saída

// função para pedir um texto
export function getText(message){
    return question(message);
}

// função para pedir um número
export function getNumber(message){
    return questionInt(message);
}

// função para pedir um número em um intervalo
export function getNumberInRange(message, min, max){
    let number = questionInt(message);
    while(number < min || number > max){
        number = questionInt("Erro! informe um numero entre " + min + " e " + max + ": ");
    }
    return number;
}

// função para pedir um número positivo
export function getPositiveNumber(message){
    let number = questionInt(message);
    while(number < 0){
        number = questionInt("Erro! informe um valor positivo: ");
    }
    return number;
}

// função pata exibir algo no console
export function print(content){
    console.log(content);
}

// função para limpar tela
export function clearScreen(){
    console.clear();
}

// função que aguarda um enter para prosseguir
export function pressEnterToContinue(message){
    return question(message);
}