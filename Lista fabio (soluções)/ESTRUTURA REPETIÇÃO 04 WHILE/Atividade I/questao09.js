/*
Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da
prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e
quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo,
clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:
Lugar       Pontos
1             9
2             6
3             4
4             3
Ao final, o algoritmo deve escreva os totais de pontos de cada clube, indicando o clube vencedor.
*/

import { get_number, get_string, print,calcular_pontuacao } from "./io_utils/utils.js"

function main(){
    let num_prova = get_number('Numero da prova: ')
    let num_jogad = get_number('Numero de joadores: ')
    let pontuacao_timeA = 0
    let pontuacao_timeB = 0
    let time_ganhador = ''
    
    while(num_prova!=0 && num_jogad!=0){
        let c = 1
        while(c <= num_jogad){
            //perfil e rsultado de cada jogador:
            print(`>>> ${c}° jogador <<<`)
            let nome = get_string('Nome: ')
            let classificacao = get_number('Classificacao [1,2,3,4]: ')
            let tempo = get_number('Tempo: ')
            let clube = get_string('Clube [a,b]: ')

            //condicionais para decidir para qual clube vai os pontos
            if (clube == "a"){
                pontuacao_timeA += calcular_pontuacao(classificacao)
            } else{
                pontuacao_timeB += calcular_pontuacao(classificacao)
            }
            c++
        }
        num_prova = get_number('Numero da prova: ')
        num_jogad = get_number('Numero de joadores: ')  
    }
        if(pontuacao_timeA>pontuacao_timeB){
            time_ganhador = "Time A"
        }else if (pontuacao_timeB>pontuacao_timeA){
            time_ganhador = 'Time B'
        }else{
            time_ganhador = 'Empate!'
        }

    //saida//resultados
    print('----->>> RESULTADOS <<<-----')
    print(`Time a: ${pontuacao_timeA} pontos`)
    print(`Time b: ${pontuacao_timeB} pontos`)
    print(`Time ganhador: ${time_ganhador}`)
}

main()