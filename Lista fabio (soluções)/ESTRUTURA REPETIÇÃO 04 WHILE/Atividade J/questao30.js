/*
Escreva um algoritmo que leia o nome de um produto, o preço e a quantidade comprada. Escreva o
nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo
número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”).
a. Até 10 unidades: valor total
b. de 11 a 20 unidades: 10% de desconto
c. de 21 a 50 unidades: 20% de desconto
d. acima de 50 unidades: 25% de desconto
*/

import { get_str, get_number, print } from "./utils/io_utils.js"

function main(){
    let i = 1
    print(`produto ${i}: `)
    let nome_produto = get_str('nome produto: ')
    let preco_produto
    let qtd_produto
    let val_total 
    
    while(nome_produto != 'FIM'){
        i++
        preco_produto = get_number('preco produto: ')
        qtd_produto = get_number('quantidade: ')
        
        val_total = preco_produto*qtd_produto
        
        if (qtd_produto >= 11 && qtd_produto <= 20){
            val_total -= val_total*0.1 //desconto 10%
        }else if(qtd_produto >= 21 && qtd_produto <=50){
            val_total -= val_total*0.2 //desconto 20%
        }else if (qtd_produto >50){
            val_total -= val_total*0.25 //desconto 25%     
        }
        print('')
        print('----- Folha pagamento ----')
        print(`nome: ${nome_produto} \npreco: R$ ${val_total}`)
        print('')
        print(`produto ${i}:`)
        nome_produto = get_str('nome produto: ')
    }

    print('compras finalizas!!!')
}

main()