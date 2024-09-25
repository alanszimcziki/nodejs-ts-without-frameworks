# Podcast Manager

### Descrição
Um app estilo Netflix, onde possa centralizar diferentes episódios podcasts separados por categorias.

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódios podcasts em sessões de categoria.
-[saúde, bodybuilder, mentalidade, humor ]
- filtrar episódios por nomes de podcast

## Como

#### Feature
- Listar os episódios podcasts em sessões de categoria.

### Como vou implementar:
Vou retornar em uma api rest(json) o nome do podcast, nome do episódio, imagem de capa, link, categorias

```js
[ 
{
  podcastName: "Flow",
  episode: "CBUM - Flow #319",
  videoId:"pQSuQmUfS30",
  cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
  link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
  category:["saúde","esporte","bodybuilder"]
},
{
  podcastName: "Flow",
  episode: "RONALDO FENÔMENO - Flow Podcast #515",
  videoId:"qj0N8sb3_XQ",
  cover: "https://i.ytimg.com/vi/qj0N8sb3_XQ/maxresdefault.jpg",
  link: "https://www.youtube.com/watch?v=qj0N8sb3_XQ",
  category:["saúde","esporte","futebol"]
}

]
```