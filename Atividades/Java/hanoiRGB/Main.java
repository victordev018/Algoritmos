package Atividades.Java.hanoiRGB;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);

        // menu princil
        String menu = """
                --------> Hanói RGB <--------
                > 1 - nivel básico
                > 2 - nivel intermediário
                > 3 - nivel avançado
                > 4 - sair
                -----------------------------
                > opcao:   """;

        int option;
        do {

            // lendo opção do usuário
            clearScreen();
            System.out.print(menu);
            option = in.nextInt();

            // direcionando para a opção dejejada
            switch (option) {
                case 1 -> basicLevel(in);
                case 2 -> intermediateLevel(in);
            }

        } while (option != 4);

        in.close();
    }

    // jogo no nível intermediário
    private static void intermediateLevel(Scanner in){
        // cores para ganho de partida
        final String ANSI_RESET = "\u001B[0m";
        final String COLLOR_GREEN = "\u001B[32m";

        clearScreen();

        // gerando as torres
        Character[] towerR = new Character[9];
        Character[] towerG = new Character[9];
        Character[] towerB = new Character[9];

        // preenchendo o vetor da torre R
        fillVector(towerR, 4);
        fillVector(towerG, 5);
        fillVector(towerB, 3);

        Character[] copyOfTowerR = towerR.clone();
        Character[] copyOfTowerG= towerG.clone();
        Character[] copyOfTowerB = towerB.clone();

        int firstPlayerAttemps = startMatch(in, towerR, towerG, towerB, 1);
        int secondPlayerAttemps = startMatch(in, copyOfTowerR, copyOfTowerG, copyOfTowerB, 2);

        // definindo ganhador
        String winner = "empate, vocês são bom demais";

        if (firstPlayerAttemps > secondPlayerAttemps){
            winner = "jodador 2";
        }
        else if(firstPlayerAttemps < secondPlayerAttemps){
            winner = "jogador 1";
        }

        String result = "--------------| RESULTADOS |--------------\n"+
                        "> jogador 1: "+firstPlayerAttemps+" jogadas\n"+
                        "> jogador 2: "+secondPlayerAttemps+" jogadas\n"+
                        "----------------------------------\n"+
                        "> vencedor: "+COLLOR_GREEN + winner+ANSI_RESET+"\n";
        
        System.out.println("\n"+result);
        in.nextLine();
    }

    // jogo no nível básico
    private static void basicLevel(Scanner in) {

        // cores para ganho de partida
        final String ANSI_RESET = "\u001B[0m";
        final String COLLOR_GREEN = "\u001B[32m";

        clearScreen();

        // gerando as torres
        Character[] towerR = new Character[9];
        Character[] towerG = new Character[9];
        Character[] towerB = new Character[9];

        // preenchendo o vetor da torre R
        fillVector(towerR, 9);
        Character[] copyOfTowerR = towerR.clone();

        int firstPlayerAttemps = startMatch(in, towerR, towerG, towerB, 1);
        int secondPlayerAttemps = startMatch(in, copyOfTowerR, new Character[9], new Character[9], 2);

        // definindo ganhador
        String winner = "empate, vocês são bom demais";

        if (firstPlayerAttemps > secondPlayerAttemps){
            winner = "jodador 2";
        }
        else if(firstPlayerAttemps < secondPlayerAttemps){
            winner = "jogador 1";
        }

        String result = "--------------| RESULTADOS |--------------\n"+
                        "> jogador 1: "+firstPlayerAttemps+" jogadas\n"+
                        "> jogador 2: "+secondPlayerAttemps+" jogadas\n"+
                        "----------------------------------\n"+
                        "> vencedor: "+COLLOR_GREEN + winner+ANSI_RESET+"\n";
        
        System.out.println("\n"+result);
        in.nextLine();

    }

    // método responsáel por começar e gerenciar a partida
    private static int startMatch(Scanner in, Character[] r, Character[] g, Character[] b, int currentPlayer) {

        // cores para ganho de partida
        final String ANSI_RESET = "\u001B[0m";
        final String COLLOR_GREEN = "\u001B[32m";

        clearScreen();
        System.out.println("-------> PARTIDA INICIADA <--------");
        System.out.println("         Jogador numero " + currentPlayer + "\n\n");
        in.nextLine();
        int numberOfPlays = 0;

        do {
            // exibindo torres
            showTowers(r, g, b);

            // recebendo entrada de movimentação a fazer
            System.out.print("\n> jogada n°: " + (numberOfPlays+1)+" ");
            var playOfTheMoment = in.nextLine();

            clearScreen();
            // verificando se o movimento for válido
            if (makeMove(playOfTheMoment, r, g, b)){
                // se for movido com perfeição
                numberOfPlays++;
                showTowers(r, g, b);
            }

        } while (!(towerOnlyHas(r, 'R') && towerOnlyHas(g, 'G') && towerOnlyHas(b, 'B')));
        System.out.println(COLLOR_GREEN+"\n AEEH Partida finalizada!"+ANSI_RESET);
        in.nextLine();
        return numberOfPlays;
    }

    // função que verifica se um dado vetor só possui elementos do seu tipo
    private static boolean towerOnlyHas(Character[] vector, Character character){
        for (Character c : vector){
            if (c != character && c != null){
                return false;
            }
        }
        return true;
    }

    // método responsável por realizar um movimento de disco nas torres
    private static boolean makeMove(String play, Character[] r, Character[] g, Character[] b){
        
        // cores para os erros
        final String COLLOR_RED = "\u001B[31m";
        final String ANSI_RESET = "\u001B[0m";

        // verificando se a quantidade de valores recebidos estão corretos
        if (play.length() != 2){
            System.out.println(COLLOR_RED+"ERRO o número mínimo de entradas é 2 (ex: 'rg'), para mover da torre r para g"+ANSI_RESET);
            return false;
        }

        // quebrando a string de indicação de movimento para saber a torre de saida e a torre de destino
        String[] fields = play.split("");
        Character[] originTower;
        Character[] destinyTower;

        // definindo torre origem e torre destino
        originTower = setTower(fields[0], r, g, b);
        destinyTower = setTower(fields[1], r, g, b);

        // verificando se os dois valores, origem e destino, são valores válidos (R,G,B)
        if (!validateOriginAndDestity(fields[0], fields[1])){
            System.out.println(COLLOR_RED+"ERRO valores '"+fields[0]+fields[1]+"' não são permitidos, somente (r,g,b)"+ANSI_RESET);
            return false;
        }

        // verificando se a origem e o destino são iguais
        if (fields[0].equals(fields[1])){
            System.out.println(COLLOR_RED+"ERRO a torre "+fields[0]+" não pode levar elemento para ela mesma!"+ANSI_RESET);
            return false;
        }

        // verificando se a torre de origem não possui elementos
        if (!hasElements(originTower)){
            System.out.println(COLLOR_RED+"ERRO a torre "+fields[0]+" não possui elementos!"+ANSI_RESET);
            return false;
        }

        // verificando se a torre destino não possui espaço
        if (!hasSpace(destinyTower)){
            System.out.println(COLLOR_RED+"ERRO a torre "+fields[1]+" não possui espaço!"+ANSI_RESET);
            return false;
        }

        // realizando movimento
        int indexOfLastElementOfTheOrigin = getIndexLastElement(originTower);
        int indexOfFirstElementEmpityOfTheDestination = getFirstIndexEmpity(destinyTower);

        destinyTower[indexOfFirstElementEmpityOfTheDestination] = originTower[indexOfLastElementOfTheOrigin];
        originTower[indexOfLastElementOfTheOrigin] = null;
        return true;
    }

    // método que valida se os valores de origem e destino são válidos
    private static boolean validateOriginAndDestity(String origin, String destity){
        return (origin.toUpperCase().equals("R") || origin.toUpperCase().equals("G") || origin.toUpperCase().equals("B"))
                && (destity.toUpperCase().equals("R") || destity.toUpperCase().equals("G") || destity.toUpperCase().equals("B"));
    }

    // método que retorna o index do primeiro elemento vazio em um dado vetor
    private static int getFirstIndexEmpity(Character[] vector){
        int index = vector.length - 1;
        for (int i = 0; i < vector.length; i++){
            if (vector[i] == null){
                index = i;
                break;
            } 
        }
        return index;
    }

    // método que retorna o index do último elemento de um dado vetor
    private static int getIndexLastElement(Character[] vector){
        int index = vector.length -1;
        for (int i = 0; i < vector.length; i++){
            if (vector[i] == null){
                index = i-1;
                break;
            } 
        }
        return index;
    }

    // método que verifica se uma dada torre ainda possui espaço
    private static boolean hasSpace(Character[] vector){
        for (Character c : vector){
            if (c == null) return true; 
        }
        return false;
    }

    // método que verifica se um vetor possui elementos
    private static boolean hasElements(Character[] vector){
        return vector[0] != null;
    }

    // método para preencher um vetor aleatoriamente com uma dada quantidade
    private static void fillVector(Character[] vector, int quantity) {
        // vetor de conteúdo para preenchemento
        Character[] possibleElements = new Character[] { 'R', 'G', 'B' };

        // preenchendo o vetor com elementos aleatórios dos possiveis elementos
        for (int i = 0; i < quantity; i++) {
            // index aleatório no intervalo do vetor de possiveis elementos
            int index = getRandomInRange(0, possibleElements.length - 1);
            vector[i] = possibleElements[index];
        }
    }

    // método que define uma das 3 torres baseada em uma letra
    private static Character[] setTower(String letter, Character[] r, Character[] g, Character[] b){
        if (letter.toLowerCase().equals("r")){
            return r;
        }
        else if (letter.toLowerCase().equals("g")){
            return g;
        }
        return b;
    }

    // método para retornar um valor aleatório dentro de um intervalo
    private static int getRandomInRange(int min, int max) {
        return (int) (Math.random() * (max - min + 1)) + min;
    }

    // método que exibe os elementos de cada torre(vetor)
    private static void showTowers(Character[] towerR, Character[] towerG, Character[] towerB) {

        // cores
        final String COLLOR_RED = "\u001B[31m";
        final String COLLOR_GREEN = "\u001B[32m";
        final String COLLOR_BLUE = "\u001B[34m";
        final String COLLOR_PURPLE = "\u001B[35m";
        final String ANSI_RESET = "\u001B[0m";

        // clearScreen();

        System.out.println("\n  ---------- TORRES ---------\n");
        System.out.println(COLLOR_RED + "    torre R" + ANSI_RESET + COLLOR_GREEN + "   torre G   " + ANSI_RESET
                + COLLOR_BLUE + "torre B" + ANSI_RESET);
        for (int i = towerR.length - 1; i >= 0; i--) {

            char r = towerR[i] == null ? ' ' : towerR[i];
            char g = towerG[i] == null ? ' ' : towerG[i];
            char b = towerB[i] == null ? ' ' : towerB[i];

            // adicionando cores
            String elementR = addCollor(r);
            String elementG = addCollor(g);
            String elementB = addCollor(b);

            System.out.print(COLLOR_PURPLE + (i + 1) + "      " + elementR + "         ");
            System.out.print(elementG + "         ");
            System.out.println(elementB);
        }
    }

    // método que adiciona a cor em uma letra
    private static String addCollor(Character c) {
        // cores
        final String COLLOR_RED = "\u001B[31m";
        final String COLLOR_GREEN = "\u001B[32m";
        final String COLLOR_BLUE = "\u001B[34m";
        final String ANSI_RESET = "\u001B[0m";

        if (c == 'R') {
            return COLLOR_RED + c + ANSI_RESET;
        } else if (c == 'B') {
            return COLLOR_BLUE + c + ANSI_RESET;
        }
        return COLLOR_GREEN + c + ANSI_RESET;
    }

    // método para limpar tela
    private static void clearScreen() {
        for (int i = 0; i < 50; i++) {
            System.out.println();
        }
    }
}
