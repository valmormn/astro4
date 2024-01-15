# Primer de Programação em C para Terminal Linux

## Coletar e exibir dados para o usuário

Para exibir dados para o usuário, você pode usar a função printf(). Você pode coletar dados do usuário usando a função scanf().

Neste código, printf() é usado para solicitar ao usuário um número. Em seguida, scanf() é usado para ler esse número. O argumento "%d" especifica que estamos lendo um número inteiro.

Aqui está um exemplo em que fazemos cálculos e exibimos resultados ao usuário:

```c
#include <stdio.h>

int main() {
   int num1, num2, sum;
   printf("Digite dois números: ");
   scanf("%d %d", &num1, &num2);
   sum = num1 + num2;
   printf("A soma de %d e %d é %d", num1, num2, sum);
   return 0;
}
```

Neste código, estamos pegando dois números inteiros do usuário, somando-os e exibindo a soma.

## Manter o programa em execução

Para manter o programa em execução até que um comando específico seja recebido, você pode usar um loop while.

Aqui está um exemplo:

```c
#include <stdio.h>

int main() {
   //char ch;
   do {
       printf("Digite 's' para sair: ");
       char ch = getchar();
   } while(ch != 's');

   return 0;
}
```

Neste código, o programa continuará solicitando ao usuário para digitar 's' para sair até que ele faça. Quando o usuário digita 's', o loop while é interrompido e o programa é encerrado. Lembre-se de que em muitos terminais, você precisará pressionar Enter após a entrada para que ela seja lida.
