# Especificações do Projeto

 A seguir, será apresentada de forma abrangente as técnicas e ferramentas empregadas para estruturar o projeto, segmento, este, que desempenha um papel crítico no sucesso da solução.
 
- Personas e Histórias de Usuários: Iniciando pelo entendimento das necessidades e expectativas dos usuários por meio da criação de personas e histórias de usuário, com intuito de construir soluções mais reais às demandas do público-alvo.
- Modelagem de Processo de Negócio: É realizado uma modelagem detalhada dos processos de negócio envolvidos para a identificação de áreas de melhoria.
- Indicadores de Desempenho: Estabelecido indicadores de desempenho para medir o progresso e a eficácia do projeto.
- Requisitos: É documentado de forma completa e detalhada os requisitos funcionais e não funcionais do projeto, base para o desenvolvimento e a implementação da solução.
- Matriz de Rastreabilidade: Para garantir que cada requisito esteja vinculado a um elemento específico do projeto, como funcionalidades, testes e documentação.
- Gerenciamento do Projeto: Por último, é feito o gerenciamento de projeto para supervisionar e controlar o progresso, os recursos e os cronogramas do projeto.
  
## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

## Personas

|    `Nome`: Joana Santos Cardoso  | `Profissão`: Médica Cardiologista        |     `Idade`: 64 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="250" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-proj-bibliosync/assets/103579574/49cfcc5e-e06d-407f-a916-0c261cf68869">| `Motivações`: <br>  Organização no agendamento de pacientes <br> <br>  Facilidade para consultar agendamentos do dia  <br> <br> Facilidade na marcação de pacientes   |  `Frustrações`: <br>  Desorganização de agenda  <br> <br> Falta de facilidade na confirmação dos agendamentos <br><br>                    
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Adora assistir filmes <br><br> Gosta de passear ao Ar livre<br><br> Momentos em família <br> <br>     | Joana é  médica cardiologista,   que preza pela boa <br> organizaçãoela é uma especialista que visa economizar tempo em suas marcações de pacientes  <br>            | Organizada <br><br> Extrovertida <br><br> Esforçada<br>   |


|    `Nome`: Rafael Fernandes Rocha  | `Profissão`: Desenvolvedor Mobile   |     `Idade`: 28 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="250" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-proj-bibliosync/assets/103579574/aea66113-9f26-45c4-bc7e-e5af89014a0a">| `Motivações`: <br>  Otimizar tempo <br> <br> Ter um site para conferir marcações  <br> <br> Facilidade na marcação de consultas |  `Frustrações`: <br>   Perder tempo telefonando para clinicas <br> <br> Dificuldade na confirmação do agendamento <br><br> Esquecimento da data de marcação            
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Jogar Games  <br><br> Ouvir música livre<br><br> Conhecer tecnologias novas <br> <br>        | Rafael é um desenvolvedor focado<br> durante sue horario de trabalho, ele se preocupa com a saúde <br>mas acaba indo pouco ao médico por falta de organização    <br>        | Intuitivo <br><br> Introvertido <br><br> Metódico  <br>    |


|    `Nome`: Marcelo de Lima Henrique | `Profissão`: Motorista         |     `Idade`: 48 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="250" alt="image" src="https://user-images.githubusercontent.com/100283917/189008834-552789bd-d695-44eb-80f3-22b56fe5610e.jpg">| `Motivações`: <br>  Se cuidar mais <br> <br> Atendimento ágil  <br> <br> Facilidade de comunicação com hospital |  `Frustrações`: <br>   Ter de ir a hospitais muitas vezes <br> <br> Dificuldade na locomoção <br><br> Longa espera para o atendimento            
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Ler  <br><br> Pesca<br><br> Momentos em família <br> <br>        | Marcelo é motorista e sofre com osteoporose<br> Devido a doença têm mobilidade reduzida e precisa de <br>cuidados no dia a dia, tornando difícil ir a hospitais   <br>        | Esforçado <br><br> Comunicativo <br><br> Determinado  <br>    |

