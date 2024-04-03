/*Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).*/

import { get_number, tipo_triangulo_por_lado, print } from "./utils/io_utils.js"

function main(){
    //entrada
    const lado1 = get_number('Lado 1: ')
    const lado2 = get_number('Lado 2: ')
    const lado3 = get_number('Lado 3: ')

    //processamento
    const resultado = tipo_triangulo_por_lado(lado1,lado2,lado3)

    //saida
    print(resultado)
}

main()