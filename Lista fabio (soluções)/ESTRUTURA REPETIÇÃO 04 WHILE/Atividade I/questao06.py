'''Escreva um algoritmo para determinar o número de dígitos de um número informado.'''

def main():
    number = int(input('Numero: '))
    c = 0
    i = 0
    qtd_digitos = 0
    while (c <= number):
        qtd_digitos += 1
        i +=1
        c = 10**i


    print(f'Qunatidade de digitos: {qtd_digitos}')

main()