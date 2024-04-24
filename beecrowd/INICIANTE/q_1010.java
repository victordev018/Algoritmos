// Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, 
// o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o 
// valor a ser pago.

// Entrada
// O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois 
// inteiros e um valor com 2 casas decimais.

// Saída
// A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após 
// os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

import java.util.Locale;
import java.util.Scanner;

public class q_1010 {
    
    public static void main(String[] args){
        Locale.setDefault(Locale.US);
        Scanner in = new Scanner(System.in);

        //primeira linha de entrada:
        int code1 = in.nextInt();
        int quantity1 = in.nextInt();
        double price1 = in.nextDouble();

        //segunda linha de entrada:
        int code2 = in.nextInt();
        int quantity2 = in.nextInt();
        double price2 = in.nextDouble();

        double total = (quantity1*price1) + (quantity2*price2);

        System.out.println("VALOR A PAGAR: R$ " + String.format("%.2f", total));

        in.close();
    }

}
