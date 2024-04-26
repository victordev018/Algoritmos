// Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2)
// e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

// Entrada
// O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 
// e a segunda linha contém dois valores de ponto flutuante x2 y2.

// Saída
// Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.

import java.util.Scanner;
import java.util.Locale;

public class q_1015 {

    public static void main(String[] args){
        Locale.setDefault(Locale.US);
        Scanner in = new Scanner(System.in);

        // defininindo x e y dos pontos P e Q;
        double X1, Y1, X2, Y2;
        X1 = in.nextDouble();
        Y1 = in.nextDouble();

        X2 = in.nextDouble();
        Y2 = in.nextDouble();

        // calculando distãncia entre os pontos P e Q:
        double dif1 = (X2 - X1) * (X2 - X1);
        double dif2 = (Y2 - Y1) * (Y2 - Y1);
        double soma = dif1 + dif2;
        double distancia = Math.sqrt(soma);

        // saida de dados:
        System.out.printf("%.4f%n", distancia);


        in.close();
    }
}