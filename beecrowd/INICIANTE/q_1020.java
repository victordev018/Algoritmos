// Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

// Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos
// de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas
// um exercício com objetivo de testar raciocínio matemático simples.

// Entrada
// O arquivo de entrada contém um valor inteiro.

// Saída
// Imprima a saída conforme exemplo fornecido.

import java.util.Scanner;

public class q_1020 {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        
        //lendo idade em dias
        int idadeDias = in.nextInt();
        
        //variáveis anos, meses e dias:
        int anos, meses, dias;
        anos = Math.floorDiv(idadeDias,365); // calculando quantidade de anos
        int resto = idadeDias - (anos*365);    // pegando o restante dos dias
        meses = Math.floorDiv(resto, 30);    // calculando quantidade de meses
        dias = idadeDias - (meses*30 + anos*365); // pegando os dias que restaram

        // saida:
        System.out.printf("%d ano(s)%n", anos);
        System.out.printf("%d mes(es)%n", meses);
        System.out.printf("%d dia(s)%n", dias);

        in.close();
    }
    
}
