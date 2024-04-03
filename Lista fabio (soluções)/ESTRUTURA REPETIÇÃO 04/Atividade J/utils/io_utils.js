import { question } from "readline-sync"

export function converter_centena_romana(c){
    let cent = ""
    if (c == 1){
        cent = "C"
    }else if(c == 2){
        cent = "CC"
    }else if(c == 3){
        cent = "CCC"
    }else if(c == 4){
        cent = "CD"
    }else if(c == 5){
        cent = "D"
    }else if(c == 6){
        cent = "DC"
    }else if(c == 7){
        cent = "DCC"
    }else if(c == 8){
        cent = "DCCC"
    }else if(c == 9){
        cent = "CM"
    }

    return cent
}

export function converter_dezena_romana(d){
    let dez = ""
    if (d == 1){
        dez = "X"
    }else if(d == 2){
        dez = "XX"
    }else if(d == 3){
        dez = "XXX"
    }else if(d == 4){
        dez = "XL"
    }else if(d == 5){
        dez = "L"
    }else if(d == 6){
        dez = "LX"
    }else if(d == 7){
        dez = "LXX"
    }else if(d == 8){
        dez = "LXXX"
    }else if(d == 9){
        dez = "XC"
    }

    return dez
}

export function converter_unidade_romana(u){
    let uni = ""
    if (u == 1){
        uni = "I"
    }else if(u == 2){
        uni = "II"
    }else if(u == 3){
        uni = "III"
    }else if(u == 4){
        uni = "IV"
    }else if(u == 5){
        uni = "V"
    }else if(u == 6){
        uni = "VI"
    }else if(u == 7){
        uni = "VII"
    }else if(u == 8){
        uni = "VIII"
    }else if(u == 9){
        uni = "IX"
    }

    return uni
}

export function calcular_porcentagem(parte, total){
    return parte/total*100
}

export function print(msg){
    console.log(msg)
}

export function get_str(msg){
    let str = question(msg)
    return str
}

export function get_number(msg){
    let number = Number(question(msg))
    return number
}