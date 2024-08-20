// funções de entrada e saida de dados

import { question } from "readline-sync"

// função para printar algo na tela
export function print(message){
    console.log(message);
}

// função para pedir um número
export function get_number(message){
    return parseInt(question(message));
}

// função para pedir um número positivo
export function get_positive_number(message){
    let number = parseInt(question(message));
    
    while(number < 0){
        print("\n> número inválido!")
        number = parseInt(question(message));
    }
}

// função para pedir um número negativo
export function get_negative_number(message){
    let number = parseInt(question(message));
    
    while(number > -1){
        print("\n> número inválido!")
        number = parseInt(question(message));
    }
}

// função para pedir um número em uma faixa
export function get_track_number(message, min, max){
    let number = parseInt(question(message));
    while (!(number >= min && number <= max)) {
        print("\n> o número está fora da faixa!")
        number = parseInt(question(message));
    }
}