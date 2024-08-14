import {clear_screen, get_number, get_text, print} from "./utils/io_utiuls.js";
import { load_file, count_appearances } from "./utils/functions_utils.js";
import { get_size_word, get_vector_split, has_letter, get_size_vector, get_vector_of_text } from "./utils/string_utils.js";

function main(){

    // string com o menu
    const menu = `
    ---------------------- wordplay ----------------------
    > 1 - carregar arquivo
    > 2 - mostar palavras com mais de 20 caracteres
    > 3 - mostar palavras sem a letra e
    > 4 - quantas palavras não possuem letras proibidas
    > 5 - quantas palavras possuem uma sequencia de letras
    > 6 - fechar sistema`;

    // vetor de conteúdo do arquivo
    var file_content = null;

    while(true){
        
        clear_screen();
        print(menu);
        let opcao = get_number("\n> Ecolha uma opcao: ");

        switch (opcao){
            case 1:
                file_content = load_file();
                break;
            case 2:
                show_words_20_characters(file_content);
                break;
            case 3:
                words_without_letter_e(file_content);
                break;
            case 4:
                prohibited_lyrics(file_content);
                break;
            case 5:
                has_letters(file_content);
                break;
            case 6:
                return;
        }
    }
}

// funç~qo que mostra a quantidade de palavras que possui as letras informadas
function has_letters(file){
    clear_screen();
    if (file == null){
        print("\n> arquivo para leitura inválido!");
        get_text("\n> pressione enter para voltar:");
        return;
    }

    const letras_informadas = get_text("\n> Iforme a sequencia de letras (ex: abeis): ");
    const vetor_letras_informadas = get_vector_of_text(letras_informadas);
    const vetor_palavras = get_vector_split(file, "\n");
    const aparicoes_letras_nas_palavras = count_appearances(vetor_palavras, vetor_letras_informadas);
    const percent = (aparicoes_letras_nas_palavras / get_size_vector(vetor_palavras)) * 100; 
    print(`\n> quantidade de palavras que contem as letras informadas: ${aparicoes_letras_nas_palavras}`);
    print(`\n> porcentagem das palavras que contem as letras: ${percent.toFixed(1)} %`);
    get_text("\n> pressione enter para voltar: ");
}

// função que mostra a quantidade de palavavras que não possui as letras proibidas
function prohibited_lyrics(file){
    clear_screen();
    if (file == null){
        print("\n arquivo para leitura inválido!");
        get_text("> pressione enter para voltar:");
        return;
    }

    const letras_proibidas = get_text("\n> Informe a sequencia de letras (ex: abeis): ");
    const vetor_letras_proibidas = get_vector_of_text(letras_proibidas);
    const vetor_palavras = get_vector_split(file, "\n");
    const aparicoes_letras_proibidas = count_appearances(vetor_palavras, vetor_letras_proibidas);
    const quantidade_total_palavras = get_size_vector(vetor_palavras);
    const quantidade_palavras_que_nao_tem_letra_proibida = quantidade_total_palavras - aparicoes_letras_proibidas;
    const percent = (quantidade_palavras_que_nao_tem_letra_proibida / quantidade_total_palavras) * 100;
    print(`\n> quantidade de palavras que nao contem as letras proibidas: ${quantidade_palavras_que_nao_tem_letra_proibida}`);
    print(`\n> porcentagem de palavras que não contem: ${percent.toFixed(1)} %`);
    get_text("\n> pressione enter para voltar: ");
}

// função para mostar palavras que não possuem a letra e
function words_without_letter_e(file){
    clear_screen();
    if (file == null){
        print("\n> arquivo para leitura inválido!");
        get_text("> pressione enter para voltar:");
        return;
    }

    print("\n> Palavras sem a letra e: \n");
    const vetor_palavras = get_vector_split(file, "\n");
    let contador_palavras_sem_letra_e = 0;
    for (let palavra of vetor_palavras){
        if (!has_letter(palavra, 'e')){
            contador_palavras_sem_letra_e++;
            print(`> palavra ${contador_palavras_sem_letra_e}: `+ palavra);
        }
    }
    const percent = (contador_palavras_sem_letra_e / get_size_vector(vetor_palavras)) * 100;
    print(`\n> porcentagem de palavras sem letra e: ${percent.toFixed(1)} %`);
    get_text("\n> pressione enter para voltar:");
}

// função para mostrar palavras com mais de 20 caracteres
function show_words_20_characters(file){
    clear_screen();
    if (file == null){
        print("\n> arquivo para leitura inválido!");
        print("\n> pressione enter para voltar: ");
        get_text();
        return;
    }

    print("\n> Palavras com mais de vinte caracteres: \n")
    const vetor_palavras = get_vector_split(file, "\n");
    let contador_palavras_mais_20_caracteres = 0;
    for (let palavra of vetor_palavras){
        if (get_size_word(palavra) > 20){
            contador_palavras_mais_20_caracteres++;
            const tamanho_palavra = get_size_word(palavra);
            print(`> palavra ${contador_palavras_mais_20_caracteres} -> tamanho(${tamanho_palavra}): ` + palavra);
        }
    }
    get_text("\n> pressione enter para voltar:")
}

main();