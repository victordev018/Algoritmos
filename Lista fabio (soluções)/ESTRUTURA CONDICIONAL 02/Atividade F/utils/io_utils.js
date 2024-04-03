import { question } from "readline-sync"

export function div_somar_elequad_igual_origin(numero){
    let numP1 = Math.floor(numero/100)
    let numP2 = Math.floor(numero % 100)
    let soma = numP1 + numP2
    let quad = soma**2

    if (numero >= 1000 && numero <= 9999){
        return `${numero} -> dividindo: ${numP1} e ${numP2} -> somando temos ${soma} -> ${soma}² = ${quad}`
    } else {
        return 'O numero nao esta no intervalo exigido...'
    }
}

export function verificar_quadrado_perfeito(numero, dezenas){
    let raiz = Math.sqrt(numero)
    let soma = dezenas.dezena1 + dezenas.dezena2

    if (raiz == soma){
        return `√${numero} = ${raiz} = ${dezenas.dezena1} + ${dezenas.dezena2}. O número ${numero} é um quadrado perfeito`
    }
}

export function separar_dezenas(num){
    let dezena1 = Math.floor(num/100)
    let dezena2 = Math.floor(num % 100)

    return {dezena1, dezena2}
}

export function  calcular_idade(dataNas, dataAtual){
    let nascimento = new Date(dataNas)
    let altualD = new Date(dataAtual)

    let diferenca = altualD - nascimento
    const anos = Math.floor(diferenca/(365.25 * 24 * 60 * 60 * 1000))
    const meses = Math.floor((diferenca % (365.25 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000))
    const dias = Math.floor((diferenca % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000))

    return {anos, meses, dias}
}

export function calcular_area(b, h){
    const area = b*h
    return area
}

export function descobrir_altura (y1, y2){
    let altura = 0
    if (y1 > y2){
        altura = y1-y2
    } else{
        altura = y2-y1
    }
    return altura
}

export function descobrir_base (x1, x2){
    let base = 0
    if (x1 > x2){
        base = x1-x2
    } else{
        base = x2-x1
    }
    return base
}

export function identificar_cats_hipt(l1, l2, l3){
    print('')
    if (l1 > l2 && l1> l3){
        print(` Hipotenusa: ${l1} \n cateto 1: ${l2} \n cateto 2: ${l3}`)
    } else if (l2 > l1 && l2> l3){
        print(` Hipotenusa: ${l2} \n cateto 1: ${l1} \n cateto 2: ${l3}`)
    } else{
        print(` Hipotenusa: ${l3} \n cateto 1: ${l1} \n cateto 2: ${l2}`)
    }
}

export function verificar_senha(senha){
    if (senha == 1234){
        print ('Permissao de aceso: aceito!')
    } else{
        print ('Permissao de acesso: nao aceito, senha incorreta!') 
    }
}

export function calcular_bhaskara(a, b, delta){
    let raiz_delta = Math.sqrt(delta)
    let menosB = b*-1
    let x1 = (menosB + raiz_delta)/2*a
    let x2 = (menosB - raiz_delta)/2*a
    print(`Raizes: \n X1 = ${x1} \n X2 = ${x2}`)
}

export function calcular_delta (a,b,c){
    let delta = (b**2 - 4*a*c)
   return delta
}

export function data_mais_recente(dia1, mes1, ano1, dia2, mes2, ano2){
    let anoA = 0
    let mesA = 0
    let diaA = 0
    //verificar se sao totalmente iguais
    if (dia1 === dia2 && mes1 === mes2 && ano1 === ano2){
        return 'As datas sao as mesmas!'
    }
    //verificar ano recente
    if (ano1 > ano2){
        diaA = dia1
        mesA = mes1
        anoA = ano1
      //verificar ano e mes
    } else if(ano2 >= ano1 && mes2 >= mes1 && dia2 >= dia1){
        diaA = dia2
        mesA = mes2
        anoA = ano2
    } else if(ano2 > ano1 && mes2 == mes1 && dia2 > dia1){
        diaA = dia2
        mesA = mes2
        anoA = ano2
    } else{
        diaA = dia1
        mesA = mes1
        anoA = ano1
    }
    return `Data mais recente: \n ${diaA}/${mesA}/${anoA}`
}

    export  function duracao_jogo(h1, m1, h2, m2){
        let duracao_h = h2 - h1
        let duracao_m = m2 - m1
        if (duracao_m < 0){
            duracao_m = duracao_m * -1
        }
        if (duracao_h <= 24 && duracao_h >0){
            print(`${duracao_h} hora(s) e ${duracao_m} minutos!`)
        } else{
            print('Tempo limite de duracao de jogo e 24h...')
        }  
    }

export function arredondar_numero(num){
    let resto = num % 1
    let numSemFracao = Math.floor(num)

    //condicionais
    if (resto >= 0.5){
        numSemFracao = numSemFracao +1
    }else{
        numSemFracao = numSemFracao
    }

    return numSemFracao
}

export function print(msg){
    console.log(msg)
}

export function get_number(mensagem){
    let num = Number(question(mensagem))
    return num
}