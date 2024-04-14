'''
Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e
responda quem ganha a partida. A partida chega ao final se:
· Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
· Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma
diferença de 2 pontos sobre o adversário.
'''

def main():
    jog1 = input('Jogador 1: ')
    jog2 = input('Jogador 2: ')
    pontos_jog1 = 0
    pontos_jog2 = 0
    dif_pontos = 0
    #pedir pts e add ao jogador 1 ou 2
    ptt = int(input('+1pt para: '))
    if ptt == 1:
        pontos_jog1 += 1
    else:
        pontos_jog2 += 1

    #calcular diferenca de pontos
    dif_pontos = calcular_dif(pontos_jog1,pontos_jog2)

    #repetição para pedir mais pontos até ter um vencedor
    c = 1
    while c == 1:
        ptt = int(input('+1pt para: '))
        if ptt == 1:
            pontos_jog1 += 1
        else:
            pontos_jog2 += 1
        
        dif_pontos = calcular_dif(pontos_jog1,pontos_jog2)
        print(f'{jog1}: {pontos_jog1}, {jog2} {pontos_jog2}')
        
        if (pontos_jog1>=21 or pontos_jog2>=21) and dif_pontos >= 2:
            ganhador = jog1 if pontos_jog1>pontos_jog2 else jog2
            print(f' game finalizad...\n jogador {ganhador} ganhou')
            c += 1
        elif (pontos_jog1>21 or pontos_jog2>21) and dif_pontos >= 2:
            ganhador = jog1 if pontos_jog1<pontos_jog2 else jog2
            print(f' game finalizad...\n jogador {ganhador} ganhou')
            c += 1
        else:
            c = c
        
        
def calcular_dif(p1, p2):
     if p1 > p2:
        dif = p1-p2
        return dif
     else: 
        dif = p2-p1
        return dif  

main()
