/*Para transformar um número binário em decimal, você pode seguir este processo:

Identifique o valor de cada dígito binário na posição correspondente.
Multiplique cada dígito binário pelo valor da potência de 2 correspondente à sua posição.
Some os resultados das multiplicações para obter o equivalente decimal.
Por exemplo, para converter o número binário 1010 em decimal:

O dígito mais à direita é 0, então seu valor é 0.
O próximo dígito é 1, que está na posição 1, então seu valor é 1 * 2¹ = 2.
O próximo dígito é 0, que está na posição 2, então seu valor é 0 * 2² = 0.
O dígito mais à esquerda é 1, que está na posição 3, então seu valor é 1 * 2³ = 8.
Agora, some os valores obtidos: 8 + 0 + 2 + 0 = 10. Portanto, o número binário 1010 é igual a 10 em decimal.*/

//Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

import { question } from "readline-sync"

//entrada
console.log()
console.log("=================================================")
console.log('Informe um valor inteiro (4 digitos) em binario: ')
console.log()
var num1 =Number(question('Primeiro digito: '))
var num2 =Number(question('Segundo digito: '))
var num3 =Number(question('Terceiro digito: '))
var num4 =Number(question('Quarto digito: '))

//processamento
var numdec = (num4 * 2**0) + (num3 * 2**1) + (num2 * 2**2) + (num1 * 2**3)

//saida
console.log()
console.log("-----------------------------------------------")
console.log(`Numero Binario: ${num1} ${num2} ${num3} ${num4}`)
console.log(`Numero Decimal: ${numdec}`)