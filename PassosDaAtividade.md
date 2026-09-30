Passo 1 - Extração da função:

![alt text](/imagens/image.png)  
Foi criada uma função de calcular total, antes esse trecho de coódigo ficada dentro de um loo for iterando o json de peças, agora esse loop chama a função com o trecho de código.

![alt text](/imagens/image1.png)  
Execução do programa após alteração.

Passo 2 - Substituição temp por query

![alt text](/imagens/image3.png)
Foi deletada a variavel peca, e doi criada uma função getPeca; Foi alterado todos os lugares que faziam uso da variável atiga pela função nova.

![alt text](/imagens/image4.png)  
Execução após açteração.

Passo 3 - Extração de novas funções

![alt text](/imagens/image5.png)
Foram criadas mais 2 funções a função de formatação de moeda e a função de calculo de crédito, e tambem foram alterados os lugares onde estava sendo chamanda a variável antiga pela função nova.

![alt text](/imagens/image6.png)
Execução após alteração.

Passo 4 - Separação das apresentações dos calculos

![alt text](/imagens/image7.png)
Foram cradas as funções calcularTotalFatura e calcularTotalCreditos e foram substituidos os valores das variáveis, agora elas chamam as funções.

![alt text](/imagens/image8.png)
Execução após alterações.

Passo 5 - Movendo funções

![alt text](/imagens/image9.png)
Retiramos as funções criadas de dentro da função gerarFatura.

![alt text](/imagens/image10.png)
Execução após alterações.

Passo 6 - Geraçao da fatura em HTML

![alt text](/imagens/image11.png)
Criação da fatura em HTML.

![alt text](/imagens/image12.png)
Execução após alterações.

Passo 7 - Criação da Classe de Serviço

![alt text](/imagens/image13.png)
Foi criada a classe ServicoCalculoFatura, que implementa todas as funções de cálculo.

![alt text](/imagens/image14.png)
Execução após alterações.

Passo 8 - Criação de repositório

![alt text](/imagens/image15.png)
Foi criada a classe de repositório que faz a conexão com os aruqivos json.

![alt text](/imagens/image16.png)
Execução após alteraões.
