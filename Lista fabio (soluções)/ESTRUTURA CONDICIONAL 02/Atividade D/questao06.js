/*Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva
se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180º). Se formam,
verifique se formam um triângulo acutângulo (3 ângulos < 90º), retângulo (1 ângulo = 90º) ou
obtusângulo (1 ângulo > 90º). Não existe ângulo com tamanho 0º (zero grau).*/


import { get_number, tipo_triangulo, print } from "./utils/io_utils.js"

function main(){
    //entrada de dados
    const angulo1 = get_number('Angulo 1: ')
    const angulo2 = get_number('Angulo 2: ')
    const angulo3 = get_number('Angulo 3: ')

    //verificar se é triangulo
    const resultado = tipo_triangulo(angulo1, angulo2, angulo3)

    //saida de dados
    print(resultado)
}

main()