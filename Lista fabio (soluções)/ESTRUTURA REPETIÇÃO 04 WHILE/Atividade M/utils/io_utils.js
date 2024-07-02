import {question} from 'readline-sync';

// função para ler um número pelo console
export function get_number(message){
    return Number(question(message));
}