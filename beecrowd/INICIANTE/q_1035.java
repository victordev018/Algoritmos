// Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A,
// e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável
// A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

// Entrada
// Quatro números inteiros A, B, C e D.

// Saída
// Mostre a respectiva mensagem após a validação dos valores.

import java.util.Scanner;

public class q_1035 {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);

        // lendo os quatro valores
        int A, B, C, D;
        A = in.nextInt();
        B = in.nextInt();
        C = in.nextInt();
        D = in.nextInt();

        if (b_eh_maior_c(B, C) && d_eh_maior_a(D, A) && soma_cd_maior_soma_ab(A, B, C, D) && cd_eh_positivo(C, D) && a_eh_par(A)){
            System.out.println("Valores aceitos");
        }
        else{
            System.out.println("Valores nao aceitos");   
        }

        in.close();
    }

    public static boolean b_eh_maior_c(int B, int C){
        if (B > C){
            return true;
        }
        return false;
    }

    public static boolean d_eh_maior_a(int D,int  A){
        if (D > A){
            return true;
        }
        return false;
    }

    public static boolean soma_cd_maior_soma_ab(int A,int B,int C,int D){
        if ((C+D) > (A+B)){
            return true;
        }
        return false;
    }

    public static boolean cd_eh_positivo(int C,int D){
        if (C > 0 && D > 0){
            return true;
        }
        return false;
    }

    public static boolean a_eh_par(int A){
        if (A % 2 == 0){
            return true;
        }
        return false;
    }
}
