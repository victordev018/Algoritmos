// funções para manipulação de vetores

// imports
import { get_text, get_random_number, clear_screen, print, get_track_number, get_number, load_file } from "./utils.js";
import { writeFileSync } from "fs";

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

// função alternativa my_map(), que recevbe uma coleçâo e uma função de transformação para cada um de seus elementos
export function my_map(collection, tranformer){
    const new_vector = [];

    for (let element of collection){
        new_vector.push(tranformer(element));
    }

    return new_vector;
}

// função alternativa my_redue(), que recebe uma coleção, uma função e um valor inicail de acumulador
export function my_reduce(collection, func, initial_value){
    let acc = initial_value;
    for (let element of collection){
        acc = func(element, acc);
    }
    return acc;
}

// função alternativa my_filter, que recebe uma lista e um predicado, que seria a regra de fultração, e retorna uma lista filtrada
export function my_filter(collection, predicate){
    const new_vector = [];
    for (let element of collection){
        if (predicate(element)){
            new_vector.push(element);
        }
    }
    return new_vector;
}

// função para criar um vetor numérico automaticamente com base em um tamanho, valor minimo e valor máximo
export function create_vetor_automatically() {
    clear_screen();
    const entries = get_text("\n> informe o tamanho, val minimo e val maximo (ex: 5 2 8): ");
    const vector_string = my_split(entries, " ");
    const vector_numbers = my_map(vector_string, (element) => parseInt(element));

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
    const vector_numbers = my_map(vector_string, (element) => parseInt(element));

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

// função para criar um vetor numérico a a partir de um arquivo
export function create_vector_of_file(){
    clear_screen();
    // solicitando nome do arquivo para o usuário
    try{
        const name_file = get_text("\n> informe o nome do arquivo: ");
        const file = load_file(name_file);
        let vector = get_vector_split_of_file(file, "\n");
        return my_map(vector, (element) => parseInt(element));
    } 
    catch(error){
        print("\n> arquivo não encontrado!");
        return
    }
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

// função que remove um elemento de um dado vetor por um dado indice
export function delete_by_index(vector, index){
    const new_vector = [];
    for (let _index in vector){
        if (vector[_index] != vector[index]){
            new_vector.push(vector[_index]);
        }
    }
    return new_vector;
}

// função que edita um valor de um vetor dado o vetor, indice do elemento a ser editado e novo valor
export function edit_by_index(vector, index, new_value){
    vector[index] = new_value;
    return vector;
}

// função parecida com o split, que retorna um vetor, dado um arquivo e o separador de elementos
export function get_vector_split_of_file(file, separator){
    file += "\n"
    const new_vector = [];
    let current_element = "";

    for (let character of file){
        if (character == separator){
            new_vector.push(current_element);
            current_element = "";
            continue;
        }
        current_element += character;
    }

    return new_vector;
}

// função que converte um dado vertor em uma string separando seus elementos por '\n'
export function vector_to_string(vector, separator){
    let new_string = "";
    for (let element of vector){
        new_string += element + separator
    }
    return new_string;
}

// função que escreve um dado conteúdo em um dado arquivo
export function write_content_in_file(file_name, content){
    writeFileSync(file_name, content);
}