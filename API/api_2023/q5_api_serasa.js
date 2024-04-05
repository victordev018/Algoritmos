import { print, get_number } from "./utils.js/io_utils.js"

function main(){
    //apresentação e entrada de dados:
    print("\n------- SCORES SERASA -------")
    print("informe valores entre 0 e 100")
    let a = get_number("Dados positivos: \n")
    let b = get_number("Dividas: \n")
    let c = get_number("Contrato credido: \n")

    //processamento
    let valor_score1 = calcular_valor_score1(a, b, c)
    let valor_score2 = calcular_valor_score2(a, b, c)

    let categoria_score1 = qual_categoria_score1(valor_score1)
    let categoria_score2 = qual_categoria_score2(valor_score2)

    //saida de dados:
    const resultado = `
    Score 1.0: ${valor_score1} - ${categoria_score1}
    Score 2.0: ${valor_score2} - ${categoria_score2}\n`

    print('\n------------ results -------------')
    print(resultado)
}

function qual_categoria_score2(value){
    if (value>=0 && value <= 300){
        return "Baixo"
    } else if (value >= 301 && value <= 500){
        return "Regular"
    } else if (value >= 501 && value <= 700){
        return "Bom"
    } else if (value >= 701){
        return "Muito Bom"
    }
}

function qual_categoria_score1(value){
    if (value >= 0 && value <= 400){
        return "Baixo"
    } else if (value<=600){
        return "Regular"
    } else if (value<= 800){
        return "Bom"
    } else{
        return "Muito Bom"
    }
}

function calcular_valor_score2(x, y, z){
    let score_x = (x *620)/100
    let score_y = (y *620)/100
    let score_z= (z *620)/100

    return score_x + score_y + score_z
}

function calcular_valor_score1(x, y, z){
    let score_x = (x *260)/100
    let score_y = (y *260)/100
    let score_z= (z *260)/100

    return score_x + score_y + score_z 
}

main()