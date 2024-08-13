def main():
    
    ## dicionário de quantidade de leds para representar um número
    quantidade_leds = {
        "1" : 2,
        "2" : 5,
        "3" : 5,
        "4" : 4,
        "5" : 5,
        "6" : 6,
        "7" : 3,
        "8" : 7,
        "9" : 6,
        "0" : 6
        }
    

    ## solicitando a quantidade de entradas a serem processadas
    quantidade = int(input())

    ## lista de saidas
    saida_final = []

    ## pegando estradas e processando elas
    if(quantidade > 0 and quantidade < 1001):
        for i in range(quantidade):
            leds = 0
            entrada = input()
            if int(entrada) > 0 and int(entrada) <= 10**100: 
                for letra in entrada:
                    leds += quantidade_leds.get(letra)
                saida_final.append(f"{leds} leds");

    ## saida final
    for saida in saida_final:
        print(saida)
                

    
main()