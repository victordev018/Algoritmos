#Leia N e escreva todos os números inteiros pares de 1 a N

def main():
    n = int(input("N: "))
    c = 1

    while c <= n:
        
        #condicional para exibir somente os valores pares
        if c % 2 == 0:
            print(c)

        c+= 1
main()