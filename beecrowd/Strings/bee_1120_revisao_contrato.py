def main():
    
    digito_problematico = 1
    numero_valor_negociado = 1

    while digito_problematico != 0 and numero_valor_negociado != 0:
        linha_entrada = my_split(input())


        digito_problematico = int(linha_entrada[0])
        numero_valor_negociado = int(linha_entrada[1])

        if digito_problematico != 0 and numero_valor_negociado != 0:
            saida = int(remover_ocorrencia(linha_entrada[1], linha_entrada[0]))
            print(saida);


# função que removerá de uma string um dado caractere
def remover_ocorrencia(texto : str, valor_de_remocao : str):
    string_saida = ""

    for letra in texto:
        if letra == valor_de_remocao:
            continue
        string_saida += letra
    
    return string_saida if string_saida != "" else "0"

# função split, que recebe um texto e um separador e retorna um vetor com os elementos do texto
def my_split(texto : str, separador = " "):
    vetor_de_saida = []
    elemento_vetor = ""
    texto += separador

    for letra in texto:
        if letra == separador:
            vetor_de_saida.append(elemento_vetor)
            elemento_vetor = ""
            continue
        elemento_vetor += letra
    
    return vetor_de_saida

main()