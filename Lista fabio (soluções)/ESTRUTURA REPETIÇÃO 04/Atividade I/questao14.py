'''
Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada
entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. Ao final, devem ser mostrados:
· a porcentagem de cada candidato;
· a porcentagem dos outros candidatos;
· a porcentagem de eleitores indecisos;
· a porcentagem de votos nulos/brancos;
· o total de entrevistados;
· uma mensagem indicando a possibilidade ou não de haver 2º turno.
'''

def main():
    print('--->>> OPÇÔES <<<---')
    print(' Serra = 45\n Dilma = 13\n Ciro Gomes = 23\n indeciso = 99\n outros = 98\n nulo/branco = 0')

    escolha = int(input('Escolha 1° entrevistado: '))
    tot_entrevistado = 1
    
    #distribuição de valores pesquisa
    serra = 0
    dilma = 0
    ciro = 0
    indeciso = 0
    outro = 0
    nulo = 0
    if escolha == 45:
        serra += 1
    elif escolha == 13:
        dilma += 1
    elif escolha == 23:
        ciro += 1
    elif escolha == 99:
        indeciso += 1
    elif escolha == 98:
        outro += 1
    elif escolha == 0:
        nulo += 1

    #entrevistando...
    while escolha != -1: 
        tot_entrevistado +=1
        escolha = int(input(f'Escolha {tot_entrevistado}° entrevistado: '))

        #acrescentando valores:
        if escolha == 45:
            serra += 1
        elif escolha == 13:
            dilma += 1
        elif escolha == 23:
            ciro += 1
        elif escolha == 99:
            indeciso += 1
        elif escolha == 98:
            outro += 1
        elif escolha == 0:
            nulo += 1
    
    tot_entrevistado -= 1

    #calculando percentis...
    candi_serra = calcular_percentil(tot_entrevistado, serra)
    candi_dilma = calcular_percentil(tot_entrevistado, dilma)
    candi_ciro = calcular_percentil(tot_entrevistado, ciro)
    indecisao = calcular_percentil(tot_entrevistado, indeciso)
    outros = calcular_percentil(tot_entrevistado, outro) 
    nulo_branco = calcular_percentil(tot_entrevistado, nulo)

    #saida
    print('------------------------------------------')
    print('--->>> RESULTADOS <<<---')
    print(f' Dilma: {candi_dilma:.0f}%\n Serra: {candi_serra:.0f}%\n Ciro: {candi_ciro:.0f}%')
    print(f' Outros candidatos: {outros:.0f}%')
    print(f' Eleitores indecisos: {indecisao:.0f}%')
    print(f' Nulos: {nulo_branco:.0f}%')
    print(f' Total entrevistados: {tot_entrevistado:.0f}')
    

def calcular_percentil(tot, value):
    cem_por_cento = tot
    return (value / tot)*100
    

main()