import {readFileSync} from 'fs';
import { print, get_text, clear_screen } from './io_utils.js';
import {upper_case, charToInt, my_trim} from "./string_utils.js"

// função que recebe um vetor de palavras devolve um vetor de palavras palíndromas, caso haja na cestinha
export function get_word_palindrome(word_vector){
    const vector_palindrome = [];
    for (let word of word_vector){
        if (is_palindrome(my_trim(word))){
            vector_palindrome.push(word);
        }
    }
    return vector_palindrome;
}

// função que checa se uma dada palavra é palindroma, devolvendo true ou false
export function is_palindrome(word){
    return get_reverse(word) == word;
}

// função que recebe uma palavra e retorna o inverso desta palavra
export function get_reverse(word){
    let new_word = "";
    for (let letter of word){
        new_word = letter + new_word;
    }
    return new_word;
}

// função que printa na tela cada elemento de um dado vetor
export function show_elements_of_vector(vector){
    for (let element of vector){
        print(element);
    }
}

// função que exibe o menu inicial
export function show_menu(){
    return `
    ---------------------- wordplay ----------------------
    > 1 - carregar arquivo
    > 2 - mostrar palavras com mais de 20 caracteres
    > 3 - mostrar palavras sem a letra e
    > 4 - quantas palavras nao possuem letras proibidas
    > 5 - palavras que possuem pelo menos uma das letras
    > 6 - palavras que possui todas as letras informadas
    > 7 - palavras que aparecem em ordem alfabetica
    > 8 - palavras palindormes
    > 9 - fechar sistema
    \n> Ecolha uma opcao: `;
}

// função que retorna a quantidade de aparições de palavras que suas letra seguem ordem alfabética
export function count_word_alphabetical(word_vector){
    let appearances = 0;
    for (let word of word_vector){
        if (is_abecedarian(word)){
            appearances++;
        }
    }
    return appearances;
}

// função que verifica se uma dada palavra segue a ordem alfabética
export function is_abecedarian(word){
    let letter = word[0];
    for (let character of word){
        if (charToInt(upper_case(character)) < charToInt(upper_case(letter))){
            return false;
        }
        letter = character;
    }
    return true;
}

// função que abre um arquivo e retorna um vetor com cada palavra
export function load_file(){
    clear_screen();
    try{
        const path = "words.txt";
        const file = readFileSync(path, "utf-8");
        get_text("\n> arquivo carregado!\nPressione enter para voltar: ");
        return file;
    }
    catch(erro){
        print("Erro - arquivo inválidoS!");
    };
}

// função que conta as aparições de caracters em uma string
export function count_appearances(vetor_palavras, vetor_letras){
    let aparicoes = 0;
    for (let palavra of vetor_palavras){
        if (word_contain_letter(palavra, vetor_letras)){
            aparicoes++;
        }
    }
    return aparicoes;
}

// função que verifica se uma palavra contém alguma das letras que veio como parâmetro
export function word_contain_letter(word, vector_letter){
    for (let character of word){
        if (character_is_in(character, vector_letter)){
            return true;
        }
    }
    return false;
}

// função que verifica se um caracter está presente em um vetor de letras
export function character_is_in(character, vector_letter){
    for (let letter of vector_letter){
        if (upper_case(letter) == upper_case(character)){
            return true;
        }
    }
    return false;
}