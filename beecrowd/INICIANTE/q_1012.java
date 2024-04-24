// Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
// a) a área do triângulo retângulo que tem A por base e C por altura.
// b) a área do círculo de raio C. (pi = 3.14159)
// c) a área do trapézio que tem A e B por bases e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.
// Entrada
// O arquivo de entrada contém três valores com um dígito após o ponto decimal.

// Saída
// O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, 
// sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser 
// apresentado com 3 dígitos após o ponto decimal.

import java.util.Locale;
import java.util.Scanner;

public class q_1012 {

    public static void main(String[] args){
        Locale.setDefault(Locale.US);
        Scanner in = new Scanner(System.in);

        //leitura de A, B e C, respectivamente:
        double pi = 3.14159;
        double A = in.nextDouble();
        double B = in.nextDouble();
        double C = in.nextDouble();

        //cáclulos:
        double areaTriangle = (A * C) / 2.0;
        double areaCirculo = pi * (C * C);
        double areaTrapezio = ((A + B)/2.0) * C;
        double areaQuadrado = B * B;
        double areaRetangulo = A * B;

        // saida de dados:
        System.out.println("TRIANGULO: " + String.format("%.3f", areaTriangle));
        System.out.println("CIRCULO: " + String.format("%.3f", areaCirculo));
        System.out.println("TRAPEZIO: " + String.format("%.3f", areaTrapezio));
        System.out.println("QUADRADO: " + String.format("%.3f", areaQuadrado));
        System.out.println("RETANGULO: " + String.format("%.3f", areaRetangulo));

        in.close();
    }
    
}
