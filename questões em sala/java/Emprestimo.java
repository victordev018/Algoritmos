import java.util.Scanner;

public class Emprestimo{
    public static void main(String[] args){

        Scanner in = new Scanner(System.in);

        // entrada de dados
        System.out.println("> informe o valor do empréstimo: ");
        Double valEmprestimo = in.nextDouble();
        System.out.println("> informe o valor do juros: ");
        Double valJuros = in.nextDouble();

        // variáveis da questão
        int numMeses = 0;
        double totValJuros = 0.0;

        double divida = calcularDivida(valEmprestimo, valJuros);

        while (divida > 0.0) {
            totValJuros += valEmprestimo - divida;
            divida -= 200;
            numMeses++;
            divida += calcularDivida(divida, valJuros);
        }

        // exibindo resultados
        System.out.println("> quantidade de meses: " + numMeses);
        System.out.println("> valor total juros: " + totValJuros);
    }

    // método para calcular divida com base em um valor e uma taxa de juros
    public static Double calcularDivida(double valor,double juros){
        return valor + ((valor * juros) / 100.0);
    }
}