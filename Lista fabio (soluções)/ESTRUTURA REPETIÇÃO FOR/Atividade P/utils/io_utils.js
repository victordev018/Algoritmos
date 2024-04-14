import { question } from "readline-sync"

export function get_number(msg){
    let number = Number(question(msg))
    return number
}

