// Muitas pessoas ainda confundem quando se deve usar o "mas" ou "mais". De maneira simplificada, o "mas" 
// é usado para dar ideia de oposição e contrariedade, enquanto o "mais" é indicativo de quantidade e intensidade. 
// Você precisa fazer um programa que, dada a ideia que se quer transmitir, deve informar qual é a forma correta de escrever.

// Entrada
// A entrada consiste em uma palavra que representa a ideia que se quer transmitir. As ideias da entrada poderão ser: oposicao, 
// contrariedade, quantidade ou intensidade. Mas atenção, essas palavras podem ser dadas com letras maiúsculas e/ou minúsculas. 
// Veja os exemplos.

// Saída
// Seu programa deve mostrar a forma correta de se transmitir a ideia informada: com "mas" ou "mais".

import java.util.Scanner;

public class q_3468{
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);

        // solicitando palavra para contexto:
        String word = in.nextLine();

        // pegando a palavra adequda ao contexto
        String resp = palavraAdequada(word);

        //exibindo resultado:
        System.out.println(resp);

        in.close();
    }

    // função que devolve palavra adequada ao contexto:
    public static String palavraAdequada(String word){
        // verificando para as 4 possiveis entradas:

        // para as duas possibilidades de "mas":
        // o método equals(), compara strings;
        if (word.toLowerCase().equals("oposicao") || word.toLowerCase().equals("contrariedade") ){
            return "mas";
        }

        // qualquer outro caso, será para "mais":
        return "mais";
    }
}