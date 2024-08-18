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
    
    for i in range(quantidade):
        leds = 0
        entrada = input()
 
        for letra in entrada:
            leds += quantidade_leds.get(letra)
        print(f"{leds} leds");

    
main()