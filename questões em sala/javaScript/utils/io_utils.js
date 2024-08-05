// funções útils

import { question } from "readline-sync";

// função para ler um valor recebendo a mensagem e um valor mínimo aceitável
export function get_number_min(mensagem, min){
    let number = Number(question(mensagem));
    while (number < min){
        number = Number(question(mensagem));
    }
    return number;
}

// função para pedir um numero
export function get_number(mensagem){
    return Number(question(mensagem));
}