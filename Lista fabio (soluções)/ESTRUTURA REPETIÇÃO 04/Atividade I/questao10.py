'''Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave
pode levantar vôo ou não. Considere os seguintes critérios:
· O peso de decolagem da aeronave é sempre igual a 500.000 kg;
· O peso de decolagem é composto pela soma do peso do combustível, do peso da carga, do peso dos
passageiros;
· O peso do combustível é a quantidade do combustível (em litros) multiplicada pelo fator 1.5kg/l;
· A quantidade mínima de combustível para que a aeronave decole é de 10000 l;
· O peso da carga é o somatório do peso dos “containers” de cargas em quilogramas.
· O peso dos passageiros é o somatório do peso de cada passageiro e de todos os volumes da sua
bagagem; cada passageiro tem o peso estimado de 70kg e cada volume de bagagem tem o peso
estimado de 10kg.
O algoritmo deve ler o números de containers e a seguir ler o peso de cada container. A seguir devem
ser lidos os dados dos passageiros (número do bilhete, quantidade de bagagens) até que o número do
bilhete seja igual a 0. Devem ser mostrados, a quantidade de passageiros, a quantidade total de volume
de bagagem, o peso dos passageiros, o peso da carga, a quantidade possível de combustível, e uma
mensagem indicando a liberação da decolagem ou não.'''

def main():
    peso_carga = 0
    qtd_containers = int(input("Numero de conteiners: "))
    
    #quantidade de conteiners e somatório dos pesos:
    i = 1
    while i <= qtd_containers:
        peso_conteiners = int(input(f"peso {i}° conteiner (Kg): "))
        peso_carga += peso_conteiners
        i += 1
    
    #dados passageiros e suas bagagens:
    bilhete = int(input('Numero bilhete: '))
    qtd_passageiros = 0
    qtd_bagagens = 0
    while bilhete != 0:
        qtd_passageiros += 1
        bagagens = int(input(f'Bagagens {qtd_passageiros}° passageiro: '))
        qtd_bagagens += bagagens
        bilhete = int(input('Numero bilhete: '))

    #somatorio de pesos:
    peso_limite = 500000
    peso_passageiros = (qtd_passageiros*70 + qtd_bagagens*10)
    peso_combustivel = 10000*1.5
    peso_decolagem_kg = peso_combustivel + peso_passageiros + peso_carga
    #operador ternário em python...
    autorizacao_decolagem = "sim" if peso_decolagem_kg <= peso_limite else "Nao"

    #saida de dados:
    print('--->>> DECOLAGEM <<<---')
    print(f'- N° de passageiros   : {qtd_passageiros}') 
    print(f'- N° de bagagens      : {qtd_bagagens}') 
    print(f'- Peso passageiros    : {peso_passageiros} Kg') 
    print(f'- Peso carga          : {peso_carga} Kg') 
    print(f'- Peso combustível    : {peso_combustivel} Kg') 
    print(f'- Peso total          : {peso_decolagem_kg} Kg') 
    print(f'- Decolagem autorizada: {autorizacao_decolagem}')
    
    

main()