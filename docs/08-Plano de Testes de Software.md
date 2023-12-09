# Plano de Testes de Software

| **Caso de Teste** 	| **CT-01 – Registrar histórico do paciente** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-007 - Registrar o histórico de conversas do paciente |
| Objetivo do Teste 	| Verificar inserção dos dados informados pelo paciente no banco de dados. |
|Critério de Êxito | Persistência dos dados no BD  |

| **Caso de Teste** 	| **CT-002 – Ausência de campo obrigatório** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-007 - Registrar o histórico de conversas do paciente |
| Objetivo do Teste 	| Verificar se será lançado uma exceção ao tentar inserir uma anamnese faltando os simtomas |
|Critério de Êxito | Lançamento de exceção  |

| **Caso de Teste** 	| **CT-003 – Coletar informações do paciente** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-003 - Coletar informações médicas básicas do paciente |
| Objetivo do Teste 	| Verificar recuperação dos dados no banco através de um ID |
|Critério de Êxito | Recuperação das informações no BD  |

| **Caso de Teste** 	| **CT-004 - Passar um id inexistente para coletar as informações** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-003 - Coletar informações médicas básicas do paciente |
| Objetivo do Teste 	| Verificar se será lançado uma exceçã |
|Critério de Êxito | Recuperação das informações no BD  |

| **Caso de Teste** 	| **CT-005 - Ultrapassar limite de caracteres (100) ** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-004 - Analisar as respostas do paciente e fazer recomendações |
| Objetivo do Teste 	| Verificar se será lançado a exceção personalizada "ExceededCharacterLimitException" |
|Critério de Êxito | Lançamento da exceção "ExceededCharacterLimitException" com a mensagem: "O campo sintomas excedeu o limite de caracteres permitido"  |

# Plano de Testes ponta a ponta (Sistema web e mobile)

1 - Testar toda a funcionalidade de cadastro

2 - Testar toda a funcionalidade de login

3 - Testar questionamento ao chat GPT

4 - Testar funcionalidade "Esqueceu sua senha"

# Registro do teste de vulnerabilidade com a tecnologia ZAP
