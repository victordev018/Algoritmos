'''
Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos
'''

def main():
    numero = int(input("numero: "))
    limiteInf = int(input("limite inferior: "))
    limiteSup = int(input("limite superior: "))

    while limiteInf <= limiteSup:
        if eh_multiplo(numero, limiteInf):
            print(limiteInf)
        limiteInf += 1

def eh_multiplo(n,l):
    if l % n == 0:
        return True
    else:
        return False

main()