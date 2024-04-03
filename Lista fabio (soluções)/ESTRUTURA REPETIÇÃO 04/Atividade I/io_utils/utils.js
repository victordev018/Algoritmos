import { question } from "readline-sync";

export function converter_dec_para_hex(num){
    let div = Math.floor(num/16)
    let novoNum = div
    let resto = String(num % 16)
    if(resto == '10'){
        resto = "A"
    }else if(resto == '11'){
        resto = "B"
    }else if(resto =='12'){
        resto = "C"
    }else if(resto == '13'){
        resto = "D"
    }else if(resto == '14'){
        resto = "E"
    }else if(resto == '15'){
        resto = "F"
    }else{
        resto = resto
    }
    let hexadecimal = `${resto}`

    while(novoNum != 0){
        div = Math.floor(novoNum/16)
        resto = String(novoNum % 16)
        if(resto == '10'){
            resto = "A"
        }else if(resto == '11'){
            resto = "B"
        }else if(resto =='12'){
            resto = "C"
        }else if(resto == '13'){
            resto = "D"
        }else if(resto == '14'){
            resto = "E"
        }else if(resto == '15'){
            resto = "F"
        }else{
            resto = resto
        }
        novoNum = div
        hexadecimal = `${resto}`+ hexadecimal
    }
    return hexadecimal
}

export function converter_dec_para_bin(num){
    let div = Math.floor(num/2)
    let novoNum = div
    let resto = String(num % 2) 
    let binario = `${resto}`
    while(novoNum != 0){
        div = Math.floor(novoNum/2)
        resto = String(novoNum % 2)
        binario = `${resto}`+binario
        novoNum = div  
    }
    return binario
}

export function calcular_new_salary(sal, desc){
    return sal + (sal*desc)/100
}

export function verificar_val_desconto(sal){
    let desc = 0
    if (sal >= 0 && sal <= 2999.99){
        desc = 25
    } else if (sal >= 3000 && sal <= 5999.99){
        desc = 20
    } else if (sal >= 6000 && sal <= 9999.99){
        desc = 15
    } else{
        desc = 10
    }
    return desc
}

export function calcular_pontuacao(val){
    switch (val) {
        case 1:
            return 9    
        case 2:
            return 6
        case 3:
            return 4
        case 4:
            return 3
        default:
            return null
    }
}

export function eh_divisor(mdc, valor){
    return valor % mdc == 0
}

export function eh_multiplo(mmc, valor){
    return mmc % valor == 0
}

export function print (menseger){
    console.log(menseger)
}
export function get_string(menseger){
    let text = question(menseger)
    return text
}
export function get_number(menseger){
    let number = Number(question(menseger))
    return number
}