'''
Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
Geométrica que tem por valor inicial A0 e razão R.
'''

def main():
    a = int(input("A: ")) # recebe o valor inicial da P.A
    limite = int(input("Limite: ")) # recebe valor limite da P.A
    razao = int(input("razao: ")) # recebe a razão da P.A
    
    while a <= limite:
        print(f"{a}\n")
        a *= razao 


main()