## questão 1188 -> area esquerda

def main():
    
    # entrada de dadios
    operation = input()

    # criadndo matriz de tamanho 12 x 12
    matrix = generateMatrixWithSize(12, 12)

    # preenchendo os valores da matriz
    fillMatrix(matrix)

    # realizando a operaçõa desejada
    result = doOperation(matrix, operation)

    # exibindo resultado final
    print(f"{result:.1f}")

# função para realizar a operação de somatório ou média dos valores abaixo da diagonal principal
def doOperation(matrix, operation):

    # realizando somatório dos valores abaixo da diagonal principal
    _quantityElements = 0
    _sum = 0

    for line in range(len(matrix)):
        for column in range(len(matrix[line])):
            if line > column and line + column < len(matrix)-1:
                _sum += matrix[line][column]
                _quantityElements += 1

    # calculando média
    _average = _sum / _quantityElements

    return _sum if operation == "S" else _average

# função para preencher a matriz
def fillMatrix(matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            matrix[i][j] = float(input())

# função que gera uma matriz de um dado tamanho de linhas e colunas
def generateMatrixWithSize(lines, columns):
    matrix = []
    for i in range(lines):
        matrix.append(generateVectorWithSize(columns, 0))
    return matrix

# função que gera um vetor com um valor padrão
def generateVectorWithSize(size, defaultValue):
    vector = []
    for i in range(size):
        vector.append(defaultValue)
    return vector

main()