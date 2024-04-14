# Leia N e escreva todos os números inteiros de 1 a N.

def main():
    n = int(input("value N: "))

    print(f"\nnumbers (1 - {n}):")
    for i in range(n):
        print(i+1)



main()