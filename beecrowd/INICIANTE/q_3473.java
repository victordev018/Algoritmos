// Em um consultório médico, senhas são distribuídas entre os pacientes. Quando o médico chama um paciente pelo número da senha, 
// este alerta o próximo, para que fique na cadeira perto da porta. Agora ele quer que você o ajude nesse processo.

// Entrada
// A entrada consiste em vários casos de teste. Cada caso contém um valor inteiro N (1 ≤ N ≤ 100000), representando a senha que foi 
// chamada naquele momento.

// Saída
// Para cada caso de teste, imprima a senha do próximo a ser alertado.

import java.util.Scanner;

public class q_3473{
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);

        // entrada di numero:
        int number = in.nextInt();

        // verfificando se esta no intervalo:
        if (number >= 1 && number <= 100000){
            System.out.println(number+1);
        }

        in.close();
    }
}