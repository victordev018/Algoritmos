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

// função alternativa map(), que recevbe uma coleçâo e uma função de transformação para cada um de seus elementos
export function map(collection, tranformer){
    const new_vector = [];

    for (let element of collection){
        new_vector.push(tranformer(element));
    }

    return new_vector;
}

// função para criar um vetor numérico automaticamente com base em um tamanho, valor minimo e valor máximo
export function create_vetor_automatically() {
    clear_screen();
    const entries = get_text("\n> informe o tamanho, val minimo e val maximo (ex: 5 2 8): ");
    const vector_string = my_split(entries, " ");
    const vector_numbers = map(vector_string, element => parseInt(element));

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
    const vector_numbers = map(vector_string, element => parseInt(element));

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