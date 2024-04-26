// Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, 
// e informe-o expresso no formato horas:minutos:segundos.

// Entrada
// O arquivo de entrada contém um valor inteiro N.

// Saída
// Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme 
// exemplo fornecido.

import java.util.Scanner;

public class q_1019 {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);

        // pedindo tempo em segundos:
        int timeSecond = in.nextInt();

        // hoours, minutes e seconds:
        double hours, minutes, seconds;
        hours = Math.floor(timeSecond/3600);
        timeSecond -= hours * 3600;
        minutes = Math.floor(timeSecond/60);
        timeSecond -= minutes * 60;
        seconds = timeSecond;
        
        System.out.printf("%.0f:%.0f:%.0f%n", hours, minutes, seconds);

        in.close();
    }
    
}