// Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. 
// A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. 
// As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 
// 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

// Saída
// Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, 
// conforme exemplo fornecido.

// Obs: Utilize ponto (.) para separar a parte decimal.

import java.util.Locale;
import java.util.Scanner;

public class q_1021 {
    
    public static void main(String[] args){
        Locale.setDefault(Locale.US);
        Scanner in = new Scanner(System.in);
        double valor = in.nextDouble();

        //declarando variáveis de qunatidades de cada cédula:
        double nota100, nota50, nota20, nota10, nota5, nota2; // notas
        double moeda1, moeda50, moeda25, moeda10, moeda5, moeda01;  // moedas
        double resto;


        // distribuindo o valor pra cada nota:
        nota100 = Math.floor(valor/100);
        resto = valor - (nota100*100);  //atualizando dinheiro restante
        nota50 = Math.floor(resto/ 50);
        resto -= nota50*50;  //atualizando resto
        nota20 = Math.floor(resto/ 20);
        resto -= nota20*20;  //atualizando resto
        nota10 = Math.floor(resto/ 10);
        resto -= nota10*10;  //atualizando resto
        nota5 = Math.floor(resto/5);
        resto -= nota5*5;   //atualizando resto
        nota2 = Math.floor(resto/2);
        resto -= (nota2*2);
        resto = Math.round(resto * 100.0)/100.0;
        
        // distribuindo em moedas:
        moeda1 = Math.floor(resto/1);
        resto -= moeda1 * 1;
        moeda50 = Math.floor(resto/0.5);
        resto -= moeda50 * 0.5;
        moeda25 = Math.floor(resto/0.25);
        resto -= moeda25 * 0.25;
        moeda10 = Math.floor(resto/0.10);
        resto -= moeda10 * 0.10;
        resto = Math.round(resto * 100.0)/100.0;
        moeda5 = Math.floor(resto/0.05);
        resto -= moeda5 * 0.05;
        resto = Math.round(resto * 100.0)/100.0;
        moeda01 = Math.floor(resto/0.01);
        
        // saida de dados:
        System.out.println("NOTAS:");
        System.out.printf("%.0f nota(s) de R$ 100.00%n", nota100);
        System.out.printf("%.0f nota(s) de R$ 50.00%n", nota50);
        System.out.printf("%.0f nota(s) de R$ 20.00%n", nota20);
        System.out.printf("%.0f nota(s) de R$ 10.00%n", nota10);
        System.out.printf("%.0f nota(s) de R$ 5.00%n", nota5);
        System.out.printf("%.0f nota(s) de R$ 2.00%n", nota2);

        System.out.println("MOEDAS:");
        System.out.printf("%.0f moeda(s) de R$ 1.00%n", moeda1);
        System.out.printf("%.0f moeda(s) de R$ 0.50%n", moeda50);
        System.out.printf("%.0f moeda(s) de R$ 0.25%n", moeda25);
        System.out.printf("%.0f moeda(s) de R$ 0.10%n", moeda10);
        System.out.printf("%.0f moeda(s) de R$ 0.05%n", moeda5);
        System.out.printf("%.0f moeda(s) de R$ 0.01%n", moeda01);

        in.close();
    }
}
