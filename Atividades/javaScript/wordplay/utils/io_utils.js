import {question} from 'readline-sync';

export function get_number(message){
    return Number(question(message));
}

export function get_text(message){
    return question(message);
}

export function print(message){
    console.log(message);
}

export function clear_screen(){
    console.clear();
}