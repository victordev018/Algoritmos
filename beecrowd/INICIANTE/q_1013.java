// Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido 
// da mensagem “eh o maior”. Utilize a fórmula:

// Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, 
// portanto é necessário para chegar no resultado esperado.

// Entrada
// O arquivo de entrada contém três valores inteiros.

// Saída
// Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

import java.util.Scanner;

public class q_1013 {

    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        int a, b, c;
        //entrada de daqdos
        a = in.nextInt();
        b = in.nextInt();
        c = in.nextInt();

        //descobrindo maior numero:
        int maior = a;

        if (b > maior){
            maior = b;
        }

        if (c > maior){
            maior = c;
        }

        System.out.printf("%d eh o maior%n", maior);

        in.close();
    }

}
