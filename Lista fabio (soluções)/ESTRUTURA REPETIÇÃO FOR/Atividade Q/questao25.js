// Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos.
// Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:
// · 1, 2, 3 = voto para os respectivos candidatos;
// · 9 = voto nulo;
// · 0 = voto em branco;
// Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
// a) total de votos para cada candidato;
// b) total de votos nulos;
// c) total de votos em branco;
// d) quem venceu a eleição.

import { get_number } from "./utils/io_utils.js"

function main(){
    console.log('\n------- ELEICAO 2024 --------')
    console.log("> 1 - Lula \n> 2 - Bolsonaro \n> 3 - Ciro Gomes \n> 9 - Nulo \n> 0 - Branco")
    console.log("-------------------------------")

    let totVotosLula = 0
    let totVotosBolso = 0
    let totVotosCiro = 0
    let totVotosNulo = 0
    let totVotoBranco = 0
    let quemVenceu = ""

    let nEleitores = get_number("> quantidade de eletores: ")
    for (let i = 1 ; i <= nEleitores; i++){
        console.log(`\n> ${i}° eleitor:`)
        let voto = get_number("voto: ")
        if (voto == 1){
            totVotosLula++
        }
        else if (voto == 2){
            totVotosBolso++
        }
        else if(voto == 3){
            totVotosCiro++
        }
        else if(voto == 9){
            totVotosNulo++
        }
        else if(voto == 0){
            totVotoBranco++
        }
    }

    quemVenceu = apuradorDeVotos(totVotosLula, totVotosBolso, totVotosCiro)

    const resultado = `
    |---- RESULTADO ELEIÇÂO ----|
    |> Lula: ${totVotosLula} votos
    |> Bolso: ${totVotosBolso} votos
    |> Ciro: ${totVotosCiro} votos
    |> Votos Nulos: ${totVotosNulo}
    |> Votos Brancos: ${totVotoBranco}
    |> 
    |> Vencedor: ${quemVenceu} \n`

    console.log(resultado)
}   
// função para calcular quem foi o vencedor da eleição, vence quem tiver mais votos.
function apuradorDeVotos(lula, bolso, ciro){
    if (lula> bolso && lula > ciro){
        return "Lula"
    }
    else if (bolso > lula && bolso > ciro){
        return "Bolsonaro"
    }
    else{
        return "Ciro Gomes"
    }
}
main()