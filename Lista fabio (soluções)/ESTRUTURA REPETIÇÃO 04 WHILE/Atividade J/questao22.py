def main():
    n1 = int(input('n1: '))
    n2 = int(input('n2: '))

    fixo = n1
    quociente = 0
    resto = 0
    qtd_sub = 0
    c = 1
    while (qtd_sub * n2 < fixo) and c==1:
        
        if n1 - n2 > 0:
            n1 = n1 - n2
            qtd_sub += 1
        else:
            c += 1
    
    quociente = qtd_sub
    resto = fixo - (quociente*n2)   
    print(f'Quociente: {quociente}\nResto: {resto}')
main()