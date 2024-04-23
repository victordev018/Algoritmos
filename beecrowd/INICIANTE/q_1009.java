// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas 
// por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas 
// efetuadas, informar o total a receber no final do mês, com duas casas decimais.

// Entrada
// O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double)
//  com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas
//   por este vendedor, respectivamente.

// Saída
// Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

import java.io.IOException;
import java.util.Locale;
import java.util.Scanner;

public class q_1009 {

    public static void main(String[] args) throws IOException{
        Locale.setDefault(Locale.US);
        Scanner in = new Scanner(System.in);
        String nome = in.nextLine();
        double salFixo = in.nextDouble();
        double valVendas = in.nextDouble();
        double salFinal = salFixo + (0.15*valVendas);
        System.out.printf("TOTAL = R$ %.2f%n", salFinal);
        in.close();
    }
    
}
