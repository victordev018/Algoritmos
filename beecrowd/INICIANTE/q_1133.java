// Escreva um programa que leia 2 valores X e Y e que imprima todos os valores entre eles cujo resto 
// da divisão dele por 5 for igual a 2 ou igual a 3.

// Entrada
// O arquivo de entrada contém 2 valores positivos inteiros quaisquer, não necessariamente em ordem crescente.

// Saída
// Imprima todos os valores conforme exemplo abaixo, sempre em ordem crescente.

import java.util.Scanner;

public class q_1133 {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        int X, Y;

        //lendo valores:
        X = in.nextInt();
        Y = in.nextInt();

        // verificando qual valor é maior:
        int menor = X;
        int maior = Y;
        if (Y < menor){
            menor = Y;
            maior = X;
        }

        //laço for para percorrer todos os valores do intervalo x-y: 
        for (int c = menor +1; c < maior; c++){
            if (c %  5 == 2 || c %  5 == 3){
                // if (c < 11){
                //     continue;
                // }
                System.out.println(c);
            }
        }
        in.close();
    }
}