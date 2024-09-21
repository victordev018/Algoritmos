// imports

import { loadFile } from "./utils/fileUtils.js";
import { dataToObjectArray } from "./utils/vectorUtils.js";

function main(){
    let allDataAsVector = loadFile("./files/enem2014_nota_por_escola.txt.csv");
    const fields = [
        "ranking", "nome_instituicao", "municipio", "uf", "rede", 
        "permanencia", "nivel_socio_economico", "media_objetivas",
        "linguagens", "matematica", "ciencias_natureza", "humanas",
        "redacao"];
    const allDataAsVectorOfObjects = dataToObjectArray(allDataAsVector, fields);
    console.log(allDataAsVectorOfObjects);
}

main();