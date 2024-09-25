
# Podcast Manager

## Descrição

Um app estilo Netflix, onde você pode centralizar diferentes episódios de podcasts separados por categorias.

## Domínio

Podcasts feitos em vídeo.

## Features

- Listar os episódios de podcasts em sessões de categoria: saúde, bodybuilder, mentalidade, humor.
- Filtrar episódios por nomes de podcast.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor que permite o desenvolvimento de aplicações web e APIs.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, utilizado para melhorar a qualidade do código e facilitar a manutenção.
- **Tsup**: Ferramenta de empacotamento (bundler) que facilita a criação de builds para TypeScript, permitindo a geração de arquivos otimizados para produção.
- **TSX**: Ferramenta que permite executar arquivos TypeScript diretamente, simplificando o processo de desenvolvimento.
- **@types/node**: Biblioteca que fornece definições de tipo para o Node.js, permitindo que você escreva código TypeScript que interaja com o ambiente Node.js sem erros de tipo.

## **Scripts**

Os seguintes scripts estão disponíveis para facilitar o desenvolvimento e a execução da aplicação:

- **start:dev**: Inicia o servidor em modo de desenvolvimento usando `tsx` e um arquivo de variáveis de ambiente.
- **start:watch**: Inicia o servidor em modo de observação, recompilando automaticamente quando há alterações no código.
- **dist**: Compila o código TypeScript em um formato apropriado para distribuição.
- **start:dist**: Executa o código compilado após a geração dos arquivos de distribuição.
