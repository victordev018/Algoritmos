/*
Escreva um algoritmo que calcula o retorno de um investimento financeiro. O usuário deve informar
quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo do
investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se
deseja calcular o ano seguinte, sucessivamente. Por exemplo, caso o usuário deseje investir R$ 100,00
por mês, e tenha uma taxa de juros de 1% ao mês, o algoritmo forneceria a seguinte saída:
Saldo do investimento após 1 ano: 1268.25
Deseja processar mais um ano (S/N) ?
*/

import { get_number, get_str, print } from "./utils/io_utils.js"
function main(){
    let resposta = "S"
    while(resposta.toLowerCase() == "s"){
        let c = 0
        let saldo = 0
        let valor_investimento = get_number('Investir quanto por mes? ')
        let taxa_juros = get_number('taxa de juros(%): ')
        while (c < 12){
            saldo += valor_investimento + (saldo*taxa_juros/100)
            c++
        }
        print('-------------------------------------------')
        print(`saldo investido apos 1 ano: R$ ${saldo .toFixed(2)}`)
        resposta = get_str('deseja continuar? [s/n]: ')
    }
}

main()