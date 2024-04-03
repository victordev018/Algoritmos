import { question } from "readline-sync"

export function calcular_preco_carne(tipo_carne, qtd_carne, tipo_pagamento){
    let precoTotal = 0
    let pagamento = ''
    let val_desconto = 0
    
    if (tipo_carne == 'File'){
        if (qtd_carne <= 5){
            precoTotal = 4.9 * qtd_carne
        } else{
            precoTotal = 5.8 * qtd_carne   
        }
    } else if (tipo_carne == 'Alcatra'){
        if (qtd_carne <= 5){
            precoTotal = 5.9 * qtd_carne
        } else{
            precoTotal = 6.8 * qtd_carne   
        }   
    } else{
        if (qtd_carne <= 5){
            precoTotal = 6.9 * qtd_carne
        } else{
            precoTotal = 7.8 * qtd_carne   
        }
    }

    if (tipo_pagamento == 'S'){
        pagamento = 'Cartao Tabajara'
        val_desconto = precoTotal * 0.05
    } else {
        pagamento = 'Dinheiro'
        val_desconto = 0
    }

    let total_a_pagar = precoTotal - val_desconto

    console.log('------- Cupon Fiscal -------')
    console.log(`Tipo de carne       : ${tipo_carne}`)
    console.log(`Qantidade de carne  : ${qtd_carne}`)
    console.log(`Preco total         : R$ ${precoTotal}`)
    console.log(`Tipo de pagamento   : ${pagamento}`)
    console.log(`Valor desconto      : R$ ${val_desconto .toFixed(2)}`)
    console.log(`Valor a pagar       : R$ ${total_a_pagar}`)
}

export function valo_total(tot_val_mac, tot_val_mor, qtd_kg_maca, qtd_kg_morango){
    let totalKg = qtd_kg_maca + qtd_kg_morango
    let valorTotal = tot_val_mac +tot_val_mor
    let desconto = 0
    let valorFinalDesconto = 0

    if (totalKg > 8 || valo_total > 25){
        desconto = (0.1 * valorTotal)
        valorFinalDesconto = valorTotal - desconto
    } else{
        desconto = desconto
    }
    console.log('---- Ficha de pagamento ----')
    console.log(`Quantidade de morango  : ${qtd_kg_morango} \n preco: R$ ${tot_val_mor}`)
    console.log(`Quantidade de Maca     : ${qtd_kg_maca} \n preco: R$ ${tot_val_mac}`)
    console.log(`Quantidade total       : ${totalKg}Kg \n Valor inicial: ${valorTotal}`)
    console.log(`desconto: R$ ${desconto .toFixed(2)} \n Valor total a pagar    : R$ ${valorFinalDesconto}`)
}


export function valor_total_maca (qtd_kg_maca){
    let valor = 0
    if (qtd_kg_maca <= 5){
        valor = qtd_kg_maca * 1.8
    } else{
        valor = qtd_kg_maca * 1.5
    }

    return valor  
}

export function valor_total_morango(qtd_kg_morango){
    let valor = 0
    if (qtd_kg_morango <= 5){
        valor = qtd_kg_morango * 2.5
    } else{
        valor = qtd_kg_morango * 2.2
    }

    return valor
}

export function calcular_preco_combustivel(qtd_litros, type_combust){
    let preco_gas = 2.5
    let preco_alc = 1.9
    let valorInicial = 0
    let valorFinal = 0

    if (type_combust == 'A'){
        if (qtd_litros <= 20){
            valorInicial = qtd_litros * preco_alc
            valorFinal = valorInicial - (valorInicial*0.03)
        } else if(qtd_litros > 20){
            valorInicial = qtd_litros * preco_alc
            valorFinal = valorInicial - (valorInicial*0.05)
        }
    } else {
        if (qtd_litros <= 20){
            valorInicial = qtd_litros * preco_gas
            valorFinal = valorInicial - (valorInicial*0.04)
        } else if (qtd_litros > 20){
            valorInicial = qtd_litros * preco_gas
            valorFinal = valorInicial - (valorInicial*0.06) 
        }
    }
    console.log('')
    console.log(`------ INFORMACAO DE PAGAMENTO --------`)
    console.log(`Tipo de combustivel: ${type_combust}`)
    console.log(`Quantidade de litros: ${qtd_litros}`)
    console.log(`Valor inicial: R$ ${valorInicial}`)
    console.log(`Valor final pos desconto: R$ ${valorFinal}`)
}

