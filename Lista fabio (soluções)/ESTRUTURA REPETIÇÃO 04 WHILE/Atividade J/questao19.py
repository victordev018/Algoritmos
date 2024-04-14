'''
Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.º de identificação e seu
peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.º de identificação e o peso do
boi mais magro e do boi mais gordo. (Flag: n.º identificação=0)
'''
def main():
    print('>>> 1° BOI <<<')
    ident = int(input('Identificação: '))
    peso = int(input('peso: '))
    
    #boi gordo
    ident_boi_gordo = ident
    peso_boi_gordo = peso

    #boi magro
    ident_boi_magro = ident
    peso_boi_magro = peso
    c = 1
    while ident != 0:
        if c>1:
            peso = int(input('peso: '))
        c+=1
        #condicional para boi gordo/magro
        if peso >= peso_boi_gordo:
            ident_boi_gordo = ident
            peso_boi_gordo = peso
        if peso <= peso_boi_magro:
            ident_boi_magro = ident
            peso_boi_magro = peso 
           
        print(f'>>> {c}° BOI <<<')
        ident = int(input('Identificação: '))  

    #saida
    print('-------------------------') 
    print('>>> RESULTADOS <<<')
    print(f'mais gordo: \nident: {ident_boi_gordo} peso: {peso_boi_gordo} kg')    
    print(f'mais magro: \nident: {ident_boi_magro} peso: {peso_boi_magro} kg') 

main()