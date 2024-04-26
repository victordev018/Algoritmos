// Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular 
// as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

// Entrada
// Leia três valores de ponto flutuante (double) A, B e C.

// Saída
// Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, 
// imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. 
// Imprima sempre o final de linha após cada mensagem.

import java.util.Scanner;
import java.util.Locale;

public class q_1036 {
    public static void main(String[] args){
        Locale.setDefault(Locale.US);
        Scanner in = new Scanner(System.in);

        // entrando com valores A, B e C
        double A = in.nextDouble();
        double B = in.nextDouble();
        double C = in.nextDouble();

        // calculando valor de delta:
        double delta = (B*B) - 4*A*C;

        if (delta < 0 || A <= 0){
            System.out.println("Impossivel calcular");
        }
        else{
            double R1 = (-B + (Math.sqrt(delta))) /(2.0*A);
            double R2 = (-B - (Math.sqrt(delta))) /(2.0*A);
            System.out.printf("R1 = %.5f%n", R1);
            System.out.printf("R2 = %.5f%n", R2);
        }

        in.close();
    }
    
}