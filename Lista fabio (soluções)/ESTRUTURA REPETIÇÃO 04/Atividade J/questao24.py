'''
Escreva um algoritmo que leia a razão de uma PA (Progressão Aritmética) e o seu primeiro termo e
escreva os N termos da PA. Ler o valor de N.
'''

def main():
    n_termos = int(input('N: '))
    termo1 = int(input('1° termo: '))
    razao = int(input('Razao da P.A: '))
    resultado = prog_aritmetica(n_termos, termo1, razao)
    print(resultado)

def prog_aritmetica(n, t1, r):
    lista = ""
    c = 1
    termo = t1

    while c <= n:
       lista += f"{str(termo)} " 
       termo += r
       c += 1
    return lista

main()