|    `Nome`: Laura Ferreira Cabral | `Profissão`: Jornalista       |     `Idade`: 30 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="250" alt="image" src="img/people_images/ddddd.jpg">| `Motivações`: <br>  Se cuidar mais <br> <br> Atendimento ágil  <br> <br> Facilidade de comunicação com hospital |  `Frustrações`: <br>   Ter de ir a hospitais muitas vezes <br> <br> Dificuldade na locomoção <br><br> Longa espera para o atendimento            
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Fotografia  <br><br> Leitura<br><br> Conversar com as pessoas <br> <br>        | Laura é jornalista e sofre com osteoporose<br> Devido a doença têm mobilidade reduzida e precisa de <br>cuidados no dia a dia, tornando difícel ir a hospitais   <br>        | Extroverdita <br><br> Disciplinada <br><br> Educada <br>    |

|    `Nome`: Carolina Almeida de Souza | `Profissão`: Assistente Social      |     `Idade`: 27 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="250" alt="image" src="https://user-images.githubusercontent.com/100283917/189008834-552789bd-d695-44eb-80f3-22b56fe5610e.jpg">| `Motivações`: <br>  Se cuidar mais <br> <br> Atendimento ágil  <br> <br> Facilidade de comunicação com hospital |  `Frustrações`: <br>   Ter de ir a hospitais muitas vezes <br> <br> Dificuldade na locomoção <br><br> Longa espera para o atendimento            
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Ler  <br><br> Atividades ao ar livre<br><br> Culinária <br> <br>        | Carolina é assistente social e sofre com osteoporose<br> Devido a doença têm mobilidade reduzida e precisa de <br>cuidados no dia a dia, tornando difícel ir a hospitais   <br>        | Esforçada <br><br> Resiliente <br><br> Organizada  <br>    |



Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Atualmente, na área da saúde, especialmente na coleta de informações médicas através de anamneses, há diversas limitações e desafios que afetam a eficácia e a qualidade das interações. Alguns desses problemas: 

- Complexidade das informações: Chatbot tem dificuldade de lidar e compreender com essa complexidade.
- Falta de contexto: Sem um contexto adequado leva à respostas genéricas.

### Descrição Geral da Proposta

Esta projeto visa abordar os problemas mencionados na documentação de Contexto, fornecendo uma solução abrangente e eficaz por meio do desenvolvimento de um chatbot integrado com ima OPENAI. Além disso, a proposta do projeto visa se alinha com as estratégias e objetivos do setor de saúde, que buscam melhorar a eficiência e a qualidade dos processos de coleta de informações médicas. 

### Processo 1 – LogON

Implementar a autenticação multifatorial é uma das maneiras mais eficazes de aumentar a segurança de um processo de logon. 

![Capturar](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/100283917/ace61a35-9565-4a52-a0c2-d2f214f1bf80)

### Processo 2 – LogIn

![Capturar2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/100283917/c6508f76-58df-4cf6-87db-62f90ab20264)

### Processo 3 – Chat - Anamnese

Em vez de apenas formular perguntas com base nas respostas da OPENAI, o chatbot pode ser aprimorado para personalizar as perguntas com base no histórico médico anterior do paciente.

![chat](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/100283917/23ca59d6-f01a-4fe6-b7fa-4756a3c6a306)


## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário faça login ou se cadastre	 | ALTA | 
|RF-002| Apresentar uma interface semelhante ao WhatsApp	 | ALTA | 
|RF-003| Coletar informações médicas básicas do paciente | ALTA | 
|RF-004| Analisar as respostas do paciente e fazer recomendações	| ALTA | 
|RF-005| Direcionar o paciente para a especialidade médica ou emergência. | MÉDIA | 
|RF-006| Agendar consultas médicas para o paciente | MÉDIA | 
|RF-007| Registrar o histórico de conversas do paciente | BAIXA | 
|RF-008| Disponibilizar opção para o paciente sair do chatbot	 | Baixa | 
|RF-009| Gerar relatorio da Anamnese para o usuario| Alta | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| Deve manter a privacidade e segurança das informações médicas dos pacientes |  ALTA | 
|RNF-004| Deve ser possível integrar o chatbot com sistemas externos, como ou sistemas de agendamento de consultas.| Baixa| 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02|O chatbot deve estar em conformidade com todas as regulamentações médicas aplicáveis.|
|03|O projeto só pode ser considerado concluído após a aprovação do usuário final, que pode ser obtida por meio de pesquisas de satisfação e feedback.|

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![Caso de Uso ZipChat](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/58198111/ac186104-2deb-40f4-a9f0-b98cdcb2a881)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
