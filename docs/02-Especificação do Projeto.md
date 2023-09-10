# Especificações do Projeto

 A seguir, será apresentada de forma abrangente as técnicas e ferramentas empregadas para estruturar o projeto, segmento, este, que desempenha um papel crítico no sucesso da solução.
 
- Personas e Histórias de Usuários: Iniciando pelo entendimento das necessidades e expectativas dos usuários por meio da criação de personas e histórias de usuário, com intuito de construir soluções mais reais às demandas do público-alvo.
- Modelagem de Processo de Negócio: É realizado uma modelagem detalhada dos processos de negócio envolvidos para a identificação de áreas de melhoria.
- Indicadores de Desempenho: Estabelecido indicadores de desempenho para medir o progresso e a eficácia do projeto.
- Requisitos: É documentado de forma completa e detalhada os requisitos funcionais e não funcionais do projeto, base para o desenvolvimento e a implementação da solução.
- Matriz de Rastreabilidade: Para garantir que cada requisito esteja vinculado a um elemento específico do projeto, como funcionalidades, testes e documentação.
- Gerenciamento do Projeto: Por último, é feito o gerenciamento de projeto para supervisionar e controlar o progresso, os recursos e os cronogramas do projeto.
  
## Personas

|    `Nome`: Joana Santos Cardoso  | `Profissão`: Professora de Matemática     |     `Idade`: 64 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="250" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-proj-bibliosync/assets/103579574/49cfcc5e-e06d-407f-a916-0c261cf68869">| `Motivações`: <br>  Querer um direcionamento sobre sintomas. <br> <br>  Querer um direcionamento para médicos <br> <br> Atendimento específico e exclusivo.   |  `Frustrações`: <br>  Atraso do médico nas consultas  <br> <br> Demora ao ter uma primeira resposta sobre seu problema. <br><br>                    
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Adora assistir filmes <br><br> Gosta de passear ao Ar livre<br><br> Momentos em família <br> <br>     | Joana é professora de matemática,  que foi diagnosticada com hipertensão arterial,  <br> uma condição que requer medicação e mudanças no estilo de vida, como uma dieta com baixo teor de sódio e exercícios regulares.  <br>            | Organizada <br><br> Extrovertida <br><br> Esforçada<br>   |


|    `Nome`: Rafael Fernandes Rocha  | `Profissão`: Desenvolvedor Mobile   |     `Idade`: 28 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="250" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-proj-bibliosync/assets/103579574/aea66113-9f26-45c4-bc7e-e5af89014a0a">| `Motivações`: <br> Otimizar tempo <br> <br> Ter um site com um direcionamento médico. |  `Frustrações`: <br>   Perder tempo telefonando para clínicas. <br> <br> Dificuldade no direcionamento de um caso.      
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Jogar Games  <br><br> Família e Amigos <br><br> Conhecer tecnologias novas <br> <br>        | Rafael é um desenvolvedor focado<br> que foi diagnosticado recentemente com diabetes tipo 1. Ele está aprendendo a gerenciar sua dieta e níveis de açúcar no sangue enquanto equilibra seu trabalho em tempo integral e a vida em família.    <br>        | Intuitivo <br><br> Introvertido <br><br> Metódico  <br>    |


|    `Nome`: Marcelo de Lima Henrique | `Profissão`: Motorista         |     `Idade`: 54 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="250" alt="image" src="https://user-images.githubusercontent.com/100283917/189008834-552789bd-d695-44eb-80f3-22b56fe5610e.jpg">| `Motivações`: <br>  Se cuidar mais <br> <br> Atendimento ágil  <br> <br> Facilidade de comunicação com hospital |  `Frustrações`: <br>   Ter de ir a hospitais muitas vezes <br> <br> Dificuldade na locomoção <br><br> Longa espera para o atendimento            
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Ler <br><br> Pesca <br><br> Momentos em família <br> <br>        | Marcelo é motorista e sofre com princípios de trombose<br> Devido a ficar muito tempo sentado no caminhão, MArcelo desenvolveu trombose nas suas pernas. <br>        | Esforçado <br><br> Comunicativo <br><br> Determinado  <br>    |

