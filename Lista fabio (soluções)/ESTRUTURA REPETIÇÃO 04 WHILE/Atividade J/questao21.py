'''
Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*)
seja utilizado.
'''

def main():
    numero1 = int(input('Numero 1: '))
    numero2 = int(input('Numero 2: '))

    multiplicacao = calcular_multiplicacao(numero1, numero2)
    print(f'o resultado da multiplicação: {multiplicacao}')

def calcular_multiplicacao(n1, n2):
    resultado = 0
    c = 1
    while c <= n2:
        resultado += n1
        c += 1
    return resultado

main()