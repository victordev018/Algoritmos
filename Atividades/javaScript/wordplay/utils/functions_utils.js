import {readFileSync} from 'fs';
import { print, get_text, clear_screen } from './io_utiuls.js';
import {upper_case} from "./string_utils.js"

// função que abre um arquivo e retorna um vetor com cada palavra
export function load_file(){
    clear_screen();
    try{
        const file = readFileSync("C://temp//words.txt", "utf-8");
        get_text("\n> arquivo carregado!\nPressione enter para voltar: ");
        return file;
    }
    catch(erro){
        print("Erro - invalid file");
    };
}

// função que conta as aparições de caracters em uma string
export function count_appearances(vetor_palavras, vetor_letras){
    let aparicoes = 0;
    for (let palavra of vetor_palavras){
        if (word_conatain_letter(palavra, vetor_letras)){
            aparicoes++;
        }
    }
    return aparicoes;
}

export function word_conatain_letter(word, vector_letter){
    for (let character of word){
        if (character_is_in(character, vector_letter)){
            return true;
        }
    }
    return false;
}

export function character_is_in(character, vector_letter){
    for (let letter of vector_letter){
        if (upper_case(letter) == upper_case(character)){
            return true;
        }
    }
    return false;
}