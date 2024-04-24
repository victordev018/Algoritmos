// Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos 
// seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Obviamente se o valor 
// não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

// O símbolo ( representa "maior que". Por exemplo:
// [0,25]  indica valores entre 0 e 25.0000, inclusive eles.
// (25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

// Entrada
// O arquivo de entrada contém um número com ponto flutuante qualquer.

// Saída
// A saída deve ser uma mensagem conforme exemplo abaixo.

import java.util.Locale;
import java.util.Scanner;

public class q_1037 {
    public static void main(String[] args){
        Locale.setDefault(Locale.US);
        Scanner in = new Scanner(System.in);
        
        // pedindo valor:
        double valor = in.nextDouble();

        System.out.println(procurarIntervalo(valor));

        in.close();
    }

    // função para procurar e devolver o intervalor:
    public static String procurarIntervalo(double v){
        if (v >= 0 && v <= 25.00){
            return "Intervalo [0,25]";
        }
        else if(v > 25.00 && v <= 50.00){
            return "Intervalo (25,50]";
        }
        else if (v > 50.00 && v <= 75.00){
            return "Intervalo (50,75]";
        }
        else if(v > 75.00 && v <= 100.00){
            return "Intervalo (75,100]";
        }
        return "Fora de intervalo";
    }
}

