'''Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.'''

def main():
    primeiro_numero = int(input('Numero: '))
    lista_numeros = int(input('outro valor: '))

    while lista_numeros != primeiro_numero:
        lista_numeros = int(input('outro valor: '))

    print('numero encontrado!')


main()