## beecrowd 1183 -> acima da diagonal principal

def main():

    # entrada de dados
    operation = input()

    # gerando matriz de tamanho 12 x 12
    matrix = generateMatrixWithSize(12, 12)

    # preenchendo matriz
    fillMatrix(matrix)

    # relizando operação desejada
    result = doOperation(matrix, operation)

    # exibindo resultados
    print(f"{result:.1f}")

# função para devolver o resultado de uma dada operação
def doOperation(matrix, operation):

    # realizando o somatório dos valores acima da diagonal princial
    _sum = 0
    _quantityElements = 0

    for line in range(len(matrix)):
        for column in range(len(matrix[line])):
            if column > line:
                _sum += matrix[line][column]
                _quantityElements += 1

    _average = _sum / _quantityElements

    return _sum if operation == "S" else _average

# função para preencher matriz de ordem 12
def fillMatrix(matrix):
    for line in range(len(matrix)):
        for column in range(len(matrix[line])):
            matrix[line][column] = float(input())

# função para gerar uma matriz, dado o tamanho
def generateMatrixWithSize(lines, columns):
    matrix = []
    for i in range(lines):
        matrix.append(generateVectorWithSize(columns, 0))
    return matrix

# função que cria um vetor dado o seu tamanho e preenchido com um dado valor padrão
def generateVectorWithSize(size, defaultValue):
    vector = []
    for i in range(size):
        vector.append(defaultValue)
    return vector

main()