|    `Nome`: Laura Ferreira Cabral | `Profissão`: Jornalista       |     `Idade`: 27 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="250" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-dad-t3-projeto/raw/main/docs/img/people_images/ddddd.jpg">| `Motivações`: <br>  Se cuidar mais <br> <br> Atendimento ágil  <br> <br> Facilidade de comunicação com hospital |  `Frustrações`: <br>   Esquecimento da data de marcação  <br> <br> Longa espera para o atendimento            
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Fotografia  <br><br> Leitura<br><br> Conversar com as pessoas <br> <br>        | Laura é jornalista que sofre de depressão desde a adolescência. <br>  Ela está em tratamento psicológico e toma medicamentos para ajudar a gerenciar seus sintomas.  <br>        | Extroverdita <br><br> Disciplinada <br><br> Educada <br>    |

|    `Nome`: Carolina Almeida de Souza | `Profissão`: Assistente Social      |     `Idade`: 29 Anos    |
|--------------------|------------------------------------|----------------------------------------|
| <img width="250" alt="image" src="https://user-images.githubusercontent.com/13721147/194158525-bbc9cf21-13af-47a7-ba23-97f21870d676.png">| `Motivações`: <br>  Se cuidar mais <br> <br> Atendimento ágil  <br> <br> Facilidade de comunicação com hospital |  `Frustrações`: <br>   Ter de ir a hospitais muitas vezes <br> <br> Falta de tempo <br><br> Longa espera para o atendimento            
|  `Hobbies`: |   `História`:  | `Personalidade`:  |
| <br> Ler  <br><br> Atividades ao ar livre<br><br> Culinária <br> <br>        | Carolina é assistente social e sofre com asma desde a infância. <br> Ela pratica esportes, mas deve tomar precauções extras e ter um plano de ação em caso de crises de asma.   <br>        | Esforçada <br><br> Resiliente <br><br> Organizada  <br>    |

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:


|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Joana Santos     | Eficiencia e agilidade ao ter um direcionamento médico| Agilizar a ter uma anamnese  |
|Joana Santos     | Atendimento específico | Sair com rapidez |
|Rafael Fernandes | Visuailzar qual médico devo procurar | Consultar sobre um problema. |
|Marcelo de Lima  | Rapidez em uma consulta | Ser atendido no horário específico |
|Laura Cabral     | Visualizar a marcação de consultas e exames | Evitar esquecimento de datas |
|Carolina Almeida | Consultas a distância | Otimizar seu tempo |

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

Indicadores de desempenho da aplicação medem além de inicadores de infraestrutura quanto de acertividade.

<img width="1292" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/3579780/02889ad5-4f1d-4a73-b201-1a60adfa77d9">


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
|01|O chatbot deve estar em conformidade com todas as regulamentações médicas aplicáveis.|
|03|O aplicativo deve responder às ações do usuário em até 20 segundos|


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![Caso de Uso ZipChat](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/58198111/ac186104-2deb-40f4-a9f0-b98cdcb2a881)

# Matriz de Rastreabilidade

A Matriz de Rastreabilidade de Requisitos é uma ferramenta crucial no desenvolvimento de projetos, assegurando a coesão entre requisitos e soluções implementadas. Na planilha está destacada a interligação entre requisitos funcionais e não funcionais. Ao mapear essas conexões, obtemos clareza sobre dependências, impactos e garantimos que o projeto atenda consistentemente às demandas estabelecidas. 

![matriz](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/100283917/99d71817-fd12-4c97-abc5-92d5d49ce6c3)

# Gerenciamento de Projeto

Para gerenciar as tarefas foi criado um quadro de atividades no github.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/58198111/0d74aeba-838b-4f2d-b32c-453365cd1373)


## Gerenciamento de Tempo

Cronograma do projeto

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/58198111/22b2a346-91a9-4e9b-b884-16175106c311)


## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

|    | |Agosto    | Setembro  | Setembro | Outubro | Novembro |
|------|-----------------------------------------|----|
|Data de Entrega| 01/08/23 a 03/09/23	 | 04/09/23 a 01/10/23 | 02/10/23 a 29/10/23	| 30/10/23 a 26/11/23 |
|Equipe de Gestão	| Documento de Contexto		 |  | 	|  |
|Equipe Back		| 		| Implementação da API	 | 	|  |
|Equipe Front			| 		| 	 | 	Projeto e implementação da interface Web	| Projeto e implementação da interface Mobile|

## Gestão de Orçamento

O orçamento foi planejado levando em consideração 5 meses de projeto com uma equipe enxuta e adicionando uma reserva de gastos de 12 %, para ser utilizada por exemplo em caso de horas extras.

<img width="389" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-g1-zipchat/assets/3579780/a5d6bf49-d84d-4ff8-9f3a-883b8742a518">

