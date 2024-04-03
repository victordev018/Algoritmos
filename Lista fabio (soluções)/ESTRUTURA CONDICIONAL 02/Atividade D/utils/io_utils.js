import { question } from "readline-sync"

export function verificar_data(dia,mes,ano){
    if (ano >=1 && ano <= 9999 ){
        if (mes >= 1 && mes <=12){
            if (dia >= 1 && dia <= 31){
                return true
            } else {
                return false
            }
        } else{
            return false
        }
    } else{
        return false
    }
}

export function verificar_numero_primo(numero){
    if (numero == 1){
        return false
    } else if (numero ==2 || numero==3){
        return true
    } else if ((numero % 2)==0 || (numero % 3)==0){
        return false
    } else{
        return true
    }
}

export function calcular_idade_anos(atualDia,atualMes,atualAno,nasDia,nasMes,nasAno){
    let idade = atualAno - nasAno
    if (nasDia < atualDia || nasMes>atualMes || (atualMes==nasMes && atualDia < nasDia)){
        idade = idade - 1
    } 
    return `A idade em anos corresponde a ${idade} anos...`
}

export function tipo_triangulo_por_lado(l1, l2, l3){
    if ((l1+l2)>l3 || (l1+l3)>l2 || (l2+l3)>l1){
        if (l1==l2 && l2==l3){
            return 'Forma um triangulo equilatero (tres lados iguais)'
        }else if ((l1==l2 || l1==l3) || (l2==l1 || l2==l3) || (l3==l2 || l3==l2)){
            return 'Forma um triangulo isoceles (dois lados iguais)'
        } else{
            return 'Forma um triangulo escaleno (tres lados diferentes)'
        }
    } else if(l1==0 || l2==0 || l3==0) {
        return 'Nao forma um triangulo ._.'
    }
}

export function tipo_triangulo(a1,a2,a3){
    if (a1+a2+a3 == 180){
        if (a1<90 && a2<90 && a3<90){
            return 'Triangulo acutangulo.'
        }else if (a1==90 || a2==90 || a3==90){
            return 'Triangulo retangulo.'
        }else{
            return 'Triangulo obtusangulo.'
        }
    } else{
        return 'Nao e triangulo, os angulos internos nao somam exatamente 180 graus!'
    }
}

export function numero_menor (num1, num2, num3){
    if (num1<num2 && num1<num3){
        return num1
    } else if (num2<num1 && num2<num3){
        return num2
    } else if (num3<num2 && num3<num1){
        return num3
    }
}

export function numero_meio (num1, num2, num3){
    if (num1>num2 && num1<num3){
        return num1
    } else if (num2<num1 && num2>num3){
        return num2
    } else{
        return num3
    }
}

export function maior_numero (num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1
    } else if (num2 > num1 && num2 > num3){
        return num2
    } else{
        return num3
    }
}


export function numero_maior_menor(num1, num2){
    if (num1 > num2){
        return ` Maior numero: ${num1} \n Menor numero: ${num2}`
    }else{
        return ` Maior numero: ${num2} \n Menor numero: ${num1}`
    }
}

export function numeros_iguais (num1, num2, num3){
    if (num1==num2 && num2==num3){
        return 'OS TRES NUMEROS SAO IGUAIS.'
    } else if (num1==num2 || num2==num3 || num1==num3){
        return 'DOIS NUMEROS SAO IGUAIS.'
    } else {
        return 'NENHUM DOS NUMEROS SAO IGUAIS'
    }
}

export function get_number(texto){
    var num = Number(question(texto))
    return num
}

export function print (mensagem){
    console.log(mensagem)
}
 export function separar_dezena(numero){
    let dezena = Math.floor(numero/10)
    return dezena
}
export function seprar_unidade(numero){
    let unidade = numero % 10
    return unidade
}
export function dezena_igual_unidade (dez, uni){
    if (dez === uni){
        return 'Dezena igual unidade...'
    } else {
        return 'Dezena diferente da unidade...'
    }
}
