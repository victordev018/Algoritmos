export function get_size(texto){
    let _tamanho = -1;
    for (let index of texto){
        _tamanho++;
    }
    return _tamanho;
}

export function pegar_vetor_split(file, final_texto){
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