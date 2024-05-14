// Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre 
// o valor da conta a pagar.

// Entrada
// O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

// Saída
// O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

import java.util.Locale;
import java.util.Scanner;

public class q_1038 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner in = new Scanner(System.in);

        int codeLanche = in.nextInt();
        int quantidade = in.nextInt();

        double value = calcularValorAPagar(codeLanche, quantidade);

        System.out.printf("Total: R$ %.2f%n" , value);

        in.close();
    }

    // funcção para calcular o valor a pagar:
    public static double calcularValorAPagar(int code, int qtd){
        // preçoes de cada l produto:
        double priceHotDog = 4.00;
        double priceXSalada = 4.50;
        double priceXBacon = 5.00;
        double priceTorrada = 2.00;
        double priceRefrigerante = 1.50;

        if (code == 1){
            return qtd * priceHotDog;
        }
        else if (code == 2){
            return qtd * priceXSalada;
        }
        else if (code == 3){
            return qtd * priceXBacon;
        }
        else if (code == 4){
            return qtd * priceTorrada;
        }
        else if (code == 5){
            return qtd * priceRefrigerante;
        }
        return 0.0;
    }
}