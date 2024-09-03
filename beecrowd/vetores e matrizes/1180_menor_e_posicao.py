## 1188 - beecorwd -> menor e posição

def main():

    # entrada de dados
    quantity_elements = int(input())

    # recebendo todos os valores de do vetor em uma linha
    values = input()

    # transformando string de valores em um vetor de strings com cada valor sendo um elemento
    vectorStrings = mySplit(values, " ")

    # convertendo vetor de strings para numéricos
    vectorNumbers = toVectorNumbers(vectorStrings)

    # pegando posição do menor valor e definindo menor valor
    indexLowestValue = findIndexFromLowestValue(vectorNumbers)
    lowestValue = vectorNumbers[indexLowestValue]

    # exibindo resultados
    print("Menor valor: ", lowestValue)
    print("Posicao: ", indexLowestValue)

# função para procurar o index do menor valor de uma coleção
def findIndexFromLowestValue(vector):
    lowestIndex = 0

    for index in range(len(vector)):
        if vector[index] < vector[lowestIndex]:
            lowestIndex = index
        
    return lowestIndex

# função que converte um vetor de strings para um vetor numérico
def toVectorNumbers(vectorString):
    newVector = []

    for element in vectorString:
        newVector.append(int(element))
    
    return newVector

# função que recebe uma string e um separador e retorna um vetor
def mySplit(text, separator):
    text += separator
    currentString = ""
    vector = []

    for character in text:
        if character == separator:
            vector.append(currentString)
            currentString = ""
            continue

        currentString += character
    
    return vector

main()