package Atividades.Java.praticaRecursividade;

import java.util.Scanner;

public class VersionRecursive {
    public static void main(String[] args) {
        
        try (Scanner in = new Scanner(System.in)) {
            // menu
            String mainMenu = """
                                      > -------------- Menu principal ---------------- <
                                      > 1 - calcular fatorial de um numero n
                                      > 2 - Sequ\u00eancia Fibonacci de comprimento C
                                      > 3 - Sequ\u00eancia Simples de A at\u00e9 B
                                      > 4 - Calcular o Produto nas forma de somas sucessivas
                                      > 5 - Calcular Exponencial de N elevado a expoente E
                                      > 6 - Dado um intervalo A e B, calcular o somat\u00f3rio de
                                            num Vetor de N Elementos Aleat\u00f3rios.
                                      > 7 - Contar Vogais e Consoantes de Frase
                                      > 8 - Sair
                                      > _______________________________________________
                                      > opc\u00e7\u00e3o: """;
            
            
            // lendo opção desejada
            System.out.print(mainMenu);
            int option = in.nextInt();
            
            while(option != 8){
                // direcioando para a opção desejada
                switch (option){
                    case 1 -> // fatorial
                        calculateFactorial(in);
                    case 2 -> // fibonacci
                        sequenceFibonacci(in);
                    case 3 -> // imorimir sequencia de A a B
                        printSequence(in);
                    case 4 -> // produto usando repetição e soma
                        productWithSum(in);
                    case 5 -> // calculando exponencial de um valor N por um expoente E
                        calculateExponentiation(in);
                    case 6 -> // somatório de elementos de um vetor de N eelemntos aleatórios dentro de um limite A e B
                        sumVectorRandom(in);
                    case 7 -> // contar vogais e consoantes de frase
                        countVowelsAndConsonantes(in);
                    case 8 -> {
                        return;
                    }
                }
                
                cleanScreen();
                // lendo opção desejada
                System.out.print(mainMenu);
                option = in.nextInt();
            }
        }
    }

    // opção 1 -> cálculo de fatorial
    private static void calculateFactorial(Scanner in){

        // solicitando valor N a ser calculado
        System.out.print("\n> Insira o valor para calcular fatorial: ");
        int value = in.nextInt();
        int result = calculateFactorialWithWilhe(value);
        System.out.printf("Resultado: %d", result);
        pressEnterToGoBack("\npressione enter para voltar", in);
    }   

    // método que calcular fatorial com recursividade
    private static int calculateFactorialWithWilhe(int value){

        // casos de retorno imediato
        if (value == 0 || value == 1) return 1;
        
        return value * calculateFactorialWithWilhe(value-1);
    }

    // opção 2 -> calcular sequencia de fibonacci de tamanho c
    private static void sequenceFibonacci(Scanner in){
        // solicitando valor N a ser calculado
        System.out.print("\n> Insira o tamanho da sequencia de fibonacci: ");
        int size = in.nextInt();
        showSequenceFibonacciWithSize(size, in);
        pressEnterToGoBack("\npressione enter para voltar", in);
    }

    // método que exibe a sequencia de fibonacci com um tamanho delimitado
    private static void showSequenceFibonacciWithSize(int size, Scanner in){
        if (size > 0){
            System.out.println("\n> Elementos:");
            showFibonacciRecursive(0, 1, size);
        }
        pressEnterToGoBack("\n> pressione enter para voltar", in);
    }

    // função recursiva que exibe a sequência de fibonacci
    private static void showFibonacciRecursive(int firstValue, int secondValue, int size){
        
        // caso base -> se não resta mais elementos, termina
        if (size == 0){
            return;
        }

        // exibe o valor
        System.out.println(firstValue);

        // chama recursivamente para calcular o proximo valor
        showFibonacciRecursive(secondValue, firstValue+secondValue, size-1);
    }

