import {question} from 'readline-sync';

export function get_number(message){
    return Number(question(message));
}