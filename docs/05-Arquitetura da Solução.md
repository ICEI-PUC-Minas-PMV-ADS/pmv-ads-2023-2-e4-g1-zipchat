# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![arquiteturaDeSolucao](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/80110034/bdc43d42-babe-498c-b4c3-0bb223a50c75)


## Diagrama de Classes

![diagrama](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/100283917/e4569ef4-f299-4b48-935b-70e9e6b7eb44)

# Documentação da Implementação do Banco de Dados Relacional

A escolha de um banco de dados relacional é fundamentada na necessidade de lidar com dados altamente estruturados e inter-relacionados, como as informações de usuários, consultas médicas e anamneses. Os RDBMS oferecem uma modelagem de dados robusta, garantindo integridade referencial, consistência em transações e facilitando consultas complexas. Essa abordagem é especialmente relevante para aplicações que demandam uma estrutura rígida e relacionamentos bem definidos entre entidades, proporcionando confiabilidade e precisão nos dados.

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

![zipchat](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/100283917/44552ae0-ced1-44d2-9b3e-4a12fdc653c2)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
![newDatabase](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/100283917/28df3652-8c78-4793-bd10-9b143c4be790)


## Documentação da Implementação do Banco de Dados NoSQL

A integração do MongoDB neste projeto se justifica pela flexibilidade que oferece em termos de esquema, essencial quando lidamos com anamneses cuja estrutura pode variar entre consultas médicas. A capacidade de armazenar dados sem um esquema fixo, a escalabilidade horizontal para lidar com grandes volumes de anamneses e a facilidade de uso com formatos de documentos BSON são fatores determinantes. O MongoDB é uma escolha adequada quando se busca agilidade no desenvolvimento, adaptação fácil a mudanças nos requisitos e integração eficiente com tecnologias que utilizam objetos JavaScript, como em ambientes Node.js.

![mongo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/100283917/b57a9daa-1b29-4ce4-b290-62dcbf32ca29)

## Modelo Físico

Arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados.
[Link para sript](../src/db/zipchat.sql)

## Contrato da api

Documentação da api (swagger).
[Link para doc](../src/doc-pdf-api/Swagger.pdf)



## Tecnologias Utilizadas

O coração desse projeto é a tecnologia .NET, uma estrutura poderosa desenvolvida pela Microsoft que fornece um ambiente robusto para o desenvolvimento de aplicativos. O uso do C#, uma linguagem de programação moderna e versátil, permite à equipe criar código eficiente e seguro.

O Entity Framework é uma escolha natural para esse projeto, já que oferece um mapeamento eficiente entre o modelo de dados e o banco de dados relacional SQL Server. Essa combinação permite que os desenvolvedores construam aplicativos escaláveis com facilidade, mantendo a integridade dos dados e a eficiência das consultas.

No entanto, este projeto vai além do SQL Server e incorpora a flexibilidade do NoSQL com o MongoDB. A capacidade de armazenar e recuperar dados não estruturados e sem esquema pré-definido torna o MongoDB uma opção ideal para casos de uso onde a adaptabilidade é fundamental.

A equipe de desenvolvimento também optou por utilizar tecnologias de front-end modernas para oferecer uma experiência de usuário excepcional. O React Native, uma estrutura de desenvolvimento de aplicativos móveis, permite que a equipe crie aplicativos nativos para iOS e Android a partir de uma única base de código. Isso acelera o desenvolvimento e economiza recursos significativamente.

Além disso, para o desenvolvimento de interfaces web dinâmicas e responsivas, o React é a tecnologia escolhida. A combinação de React Native e React garante uma consistência na experiência do usuário em dispositivos móveis e desktop.

## Estilo arquitetural do projeto

### Documento de Arquitetura:
Na condução de nosso projeto, adotamos a arquitetura conhecida como Domain Driven Design - DDD. Optamos por esse estilo por sua capacidade única de integrar princípios eficazes de design e desenvolvimento. Ao proporcionar abordagens tanto estratégicas quanto táticas de modelagem, o DDD se revela uma escolha valiosa para a entrega de software de excelência. Inerente aos seus princípios, o DDD promove a colaboração, a escuta atenta e a compreensão, refletindo um esforço contínuo para centralizar e compartilhar o conhecimento.

A arquitetura da API é inspirada no DDD, onde o domínio da aplicação é o ponto focal. O modelo de domínio é dividido em agregados, entidades, objetos de valor e serviços de domínio. As interações com o domínio são gerenciadas por controladores que traduzem as solicitações HTTP para comandos e consultas do domínio.