    // opção 3 -> imprimir sequencia numerica de A a B
    private static void printSequence(Scanner in){
        // solicitando valores A e B
        System.out.print("\n> insira o intervalo (ex: 2-5): ");
        in.nextLine();
        String[] valuesString = in.nextLine().split("-");
        int a = Integer.parseInt(valuesString[0]);
        int b = Integer.parseInt(valuesString[1]);
        showSequenceAToB(a, b);
        pressEnterToGoBack("\n> pressione enter para voltar", in);
    }

    // função que imprime os valores entre um dado intervalo de A a B
    private static void showSequenceAToB(int a, int b){
        // caso base -> a ser igual a b, então ja exibiu tooos os valors
        if (a > b){
            return;
        }

        // exibindo valor
        System.out.println(a);

        // chama recursivamente para exibir o proximo valor
        showSequenceAToB(a+1, b);
    }

    // opção 4 > fazer produto (multiplicação) na forma de somas sucessivas
    private static void productWithSum(Scanner in){
        // solicitando dados do usuário
        System.out.print("\n> insira os valores para a operacao (ex: 2x5): ");
        in.nextLine();
        String[] valuesString = in.nextLine().split("x");
        double firstValue = Integer.parseInt(valuesString[0]);
        double secondValue = Integer.parseInt(valuesString[1]);
        double result = calculateWithSum(firstValue, secondValue);
        System.out.printf("%n> resultado: %.1f", result);
        pressEnterToGoBack("\n> pressione enter para voltar", in);
    }

    // função que realiza uma multiplicação com somas sucessivas
    private static double calculateWithSum(double num1, double num2){
        // caso base
        if (num1 == 0 || num2 == 0){
            return 0;
        }

        return num1 + calculateWithSum(num1, num2-1);
    }

    // opção 5 -> calcular expoente de um valor N por um expoente E
    private static void calculateExponentiation(Scanner in){
        // solicitando dados do usuário
        System.out.print("\n> informe o valor N e seu Expoente E (ex: 3xx2): ");
        in.nextLine();
        String[] valueStrings = in.nextLine().split("xx");
        int firstValue = Integer.parseInt(valueStrings[0]);
        int secondValue = Integer.parseInt(valueStrings[1]);

        int result = doExponentiation(firstValue, secondValue);
        System.out.printf("\n> Resultado: %d", result);
        pressEnterToGoBack("\n> pressione enter para voltar", in);
    }

    // função para realizar a operação de expoenenciação com uma recursiva
    private static int doExponentiation(int num1, int num2){
        // caso base
        if (num2 == 0){
            return 1;
        }

        return num1 * doExponentiation(num1, num2-1);
    }

    // opção 6 -> Dado um intervalo A e B, calcular o somatório de um Vetor de N Elementos Aleatórios.
    private static void sumVectorRandom(Scanner in){
        // solicitando dados necessários
        System.out.print("\n> tamanho do vetor: ");
        int sizeVector = in.nextInt();
        System.out.print("\n> intervalor de elementos (ex 2-8): ");
        in.nextLine();
        String[] intervalAsStrings = in.nextLine().split("-");

        // criando vetor de tamanho N e com valores aleatórios dentro do intervalo solicitado
        Integer[] numbersVect = generateVectorWithSiezeAndInterval(sizeVector,
        Integer.parseInt(intervalAsStrings[0]),
        Integer.parseInt(intervalAsStrings[1]));

        // exibindo os valores do vetor
        showElementsFromVector(numbersVect,0);

        // somando valores do vetor
        int sum = sumElementsFromVector(numbersVect, 0);

        // exibindo valor
        System.out.println("\n> Soma: " + sum);
        pressEnterToGoBack("\n> pressione enter para voltar", in);
    }

    // método que gera um vetor numérico com um dado tamanho e um intervalo para os valors
    private static Integer[] generateVectorWithSiezeAndInterval(int size, int min, int max){
        Integer[] vector = new Integer[size];
        // int loop = 0;
        // while (loop < size){
        //     vector[loop] = generateValueRadonInInveral(min, max);
        //     loop++;
        // }
        fillVectorRecursively(vector, 0, min, max);
        return vector;
    }

