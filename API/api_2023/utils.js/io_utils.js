import {question} from 'readline-sync'


export function calc_gasto_mensal(qtd_litros, valor){
    let litros = qtd_litros * 0.1
    let prec = litros % 1000 > 0 ? (Math.floor(litros/1000)+1) * valor: Math.floor(litros/1000) * valor
    return prec
}

export function calc_preco_encher_piscina(qtd_litros, valor){
    let prec = 0
    if (qtd_litros%1000 > 0){
        prec = (Math.floor(qtd_litros/1000)+1) * valor
    } else {
        prec = Math.floor(qtd_litros/1000) * valor
    }
    return prec
}
export function calcule_capacidade_piscina(){
    print('\nInforme as dimensoes da piscina em cm:')
    let largura = get_number('largura: ')
    let altura = get_number('altura: ')
    let profundidade = get_number('profundidade: ')

    let capacidade = (largura * altura * profundidade) / 1000
    return capacidade * 85 /100
}

export function get_string(msg){
    let string = question(msg)
    return string
}

export function get_number(msg){
    let number = Number(question(msg))
    return number
}

export function print(msg){
    console.log(msg)
}