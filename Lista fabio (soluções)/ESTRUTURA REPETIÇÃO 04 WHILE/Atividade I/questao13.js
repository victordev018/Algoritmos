/*
Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios
descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2
somas. (Flag: salário=0)
    De              Até        Acréscimo
R$ 0,00         R$ 2.999,99     25 %
R$ 3.000,00     R$ 5.999,99     20 %
R$ 6.000,00     R$ 9.999,99     15 %
Acima de        R$ 10.000,00    10 %
*/

import { get_number, print, verificar_val_desconto, calcular_new_salary } from "./io_utils/utils.js"

function main(){
    let salario = get_number('Salario: ')

    while(salario!=0){
        //trabalhos...
        let desconto = verificar_val_desconto(salario)
        let novo_salario = calcular_new_salary(salario, desconto)
        let soma_salario_atual = salario + salario
        let soma_salario_reajustado = novo_salario + novo_salario
        let diferença = soma_salario_reajustado - soma_salario_atual

        //saida
        print(`---> NEW SALARY <---`)
        print(`new salary            : R$ ${novo_salario .toFixed(2)}`)
        print(`soma salary atual     : R$ ${soma_salario_atual .toFixed(2)}`)
        print(`soma salary reajustado: R$ ${soma_salario_reajustado .toFixed(2)}`)
        print(`diferenca das somas   : R$ ${diferença .toFixed(2)}`)

        //nova chamada de salario:
        print('')
        salario = get_number('Salario: ')
    }
}

main()