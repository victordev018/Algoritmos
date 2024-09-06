package Atividades.Java.praticaRecursividade;

import java.util.Scanner;

public class VersionWhile {
    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);

        // menu
        String mainMenu = "\n> -------------- Menu principal ---------------- <"
                         +"\n> 1 - calcular fatorial de um numero n"
                         +"\n> 2 - Sequência Fibonacci de comprimento C"
                         +"\n> 3 - Sequência Simples de A até B"
                         +"\n> 4 - Calcular o Produto nas forma de somas sucessivas"
                         +"\n> 5 - Calcular Exponencial de N elevado a expoente E"
                         +"\n> 6 - Dado um intervalo A e B, calcular o somatório de \n      num Vetor de N Elementos Aleatórios."
                         +"\n> 7 - Contar Vogais e Consoantes de Frase"
                         +"\n> 8 - Sair"
                         +"\n> _______________________________________________"
                         +"\n> opcção: ";


        // lendo opção desejada
        System.out.print(mainMenu);
        int option = in.nextInt();

        while(option != 8){
            // direcioando para a opção desejada
            switch (option){
                case 1:
                    // fatorial
                    calculateFactorial(in);
                    break;
                case 2:
                    // fibonacci
                    sequenceFibonacci(in);
                    break;
                case 3:
                    // imorimir sequencia de A a B
                    printSequence(in); 
                    break;
                case 4:
                    // produto usando repetição e soma
                    productWithSum(in);
                    break;
                case 5:
                    // calculando exponencial de um valor N por um expoente E
                    calculateExponentiation(in);
                    break;
                case 6:
                    // somatório de elementos de um vetor de N eelemntos aleatórios dentro de um limite A e B
                    sumVectorRandom(in);
                    break;
                case 7:
                    // contar vogais e consoantes de frase
                    countVowelsAndConsonantes(in);
                    break;
                case 8:
                    return;
            }

            cleanScreen();
            // lendo opção desejada
            System.out.print(mainMenu);
            option = in.nextInt();
        }

        in.close();
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

    // método que calcular fatorial com while
    private static int calculateFactorialWithWilhe(int value){

        // casos de retorno imediato
        if (value == 0 || value == 1) return 1;
        
        int result = value;
        // int _value = value;
        while (value > 1) {
            value--;
            result *= value;
        }
        return  result;
    }

    // opção 2 -> calcular sequencia de fibonacci de tamanho c
    private static void sequenceFibonacci(Scanner in){
        // solicitando valor N a ser calculado
        System.out.print("\n> Insira o tamanho da sequencia de fibonacci: ");
        int size = in.nextInt();
        showSequenceFibonacciWithSize(size);
        pressEnterToGoBack("\npressione enter para voltar", in);
    }

    // método que exibe a sequencia de fibonacci com um tamanho delimitado
    private static void showSequenceFibonacciWithSize(int size){
        int firstValue = 0;
        int secondValue = 1;

        if (size >= 1){
            System.out.println("\n> elementos:");
            System.out.println(firstValue);
        }

        if (size >= 2){
            System.out.println(secondValue);
        }

        int loops = 2;
        while (loops < size){
            int currentValue = firstValue + secondValue;
            System.out.println(currentValue);
            firstValue = secondValue;
            secondValue = currentValue;
            loops++;
        }
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
        while(a <= b){
            System.out.println(a);
            a++;
        }
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
        double result = 0.0;
        int loops = 0;
        while (loops < num2) {
            result += num1;
            loops++;
        }
        return result;
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
        showElementsFromVector(numbersVect);

        // somando valores do vetor
        int sum = sumElementsFromVector(numbersVect);

        // exibindo valor
        System.out.println("\n> Soma: " + sum);
        pressEnterToGoBack("\n> pressione enter para voltar", in);
    }

    // método que gera um vetor numérico com um dado tamanho e um intervalo para os valors
    private static Integer[] generateVectorWithSiezeAndInterval(int size, int min, int max){
        Integer[] vector = new Integer[size];
        // for (int i = 0; i < size; i++){
        //     vector[i] = generateValueRadonInInveral(min, max);
        // }
        int loop = 0;
        while (loop < size){
            vector[loop] = generateValueRadonInInveral(min, max);
            loop++;
        }
        return vector;
    }

    // função que gera valores aleatórios dentro de um intervalo 
    private static int generateValueRadonInInveral(int min, int max){
        return (int) (Math.random() * (max - min + 1)) + min;
    }

    // função para realizar a operação de expoenenciação com um loop while
    private static int doExponentiation(int num1, int num2){
        int result = num1;
        int loops = 1;
        while(loops < num2){
            result *= num1;
            loops++;
        }
        return result;
    }

    // função que soma os elementos de um dado vetor numérico
    private static int sumElementsFromVector(Integer[] vecIntegers){
        int sum = 0;
        int loops = 0;
        while (loops < vecIntegers.length) {
            sum += vecIntegers[loops];
            loops++;
        }
        return sum;
    }

    // função que exibe os valores de um dado vetor
    private static void showElementsFromVector(Object[] vector){
        if (vector.length > 0){
            System.out.println("\n> Elementos:");
        }
        int loops = 0;
        while (loops < vector.length) {
            System.out.println(vector[loops]);
            loops++;
        }
    }

    // opção 7 -> contar vogais e consoantes de uma frase
    private static void countVowelsAndConsonantes(Scanner in){
        // solicitando frase a ser contada vogais e consoantes
        System.out.print("\n> insira a frase: ");
        in.nextLine();
        String phrase = in.nextLine();
        // contando vogais e consoantes
        int numVowels = countVowels(phrase);
        int numConsonants = countConsonants(phrase);
        // exibindo valores
        System.out.printf("%n> vogais: %d%n> consonates: %d", numVowels, numConsonants);
        pressEnterToGoBack("\n> pressione enter para voltar", in);
    }

    // função para contar consoantes em uma dada frase
    private static int countConsonants(String phrase){
        int quantity = 0;
        int loops = 0;
        while (loops < phrase.length()){
            // letra atual
            char currentChar = phrase.charAt(loops);
            if (isLetter(currentChar) && !isVowels(phrase.charAt(loops))){
                quantity++;
            }
            loops++;
        }
        return quantity;
    }

    // função que conta vogais em uma dada frase
    private static int countVowels(String phrase){
        int quantity = 0;
        int loops = 0;
        while (loops < phrase.length()){
            // letra atual
            char currentChar = phrase.charAt(loops);
            if (isLetter(currentChar) && isVowels(currentChar)){
                quantity++;
            }
            loops++;
        }
        return quantity;
    }

    // função que verifica se um dado caractere é uma vogal
    private static boolean isVowels(char character){
        // lista de vogais
        String[] vowels = new String[]{"a", "e", "i", "o", "u"};
        return vectorConatainElement(vowels, character);
    }

    // função que verifica se uma dado caracter é uma letra
    private static boolean isLetter(Character character){
        int code = (int) character;
        return code > 64 && code < 91 || code > 96 && code < 123;
    }

    // função que verifica se um dado vetor possui um dado elemento
    private static boolean vectorConatainElement(String[] vector, Character obj){
        int loops = 0;
        while (loops < vector.length){
            if (vector[loops].toLowerCase().equals(String.valueOf(obj).toLowerCase())) return true;
            loops++;
        }
        return false;
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