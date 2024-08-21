// funções para manipulação de vetores

import { get_text, get_random_number, clear_screen, print, get_track_number } from "./utils.js";

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