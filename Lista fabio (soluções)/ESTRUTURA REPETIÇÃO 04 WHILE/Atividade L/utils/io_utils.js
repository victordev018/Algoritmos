import { question } from "readline-sync"

export function print(msg){
    console.log(msg)
}

export function get_number(msg){
    let numero = Number(question(msg))
    return numero
}