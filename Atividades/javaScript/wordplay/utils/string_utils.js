// função que retorna a quantidade de palavra que contém necessariamente todas as letras de um dado vetor
export function uses_all_letters(words_vector, letters_vector){
    let word_that_uses_all_letters = 0;
    for (let word of words_vector){
        if (contains_all(word, letters_vector)){
            word_that_uses_all_letters++;
        }
    }
    return word_that_uses_all_letters;
}

// função se uma dada palavra contém todas as letras de um dado vetor, retornando true ou false
export function contains_all(word, letters){
    const expected_quantity = get_size_vector(letters);
    let appearances = 0;
    for (let letter of word){
        if (letter_is_in(letter, letters)){
            appearances++;
        }
    }
    return appearances == expected_quantity;
}

// função que verifica se uma dada letra está presente em um dado conjunto de letras
export function letter_is_in(letter, vector_letters){
    for (let _letter of vector_letters){
        if (upper_case(_letter) == upper_case(letter)){
            return true;
        }
    }
    return false;
}

// função que retorna o tamanho de uma string
export function get_size_word(texto){
    let _tamanho = -1;
    for (let index of texto){
        _tamanho++;
    }
    return _tamanho;
}

// função que retorna um vetor dos elementos de uma dada string
export function get_vector_of_text(text){
    let vector = [];
    for (let element of text){
        vector.push(element);
    }
    return vector;
}

// função parecida com o split, que retorna um vetor, dado um arquivo e o separador de elementos
export function get_vector_split(file, final_texto){
    let vetor = [];
    let palavra = "";
    for (let letra of file){
        if (letra == final_texto){
            vetor.push(palavra);
            palavra = "";
            continue;
        }
        palavra += letra;
    }
    return vetor;
}

// função que verifica se um dado texto possui uma dada letra, retornando true ou false
export function has_letter(text, letter){
    for (let character of text){
        if (upper_case(character) == upper_case(letter)){
            return true;
        }
    }
    return false;
}

// função semelhante ao toUpperCase(), que retorna um dado texto em caixa alta
export function upper_case(text){
    let new_string = "";
    for (let character of text){
        if (is_letter(character)){
            let _code_character_upper_case = charToInt(character) - 32;
            let _current_character_upper_case = intToChar(_code_character_upper_case);
            new_string += _current_character_upper_case;
        }
    }
    return new_string;
}

// função que converte char para inteiro, retornando um codigo do caractere da tabela ASCC
export function charToInt(character){
    return character.charCodeAt();
}

// função que converte inteiro para char, retornando um caractere correspondente a um dado código da tabela ASCC
export function intToChar(code){
    return String.fromCharCode(code);
}

// função que verifica se um dado caractere é um letra, seja maiúscula ou minúscula
export function is_letter(letter){
            // letra maiúscula                                // ou minúscula
    return (charToInt(letter) > 64 && charToInt(letter) < 91) || (charToInt(letter) > 96 && charToInt(letter) < 123);
}

// função que retorna o tamanho de um dado vetor
export function get_size_vector(vector){
    let quantity_elements = 0;
    for (let word of vector){
        quantity_elements++;
    }
    return quantity_elements;
}