// Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de
// horas trabalhadas e o seu nº de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$
// 40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
// Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N
// funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário
// líquido do funcionário.

import { get_number } from "./utils/io_utils.js"

function main(){
    console.log("\n--------- ARMAZENADOR DE SALARIO ----------")
    let nFuncionarios = get_number("> qunatos funcionarios: ")
    let contador = 1

    while (contador <= nFuncionarios){
        console.log("\n--------------------")
        console.log(`> ${contador}° funcionario:`)
        let cod = get_number("> cod: ")
        let numHorasTrabalho = get_number("> N° horas trabalhadas: ")
        let numDependentes = get_number("> N° dependentes: ")
        let salarioBruto = calcularSalarioBruto(numHorasTrabalho, numDependentes)
        let impostoInss = calcularImposto(salarioBruto, 8.5)
        let impostoIr = calcularImposto(salarioBruto, 5)
        let salarioLiquido = calcularSalarioLiquido(salarioBruto, impostoInss, impostoIr)

    const resultado = `\n
    |-------- FICHA SALARIO --------|
    |> cod: ${cod}
    |> sal Bruto: R$ ${salarioBruto .toFixed(2)}
    |> imposto INSS: R$ ${impostoInss .toFixed(2)}
    |> imposto Ir: R$ ${impostoIr .toFixed(2)}
    |> salario liquido: R$ ${salarioLiquido .toFixed(2)}
    `
        console.log(resultado)
        contador++
    }
}

function calcularSalarioLiquido(sal, inss, ir){
    return sal - (inss+ir)
}

function calcularImposto(sal, percent){
    return sal*percent/100
}

function calcularSalarioBruto(hora, dependente){
    return hora * 12.00 + dependente * 40.00
}

main()