# CHatZIP

Aplicação do time com o bjetivo de ter anamneses.

## Arquitetura

A aplicação é composta por:
- AuthServer Oauth 2.0 utilizando keycloack
- API de anameses
- WEB front 

## Dependencia

Esta aplicação se utiliza do docker e docker-compose para organizar suas peças.

## Rodando a aplicação

Para rodar a aplicação, basta rodar o código abaixo no em ./SRC

```bash
docker-compose up
```

## Desenvolvendo

Após a subida do docker, é possivel rodar cada aplicação individualmentee se atendar paras rotas.

## URLs

Após subir as peças via docker-compose
keycloack admin: http://127.0.0.1:8080/admin/master/console/

# Keycloack
https://marraia.medium.com/utiliza%C3%A7%C3%A3o-do-keycloak-em-aplica%C3%A7%C3%B5es-net-6-0-4a787520c85b