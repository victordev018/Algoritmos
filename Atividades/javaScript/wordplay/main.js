import {clear_screen, get_number, get_text, print} from "./utils/io_utils.js";
import { load_file, count_appearances, count_word_alphabetical, show_menu, get_word_palindrome, show_elements_of_vector } from "./utils/functions_utils.js";
import { get_size_word, get_vector_split, has_letter, get_size_vector, get_vector_of_text, uses_all_letters, my_trim} from "./utils/string_utils.js";

function main(){

    // string com o menu
    const menu = show_menu();

    // vetor de conteúdo do arquivo
    var file_content = null;

    while(true){
        
        clear_screen();
        let opcao = get_number(menu);

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
                has_all_letters(file_content);
                break;
            case 7:
                alphabetical_order(file_content);
                break;
            case 8:
                words_palindrome(file_content);
                break;
            case 9:
                print("Saindo...")
                return;
        }
    }
}

// função que mostra as palavras palíndormas(palavras com no qual o seu inverso é igual a ela mesmo)
function words_palindrome(file){
    clear_screen();
    if (file == null){
        print("\n> arquivo para leitura inválido!");
        get_text("\n> pressione enter para voltar:");
        return
    }

    const vetor_palavras = get_vector_split(file, "\n");
    const vetor_palavras_palindromes = get_word_palindrome(vetor_palavras);

    if (get_size_vector(vetor_palavras_palindromes) > 0){
        const quantidade_palavras_palindromas = get_size_vector(vetor_palavras_palindromes);
        const quantidade_total_palavras = get_size_vector(vetor_palavras);
        const percent = (quantidade_palavras_palindromas / quantidade_total_palavras) * 100;
        print("\n> palavras palindromas: ")
        show_elements_of_vector(vetor_palavras_palindromes);
        print(`\n> quantidade de palavras: ${quantidade_palavras_palindromas}`);
        print(`\n> porcentagem de palavras: ${percent.toFixed(2)} %`);
        get_text("\n> pressione enter para voltar:");
    }
    else{
        print("\n> o arquivo não possui palavras palindromss ._.")
        get_text("\n> pressione enter para voltar:");
    }
}

// função que mostra a quantidade de aparições de palavras que seguem a ordem alfabética
function alphabetical_order(file){
    clear_screen();
    if (file == null){
        print("\n> arquivo para leitura inválido!");
        get_text("\n> pressione enter para voltar:");
        return;
    }

    const vetor_palavras = get_vector_split(file, "\n");
    const aparicoes_palavras_ordem_alfabetica = count_word_alphabetical(vetor_palavras);
    const percent = (aparicoes_palavras_ordem_alfabetica/get_size_vector(vetor_palavras)) * 100;
    print(`\n> quantidade de palavras que suas letras seguem ordem alfabetica: ${aparicoes_palavras_ordem_alfabetica}`);
    print(`\n> porcentagem das mesmas: ${percent.toFixed(1)} %`);
    get_text("\n> pressione enter para voltar: ");
}

// função que mostra a quantidade de palavras que aparecem todas as letras informadas
function has_all_letters(file){
    clear_screen();
    if (file == null){
        print("\n> arquivo para leitura inválido!");
        get_text("\n> pressione enter para voltar:");
        return;
    }

    const letras_informadas = get_text("\n> Iforme a sequencia de letras (ex: abeis): ");
    const vetor_letras_informadas = get_vector_of_text(letras_informadas);
    const vetor_palavras = get_vector_split(file, "\n");
    const aparicoes_letras_nas_palavras = uses_all_letters(vetor_palavras, vetor_letras_informadas);
    const percent = (aparicoes_letras_nas_palavras / get_size_vector(vetor_palavras)) * 100; 
    print(`\n> quantidade de palavras que contem as letras informadas: ${aparicoes_letras_nas_palavras}`);
    print(`\n> porcentagem das palavras que contem as letras: ${percent.toFixed(1)} %`);
    get_text("\n> pressione enter para voltar: ");
}

// função que mostra a quantidade de palavras que possui as letras informadas
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
    print(`\n> quantidade de palavras que contem todas as letras informadas: ${aparicoes_letras_nas_palavras}`);
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

// função para mostrar palavras que não possuem a letra 'e'
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
        const tamanho_palavra = get_size_word(my_trim(palavra));
        if (tamanho_palavra > 20){
            contador_palavras_mais_20_caracteres++;
            print(`> palavra ${contador_palavras_mais_20_caracteres} -> tamanho(${tamanho_palavra}): ` + palavra);
        }
    }
    get_text("\n> pressione enter para voltar:")
}

main();