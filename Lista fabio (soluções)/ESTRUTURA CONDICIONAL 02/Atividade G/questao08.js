/*Para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que
depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a
11% do salário bruto, mas não é descontado (é a empresa que deposita). O salário líquido corresponde
ao salário bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a
quantidade de horas trabalhadas no mês.
Desconto do IR:
o Salário Bruto até R$ 900,00 (inclusive) - isento
o Salário Bruto até R$ 1.500,00 (inclusive) - desconto de 5%
o Salário Bruto até R$ 2.500,00 (inclusive) - desconto de 10%
o Salário Bruto acima de R$ 2.500,00 - desconto de 20%
Escreva na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e
a quantidade de hora é 220.
Salário Bruto: (5 * 220) : R$ 1100,00
(-) IR (5%) : R$ 55,00
(-) INSS ( 10%) : R$ 110,00
FGTS (11%) : R$ 121,00
Total de descontos : R$ 165,00
Salário Liquido : R$ 935,00 */

import { get_number, calcular_salrio_liquido } from "./utils/io_utils.js"

function main (){
    //entrada
    let horasTrabalhadas = get_number('Informe o total de horas trabalhadas: ')
    let valorPorHora = get_number('Informe o valor da hora trabalhada: ')
    console.log('')

    //processamento
    const resultado = calcular_salrio_liquido(horasTrabalhadas, valorPorHora)

    //saida
    console.log('-----------------------------')
    console.log(`Salario Bruto: (${horasTrabalhadas} * ${valorPorHora}) : R$ ${resultado.salarioBruto}`)
    console.log(`(-) IR (${resultado.ir}%) : R$ ${resultado.valorIr} `)
    console.log(`(-) INSS ( 10%) : R$ ${resultado.inss}`)
    console.log(`(-) Sindicato ( 3%) : R$ ${resultado.sindicato}`)
    console.log(`FGTS (11%) : R$ ${resultado.fgts}`)
    console.log(`Total de descontos : R$ R$ ${resultado.totDesconto}`)
    console.log(`salario Liquido: R$ ${resultado.salarioLiq}`)
}

main()