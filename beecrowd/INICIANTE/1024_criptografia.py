## beecrowd questão 1024 -> criptografia

## ord -> character to code
## chr -> code to character

def main():
    
    # entrada de quantidade de entradas
    quantidade_entrada = int(input())

    # processamento de dados
    saida_final = []

    for entrada in range(quantidade_entrada):
        entrada = input()
        # se o tamanho da string estiver no limite definido
        if len(entrada) >= 1 and len(entrada) <= 1000:
            entrada = deslocar_tres_posicoes_direita(entrada)
            entrada = inverter_caracteres(entrada)
            entrada = deslocar_uma_posicoes_esquerda(entrada)
            saida_final.append(entrada)


    # saída de dados
    for saida in saida_final:
        print(saida)


# função para deslocar 3 posições a direita segundo a tabela ASCII
def deslocar_tres_posicoes_direita(texto:str):
    nova_string = ""
    for letra in texto:
        # verifica se o caractere atual é uma letra maiúscula ou minúscula
        if eh_letra_maiuscula_ou_minuscula(letra):
            # codigo ascii da nova letra será deslocado +3 posições em relação letra atual
            codigo_nova_letra = deslocar_posicao_letra(letra, 3)
            # adiciona nova letra na string
            nova_string += chr(codigo_nova_letra)
            # interrompe o loop e passa para o próximo, ja que a letra da rodada ja foi adicionada
            continue
        nova_string += letra
    
    return nova_string

# função para inverter uma string
def inverter_caracteres(texto:str):
    nova_stringt = ""
    for letra in texto:
        nova_stringt = letra + nova_stringt

    return nova_stringt 

# função para deslocar uma posição para a esquerda a partir da metade da string
def deslocar_uma_posicoes_esquerda(texto:str):
    # pega o indice de partida (metade da string)
    indice_caractere_de_partida = int(indice_segunda_metade_string(texto))
    nova_string = ""

    for index in range(len(texto)):
        # verifica se ja chegou na metade da string
        if index + 1 >= indice_caractere_de_partida:
            # pega a letra atual
            letra_atual = texto[index]
            # obtem o codigo ascii da nova letra, deslocando -1 para esquerda em relação a letra atual
            codigo_nova_letra = deslocar_posicao_letra(letra_atual, -1)
            # adiciona na string o caractere desta nova letra
            nova_string += chr(codigo_nova_letra)
            # interrompe este loop atual, ja que a letra ja foi adicionada
            continue
        letra_atual = texto[index]
        nova_string += letra_atual
    
    return nova_string

# função que verifica se um determinado caractere é uma letra maiúscula ou menuscula e retorna um valor booleano
def eh_letra_maiuscula_ou_minuscula(caractere:str):
    return (ord(caractere) >= 65 and ord(caractere) <= 90) or (ord(caractere) >= 97 and ord(caractere) <= 122)

# função para obter indice da metade de uma string
def indice_segunda_metade_string(texto:str):
    eh_par = len(texto) % 2 == 0
    if eh_par:
        return len(texto) / 2 + 1

    return len(texto) / 2 + 0.5

# função para deslocar uma posição da tabela ascii de um caractere basado em um fator(quantiade de casas)
def deslocar_posicao_letra(caractere:str, fator:int):
    return ord(caractere) + fator

main()