import java.util.Scanner;

public class PesquisaFamiliar{
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);

        System.out.print("> quantidade de familias: ");
        Integer numFamilias = in.nextInt();

        Double mediaSalarioFamilias = 0.0;
        Double porcentagemFamilias = 0.0;
        Double mediaFilhosFamilias = 0.0;

        for (int i = 0; i < numFamilias; i++){
            System.out.print("\n> Renda familiar: ");
            Double rendaFamilia = in.nextDouble();
            System.out.print("> Número de filhos: ");
            Integer numFilhos = in.nextInt();

            // computando dados
            mediaSalarioFamilias += rendaFamilia;
            mediaFilhosFamilias += numFilhos;

            if (rendaFamilia > 1000.0){
                porcentagemFamilias++;
            }
        }

        mediaSalarioFamilias /= numFamilias;
        mediaFilhosFamilias /= numFamilias;
        porcentagemFamilias /= numFamilias * 100.0;

        // saida de dados
        System.out.println("> media salários: R$ " + mediaSalarioFamilias);
        System.out.println("> media filhos: " + mediaFilhosFamilias);
        System.out.println("> Percentual de familias renda: " + porcentagemFamilias + "%");

        in.close();
    }
}