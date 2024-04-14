'''Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o
resultado da última divisão efetuada.'''

def main():
    number = int(input('Numero: '))
    resultado = divisao_por_2(number)
    while(resultado > 1):
        resultado = divisao_por_2(resultado)
    print(resultado)

def divisao_por_2(value):
    return value/2

main()