A arquitetura adota os seguintes padrões:

- DDD: Foco no desenvolvimento em torno do domínio da aplicação.
- CQRS (Command Query Responsibility Segregation): Separação de responsabilidades entre comandos e consultas para otimização de leitura e gravação.

Camadas e Componentes:

- Camada de Apresentação (Controllers): Responsável por receber e responder a solicitações HTTP.
- Camada de Aplicação: Coordena a execução de casos de uso, traduzindo entre a camada de apresentação e a camada de domínio.
- Camada de Domínio: Contém entidades, agregados, objetos de valor e serviços de domínio.
- Camada de Infraestrutura: Implementa serviços técnicos como repositórios, serviços externos, etc.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

A escolha dessas sub-características foi orientada pela necessidade de assegurar uma experiência de usuário robusta e eficiente na aplicação distribuída do chatbot. Essas métricas refletem a busca por um produto que atenda às expectativas dos usuários e mantenha altos padrões de qualidade em todas as facetas da aplicação.

|     Subcaracterísticas  |    justificativa    |
|--------------------|---------------------------------------|
| Funcionalidade | A correta compreensão das intenções dos usuários é crucial para fornecer respostas precisas. Uma alta taxa de compreensão reflete a eficácia do chatbot em entender as necessidades dos usuários, garantindo uma interação útil e satisfatória.  |
| Confiabilidade | A confiabilidade do chatbot é essencial para manter uma experiência de usuário sem interrupções. Uma alta taxa de resolução de problemas sem falhas contribui para a confiança do usuário no sistema, evitando frustrações e garantindo uma interação suave.  |
| Usabilidade | A usabilidade é um fator-chave na aceitação do chatbot pelos usuários. A taxa de engajamento reflete a capacidade do chatbot em manter os usuários interessados e envolvidos durante toda a conversa, contribuindo para uma experiência positiva. |
| Eficiência de Desempenho | O tempo de resposta do chatbot é crítico para a satisfação do usuário. Uma resposta rápida indica eficiência, mantendo os usuários engajados. A escala permite avaliar se o desempenho atende às expectativas e se há espaço para melhorias.  |
| Adaptabilidade | Com a aplicação distribuída utilizando diferentes tecnologias front-end, a adaptabilidade é crucial. A métrica de compatibilidade com dispositivos front-end reflete a capacidade do chatbot de oferecer uma experiência consistente em ambas as plataformas (Expo e React), garantindo uma interação eficaz em diferentes contextos.  |
| Desempenho |  O desempenho geral do sistema é determinante para a eficiência da aplicação distribuída. A métrica de tempo de resposta do sistema avalia não apenas o chatbot, mas também a integração com APIs externas, como a do Chat GPT, assegurando uma experiência ágil e responsiva para os usuários em todas as operações. |


|     Subcaracterísticas  |    Métrica    | Escala    |
|--------------------|-----------------|-------------------------|
| Funcionalidade | capacidade do chatbot em entender corretamente as intenções dos usuários. | 1. Compreensão insatisfatória. 2. Compreensão parcial. 3. Compreensão aceitável. 4. Excelente compreensão.  |
| Confiabilidade | capacidade do chatbot em resolver problemas sem interrupções inesperadas. | 1. Resolução problemática. 2. Resolução com algumas falhas. 3. Resolução eficaz. 4. Resolução sem interrupções.  |
| Usabilidade | eficácia do chatbot em manter o engajamento do usuário ao longo da conversa. | 1. Baixo engajamento. 2. Engajamento moderado. 3. Alto engajamento. 4. Engajamento excepcional.  |
| Eficiência de Desempenho | eficiência do chatbot em responder rapidamente às consultas dos usuários. | 1. Tempo de resposta inaceitavelmente. 2. Tempo de resposta aceitável. 3. Resposta rápida. 4.Resposta instantânea.  |
| Adaptabilidade | capacidade do chatbot de se adaptar a diferentes dispositivos front-end. | 1.  Baixa adaptabilidade. 2. Adaptabilidade moderada. 3. Alta adaptabilidade. 4.Excelente adaptabilidade.  |
| Desempenho | tempo total necessário para que o sistema responda a uma solicitação, considerando tanto a resposta do chatbot quanto a integração com APIs externas, como a API do Chat GPT. | 1.   Desempenho inaceitavelmente. 2. Desempenho aceitável. 3.Bom desempenho. 4.Excelente desempenho.  |
