def main():
    
    # variáveis para fins de cálculos
    max_combustivel = 50
    max_distancia = 600

    while max_combustivel > 0 and max_distancia > 0:

        # solicitando dados do usuário
        max_distancia -= int(input("\n> distância percorrida: "))
        max_combustivel -= int(input("\n> combustivel consumido: "))

    # quando por algum motivo o carro ter parado
    # se a gasolina tiver acabado
    if max_combustivel <= 0:
        print("Infelizmente a gasolina acabou ._.")
    
    # se a tiver percorrido toda a distância
    if max_distancia <= 0:
        print("\n> chegou no destino ja seu danado heheheh")
    
main()