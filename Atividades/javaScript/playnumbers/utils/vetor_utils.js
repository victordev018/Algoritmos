// funções para manipulação de vetores

import { get_text, get_random_number, clear_screen, print, get_track_number, get_number } from "./utils.js";

// função semelhante ao split, faz o mesmo papel, recebe uma string e retorna um vetor
export function my_split(text, separator){
    text += separator;
    const vector = [];
    let current_elemet = "";

    for (let char of text){
        if (char == separator){
            vector.push(current_elemet);
            current_elemet = "";
            continue;
        }
        current_elemet += char;
    }

    return vector;
}

// função para converter uma coleção de strings para uma de inteiros
export function collection_string_to_numbers(collection){
      const new_vector  = [];
      
      for (let element of collection) {
            new_vector.push(parseInt(element));
      }

      return new_vector;
}

// função para criar um vetor numérico automaticamente com base em um tamanho, valor minimo e valor máximo
export function create_vetor_automatically() {
    clear_screen();
    const entries = get_text("\n> informe o tamanho, val minimo e val maximo (ex: 5 2 8): ");
    const vector_string = my_split(entries, " ");
    const vector_numbers = collection_string_to_numbers(vector_string);

    const size = vector_numbers[0];
    const min = vector_numbers[1];
    const max = vector_numbers[2];

    const final_vector = [];

    for (let i = 0; i < size; i++ ){
        final_vector.push(get_random_number(min,max))
    }

    return final_vector;
}

// função para criar um vetor numérico manualmente com base em um tamanho, valor mínimo e valor máximo
export function create_vector_manually(){
    clear_screen();
    const entries = get_text("\n> informe o tamanho, val minimo e val maximo (ex: 5 2 8): ");
    const vector_string = my_split(entries, " ");
    const vector_numbers = collection_string_to_numbers(vector_string);

    const size = vector_numbers[0];
    const min = vector_numbers[1];
    const max = vector_numbers[2];

    const final_vector = [];

    for (let i = 0; i < size; i++) {
        final_vector.push(get_track_number(`\n> Informe o ${i+1}. valor dentro da faixa: `, min, max));
        clear_screen();
    }

    return final_vector;

}

// função que recebe uma coleção e um valor padrão, devolve a coleção resetada com o todos seus valores sendo o valor padrão dado
export function reset_vector(collection, default_value){
    for (let index in collection) {
        collection[index] = default_value;
    }

    return collection;
}

// função que recebe uma coleção de número e retorna o índice do maior valor
export function get_index_of_highest_value(collection) {
    let index_of_the_big = 0;

    for (let index in collection) {
        if ( collection[index] > collection[index_of_the_big]) {
            index_of_the_big = index;
        }
    }

    return index_of_the_big;
}

// função que recebe uma coleção de número e retorna o índice do menor valor
export function get_index_of_lowest_value(collection) {
    let index_of_the_lowest = 0;

    for (let index in collection) {
        if ( collection[index] < collection[index_of_the_lowest]) {
            index_of_the_lowest = index;
        }
    }

    return index_of_the_lowest;
}

// função para somar valores de uma dada coleção de números
export function sum_elements_of_collection(collection){
    let sum = 0;

    for (let element of collection) {
        sum += element;
    }

    return sum;
}

// função que recebe uma coleção e retorna uma nova coleção com os valores positivos
export function get_positives(collection) {
    const new_vector = [];

    for (let number of collection) {
        if (number >= 0) {
            new_vector.push(number);
        }
    }
    
    return new_vector; 
}

// função que recebe uma coleção e retorna uma nova coleção com os valores negativos
export function get_negatives(collection) {
    const new_vector = [];

    for (let number of collection) {
        if (number < 0) {
            new_vector.push(number);
        }
    }

    return new_vector;
}

// função que retorna uma coleção de valores de uma dada coleção multiplicados por um dado valor
export function multiply_elements(collection, value) {

    for (let index in collection) {
        collection[index] = collection[index]  * value;
    }

    return collection;
}

// função que retorna uma coleção de valores de uma dada coleção exponenciando por um dado valor
export function exponentiate_elements(collection, value) {

    for (let index in collection) {
        collection[index] = Math.pow(collection[index], value);
    }

    return collection;
}

// funçã que retorna umacoleção de valores de uma dada coleção fracionado por um dado valor
export function fractionate_elements(collection, value){
    for (let index in collection){
        collection[index] = collection[index] * value;
    }

    return collection;
}

// função que retorna uma coleção de valores de uma dada coleção substituindo negativos por valores aleatórios em uma faixa
export function replace_negatives_by_random(collection, min, max){

    // susbtituindo negativos por valor aleatório
    for (let index in collection){
        if (collection[index] < 0){
            collection[index] = get_random_number(min, max);
        }
    }

    return collection;
}

// função que verifica se um dado vetor possui algum elemento negativo
export function has_negative_in_collection(collection){
    for (let element of collection){
        if (element < 0){
            return true;
        }
    }
    return false;
} 

// funçao para adicionar uma dada quantidade de elementos em um dado vetor
export function add_elements(quantity, vector){
    print("\n> insira os valores\n");
    for (let i = 0; i < quantity; i++){
        vector.push(get_number(`${i+1}. valor: `));
    }
    return vector;
} 

// função que checa se em um dado vetor possui pelo menos uma aparição de um dado valor
export function has_element_in_vector(vector, element){
    for (let value of vector){
        if (value == element){
            return true;
        }
    }
    return false;
}

// função que remove todas as aparições de um dado valor em um dado vetor
export function remove_appearences(vector, value){
    const new_vector = [];
    for (let element of vector){
        if (element != value){
            new_vector.push(element);
        }
    }
    return new_vector;
}

// função que remove um dado elemento de um dado vetor por um dado indice
export function delete_by_index(vector, index){
    const new_vector = [];
    for (let _index in vector){
        if (vector[_index] != vector[index]){
            new_vector.push(vector[_index]);
        }
    }
    return new_vector;
}