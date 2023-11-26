# ZipChat

Aplicação do time com o objetivo de ter anamneses.

## Arquitetura

A aplicação é composta por:
- AuthServer Oauth 2.0 utilizando keycloack
- API de anameses
- WEB front 

## Dependencia

Esta aplicação se utiliza do docker e docker-compose para organizar suas peças.

Por conta de CORS, é necessário instalar a extensão do chrome abaixo:
- https://mybrowseraddon.com/access-control-allow-origin.html

## Rodando a aplicação

Para rodar a aplicação, basta rodar o código abaixo no em ./SRC

```bash
docker-compose up
```

## Desenvolvendo

Após a subida do docker, é possivel rodar cada aplicação individualmentee se atendar paras rotas.

## URLs

Após subir as peças via docker-compose:
- keycloack admin: http://localhost:8080/admin/master/console/
- mongo-express: hadminttp://localhost:8081/  
- back-end: 
    VIA Visual Studio: https://localhost:7275
    VIA DOCKER: http://localhost:5000  (sem SSL)
- web-front: 
    VIA TERMINAL: https://localhost:3000
    VIA DOCKER: https://localhost:3001

# Configurando

## Extensão chrome

1.Instale a extensão do chrome para facilitar nossos testes por contna de CORS:
- https://mybrowseraddon.com/access-control-allow-origin.html

2.Em `5.Access-Control-Allow-Origin` e selecione a opção `*`


## Keycloack

### Criação de Realm
Entrar no console administrativo, e utilizar o usuário `admin` com o password `admin`.
Clicar em Master que vai abrir um menu com um botão azul `Create Realm`, vai abrir uma pagina a direita com a opção de importar um arquivo, utilize o caminho abaixo.

- `realm name` tem de ser `zipchat`

`src/local/realm-export.json`

### Criação de Client

No canto esquerdo, clique em `Clients`, na lateral direita vai aparecer `Import client`, e importe o aquivo o caminho abaixo.

- `Client ID` tem de ser `zipchat-api`


`src/local/zipchat-api.json`

### Criação de usuário
- Em seguida clique em `Users` na barra lateral esquerda;
- depois em `Add user`; 
- preencha conforme achar melhor;
- o parametro `Email Verified` true
- click em `Create`
- depois Vai na aba `Credentials` e crie um novo password, desmarque a opção `Temporary Password`.
- clique em `Save`

### Criação de usuário ADMIN
- Em seguida clique em `Users` na barra lateral esquerda;
- depois em `Add user`; 
- preencha conforme:
    - username: admin
    - email: admin@gmail.com
    - First name: admin
    - Last name: admin
- o parametro `Email Verified` true
- click em `Create`
- depois Vai na aba `Credentials` e crie um novo password, desmarque a opção `Temporary Password`.
- clique em `Save`

Agora vamos criar o grupo de admin
- Em seguida clique em `Groups` na barra lateral esquerda;
- `Create group`
- Name: `admin`
- Clique na aba `Role mapping`
- Clique em `Assign role`
- Clique em todas as roles
- Clique em `Assign`

Agora vamos atribuir essa role ao usuário `admin`
- Em seguida clique em `Users` na barra lateral esquerda;
- Selecione o usuário `admin`
- Clique na aba `Groups`
- Clique em `Join Group`
- Selecione `admin`
- Clique em `Join`

Doc Referencia:
https://marraia.medium.com/utiliza%C3%A7%C3%A3o-do-keycloak-em-aplica%C3%A7%C3%B5es-net-6-0-4a787520c85b

--- 

## Back-end utilizando o Docker [Utilizando back]
- Inserir `API_KEY` do chactGPT na varíavel `AI_KEY` no arquivo `docker-compose.yaml` em `back-end-service > environment`
- Colocar como `false` na variável `TEST` no arquivo `docker-compose.yaml` em `back-end-service > environment`

## Back-end utilizando o Visual Studio [Desenvolvimento back]
- Importar a solução back-zipchat.sln no visual studio
- Copiar o arquivo `.env.template` renomeando para `.env`

## Front-end

Abrir a pasta `web-app` e rodar o comando abaixo:

```bash
npm install
npm run dev
```
