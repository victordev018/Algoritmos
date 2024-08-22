// funções com as funcionalidades da aplicação

// imports
import { clear_screen, get_number, get_size_vector, get_text, print } from "./utils.js";

import { create_vetor_automatically, create_vector_manually,my_split, replace_negatives_by_random, has_negative_in_collection, add_elements, has_element_in_vector, remove_appearences,
delete_by_index, edit_by_index, create_vector_of_file, vector_to_string, write_content_in_file,
my_map,
my_reduce,
my_filter}
from "./vetor_utils.js";

// menu principal de funções
export function show_main_menu(){
    const menu = `
    --------------------------> play numbers <--------------------------
    > 1  - inicializar vetor numerico
    > 2  - mostrar todos os valores
    > 3  - resetar vetor
    > 4  - ver quantidade de elementos no vetor
    > 5  - ver menor e maior valor com suas posicoes
    > 6  - somatorio dos valores do vetor
    > 7  - media dos valores
    > 8  - mostrar valores positivos e quantidade
    > 9  - mostrar valores negativos e quantidade
    > 10 - atualizar todos os valores por uma das regras
    > 11 - adicionar novos valores
    > 12 - remover itens por valor exato
    > 13 - remover item por indice
    > 14 - editar valor por posicao
    > 15 - salvar valores em um arquivo
    > 16 - Sair
    `;
    print(menu);
}

export function show_menu_update(){
    const menu = `
    --------------------> opcoes para atualizar <--------------------
    > 1  - multiplicar por um valor
    > 2  - elevar a um valor
    > 3  - reduzir a uma fracao
    > 4  - substituir negativos por valor aleatorio em uma faixa
    `;
    print(menu);
}

// menu de opções de inicialização de vetor
export function show_menu_initializer_vector(){
    const menu = `
    --------- inicializacao de vetor ---------
    > 1 - criar automaticamente
    > 2 - criar manualmente
    > 3 - ler de um arquivo`;
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
        case 3:
            clear_screen();
            vector = create_vector_of_file();
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
    vector = my_map(vector,(element) => element = default_value);
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
    const highest_value = my_reduce(vector, (element, acc) => element > acc ? element : acc, vector[0]);
    const lowest_value = my_reduce(vector, (element, acc) => element < acc ? element : acc, vector[0]);
    const index_of_highest = vector.indexOf(highest_value);
    const index_of_lowest = vector.indexOf(lowest_value);
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
    const sum = my_reduce(vector, (element, acc) => element + acc, 0);
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
    const sum = my_reduce(vector, (element, acc) => element + acc, 0);
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
    const vector_positives = my_filter(vector, element => element >= 0);
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
    const vector_negatives = my_filter(vector, element => element < 0);
    const quntity_negative = get_size_vector(vector_negatives);

    // exibindo valores
    show_elements_of_vector(vector_negatives, "\n> vetor dos valores negativos:");
    print(`\n> quantiade de valores positivos: ${quntity_negative}`);
}

// opção 10 -> abrir menu de de regras de atualizações 
export function update_values(vector){
    clear_screen();
    // exibindo menu
    show_menu_update();
    let opcao = get_number("\n> Escolha uma opcao: ")

    // direcionando para a opção escolhida
    switch (opcao) {
        case 1:
            // atualizar multiplicando
            vector = update_values_with_multiply(vector);
            break;
        case 2:
            // atualizar com exponenciação
            vector = update_values_with_exponentiation(vector);
            break;
        case 3:
            // atualizar com redução fracionária
            vector = update_values_with_fractionate(vector);
            break;
        case 4:
            // atualizar com substituição dos negativos por aleatórios em uma faixa
            vector = update_values_negatives_by_radom(vector);
            break;
    }

    return vector;
}

// opcão 10.1 -> multiplicar todos valores de uma dada coleção por um valor
function update_values_with_multiply(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // solicitando fator de multiplicação
    const multiplication_factor = get_number("\n> informe o fator de multiplicacao: ");
    
    // exibindo vetor antes de alteralo
    show_elements_of_vector(vector, "\n> vetor antes da modificação: ");

    // modificando o vetor
    vector = my_map(vector, element => element * multiplication_factor);

    // exibindo novo vetor
    show_elements_of_vector(vector, "\n> vetor pos modificacao:")
    return vector;
}

// opcao 10.2 -> exponenciar todos valores de uma dada coleção por um valor
function update_values_with_exponentiation(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // solicitando fator de multiplicação
    const exponentiation_value = get_number("\n> informe o fator de exponenciacao: ");
    
    // exibindo vetor antes de alteralo
    show_elements_of_vector(vector, "\n> vetor antes da modificação: ");

    // modificando o vetor
    vector = my_map(vector, element => Math.pow(element, exponentiation_value));

    // exibindo novo vetor
    show_elements_of_vector(vector, "\n> vetor pos modificacao:");
    return vector;
}

