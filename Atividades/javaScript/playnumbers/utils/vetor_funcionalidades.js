// funções com as funcionalidades da aplicação

// imports
import { clear_screen, get_number, print } from "./utils.js";
import { create_vetor_automatically } from "./vetor_utils.js";

// menu principal de funções
export function show_main_menu(){
    const menu = `
    --------------------------> play numbers <--------------------------
    > 1 - inicializar vetor numerico
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
            vector = create_vetor_automatically()
            break;
        case 2:
            // criar manualmente
            break;
    }

    return vector;
}