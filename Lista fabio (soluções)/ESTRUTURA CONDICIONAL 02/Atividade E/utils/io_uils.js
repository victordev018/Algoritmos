import { question } from "readline-sync"

export function verificar_quadrante(angulo){
    if (angulo >= 0 && angulo<= 90){
        return ` angulo: ${angulo} \n quadrante: 1`
    } else if (angulo > 90 && angulo <=180){
        return ` angulo: ${angulo} \n quadrante: 2`
    } else if (angulo > 180 && angulo <= 270 ){
        return ` angulo: ${angulo} \n quadrante: 3`
    } else {
        return ` angulo: ${angulo} \n quadrante: 4`
    }
}

export function calculo_imc(altura, peso) {
    const imc = peso / altura

    //classificacao pelo imc
    print("")
    print("-------------------------")
    print(`Imc: ${imc}`)

    if (imc < 25){
        print('Situacao: Peso normal')
    } else if (imc >= 25 && imc <= 30){
        print('Situacao: Obeso')
    } else {
        print('Situacao: Obesidade Morbida')
    }
}

export function operacoes (n1, n2){
    print("")
    print(' [1] - Adicao \n [2] - Subbtracao \n [3] - Multiplicacao \n [4] - Divisao')
    const escolha = get_number('Digite a opcao de escolha para operacao: ')

    //condicionais
    if (escolha === 1){
        const soma = n1 + n2
        return `Soma = ${soma}`
    } else if (escolha === 2){
        const sub = n1 - n2
        return `Subtracao = ${sub}`
    } else if (escolha === 3){
        const multi = n1 * n2
        return `Multiplicacao = ${multi}`
    } else if (escolha === 4){
        const div = n1 / n2
        return `Divisao = ${div}`
    } else{
        return 'Escolha invalida...'
    }
}

export function quando_resto_5 (n1, n2) {
    const quad1 = n1**2
    const quad2 = n2**2

    print(` quadrado de ${n1} = ${quad1} \n quadrado de ${n2} = ${quad2}`)
}

export function quando_resto_4 (n1, n2){
    if (n2 != 0) {
    const soma = n1 + n2
    const div = soma / n2

    print(`DIVISAO DA SOMA DOS VALORES PELO SEGUNDO VALOR: `)
    print(` soma : ${n1}+${n2} = ${soma} \n soma / ${n2} ==> ${soma} / ${n2} = ${div}`)
    } else{
        print('Impossivel fazer a divisão, pois o segundo numero = 0.')
    }
}


export function quando_resto_3(n1, n2){
    const soma = n1 + n2
    const multi = soma * n1

    print(`MULTIPLICACAO DA SOMA DOS VALORES PELO PRIMEIRO VALOR: `)
    print(` soma : ${n1}+${n2} = ${soma} \n soma x ${n1} ==> ${soma} * ${n1} = ${multi}`)
}

export function quando_resto_2(n1, n2){
    if (n1 % 2 === 0) {
        print(`O valor ${n1} e par.`)
    } else {
        print(`O valor ${n1} e ipar.`)
    }

    if (n2 % 2 === 0) {
        print(`O valor ${n2} e par.`)
    } else {
        print(`O valor ${n2} e ipar.`)
    }
}

export function quando_resto_1(n1, n2, resto){
    const somaVal = n1 + n2 
    print('')
    print('SOMA DAS VARIAVEIS E O RESTO DA DIVISÃO')
    print(` Soma: ${n1} + ${n2} = ${somaVal} \n Resto da divisão dos valores: ${resto} `)
}

export function media_aprov_naoaprov(md){
    print(`Media: ${md}`)
    if (md >= 7){
        print ('Situacao: Aprovado!')       
    } else{
        const notaEXame = get_number('Nota no exame: ')
        let mediaFinal = (md + notaEXame)/2
        if (mediaFinal >= 5 ){
            print(`Media final: ${mediaFinal} \n Situacao: aprovado pos exame!`)
        } else{
            print(`Reprovado!`)
        }
    }
}

export function val_maior_media (num1, num2, num3, num4, num5, media){
    if (num1 > media){
        print(` ${num1}`)
    }
    if (num2 > media){
        print(` ${num2}`)
    }
    if (num3 > media){
        print(` ${num3}`)
    }
    if (num4 > media){
        print(` ${num4}`)
    }
    if (num5 > media){
        print(` ${num5}`)
    }

}


export function qual_ganha_mais(qtdhorap1, qtdhorap2, valorp1, valorp2){
    let salariop1 = qtdhorap1 * valorp1
    let salariop2 = qtdhorap2 * valorp2

    print(`Salario p1: ${salariop1}`)
    print(`Salario p2: ${salariop2}`)
    print('')

    if (salariop1>salariop2){
        return 'Profesor 1 possui maior salario!'
    } else {
        return 'Profesor 2 possui maior salario!'
    }
}

export function verificar_menor(n1, n2, n3, n4 ,n5){
    if (n1<n2 && n1<n3 && n1<n4 && n1<n5){
        return n1
    } else if (n2<n1 && n2<n3 && n2<n4 && n2<n5){
        return n2
    } else if (n3<n1 && n3<n2 && n3<n4 && n3<n5){
        return n3
    } else if (n4<n1 && n4<n2 && n4<n3 && n4<n5){
        return n4
    } else{
        return n5
    }
}

export function verificar_maior(n1, n2, n3, n4 ,n5){
    if (n1>n2 && n1>n3 && n1>n4 && n1>n5){
        return n1
    } else if (n2>n1 && n2>n3 && n2>n4 && n2>n5){
        return n2
    } else if (n3>n1 && n3>n2 && n3>n4 && n3>n5){
        return n3
    } else if (n4>n1 && n4>n2 && n4>n3 && n4>n5){
        return n4
    } else{
        return n5
    }
}

export function verificar_par_impar(num){
    if (num % 2 == 0){
        return 'O numero informado e par!'
    } else {
        return 'O numero informado e impar!'
    }
}

export function escolha_opcao(num1, num2, num3, opcao){
    if (opcao == 1){
        return num1
    } else if (opcao == 2){
        return num2
    } else if (opcao == 3){
        return num3
    } else{
        return 'Opcao invalida!'
    }
}

export function print(texto){
    console.log(texto)
}

export function get_number(texto){
    let num = Number(question(texto))
    return num
}