    // função que preenche um vetor com um valor mínimo e máximo de maneira recursiva
    private static void fillVectorRecursively(Integer[] vector, int index, int min, int max){
        // caso base
        if (index == vector.length){
            return;
        }

        // preenchendo vetor com valores randômicos e de maneira recursiva
        vector[index] = generateValueRadonInInveral(min, max);
        fillVectorRecursively(vector, index+1, min, max);
    }

    // função que gera valores aleatórios dentro de um intervalo
    private static int generateValueRadonInInveral(int min, int max){
        return (int) (Math.random() * (max - min + 1)) + min;
    }

    // função que soma os elementos de um dado vetor numérico
    private static int sumElementsFromVector(Integer[] vecIntegers ,int index){
        // caso base
        if (index == vecIntegers.length){
            return 0;
        }

        return vecIntegers[index] + sumElementsFromVector(vecIntegers, index+1);
    }

    // função que exibe os valores de um dado vetor
    private static void showElementsFromVector(Object[] vector, int index){
        // caso base
        if (index == vector.length){
            return;
        }

        System.out.println(vector[index]);

        showElementsFromVector(vector, index+1);
    }

    // opção 7 -> contar vogais e consoantes de uma frase
    private static void countVowelsAndConsonantes(Scanner in){
        // solicitando frase a ser contada vogais e consoantes
        System.out.print("\n> insira a frase: ");
        in.nextLine();
        String phrase = in.nextLine();
        // contando vogais e consoantes
        int numVowels = countVowels(phrase, 0);
        int numConsonants = countConsonants(phrase, 0);
        // exibindo valores
        System.out.printf("%n> vogais: %d%n> consonates: %d", numVowels, numConsonants);
        pressEnterToGoBack("\n> pressione enter para voltar", in);
    }

    // função para contar consoantes em uma dada frase
    private static int countConsonants(String phrase, int index){
        // caso base
        if (index >= phrase.length()){
            return 0;
        }

        // letra atual
        char currentChar = phrase.charAt(index);

        if (isLetter(currentChar) && !isVowels(currentChar)) {
            return 1 + countConsonants(phrase, index+1);
        }
        return countConsonants(phrase, index+1);
    }

    // função que conta vogais em uma dada frase
    private static int countVowels(String phrase, int index){
        // caso base
        if (index >= phrase.length()){
            return 0;
        }

        // letra atual
        Character currentChar = phrase.charAt(index);

        if (isLetter(currentChar) && isVowels(currentChar)){
            return 1 + countVowels(phrase, index+1);
        }
        return countVowels(phrase, index+1);
    }

    // função que verifica se um dado caractere é uma vogal
    private static boolean isVowels(char character){
        // lista de vogais
        String[] vowels = new String[]{"a", "e", "i", "o", "u"};
        return vectorConatainElement(vowels, character, 0);
    }

    // função que verifica se uma dado caracter é uma letra
    private static boolean isLetter(Character character){
        int code = (int) character;
        return code > 64 && code < 91 || code > 96 && code < 123;
    }

    // função que verifica se um dado vetor possui um dado elemento
    private static boolean vectorConatainElement(String[] vector, Character obj, int index){
        // casos base

        if (index == vector.length) return false;
        
        if (vector[index].toLowerCase().equals(String.valueOf(obj).toLowerCase())) return true;

        return vectorConatainElement(vector, obj, index+1);
    }

    // método para limpar tela do terminal
    private static void cleanScreen(){
        for (int i = 0; i < 50; i++) {
            System.out.println();
        }
    }

    // método para aguardar o usuário clicar para voltar
    private static void pressEnterToGoBack(String message, Scanner in){
        System.out.println(message);
        in.nextLine();
        in.nextLine();
    }
}