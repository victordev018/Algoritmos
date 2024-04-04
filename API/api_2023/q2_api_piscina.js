/*[piscina.js] Uma piscina é algo muito legal de ter (um amigo que
tem uma). Para evitar transbordar ao tomar banho na piscina é
bom deixar o nível da água com no máximo 85% da capacidade.
Assim uma piscina que comporta 20 mil litros de água é bom botar
só 17mil litros. Considere uma piscina estilo quadrada. Para
encher a piscina ele usará água paga (o valor é cobrado por cada
1000 litros de água, em partes inteiras. Ou seja, se usar 1 litro já
paga por 1000, ao usar 1002 já paga 2 mil litros)

a. Calcule a capacidade máxima da piscina pedindo ao usuário as
dimensões de largura, comprimento e profundidade (em cm). 1 litro é
igual a 1000 cm3 . Uma piscina por exemplo de capacidade →
L=100cm x C=100cm x P=100cm → 1000 litros, e deve ser cheia até
850 litros apenas.

b. Informe até quantos litros é recomendado encher a piscina.

c. Peça ao usuário para informar o valor a ser pago por cada 1000 litros
na concessionária de água de sua cidade, e informe quanto ele
gastará para encher sua piscina;

d. Mensalmente é necessário repor 10% da água devido a banho e
evaporação, informe ao usuário também o gasto mensal para manter
a piscina no nível ideal
*/

import {get_number, print, calc_gasto_mensal, calc_preco_encher_piscina, calcule_capacidade_piscina} from './utils.js/io_utils.js'

function main(){
    let capacidade_max_piscina = calcule_capacidade_piscina() //pedir dimensões e devolver a capacidade max da piscina, levando em conta os 85%

    print(`\nA quantidade de litros recomendado para esta piscina e de: ${capacidade_max_piscina .toFixed(1)} litros...\n`)

    print(`>>> VALOR PARA ENCHER PISCINA <<<`)
    let val_1000l = get_number('valor a cada 1000 L: ')     //valor pago a cada 1000 litros
    let preco = calc_preco_encher_piscina(capacidade_max_piscina, val_1000l)
    print(`Para encher sua piscina, será gasto R$ ${preco .toFixed(2)} reais\n`)

    print('>>> GASTO MENSAL <<<')
    let gasto_mensal = calc_gasto_mensal(capacidade_max_piscina, val_1000l)
    print(`O gasto mensal para repor 10% da água total será de R$ ${gasto_mensal .toFixed(2)} reais\n`)
}

main()