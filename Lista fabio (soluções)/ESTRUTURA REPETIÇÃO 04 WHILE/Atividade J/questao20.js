/*
Considere que um carro vai fazer uma viagem entre duas cidades e que a distância a ser percorrida é de
600 km. No início da viagem, o carro está com o tanque cheio (50 litros). Durante o percurso foi usado
um aparelho para medir o desempenho do carro, que mostrava, quando acionado, duas informações:
· Distância percorrida desde a última medição;
· Quantidade de litros consumidos para percorrer a distância indicada.
Escreva um algoritmo que leia estas informações e escreva:
· se o carro chegou ao seu destino (distância percorrida maior ou igual a 600 km);
· se o carro parou antes de chegar por falta de combustível (consumo igual a 50 litros);
· o consumo em km/l do carro.
*/

import { get_number, print } from "./utils/io_utils.js"

function main(){
    const qtd_combustive = 50
    const distancia_cidades = 600

    let pergunta1 = get_number('distancia percorrida: ')
    let pergunta2 = get_number('quantidade de combustivel gasto: ')
    let dist_percorrida = pergunta1
    let qtd_combust_consumidos = pergunta2
    let resultado
    if (dist_percorrida>=distancia_cidades){
        resultado = `O carro chegou ao seu destino, pois percorreu os 600km` 
    } else if (qtd_combust_consumidos >= qtd_combustive && dist_percorrida < distancia_cidades){
        resultado = `O carro parou por falta de combustível ._.`
    }

    while((dist_percorrida<distancia_cidades) && qtd_combust_consumidos < qtd_combustive){
        pergunta1 = get_number('distancia percorrida: ')
        dist_percorrida += pergunta1
        pergunta2 = get_number('quantidade de combustivel gasto: ')
        qtd_combust_consumidos += pergunta2

        if (dist_percorrida>=distancia_cidades){
            resultado = `O carro chegou ao seu destino, pois percorreu os 600km` 
        } else if (qtd_combust_consumidos >= qtd_combustive && dist_percorrida < distancia_cidades){
            resultado = `O carro parou por falta de combustível ._.`
        }
    }
    print(resultado)
}

main()