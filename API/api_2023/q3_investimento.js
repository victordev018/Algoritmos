import { print, get_number, get_string } from "./utils.js/io_utils.js"

function main(){
    print("\n------------- INVESTIMENTO -------------")
    let objetivo = get_string("QUal o seu objetivo: ")
    let objetivo_money = get_number("Qual o valor para alcançar o objetivo? ")
    let salario = get_number("Quanto é o seu salário? ")
    let percente = get_number("quantos % do seu salario deseja investir (ate 30%) ? ")
    let juros = get_number("qual a taxa de juros mensal (0,1% a 1,0%)?  ")
    let valorFixoMensal = percente*salario/100
    let tempo_para_alcancar_objetivo = calcularTempoNecessario( valorFixoMensal, objetivo_money,juros )

    const resultado = `Podera ${objetivo} em ${tempo_para_alcancar_objetivo}` 

    print("\n---------------------------------\n" + resultado + "\n---------------------------------\n")

}

function calcularTempoNecessario( valMensal, objetivoFinal, juros){
    
    let qtd_meses = 1
    let qtd_anos = 0
    let saldo = valMensal

    while (saldo <= objetivoFinal){
        qtd_meses++
        if (qtd_meses>11){
            qtd_anos++
        }
        saldo += valMensal + (saldo*juros/100)
    }

    if (qtd_anos >= 1){
        return `${qtd_anos} anos e ${qtd_meses} meses`
    } else{
        return `${qtd_meses} meses`
    }
}

main()