// imports

// funcionalidades gerais

// função que recebe um texto e devolve a área de estudo
export function setAreaByLetter(letter){

    if (letter.toUpperCase() == "L"){
        return "linguagens";
    }

    if (letter.toUpperCase() == "M"){
        return "matematica";
    }

    if (letter.toUpperCase() == "CN"){
        return "ciencias_natureza";
    }

    return "redacao";
}