
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// bee 1024

public class Criptografia {

    public static void main(String[] args){

        Scanner in = new Scanner(System.in);

        int quantidadeEntradas = in.nextInt();

        List<String> listaEntradas = new ArrayList<>();

        // entrada e processamento de dados
        for (int i = 0; i <= quantidadeEntradas; i++){
            String entrada = in.nextLine();
            if (entrada.length() >= 1 && entrada.length() <= 1000){
                entrada = deslocarTresPosicoesDireita(entrada);
                entrada = inverterString(entrada);
                entrada = deslocarUmaPosicaoEsquerda(entrada);
                listaEntradas.add(entrada);
            }
        }

        // saida de dados
        for (String s : listaEntradas){
            System.out.println(s);
        }

        in.close();

    }

    public static String deslocarUmaPosicaoEsquerda(String texto){
        int indiceDePartida = (int) pegarIndiceDaMetade(texto);
        char caractereDePartida = texto.charAt(indiceDePartida);
        String novaString = "";

        for (int i = 0; i < texto.length(); i++){
            char caractereAtual = texto.charAt(i);
            if (i + 1 > indiceDePartida){
                char novoCaractere = intParaChar(charParaInt(caractereAtual) - 1);
                novaString += novoCaractere;
                continue;
            }
            novaString += caractereAtual;
        }
        return novaString;
    }

    public static String inverterString(String texto){
        String novaString = "";
        for (int i = 0; i < texto.length(); i++){
            novaString = texto.charAt(i) + novaString;
        }
        return novaString;
    }

    public static String deslocarTresPosicoesDireita(String texto){
        String novaString = "";
        for (int i = 0; i < texto.length(); i++){
            char caractereAtual = texto.charAt(i);
            if (ehLetramaiusculaOuMinuscula(caractereAtual)){
                char novoCaractere = intParaChar(charParaInt(texto.charAt(i)) + 3);
                novaString += novoCaractere;
                continue;
            }
            novaString += caractereAtual;
        }
        return novaString;
    }

    public static double pegarIndiceDaMetade(String texto){
        boolean ehPar = texto.length() % 2 == 0;
        if (ehPar){
            return texto.length() / 2;
        }

        return texto.length() / 2 + 0.5;
    }

    public static boolean ehLetramaiusculaOuMinuscula(char c){
        return (charParaInt(c) >= 65 && charParaInt(c) <= 90) || charParaInt(c) >= 97 && charParaInt(c) <= 122;
    }

    public static int charParaInt(char c){
        return (int) c;
    }

    public static char intParaChar(int i){
        return (char) i;
    }
}