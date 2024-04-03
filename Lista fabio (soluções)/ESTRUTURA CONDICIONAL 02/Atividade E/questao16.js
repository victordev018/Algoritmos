/*Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
escreva “Reprovado”.*/

import{get_number, media_aprov_naoaprov} from './utils/io_uils.js'

function main(){
    //entrada
    const nota1 = get_number('Nota 1: ')
    const nota2 = get_number('Nota 2: ')

    //processamento
    const media = (nota1+nota2)/2
    
    //resultado
    media_aprov_naoaprov(media)
}

main()