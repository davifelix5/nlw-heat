# A aplicação

#### Esta aplicação foi desenvolvida durante a NLW-Heat, evento da [Rocketseat](https://www.rocketseat.com.br/) no qual foi desenvolvida uma aplicação completa que recebe mensagens e as exibe em tempo real.

## Backend

#### Tecnologias
  - Node JS, TypeScript, [Express](https://expressjs.com/pt-br/), [Prisma](https://www.prisma.io), [Socket.IO](https://socket.io/), [JWT](https://jwt.io/)

### Funcionalidades
  - Faz o fluxo de autenticação com OAuth usando a API de atenticação do GitHub, gerando um token JWT próprio
  - Permite o cadastro e a listagem de mensagens


## Frontend
 Usuário não autenticado                                                            |  Usuário autenticado
:----------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:
![](https://raw.githubusercontent.com/davifelix5/nlw-heat/main/assets/webpage1.png) |  ![](https://raw.githubusercontent.com/davifelix5/nlw-heat/main/assets/webpage2.png)

#### Tecnologias
  - [ReactJS](https://reactjs.org/), TypeScript, [Vite](https://vitejs.dev/), Socket.IO, Axios, Sass
  - Uso dos CSS modules, que permitem uma estilização mais compartimentalizada e facilita o desenvolvimento ao evitar conflitos entre direntes estilizações

### Funcionalidades
  - Forcene uma interface para autenticação OAuth com o GitHub
  - Permite o preenchimento de um formulário que registra as mensagens no banco de dados e as exibe em tempo real
  - Salva o token JWT no armazenamento do navegador, permitindo persistência

## Mobile
 Usuário não autenticado                                                            |  Usuário autenticado
:----------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:
![](https://raw.githubusercontent.com/davifelix5/nlw-heat/main/assets/mobile1.png)  |  ![](https://raw.githubusercontent.com/davifelix5/nlw-heat/main/assets/mobile2.png)

#### Tecnologias
  - [ReactNative](https://reactnative.dev/), [Expo](https://docs.expo.dev/), TypeScript, Axios, Socker.IO, AsyncStorage, [Moti](https://moti.fyi/)

### Funcionalidades
  - Permite o registro de mensages a partir de um formulário
  - Permite o fluxo de autenticação com o GitHub por meio do Expo
  - Armazera o token JWT no AsyncStorage para garantir permanência na conexão
  - Animação para o aparecimento de mensagens em tempo real

## Elixir

#### Tecnologias
  - Elixir, [Phoenix](https://www.phoenixframework.org/)

### Funcionalidades
  - Registro de mensagens em um banco de dados
  - Faz uma contagem diária da frequência de cada palavra nas mensagens registradas durante o dia a fim de gerar os dados que serviriam de base para uma "nuvem de palavras"
