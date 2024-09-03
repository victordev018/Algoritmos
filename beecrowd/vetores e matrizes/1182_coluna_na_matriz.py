## questão 1181

def main():
    
    # solicitando entradas
    column = int(input())
    operation = input()

    # gerando matriz vazia de tamanho 12 x 12
    matrix = generateMatrixWithSize(12, 12)

    # preenchendo matriz
    fillMatrix(matrix)

    # fazendo operação na linha da matriz
    result = doOperation(matrix, column, operation)

    # exibindo resultados
    print(result)

def doOperation(matrix, column, operation):
    _sum = 0
    _quantity = 0
    
    for _line in range(len(matrix)):
        for _column in range(len(matrix[_line])):
            if _column == column:
                _sum += matrix[_line][_column]
                _quantity += 1

    _average = _sum / _quantity

    return  _sum if operation == "S" else _average

def fillMatrix(matrix):
    for line in range(len(matrix)):
        for column in range(len(matrix[line])):
            matrix[line][column] = float(input())
        

def generateMatrixWithSize(lines, columns):
    matrix = []
    for i in range(lines):
        matrix.append(generateVectorWithSize(columns))
    return matrix

def generateVectorWithSize(size):
    vector = []
    for i in range(size):
        vector.append(0.0)
    return vector

main()