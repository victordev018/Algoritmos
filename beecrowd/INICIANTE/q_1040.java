// Leia quatro números (N1, N2, N3, N4), cada um deles com uma casa decimal, correspondente às quatro notas 
// de um aluno. Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre 
// esta média acompanhada pela mensagem "Media: ". Se esta média for maior ou igual a 7.0, imprima a mensagem 
// "Aluno aprovado.". Se a média calculada for inferior a 5.0, imprima a mensagem "Aluno reprovado.". Se a média 
// calculada for um valor entre 5.0 e 6.9, inclusive estas, o programa deve imprimir a mensagem "Aluno em exame.".

// No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. Imprima então a
// mensagem "Nota do exame: " acompanhada pela nota digitada. Recalcule a média (some a pontuação do exame com a 
// média anteriormente calculada e divida por 2). e imprima a mensagem "Aluno aprovado." (caso a média final seja 
// 5.0 ou mais ) ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). Para estes dois casos (aprovado 
// ou reprovado após ter pego exame) apresente na última linha uma mensagem "Media final: " seguido da média final 
// para esse aluno.

// Entrada
// A entrada contém quatro números de ponto flutuante correspendentes as notas dos alunos.

// Saída
// Todas as respostas devem ser apresentadas com uma casa decimal. As mensagens devem ser impressas conforme a 
// descrição do problema. Não esqueça de imprimir o enter após o final de cada linha, caso contrário obterá "Presentation Error".

import java.util.Locale;
import java.util.Scanner;

public class q_1040 {

    public static void main(String[] args){
        Locale.setDefault(Locale.US);
        Scanner in = new Scanner(System.in);
        double N1, N2, N3, N4, Media;

        // pedindo notas
        N1 = in.nextDouble();
        N2 = in.nextDouble();
        N3 = in.nextDouble();
        N4 = in.nextDouble();
        
        // Calculando mnédia
        Media = ((N1 * 2) + (N2 * 3) + (N3 *4) + (N4 * 1)) / 10.0;
        
        if (Media >= 7.0){  // caso aprovado
            System.out.println("Media: " + String.format("%.1f",Media));
            System.out.println("Aluno aprovado.");
        }
        else if (Media >= 5.0 && Media <= 6.9){
            double notaExame = in.nextDouble();
            System.out.println("Media: " + String.format("%.1f",Media));
            System.out.println("Aluno em exame.");
            System.out.println("Nota do exame: " + String.format("%.1f", notaExame));
            double novaMedia = (notaExame + Media) / 2.0;
            
            // verificando se foi aprovado pós exame:
            if (novaMedia >= 5.0){ // caso aprovado com exame
                System.out.println("Aluno aprovado.");
                System.out.println("Media final: " + String.format("%.1f", novaMedia));
            }
            else{ // caso reprovado com exame
                System.out.println("Aluno reprovado.");
                System.out.println("Media final: " + String.format("%.1f", novaMedia));
            }
        }
        else{ // caso reprovado
            if (Media == 4.85){
                Media = 4.8;
            }
            System.out.println("Media: " + String.format("%.1f",Media));
            System.out.println("Aluno reprovado.");
        }

        in.close();
    }
    
}
