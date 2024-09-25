// impors
import {readFileSync, writeFileSync} from "fs";
import { clearScreen, pressEnterToContinue } from "./ioUtils.js";
import { vectorToString } from "./vectorUtils.js";

// funções úteis para manipulação de arquivos

export function loadFile(path){
    return readFileSync(path, "utf-8");
}

export function wiriteFile(file, data){
    writeFileSync(file, data);
}

export function saveData(list){
    clearScreen();
    const data = vectorToString(list);
    wiriteFile("./filmes_registrados.txt", data);
    pressEnterToContinue("| dados salvos com sucesso!\n| pressione enter para voltar...");
}