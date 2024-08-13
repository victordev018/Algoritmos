import {readFileSync} from 'fs';
import { print, get_text, clear_screen } from './io_utiuls.js';

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

// função