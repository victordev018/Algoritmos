
def main():
    ## entradas
    val_emprestimo = float(input("> informe o valor do empréstimo: "))
    val_juros = float(input("> informe o valor do juros: "))

    ## variáveis da questão
    num_meses = 0
    total_val_jurus = 0

    divida = calcular_divida(val_emprestimo, val_juros)

    while (divida > 0):
        # total_val_jurus += val_emprestimo - divida
        divida -= 200
        num_meses += 1
        divida += calcular_divida(divida, val_juros)

    ## exibindo resultados
    print(f"> meses: {num_meses}")
    print(f"> valor total de juros: {total_val_jurus}")

def calcular_divida(valor, taxa):
    return valor + ((valor * taxa)/100.0)

main()