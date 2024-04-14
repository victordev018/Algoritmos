'''
Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um
algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais
baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM').
'''

def main():
    c = 1
    print(f'Candidata {c}: ')
    nome = input('Nome: ')
    altura = float(input('Altura: '))
    peso = float(input('Peso: '))
    nome_mais_alta = ""
    altura_mais_alta = altura
    nome_mais_baixa = ""
    altura_mais_baixa = altura
    nome_mais_magra = ""
    peso_mais_magra = peso
    nome_mais_gorda = ""
    peso_mais_gorda = peso

    while nome != "FIM":
        nomeN = nome
        if c>1:
            altura = float(input('Altura: '))
            peso = float(input('Peso: '))
        c += 1
        #condicional
        if altura >= altura_mais_alta:
            altura_mais_alta = altura
            nome_mais_alta = nomeN
        elif altura < altura_mais_baixa:
            altura_mais_baixa = altura
            nome_mais_baixa = nomeN
        
        if peso >= peso_mais_gorda:
            peso_mais_gorda = peso   
            nome_mais_gorda = nomeN
        elif peso < peso_mais_magra:
            peso_mais_magra = peso
            nome_mais_magra = nomeN
        
        print(f'Candidata {c}: ')
        nome = input('Nome: ')
    
    #saida de dados...
    print('--->>> RESULTADOS <<<---')
    print(f' Mais alta: \n nome: {nome_mais_alta}   altura: {altura_mais_alta}')  
    print(f' Mais baixa: \n nome: {nome_mais_baixa}   altura: {altura_mais_baixa}')  
    print(f' Mais magra: \n nome: {nome_mais_magra}   peso: {peso_mais_magra}')  
    print(f' Mais gorda: \n nome: {nome_mais_gorda}   peso: {peso_mais_gorda}')


main()