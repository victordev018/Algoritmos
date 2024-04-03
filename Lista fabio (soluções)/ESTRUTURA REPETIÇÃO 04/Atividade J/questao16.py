'''
Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.
'''

def main():
    juro = 0.85
    emprestimo = 3000
    dias = 0
    divida = emprestimo

    while divida >= 1:
        divida -= 200
        divida += (divida*juro/100)
        dias += 1
    print(f'serão necessários {dias} dias para conluir o pagamento')


main()