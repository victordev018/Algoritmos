
#include <stdio.h>

void calculateSockets(int *socket)
{
    *socket -= 3;
}

int main(void)
{

    int num1, num2, num3, num4, result;

    scanf("%d", &num1);
    scanf("%d", &num2);
    scanf("%d", &num3);
    scanf("%d", &num4);

    result = num1 + num2 + num3 + num4;

    calculateSockets(&result);

    printf("%d\n", result);

    return 0;
}

