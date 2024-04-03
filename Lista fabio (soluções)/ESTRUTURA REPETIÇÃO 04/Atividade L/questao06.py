'''
Escreva a tabuada dos números de 1 a 10.
'''

def main():
    fixo = 10
    c = 1
    tab = 0

    while c <= fixo:
        tab = c * fixo
        print(f"{c} x {fixo} = {tab}")
        c+=1


main()