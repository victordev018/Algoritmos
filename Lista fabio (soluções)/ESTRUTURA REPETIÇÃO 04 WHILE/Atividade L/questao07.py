'''
Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.
'''

def main():
    numero = int(input("numero: "))
    soma = 0
    c = 1

    while c <= numero:
        soma += c
        c+=1
    print(f"Soma dos número de 1 e {numero} = {soma}")

main()