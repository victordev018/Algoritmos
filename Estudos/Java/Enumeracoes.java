package Estudos.Java;

// Criando enumerção dos dias da semana:
enum DaysWeek {
    DOMINGO,
    SEGUNDA,
    TERCA,
    QUARTA,
    QUINTA,
    SEXTA,
    SABADO
}

public class Enumeracoes {

    public static void main(String[] args) {
        
        // instanciando um objeto da enumeração DaysWeek
        DaysWeek today = DaysWeek.SEXTA;

        // tratando enumeração com switch case.
        switch (today) {
            case DOMINGO:
                System.out.println("Hoje é domingo!");
                break;
            case SEGUNDA:
                System.out.println("Hoje é segunda!");
                break;
            case TERCA:
                System.out.println("Hoje é terca!");
                break;
            case QUARTA:
                System.out.println("Hoje é quarta!");
                break;
            case QUINTA:
                System.out.println("Hoje é quinta!");
                break;
            case SEXTA:
                System.out.println("Hoje é sexta!");
                break;
            default:
                System.out.println("Hoje é sexta!");
                break;
        }

    }
}