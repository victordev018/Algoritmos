// Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor
// pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor
// lido e a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

// Saída
// Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o 
// exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa 
// presentará a mensagem: “Presentation Error”.

import java.util.Scanner;

public class q_1018 {

    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        int valor = in.nextInt();

        //declarando variáveis de qunatidades de cada cédula:
        int nota100, nota50, nota20, nota10, nota5, nota2, nota1, resto;


        // distribuindo o valor pra cada nota:
        nota100 = Math.floorDiv(valor, 100);
        resto = valor - (nota100*100);  //atualizando dinheiro restante
        nota50 = Math.floorDiv(resto, 50);
        resto -= nota50*50;  //atualizando resto
        nota20 = Math.floorDiv(resto, 20);
        resto -= nota20*20;  //atualizando resto
        nota10 = Math.floorDiv(resto, 10);
        resto -= nota10*10;  //atualizando resto
        nota5 = Math.floorDiv(resto,5);
        resto -= nota5*5;   //atualizando resto
        nota2 = Math.floorDiv(resto,2);
        resto -= nota2*2;
        nota1 = resto;

        //saida de dados:
        System.out.println(valor);
        System.out.println(nota100 + " nota(s) de R$ 100,00");
        System.out.println(nota50 + " nota(s) de R$ 50,00");
        System.out.println(nota20 + " nota(s) de R$ 20,00");
        System.out.println(nota10 + " nota(s) de R$ 10,00");
        System.out.println(nota5 + " nota(s) de R$ 5,00");
        System.out.println(nota2 + " nota(s) de R$ 2,00");
        System.out.println(nota1 + " nota(s) de R$ 1,00");

        in.close();
    }
    
}
