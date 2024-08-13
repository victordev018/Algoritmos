import {clear_screen, get_number, get_text, print} from "./utils/io_utiuls.js";
import { load_file } from "./utils/functions_utils.js";
import { get_size_word, pegar_vetor_split, has_letter, get_size_vector } from "./utils/string_utils.js";

function main(){

    // string com o menu
    const menu = `
    ------------------- wordplay -------------------
    > 1 - carregar arquivo
    > 2 - mostar palavras com mais de 20 caracteres
    > 3 - mostar palavras sem a letra e
    > 4 - fechar sistema`;

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
                return;
        }
    }
}

// função para mostar palavras que não possuem a letra e
function words_without_letter_e(file){
    clear_screen();
    if (file == null){
        print("\n> arquivo para leitura inválido!");
        print("\n> pressione enter para voltar: ");
        get_text();
        return;
    }

    print("\n> Palavras sem a letra e: \n")
    const vetor_palavras = pegar_vetor_split(file, "\n");
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
    const vetor_palavras = pegar_vetor_split(file, "\n");
    let contador_palavras_mais_20_caracteres = 0;
    for (let palavra of vetor_palavras){
        if (get_size_word(palavra) > 20){
            contador_palavras_mais_20_caracteres++;
            print(`> palavra ${contador_palavras_mais_20_caracteres}: ` + palavra);
        }
    }
    get_text("\n> pressione enter para voltar:")
}

main();