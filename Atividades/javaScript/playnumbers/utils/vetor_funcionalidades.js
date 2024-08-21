// funções com as funcionalidades da aplicação

// imports
import { clear_screen, get_number, get_size_vector, print } from "./utils.js";

import { create_vetor_automatically, create_vector_manually, reset_vector, 
get_index_of_highest_value, get_index_of_lowest_value, sum_elements_of_collection, 
get_positives, 
get_negatives} from "./vetor_utils.js";

// menu principal de funções
export function show_main_menu(){
    const menu = `
    --------------------------> play numbers <--------------------------
    > 1  - inicializar vetor numerico
    > 2  - mostar todos os valores
    > 3  - resetar vetor
    > 4  - ver quantidade de elementos no vetor
    > 5  - ver menor e maior valor com suas posicoes
    > 6  - somatorio dos valores do vetor
    > 7  - media dos valores
    > 8  - mostrar valores positivos e quantidade
    > 9  - mostar valores negativos e quantidade
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

// opção 5 -> mostrar maior e menor valor juntamente com suas  posições
export function show_highest_and_lowest(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // exibindo vetor
    show_elements_of_vector(vector, "\n> vetor atual:");
    const index_of_highest = get_index_of_highest_value(vector);
    const index_of_lowest = get_index_of_lowest_value(vector);
    const highest_value = vector[index_of_highest];
    const lowest_value = vector[index_of_lowest];
    print(`\n> maior valor: ${highest_value} -> posicao: ${index_of_highest}`);
    print(`\n> menor valor: ${lowest_value} -> posicao: ${index_of_lowest}`);
}

// opção 6 -> mostar somatório dos valores do vetor
export function show_sum_vector(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // exibindo valores do vetor atual
    show_elements_of_vector(vector, "\n> vetor atual:")
    const sum = sum_elements_of_collection(vector);
    print(`\n> O somatório dos elementos = ${sum}`);
}

// opção 7 -> mostar media dos valores de um dado vetor
export function show_average_vector(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // exibindo valores do vetor
    show_elements_of_vector(vector, "\n> vetor atual:");
    const sum = sum_elements_of_collection(vector);
    const quantity = get_size_vector(vector);
    const average = sum / quantity;

    print(`\n> Media: ${average.toFixed(2)}`);
}

// opção 8 -> mostar valores positivos e quantiade
export function show_positive_numbers_of_collection(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // exibindo todos os valores valores do vetor
    show_elements_of_vector(vector, "\n> vetor completo:")

    // vetor dos elementos positivos
    const vector_positives = get_positives(vector);
    const quantity_positives = get_size_vector(vector_positives);

    // exibindo valores
    show_elements_of_vector(vector_positives, "\n> vetor dos valores positivos:");
    print(`\n> quantiade de valores positivos: ${quantity_positives}`);
}

// opção 9 -> mostar valores negativos e quantidade
export function show_negative_numbers_of_collection(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // exibindo todos os valores valores do vetor
    show_elements_of_vector(vector, "\n> vetor completo:")

    // vetor dos elementos positivos
    const vector_negatives = get_negatives(vector);
    const quntity_negative = get_size_vector(vector_negatives);

    // exibindo valores
    show_elements_of_vector(vector_negatives, "\n> vetor dos valores negativos:");
    print(`\n> quantiade de valores positivos: ${quntity_negative}`);
}