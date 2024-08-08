const { strict } = require('assert');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){

    // quantidade de entradas
    const quantidade_entrada = parseInt(lines.shift());

    // entradas e processamento
    for (let c = 0; c < quantidade_entrada; c++){
         
        // entrada
        let entrada_atual = lines.shift();
        
        // criptografando
        entrada_atual = deslocar_tres_posicoes_direita(entrada_atual);
        entrada_atual = inverter_string(entrada_atual);
        entrada_atual = deslocar_uma_posicao_esquerda(entrada_atual);

        // saída de dados
        console.log(entrada_atual);
    }

}

function deslocar_uma_posicao_esquerda(texto){
    let metade_direita = Math.floor(texto.length / 2);
    let nova_string = "";

    for (let index in texto){
        if (index >= metade_direita){
            nova_string += intParaChar(charParaInt(texto[index]) - 1);
            continue;
        }
        nova_string += texto[index];
    }
    return nova_string;
}

function inverter_string(texto){
    let nova_string = "";
    for (let caractere of texto){
        nova_string = caractere +nova_string;
    }
    return nova_string;
}

function deslocar_tres_posicoes_direita(texto){
    let nova_string = "";
    
    for (let caractere of texto){
        if (eh_letra(caractere)){
            nova_string += intParaChar(charParaInt(caractere) + 3);
            continue;
        }
        nova_string += caractere;
    }

    return nova_string;
}

function eh_letra(caractere){
    return charParaInt(caractere) > 64 && charParaInt(caractere) < 91 || charParaInt(caractere) > 96 && charParaInt(caractere) < 123;
}

function charParaInt(caractere){
    return caractere.charCodeAt();
}

function intParaChar(codigo){
    return String.fromCharCode(codigo);
}

main();