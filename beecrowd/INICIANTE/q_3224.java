// Jon Marius gritou muito no recente show de Justin Bieber, e agora precisa ir ao médico por causa de sua dor de garganta. As instruções 
// do médico são para dizer "aaah". Infelizmente, os médicos às vezes precisam que Jon Marius diga “aaah” por um tempo, o que Jon Marius 
// nunca foi bom. Cada médico requer um certo nível de “aah” - alguns requerem “aaaaaah”, enquanto outros podem realmente diagnosticar sua 
// garganta com apenas um “h”. (Eles costumam diagnosticar erroneamente, mas isso está além do escopo deste problema.) Como Jon Marius não 
// quer ir ao médico e perder tempo, ele quer comparar quanto tempo consegue segurar o “aaah” com o requisitos do médico. (Afinal, quem quer 
// ser todo tipo “aaah” quando o médico quer que você diga “aaaaaah”?)

// A cada dia Jon Marius liga para um médico diferente e pergunta quanto tempo seu “aaah” deve durar. Descubra se Jon Marius perderia seu 
// tempo indo ao médico determinado.

// Entrada
// A entrada consiste em duas linhas. A primeira linha é o “aaah” que Jon Marius pode dizer naquele dia. A segunda linha é o “aah” que o 
// médico quer ouvir. Apenas 'a' e 'h' minúsculos serão usados na entrada, e cada linha conterá entre 0 e 999 'a's, inclusive, seguido por 
// um único' h '.

// Saída
// Envie “go” (vá, em inglês) se Jon Marius puder ir ao médico e "no” (não, em inglês) caso contrário.

import java.util.Scanner;

public class q_3224 {

    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        // data input
        String ahDoJon = in.nextLine();
        String ahDoMedico = in.nextLine();

        String resultado = verificarSeJonPodeIrAoMedico(ahDoJon, ahDoMedico);

        in.close();
    }
    
    // função que verifica se jon pode ir ao médico:
    public static String verificarSeJonPodeIrAoMedico(String jon, String med){
        String j = jon;
        String m = med;

        if (jon.equals(j.toLowerCase()) && med.equals(m.toLowerCase())){
            
        }
        return "no";
    }
}
