
# Primeiro, crie um novo arquivo markdown chamado "primer_c.md"
touch primer_c.md

# Abra o arquivo no editor de texto de sua preferência
nano primer_c.md

# Adicione o seguinte conteúdo ao arquivo:

# # Primer para Programação em C pelo Terminal

# ## Introdução

# Este é um primer básico para programação em C pelo terminal em um ambiente Linux.

# ## Pegando Dados do Usuário

# Para pegar dados do usuário, podemos utilizar a função `scanf`. Por exemplo, para ler um número inteiro digitado pelo usuário, podemos fazer o seguinte:

# ```c
# #include <stdio.h>

# int main() {
#     int numero;

#     printf("Digite um número inteiro: ");
#     scanf("%d", &numero);

#     printf("O número digitado foi: %d\n", numero);

#     return 0;
# }
# ```

# ## Saída de Dados no Terminal

# Para exibir dados no terminal, podemos utilizar a função `printf`. Por exemplo, para exibir uma mensagem de boas-vindas, podemos fazer o seguinte:

# ```c
# #include <stdio.h>

# int main() {
#     printf("Bem-vindo ao programa em C!\n");

#     return 0;
# }
# ```

# ## Rodando o Programa Continuamente

# Para fazer o programa rodar continuamente e esperar por um comando específico para sair, podemos utilizar um loop infinito e uma condição de saída. Por exemplo, podemos fazer o seguinte:

# ```c
# #include <stdio.h>
# #include <string.h>

# int main() {
#     char comando[10];

#     while (1) {
#         printf("Digite um comando (sair para encerrar): ");
#         scanf("%s", comando);

#         if (strcmp(comando, "sair") == 0) {
#             break;
#         }

#         // Resto do código do programa
#     }

#     return 0;
# }
# ```

# Salve e feche o arquivo.

# Pronto! Agora você tem um primer básico para programação em C pelo terminal em um ambiente Linux.

# Para visualizar o arquivo markdown, você pode utilizar um visualizador de markdown, como o `markdown`:

# Instale o visualizador de markdown
sudo apt-get install markdown

# Visualize o arquivo markdown
markdown primer_c.md | less
