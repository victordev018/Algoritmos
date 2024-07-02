// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
// número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e
// escreva:
// a) média de salário da população;
// b) média de número de filhos;
// c) percentual de pessoas com salário de até R$ 1.000,00. 

import { get_number } from "./utils/io_utils.js"

function main(){
    console.log("\n>>> PESQUISA PREFEITURA REGENERACAO <<<")
    let mediaSalaraioPopulacao = 0
    let mediaNumFilhos = 0 
    let numSal1000reais = 0
    let nEntrevistados = get_number("> N° entrevistados: ")
    let contador = 1

    while (contador <= nEntrevistados){  // para cada entrevistado será lido:
        console.log(`> ${contador}° entrevistado:`)
        let numFilho = get_number("- N° de filhos: ")  //quantidade de filhos
        let salario = get_number("- Salario: R$ ")  //salario
        mediaNumFilhos += numFilho   // acumulando quantidade de filhos população
        mediaSalaraioPopulacao += salario // acumulando salário população
        if (salario >= 1000){  // se o salário for maior ou igual a 1000 reais
            numSal1000reais += 1  // acumulando +1 pessoa, quando a condição
        }
        contador++
    }

    mediaSalaraioPopulacao /= nEntrevistados
    mediaNumFilhos /= nEntrevistados
    let percent = calcularPecentSalarioMaiorOuIgualAMIl(numSal1000reais, nEntrevistados)

    const resultado = `\n
    |--------- RESULTADOS PESQUISA ---------|
    |> media salarial da populacao: R$ ${mediaSalaraioPopulacao.toFixed(2)}
    |> media numero de filhos: ${mediaNumFilhos}
    |> % de pessoas com sal >= 1000: ${percent}%\n`

    console.log(resultado)
}

// função que retorna o percentil de pessoas com salários >= 1000 reais
function calcularPecentSalarioMaiorOuIgualAMIl(numSal1000, nEntrevistados){
    return Math.floor(numSal1000/nEntrevistados*100)
}

main()