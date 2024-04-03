/*Uma fruteira está vendendo frutas com a seguinte tabela de preços:
        Até 5 Kg         Acima de 5 Kg
Morango R$ 2,50 por Kg   R$ 2,20 por Kg
Maçã    R$ 1,80 por Kg   R$ 1,50 por Kg

Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.*/

import { get_number, valor_total_morango, valor_total_maca, valo_total } from "./utils/io_utils.js"

function main (){
    //entrada
    console.log('---------- Mercadinho do Jota ----------')
    console.log('Informe a quantidade em kg de cada fruta')
    let qtd_kg_morango = get_number('Morango: ')
    let qtd_kg_maca = get_number('Maca: ')
    console.log('')

    //processamento
    let tot_val_mor = valor_total_morango(qtd_kg_morango)
    let tot_val_mac = valor_total_maca(qtd_kg_maca)

    //saida
    valo_total(tot_val_mac, tot_val_mor, qtd_kg_maca, qtd_kg_morango)

}

main()