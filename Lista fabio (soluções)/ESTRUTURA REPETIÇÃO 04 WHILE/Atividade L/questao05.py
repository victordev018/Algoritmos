'''
Leia um número, calcule e escreva seu fatorial.
'''

def main():
    numero = int(input("numero: ")) # lendo numero
    fatorial = numero
    c = 1

    if numero == 0: #se o numero for 0, o fatorial será sempre 1
        fatorial = 1
    else: # se não for 0, calcule o fatorial decrementando 1 de "numero" e multiplicando pelo valor anterior de fatorial, que recebe inicialme o proprio numero.
        while c <= numero:
            numero -= 1
            fatorial *= numero
            c+=1
    print(f"fatorial: {fatorial}")


main()