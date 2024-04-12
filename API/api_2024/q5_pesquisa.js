import { get_number, get_string, print } from "./utils/io_utils.js"
function main(){

    let opcao = 0
    let listaProdutos = ""
    let cont = 0
    let somaValorProdutos = 0
    while(opcao != 3){

        print("\n------- Mercadinho Jota --------")
        print("1 - incluir item \n2 - exibir lista \n3 - Sair")
        opcao = get_number("opcao: ")
        
        if(opcao == 1){
            cont++
            listaProdutos = inserirNovoProduto( cont, listaProdutos)
        } else if(opcao == 2){
            print("\n---- PESQUISA DE PRECOS ----")
            print(listaProdutos)  
            print("------------------------------")  
            print(`Valor total: R$ ${somaValorProdutos .toFixed(2)}`)   
        } else{
            print("saindo...")
        }

    }
}

function inserirNovoProduto (cont, listaProdutos){
    let item = get_string(`Item: `)
    let descricao = get_string(`Descricao (kg/l/u): `)
    let valor = get_number(`Valor R$: `)
    listaProdutos += `${cont} - ${item} (${descricao})\t\t R$ ${valor.toFixed(2)}\n`
    return listaProdutos
}

main()