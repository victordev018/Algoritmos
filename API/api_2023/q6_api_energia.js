/*
Em 2021 o Brasil voltou a enfrentar crise na matriz energética devido ao baixo nível das águas nos reservatórios das hidrelétricas
brasileiras. Devido a isso os consumidores deverão arcar com custos extras (bandeira) para bancar outras matrizes energéticas, como usinas
termoelétricas. Neste mês de Junho a bandeira estabelecida pelo governo federal foi a Vermelha Patamar 2, que significa que a cada 100 KWh de
consumo será acrescido uma taxa extra de R$ 8,00.

O Cálculo da energia elétrica para o consumidor final é feito baseado em KWh e em faixas.
Valores hipotéticos:
● Consumo de até 30KWh isento de tarifa.
● Até 100 KWh será cobrado R$ 0,59 por cada um cada de todo os KWh consumidos;
● acima de 100KWh o valor de R$ 0,75 por cada um de todos os KWh consumidos.

Sobre o valor tarifado/apurado são 25% de ICMS e 15% de PIS/CONFIS.
A taxa de iluminação pública é cobrada apenas para os consumidores que passarem de 80KWh por mês, e custa 6% do valor tarifado (antes do
impostos).

Considerando os dados acima construa um software que receba dois dados:

Leitura Atual e Leitura Anterior do medidor de energia e faça todo o cálculo do "Talão de Energia" conforme detalhado acima.
Como saída apresente os dados que compõem assim como o valor total a ser pago.

Exemplo:
Consumo 000 KWh
Valor Faturado R$ 0,00
Bandeira R$ 0,00 (x bandeiras)
ICMS R$ 0,00
PIS/CONFIS
Taxa Iluminação R$ 0,00
*/
import { print, get_number } from "./utils.js/io_utils.js"

function main(){

    print('\n>>>> TALÃO DE ENERGIA <<<<')
    let consumoKWh = calc_consumo_energia()

    //taxas:
    let val_energia = calcular_valor_energia(consumoKWh)
    let bandeira = calc_bandeira(consumoKWh)
    let valor = val_energia + bandeira
    let x_bandeiras = bandeira/8
    let icms = calc_ICMS(valor)
    let pis_confis = calc_pis_confis(valor)
    let taxa_iluminacao = calc_taxa_iluminacao(consumoKWh, val_energia)
    let valor_faturado = valor+icms+pis_confis+taxa_iluminacao

    //saida de dados:
    const resultado = `
    ............ valor talão ...............
    Consumo            ${consumoKWh} KWh
    Val. Energia    R$ ${val_energia.toFixed(2)} 
    Bandeira        R$ ${bandeira.toFixed(2)} (${x_bandeiras} bandeiras)
    ICMS            R$ ${icms.toFixed(2)}
    PIS/CONFIS      R$ ${pis_confis.toFixed(2)}
    Taxa Iluminação R$ ${taxa_iluminacao.toFixed(2)}
    Valor Faturado  R$ ${valor_faturado.toFixed(2)}
    `

    print(resultado)
}

function calc_taxa_iluminacao(consumo, value){
    if (consumo > 80){
        return value * 6 / 100
    }else{
        return 0
    }
}

function calc_pis_confis(valor){
    return valor * 15 / 100
}

function calc_ICMS(valor){
    return valor * 25 / 100
}

function calc_bandeira(consumo){
    let valor = 0
    let i = 100

    while (i<=consumo){
        valor += 8
        i+=100
    }
    return valor

}

function calcular_valor_energia(consumo){
    if (consumo <= 30){
        return 0
    }else if (consumo<= 100){
        return consumo * 0.59
    }else{
        return consumo * 0.75
    }
}

function calc_consumo_energia(){
    print('\n--- leitura do medidor de energia (Kwh) ---')
    let atual = get_number('atual: ')
    let anterior = get_number('anterior: ')
    return atual - anterior
}

main()