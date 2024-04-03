/*
Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para
cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que
estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando
quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora,
mostrando ao final, o número de cada canal e sua respectiva audiência.
*/
import {get_number, print, calcular_porcentagem} from './utils/io_utils.js'
function main(){
    
    //apresentação dos canais: 
    const apresentacao_canais = `
    ----->> CANAIS TV <<------
    CANAIS: [2 , 4, 5, 7, 10]`
    print(apresentacao_canais)

    //entrada de dados:
    print('1° entrevistado:')
    let num_canal = get_number('canal: ')
    let num_espectadores_casa

    //valores para serem incrementados
    let audiencia = 0
    let frequencia_2 = 0
    let frequencia_4 = 0
    let frequencia_5 = 0
    let frequencia_7 = 0
    let frequencia_10 = 0
    let c = 1
    while (num_canal != 0){
        c++
        num_espectadores_casa = get_number('N de espectadores: ')
        audiencia += num_espectadores_casa
        //sadicionando valores as frequências:
            if (num_canal == 2){
                frequencia_2 += num_espectadores_casa
            } else if (num_canal == 4){
                frequencia_4 += num_espectadores_casa
            } else if (num_canal == 5){
                frequencia_5+= num_espectadores_casa
            }else if (num_canal == 7){
                frequencia_7+= num_espectadores_casa
            } else if (num_canal == 10){
                frequencia_10+= num_espectadores_casa
            }

        print(`${c} entrevistado:`)
        num_canal = get_number('canal: ')
    }
    //montando e apresentando resultado: 
    const resultado = `
    ------------ resultados ------------
    - canal 2 : ${calcular_porcentagem(frequencia_2, audiencia) .toFixed(2)}%
    - canal 4 : ${calcular_porcentagem(frequencia_4, audiencia).toFixed(2)}%
    - canal 5 : ${calcular_porcentagem(frequencia_5, audiencia).toFixed(2)}%
    - canal 7 : ${calcular_porcentagem(frequencia_7, audiencia).toFixed(2)}%
    - canal 10: ${calcular_porcentagem(frequencia_10, audiencia).toFixed(2)}%
    - total de espectadores: ${audiencia} pessoas`

    print(resultado)
}

main()