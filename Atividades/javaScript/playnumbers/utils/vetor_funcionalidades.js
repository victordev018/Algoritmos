// funções com as funcionalidades da aplicação

// imports
import { clear_screen, get_number, get_size_vector, print } from "./utils.js";
import { create_vetor_automatically, create_vector_manually, reset_vector } from "./vetor_utils.js";

// menu principal de funções
export function show_main_menu(){
    const menu = `
    --------------------------> play numbers <--------------------------
    > 1  - inicializar vetor numerico
    > 2  - mostar todos os valores
    > 3  - resetar vetor
    > 4  - ver quantidade de elementos no vetor
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

// opção 2 -> mostrar elementos do vetor
export function show_elements_of_vector(vector, message){
    clear_screen();
    // verificando se o vetor passado possui conteúdo
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // exibindo valores
    print(message)
    let string_of_elements = "["
    for (let index in vector){
        if (index == get_size_vector(vector) -1){
            string_of_elements += ` ${vector[index]}`;
            break;
        }
        string_of_elements += ` ${vector[index]},`;
    }
    string_of_elements += " ]";
    print(string_of_elements);
}

// opção 3 -> resetar valores de um vetor
export function vector_reset(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    print("\n---------------> resetar vetor <---------------");
    const default_value = get_number("\n> informe o valor padrao para o vetor: ")
    vector = reset_vector(vector, default_value);
    show_elements_of_vector(vector, "\n> vetor pós modificacao: ")
    return vector;
}

// opção 4 -> ver quantidade de elementos em um dado vetor
export function show_quantity_elements_of_vector(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // exibindo vetor e quantidade
    show_elements_of_vector(vector, "\n> vetor atual:")
    print(`\n> quantidade de itens: ${get_size_vector(vector)}`)
}