/*Um posto está vendendo combustíveis com a seguinte tabela de descontos:
1. Álcool:
· até 20 litros, desconto de 3% por litro
· acima de 20 litros, desconto de 5% por litro
2. Gasolina:
· até 20 litros, desconto de 4% por litro
· acima de 20 litros, desconto de 6% por litro.
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que
o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.*/

import { get_number, get_string, calcular_preco_combustivel } from "./utils/io_utils.js"

function main (){
    //entrada de dados
    console.log('------- Posto do jota --------')
    let qtd_litros = get_number('Informe a quantidade de litros: ')
    let type_combust = get_string('Informe o tipo de combustivel [G/A]: ')

    //processamento
    calcular_preco_combustivel(qtd_litros, type_combust)

}

main()

