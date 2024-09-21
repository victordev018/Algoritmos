// imports
import {readFileSync} from "fs";
import { mySplit } from "./stringUtils.js";

// funções úteis para arquivos

// função para ler um arquivo e devolver o conteúdo presente nele
export function loadFile(path){
    
    // carrega todos os caracters do arquivo
    const dataCharacters = readFileSync(path, "utf-8");
    // forma vetor com as palavras já formadas
    const vectorWithData = mySplit(dataCharacters, ";");
    return vectorWithData;
    
}