// imports

import { loadFile } from "./utils/fileUtils.js";

function main(){
    let datas = loadFile("./files/enem2014_nota_por_escola.txt.csv");
    console.log(datas.length / 13);
}

main();