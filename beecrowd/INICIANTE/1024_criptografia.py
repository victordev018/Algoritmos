## beecrowd questão 1024 -> criptografia

def main():
    
    # entrada de quantidade de entradas
    quantidade_entrada = int(input())

    # processamento de dados
    frases_finais = []

    for entrada in range(quantidade_entrada):
        entrada = input()
        entrada = deslocar_t(entrada)
        entrada = segunda_passada(entrada)
        entrada = terceira_passada(entrada)
        frases_finais.append(entrada)


def primeira_passada(texto:str):
    nova_string = ""
    for letra in texto:
        


def segunda_passada(texto:str):
    pass

def terceira_passada(texto:str):
    pass

main()