export function classificatorio_participacao(p1, p2, p3, p4, p5){
    let qtd_S = 0

    if (p1 == 'S'){
        qtd_S = qtd_S + 1
    }
    if (p2 == 'S'){
        qtd_S = qtd_S + 1
    }
    if (p3 == 'S'){
        qtd_S = qtd_S + 1
    }
    if (p4 == 'S'){
        qtd_S = qtd_S + 1
    }
    if (p5 == 'S'){
        qtd_S = qtd_S + 1
    }

    console.log(`resp S: ${qtd_S}`)

    if (qtd_S == 2){
        console.log('Classicicação: Suspeita.')
    } else if (qtd_S >= 3 && qtd_S <= 4){
        console.log('Classicicação: Cumplice.') 
    } else if (qtd_S == 5){
        console.log('Classicicação: Assassino.')
    } else {
        console.log('Classicicação: Inocente.')
    }
}

export function verificar_int_dec(numero){
    const resto = numero % 1

    if (resto == 0){
        console.log('O numero e inteiro!')
    } else {
        console.log('O numero e decimal!')
    }
}

export function separar_cent_dez_uni(numero){
    if (numero < 1000){
        let centena = 0 
        let dezena = 0
        let unidade = 0

        if (numero >= 100){
            centena = Math.floor(numero / 100)
            dezena = Math.floor(((numero / 100) % 1)*10)
            unidade = Math.floor(((numero / 10) % 1)*10)

            if (centena < 2 && dezena < 2 && unidade < 2){
                console.log(`${centena} centena, ${dezena} dezena e ${unidade} unidade`)
            } else if (centena > 1 && dezena < 2 && unidade < 2){
                console.log(`${centena} centenas, ${dezena} dezena e ${unidade} unidade`)
            } else if (centena < 2 && dezena > 1 && unidade <2){
                console.log(`${centena} centena, ${dezena} dezenas e ${unidade} unidade`)
            } else if (centena < 2 && dezena < 2 && unidade > 1){
                console.log(`${centena} centena, ${dezena} dezena e ${unidade} unidades`)
            } else {
                console.log(`${centena} centenas, ${dezena} dezenas e ${unidade} unidades`)
            }
        } else {
            dezena = Math.floor(numero / 10)
            unidade = Math.floor(numero % 10)

            if (dezena < 2 && unidade < 2){
                console.log(`${dezena} dezena e ${unidade} unidade`)
            } else if (dezena < 2 && unidade > 1){
                console.log(`${dezena} dezena e ${unidade} unidades`)
            } else if (dezena > 1 && unidade < 2){
                console.log(`${dezena} dezenas e ${unidade} unidade`)
            } else {
                console.log(`${dezena} dezenas e ${unidade} unidades`)
            } 
        }
    } else {
        console.log('O numero nao obedece o intervalo!')
    }
}

export function calcular_resultado_aluno (n1,n2){
    const media = (n1+n2)/2
    let conceito = ''
    let situacao = ''

    if (media >= 9 && media <=10){
        conceito = 'A'
        situacao = 'Aprovado!'
    } else if (media >= 7.5 && media <=9){
        conceito = 'B'
        situacao = 'Aprovado!'
    } else if (media >= 6 && media <= 7.5){
        conceito = 'C'
        situacao = 'Aprovado!'
    } else if (media >= 4 && media <= 6){
        conceito = 'D'
        situacao = 'Reprovado!'
    } else {
        conceito = 'E'
        situacao = 'Reprovado!'
    }

    return {media, conceito, situacao}

}

