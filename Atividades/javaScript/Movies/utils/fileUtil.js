// impors
import {readFileSync, writeFileSync} from "fs";

// funções úteis para manipulação de arquivos

export function loadFile(path){
    return readFileSync(path, "utf-8");
}