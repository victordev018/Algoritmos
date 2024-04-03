'''
Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:
Média Final = (2 * nota1) + (3 * nota2) + (5 * nota3)
10Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o
aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total
de alunos da turma.
'''

def main():
    matricula = int(input('Matricula:'))
    tot_alunos = 0
    tot_aprovados = 0
    tot_reprovados = 0

    while matricula != 0:
        tot_alunos += 1
        print(f'--->>> Aluno {tot_alunos} <<<---')
        media = pedir_tres_notas_calcular_media()
        aprovado = verificar_aprovacao(media)
        tot_aprovados += aprovado
        print(f'media: {media}')
        matricula = int(input('Matricula:'))
    
    tot_reprovados = tot_alunos - tot_aprovados
    print('--->>> RESULTADOS <<<---')
    print(f'Total aprovados: {tot_aprovados} alunos \nTotal reprovados: {tot_reprovados} alunos \nTotal de alunos: {tot_alunos} alunos ')    



def verificar_aprovacao(md):
    if md >= 7:
       return 1
    return 0

def pedir_tres_notas_calcular_media():
    nota1 = int(input('Nota 1: '))
    nota2 = int(input('Nota 2: '))
    nota3 = int(input('Nota 3: '))
    return (nota1*2 +nota2*3 + nota3*5)/10

main()