// opção 10.3 -> fracionar todos os valores de uma dada coleção por um valor
function update_values_with_fractionate(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // solicitando  fator de fracionamento
    const fractionate_value_string = get_text("\n> informe o fator fracionario (ex: 1/2): ");
    let fractionate_value_num = my_split(fractionate_value_string, "/");
    fractionate_value_num = my_map(fractionate_value_num, (element) => parseInt(element));
    const numerator = fractionate_value_num[0];
    const denominator = fractionate_value_num[1];

    // exibindo valores do vetor antes de modifica-lo
    show_elements_of_vector(vector, "\n> vetor antes da modificacao: ");

    // modificando valor
    vector = my_map(vector, element => element * numerator/denominator);

    // exibindo novo vetor
    show_elements_of_vector(vector, "\n> vetor pos modificacao:")
    return vector;
}

// opção 10.4 -> substituir negativos por valores aleatórios em uma faixa
function update_values_negatives_by_radom(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // verificando se a coleção possui valores negativos para substitui-los
    if (!has_negative_in_collection(vector)){
        print("\n> Não possui valores negativos no vetor para poder substituir!")
        return vector;
    }

    // solicitando faixa de valores
    const range_of_values_str = get_text("\n> informe a faixa de valores, min e max (ex: 1-5): ");
    let range_of_values_num = my_split(range_of_values_str, "-");
    range_of_values_num = my_map(range_of_values_num, (element) => parseInt(element));
    const min = range_of_values_num[0];
    const max = range_of_values_num[1];

    // exibindo vetor antes de modifica-lo
    show_elements_of_vector(vector, "\n> vetor antes da modificacao:");

    // modificando vetor
    vector = replace_negatives_by_random(vector, min, max);

    // exibindo vetor modificado
    show_elements_of_vector(vector, "\n> vetor pos modificacao:");
    return vector;

}

// opção 11 -> adicionar novos valores a um dado vetor
export function add_new_values(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // soliciatando quantiade de elementos para adicionar
    const quantity_values = get_text("\n> quantos novos valores deseja inserir? ");

    // exibindo vetor antes da modificação
    show_elements_of_vector(vector, "\n> vetor antes da insercao:");

    // inserindo novos valores no vetor
    vector = add_elements(quantity_values, vector);

    // exibindo vetor pós inserção de novos valores
    show_elements_of_vector(vector, "\n> vetor pos insercao:");

    return vector;
}

// opção 12 -> remover itens por valor exato
export function remove_item_per_value(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // exibindo vetor atual
    show_elements_of_vector(vector, "\n> vetor atual");

    // solicitando valor para
    const value_to_remove = get_number("\n> qual valor deseja remover do vetor: "); 

    // verificando se no vetor possui pelo menos uma aparição do dado valor de remoção
    if (!has_element_in_vector(vector, value_to_remove)){
        print("\n> não possue este valor no vetor!");
        return vector;
    }

    // removendo todas as aparições deste valor no vetor
    vector = remove_appearences(vector, value_to_remove);

    // exibindo vetor pós remoção
    show_elements_of_vector(vector, "\n> vetor pos remocao:")
    print("\n> valores removidos com sucesso!");
    return vector;
}

// opção 13 -> remover item por posição
export function remove_item_by_index(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // exibindo vetor atual
    show_elements_of_vector_with_index(vector, "\n> vetor atual");

    // solicitando indice do elemento a ser deletado
    const index_element_to_delete = get_number("\n> informe a posicao do item a ser deletado: ");

    // verificando se o dado index existe
    if (index_element_to_delete > get_size_vector(vector) -1){
        print("\n> não possui esta posicao no vetor!");
        return vector;
    }

    // deletando item do vetor
    vector = delete_by_index(vector, index_element_to_delete);

    // exibindo vetor pós deleção
    show_elements_of_vector(vector, "\n> vetor pos remocao:");
    print("\n> elemento deletado com sucesso:");
    return vector;
}

// opção 14 -> editar valor por posição
export function edit_value_per_position(vector){
    clear_screen();
    // verificando se o vetor passado possui elemento
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // exibindo vetor atual
    show_elements_of_vector_with_index(vector, "\n> vetor atual");

    // solicitando indice do elemento a ser editado
    const index_element_to_edit = get_number("\n> informe a posicao do item a ser deletado: ");

    // verificando se o dado index existe
    if (index_element_to_edit > get_size_vector(vector) -1){
        print("\n> não possui esta posicao no vetor!");
        return vector;
    }

    const new_value = get_number("\n> agora informe o novo valor: ");

    // deletando item do vetor
    vector = edit_by_index(vector, index_element_to_edit, new_value);

    // exibindo vetor pós deleção
    show_elements_of_vector(vector, "\n> vetor pos edicao:");
    print("\n> elemento editado com sucesso:");
    return vector;
}

// função para exibir valores de um dado vetor com seus indices
export function show_elements_of_vector_with_index(vector, message){
    // verificando se o vetor passado possui conteúdo
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    // exibindo valores com seus indices
    print(message + "\n");

    for (let index in vector){
        print(`posicao: ${index} -> valor: ${vector[index]}`);
    }
}

// função que escreve as informações de um dado vetor em um arquivo
export function write_vector_in_file(vector){
    clear_screen();
    // verificando se o vetor passado possui conteúdo
    if (get_size_vector(vector) < 1){
        print("\n> vetor vazio!");
        return;
    }

    const content_to_file = vector_to_string(vector, "\n");
    write_content_in_file("vetor.txt", content_to_file);
}
