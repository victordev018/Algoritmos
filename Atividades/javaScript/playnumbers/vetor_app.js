// main

// imports
import { clear_screen, get_number, print, enter_to_go_back } from "./utils/utils.js";

import { initialize_numeric_vector, show_main_menu, show_elements_of_vector, 
vector_reset, show_quantity_elements_of_vector, show_highest_and_lowest, 
show_sum_vector, show_average_vector, show_positive_numbers_of_collection,
show_negative_numbers_of_collection,
update_values, add_new_values} 
from "./utils/vetor_funcionalidades.js";

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
                vector = initialize_numeric_vector();
                enter_to_go_back("\n> vetor criado com sucesso!\n> pressione enter para voltar: ");
                break;
            case 2: 
                // mostar todos os valores do vetor
                clear_screen();
                show_elements_of_vector(vector, "\n> todos elementos do atual vetor");
                enter_to_go_back("\n> pressione enter para voltar: ");
                break;
            case 3:
                // resetar vetor com um valor padrão
                vector = vector_reset(vector);
                enter_to_go_back("\n> vetor resetado com sucesso\n> pressione enter para voltar: ");
                break;
            case 4:
                // ver quantidade de elementos em um vetor
                show_quantity_elements_of_vector(vector);
                enter_to_go_back("\n> pressione enter para voltar: ");
                break;
            case 5:
                // ver Menor e Maior valores e suas posições
                show_highest_and_lowest(vector);
                enter_to_go_back("\n> pressione enter para voltar: ");
                break;
            case 6:
                // somatório dos valores
                show_sum_vector(vector);
                enter_to_go_back("\n> pressione enter para voltar: ");
                break;
            case 7:
                // média dos valores
                show_average_vector(vector);
                enter_to_go_back("\n> pressione enter para voltar: ");
                break;
            case 8:
                // vostrar valores positivos e quantidade
                show_positive_numbers_of_collection(vector);
                enter_to_go_back("\n> pressione enter para voltar:");
                break;
            case 9:
                // mostrar valores negativos e suas quantidades
                show_negative_numbers_of_collection(vector);
                enter_to_go_back("\n> pressione enter para voltar:");
                break;
            case 10:
                // opções de atualização de valores do vetor
                vector = update_values(vector);
                enter_to_go_back("\n> valores atualizados com sucesso!\n> pressione enter para voltar:");
                break;
            case 11:
                // adcionar novos valores
                vector = add_new_values(vector);
                enter_to_go_back("\n> valores adicionados com sucesso!\n> pressione enter para voltar:");
                break;
            case 16:
                clear_screen();
                print("saindo...");
                return
        }
    }
}

main();