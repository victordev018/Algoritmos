// funções com as funcionalidades da aplicação

// imports
import { clear_screen, enter_to_go_back, get_number, get_size_vector, print } from "./utils.js";
import { create_vetor_automatically, create_vector_manually } from "./vetor_utils.js";

// menu principal de funções
export function show_main_menu(){
    const menu = `
    --------------------------> play numbers <--------------------------
    > 1  - inicializar vetor numerico
    > 2  - mostar todos os valores
    > 16 - Sair
    `;
    print(menu);
}

// menu de opções de inicialização de vetor
export function show_menu_initializer_vector(){
    const menu = `
    --------- inicializacao de vetor ---------
    > 1 - criar automaticamente
    > 2 - criar manualmente`;
    print(menu);
}

// opcao 1 -> inicializar vetor numérico
export function initialize_numeric_vector(){
    clear_screen();
    // exibindo opções de inicialização
    show_menu_initializer_vector();
    let opcao = get_number("\n> Escolha uma opcao: ");

    let vector = [];

    // direcionando para a opção escolhida
    switch (opcao) {
        case 1:
            clear_screen();
            vector = create_vetor_automatically();
            break;
        case 2:
            clear_screen();
            vector = create_vector_manually();
            break;
    }

    return vector;
}

export function show_elements_of_vector(vector){
    clear_screen();
    // verificando se o vetor passado possui conteúdo
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // exibindo valores
    print("\n> elementos do vetor: ")
    for (let element of vector){
        print(element);
    }
}