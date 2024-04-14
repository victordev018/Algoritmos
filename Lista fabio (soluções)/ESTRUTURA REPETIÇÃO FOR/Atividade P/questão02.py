# Leia N e escreva todos os números inteiros pares de 1 a N.

def main():
    n = int(input("value N: "))

    print(f"numeros pares de (1 - {n})")
    for i in range(n):
        if (i+1) % 2 == 0:
            print(i+1)


main()