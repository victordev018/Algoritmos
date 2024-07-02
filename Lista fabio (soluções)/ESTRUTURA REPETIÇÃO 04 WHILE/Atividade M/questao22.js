// Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
// nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
// numero de identificação e o peso do boi mais magro e do boi mais gordo.

import { get_number } from "./utils/io_utils.js";

function main(){
    // solicitando a quantidade de bois a serem cadas
    let n_fichas = get_number("\n> informe a quantidade de bois: ");

    let contador = 1

    // dados sobre os bois
    let numIdentBoiGordo = 0
    let pesoBoiGordo = 0
    let numIdentBoiMagro = 0
    let pesoBoiMagro = 100000

    while (contador <= n_fichas){
        console.log(`-- ${contador}° Boi:`)
        let id = get_number("> Id: ")
        let peso = get_number("> peso: ")

        if (peso > pesoBoiGordo){ // se o peso do boi atual for mais pesado que o anterior
            pesoBoiGordo = peso   // o Boi gordo recebe o dados do boi atual
            numIdentBoiGordo = id
        }
        if (peso < pesoBoiMagro){  // se o peso do boi atual for menos pesado que o anterior
            pesoBoiMagro = peso    // o Boi magro recebe o dados do boi atual
            numIdentBoiMagro = id
        }

        contador++

    }
    const resultado = `
|-----------------------|
|> Boi Gordo:
|- Id: ${numIdentBoiGordo}
|- Peso: ${pesoBoiGordo} kg
|--- ---- --- --- --- --|
|> Boi Magro:
|- Id: ${numIdentBoiMagro}
|- Peso: ${pesoBoiMagro}\n`

console.log(resultado)
}

main();