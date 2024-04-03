/*As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe
contrataram para desenvolver o programa que calculará os reajustes. Escreva um algoritmo que leia o
salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
o salários até R$ 280,00 (incluindo) : aumento de 20%
o salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
o salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
· o salário antes do reajuste;
· o percentual de aumento aplicado;
· o valor do aumento;
· o novo salário, após o aumento.*/

import { get_number, calcular_rejuste } from "./utils/io_utils.js"

function main (){
    //entrada
    console.log("")
    console.log('--------- Reajuste Salarial -----------')
    let salario = get_number('salario: R$ ')

    //processamento
    var resultado = calcular_rejuste(salario)

    //saida
    console.log("")
    console.log("-----------------------------------")
    console.log(`Salario inicial     : R$ ${resultado.salInicial}`)
    console.log(`Percentual aumento  : ${resultado.percentual}%`)
    console.log(`Valor aumento       : R$ ${resultado.aumento}`)
    console.log(`Salario pos aumento : R$ ${resultado.salFinal}`)
    console.log("-----------------------------------")
}

main()

