'''
Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
necessários, para que a população da cidade A ultrapasse a população da cidade B.
'''

def main():
    anos = 0
    pop_city_a = 200000
    pop_city_b = 800000

    while pop_city_a <= pop_city_b:
        pop_city_a = pop_city_a + (pop_city_a*3.5/100)
        pop_city_b = pop_city_b + (pop_city_b*1.35/100)
        anos += 1
    print(f'para a cidade A ultrapassar a cidade B, no quesito população, levará {anos} anos')

main()