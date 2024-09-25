// imports
import { clearScreen, getNumberInRange, getPositiveNumber, getText, pressEnterToContinue, print } from "./ioUtils.js";
import { deleteElementWithId } from "./vectorUtils.js";

// funções de crud para os filmes

export function createMovie(list){

    clearScreen();
    // atributos de um filme: nome, ano, bilheteria e imdb
    print("\n|----------- dados filmes -----------");
    list.push({
        "id" : list.length + 1,
        "nome" : getText("|> nome: "),
        "ano" : getPositiveNumber("|> ano de lancamento: "),
        "bilheteria" : getText("|> arrecadacao: "),
        "imdb" : getNumberInRange("|> nota na IMDB: ", 0, 10)
    });

    pressEnterToContinue("\n| filme criado com sucesso!\n| Pressione enter para voltar...")
}

function showMovieById(list, id){

    const obj = list[id-1];

    print("\n------------------------------------");
    print("| id             : " + obj["id"]);
    print("| nome           : " + obj["nome"]);
    print("| ano lancamento : " + obj["ano"]);
    print("| alocaocao      : " + obj["bilheteria"]);
    print("| nota IMDB      : " + obj["imdb"]);
    print("------------------------------------");

}

export function showAllMovies(list){

    clearScreen();
    const quantityMovies = list.length;
    
    if (quantityMovies < 1){
        pressEnterToContinue("\n| Erro! a lista esta vazia...");
        return;
    }
    print("\n| ..... " + quantityMovies + " filmes encontradaos .....|");
    print("------------------------------------");
    
    for (let obj of list){
        print("| id             : " + obj["id"]);
        print("| nome           : " + obj["nome"]);
        print("| ano lancamento : " + obj["ano"]);
        print("| alocaocao      : " + obj["bilheteria"]);
        print("| nota IMDB      : " + obj["imdb"]);
        print("------------------------------------");
    }
}

export function updateMovie(list){

    clearScreen();
    const quantityMovies = list.length;
    
    if (quantityMovies < 1){
        pressEnterToContinue("\n| Erro! a lista esta vazia...");
        return;
    }

    // exibindo a lista de filmes
    showAllMovies(list);

    // pegando o id do filme com base no id informado
    const indexMovie = getNumberInRange("\n|> id do filme: ", 1, quantityMovies) - 1;
    clearScreen();

    print("\n| dados atuais do filme:\n")
    showMovieById(list, indexMovie+1);

    // atualizando os dados
    print("\n| insira os novos dados: ");
    list[indexMovie] = {
        "id" : list[indexMovie]["id"],
        "nome" : getText("|> nome: "),
        "ano" : getPositiveNumber("|> ano de lancamento: "),
        "bilheteria" : getText("|> arrecadacao: "),
        "imdb" : getNumberInRange("|> nota na IMDB: ", 0, 10)
    }

    pressEnterToContinue("| atualizado com sucesso!\n| Pressione enter para continuar...");

}

export function removeMovie(list){

    clearScreen();
    const quantityMovies = list.length;
    
    if (quantityMovies < 1){
        pressEnterToContinue("\n| Erro! a lista esta vazia...");
        return;
    }

    // exibindo todos os filmes
    showAllMovies(list);

    // deletando filme por id
    const id = getPositiveNumber("\n|> id do filme: ");

    list = deleteElementWithId(list, id);
    pressEnterToContinue("| filme removido com sucesso!\n| Pressione enter para voltar...");
    return list;
}

// função para preencher o vetor de filmes com os dados vindo de um outro vetor
export function fillVector(arrayData, fields){

    const arrayObjects = [];
    const steps = fields.length;

    for (let i = 0; i < arrayData.length; i += steps){
        let obj = {};
        for (let j = 0 ; j < steps; j++){
            obj[fields[j]] = arrayData[j+i];
        }
        arrayObjects.push(obj);
    }
    return arrayObjects;
}