export function calcular_salrio_liquido(hora, valorPorHora){
    let salarioBruto = hora * valorPorHora
    let ir = 0
    let valorIr = 0
    let inss = 0
    let fgts = 11
    let sindicato = 3
    let totDesconto = 0
    let salarioLiq = 0
    
    if (salarioBruto <= 900){
        fgts = (fgts * salarioBruto)/100
        ir = 0
        valorIr = (ir * salarioBruto)/100
        inss = (10*salarioBruto)/100
        sindicato = (sindicato * salarioBruto)/100
        totDesconto = valorIr + inss + sindicato
        salarioLiq = salarioBruto
    } else if (salarioBruto<= 1500){
        fgts = (fgts * salarioBruto)/100
        ir = 5
        valorIr = (ir * salarioBruto)/100
        inss = (10*salarioBruto)/100
        sindicato = (sindicato * salarioBruto)/100
        totDesconto = valorIr + inss + sindicato
        salarioLiq = salarioBruto - totDesconto
    } else if (salarioBruto <= 2500){
        fgts = (fgts * salarioBruto)/100
        ir = 10
        valorIr = (ir * salarioBruto)/100
        inss = (10*salarioBruto)/100
        sindicato = (sindicato * salarioBruto)/100
        totDesconto = valorIr + inss + sindicato
        salarioLiq = salarioBruto - totDesconto
    } else {
        fgts = (fgts * salarioBruto)/100
        ir = 20
        valorIr = (ir * salarioBruto)/100
        inss = (10*salarioBruto)/100
        sindicato = (sindicato * salarioBruto)/100
        totDesconto = valorIr + inss + sindicato
        salarioLiq = salarioBruto - totDesconto
    }

    return {salarioBruto, ir, inss, sindicato, fgts, totDesconto, salarioLiq, valorIr}
}

export function calcular_rejuste(salario){
    let salInicial = salario
    let percentual = 0
    let aumento = 0
    let salFinal = 0

    if (salInicial <= 280){
        percentual = 20
        aumento = (percentual * salInicial)/100
        salFinal = salInicial + aumento
    } else if (salInicial >= 280 && salInicial <= 700){
        percentual = 15
        aumento = (percentual * salInicial)/100
        salFinal = salInicial + aumento
    } else if (salInicial >= 700 && salInicial <= 1500){
        percentual = 10
        aumento = (percentual * salInicial)/100
        salFinal = salInicial + aumento
    } else {
        percentual = 5
        aumento = (percentual * salInicial)/100
        salFinal = salInicial + aumento
    }
    return {salInicial, percentual, aumento, salFinal}
}

export function saudacao_por_turno (turno){
    if (turno == 'M'){
        console.log('Bom diaa!')
    } else if (turno == 'V'){
        console.log('Boa tardee!')
    } else if (turno == 'N'){
        console.log('Boa noitee!')
    } else {
        console.log('Turno invalido...')
    }
}

export function verificar_mais_barato(p1, p2, p3){
    if (p1 < p2 && p1 < p3){
        console.log(`O produto 1 e o mais barato`)
    } else if (p2 < p1 && p2 < p3){
        console.log(`O produto 2 e o mais barato`)
    } else {
        console.log(`O produto 3 e o mais barato`)
    }
}

export function verificar_stts_aluno (n1, n2){
    let media = (n1 + n2)/2
    
    if(media == 10){
        console.log(`Media: ${media} \n Situacao: Aprovado com distincao!`) 
    }else if (media >= 7){
        console.log(`Media: ${media} \n Situacao: Aprovado!`)
    }else{
        console.log(`Media: ${media} \n Situacao: Reprovado!`)
    }
}

export function verificar_letra(letra){
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        console.log(`A letra ${letra} e uma vogal...`)
    } else{
        console.log(`A letra ${letra} e uma consoante...`)
  
    }
}

export function verificar_sexo(genero_sexual){
    if (genero_sexual === "M" ){
        console.log(`${genero_sexual} - Masculino`)
    } else if(genero_sexual === "F"){
        console.log(`${genero_sexual} - Feminino`)
    } else{
        console.log('SExo invalido!')
    }
}

export function verificar_par_impar (n){
    if (n % 2 === 0){
        console.log(`O numero ${n} e par!`)
    }else{
        console.log(`O numero ${n} e ipar!`)

    }
}

export function get_string (msg){
    let texto = question(msg)
    return texto
}

export function get_number (msg){
    let numero = Number(question(msg))
    return numero
}