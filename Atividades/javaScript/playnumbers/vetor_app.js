// main

// imports
import { clear_screen, get_number, print, enter_to_go_back } from "./utils/utils.js";
import { initialize_numeric_vector, show_main_menu } from "./utils/vetor_funcionalidades.js";

function main() {

    let vector = [];
    
    while(true){
        clear_screen();
        // exibindo menu
        show_main_menu();
        let opcao = get_number("\n> Escolha uma opcao: ");
    
    
        // direcionando para o ambiente da escolha desejada
        switch (opcao) {
            case 1:
                // inicializar o vetor
                clear_screen();
                vector = initialize_numeric_vector();
                enter_to_go_back("\n> vetor criado com sucesso!\n> pressione enter para voltar: ");
                break;
            case 2: 
                
            case 16:
                clear_screen();
                print("saindo...")
                return
        }
    }
}

main();