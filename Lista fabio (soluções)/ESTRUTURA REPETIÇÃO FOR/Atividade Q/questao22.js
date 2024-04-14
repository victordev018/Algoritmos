// Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
// nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
// numero de identificação e o peso do boi mais magro e do boi mais gordo.

import { get_number } from "./utils/io_utils.js"

function main(){
    console.log(">>>>>>>> BOIS <<<<<<<<<<<")
    let nFichas = get_number("\n> quantas fichas: ")
    let numIdentBoiGordo = 0
    let pesoBoiGordo = 0
    let numIdentBoiMagro = 0
    let pesoBoiMagro = 100000

    for (let c = 1; c <= nFichas; c++){
        console.log(`-- ${c}° Boi:`)
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

main()