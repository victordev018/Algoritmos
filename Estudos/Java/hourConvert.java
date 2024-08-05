import java.util.Scanner;
public class hourConvert {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        System.out.print("\nInforme a hora no formato (hh:mm:ss): ");
        String hour = in.next();
        System.out.println(militaryTimerToAmPm(hour));
        
        System.out.print("\nInforme a hora no formato (hh:mm:ssAM/PM): ");
        String hour2 = in.next();
        System.out.println(AmPmToMIlitary(hour2));
    }
    // função para converter um horário militar para horário am/pm
    public static String militaryTimerToAmPm(String hour){
        String hourAmPm;
        // variáveis que armazenam em inteiro as horas, minutos e segundos
        Integer _hour = Integer.parseInt(hour.substring(0, 2));
        Integer _min = Integer.parseInt(hour.substring(3, 5));
        Integer _sec = Integer.parseInt(hour.substring(6));

        // validação de horário informado
        if (_hour <= 23 && _min <= 59 && _sec <= 59){
            String _period = _hour < 12 ? "AM": "PM";
            int _hourAmPm = _hour > 12 ? _hour - 12 : _hour;
            _hourAmPm = _hourAmPm == 0? 12: _hourAmPm; 
            if (_hourAmPm < 10){
                hourAmPm = "0"+String.valueOf(_hourAmPm) + hour.substring(2) +" "+ _period;
                return hourAmPm;
            }
            hourAmPm = String.valueOf(_hourAmPm) + hour.substring(2) + " "+ _period;
            return hourAmPm;
        }
        return "Hoário inválido!";
    }

    // função para converter um horário de AM/PM para horário militar
    public static String AmPmToMIlitary(String hour){
        // variáveis que armazenam hora, minuto e segundo em inteiro e período do horário em String
        String _period = hour.contains("AM")? "AM": "PM";
        int _hour = Integer.parseInt(hour.substring(0, 2));
        if (_period.equals("AM")){
            if (_hour == 12){
                return "00" + hour.substring(2,8);
            }
            return String.valueOf(_hour+12) + hour.substring(2, 8);
        }
        _hour = _hour == 12? 00: _hour;
        return String.valueOf(_hour+12)+ hour.substring(2,8);
    }
}