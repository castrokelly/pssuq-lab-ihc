**PONTIFÍCIA UNIVERSIDADE CATÓLICA DO PARANÁ**<br>
PPGIa — Programa de Pós-Graduação em Informática<br>
Mestrado · 2026/02

# Registro de validação e pendências

**Equipe:** [integrantes e contatos institucionais](../README.md#equipe).

## Verificado nesta entrega

- Requisitos e datas lidos no material da disciplina; páginas 10–11 também renderizadas e conferidas visualmente.
- Regras PSSUQ v3 cruzadas com publicação do autor e orientação especializada.
- Estrutura Next.js/React, domínio TypeScript, esquema PostgreSQL e documentação escritos.
- Sintaxe de scripts Node e PowerShell conferida; JSONs válidos e links relativos Markdown sem alvos ausentes.
- Testes matemáticos executáveis com Node 24, sem instalação npm; 9 testes aprovados, 0 falhas, em Node.js 24.16.0.
- Em 12/11/2026, instalação npm concluída e package-lock.json gerado; npm run check aprovou os 9 testes, a verificação de tipos e o build Next.js 16.4.6.
- Servidor de desenvolvimento iniciado em http://127.0.0.1:3000; página inicial respondeu com HTTP 200 e incluiu a identificação institucional. A inspeção visual no Chrome não foi realizada por falta de autorização do controle do aplicativo.
- Ausência de formulário de coleta nesta base indicada no README, página inicial e protocolo.

## Ainda não validado

- Migração e integração PostgreSQL: não executadas nesta preparação da página inicial.
- Execução do script de criação/publicação: não realizada; o repositório já existente foi publicado pelo fluxo Git normal.
- Formulário canônico: 16 textos ainda precisam de conferência literal e importação.
- Gestão de estudos, autenticação, coleta, painel e exportação: escopo futuro do MVP, não implementado.

## Testes de aceite a executar durante o desenvolvimento

| Caso | Resultado esperado |
|---|---|
| Todos os itens 1 / todos 7 | Quatro escores 1 / 7 |
| Alterar somente item 16 | Apenas geral muda |
| NA e branco | Não entram na média; contagens permanecem distintas |
| Sem números em um fator | Resultado indisponível e n = 0 |
| Valor 0/8/fração/string numérica | Servidor rejeita |
| Reenvio do mesmo token | Uma submissão, confirmação idempotente |
| Estudo encerrado | Novo envio rejeitado sem alterar dados |
| Sessão com erro no INSERT | Rollback; nenhuma submissão parcial |
| Dois envios concorrentes | Uma submissão consistente |
| Pesquisador de outro estudo | Acesso e exportação negados |
| Exportar e recalcular | Escores coincidem, com precisão preservada |
| Teclado e dispositivo móvel | Formulário utilizável e erros compreensíveis |

## Revisão técnica independente recomendada

Outro membro deve reproduzir os exemplos com cálculo manual ou planilha. Os testes do motor reduzem erros matemáticos; não comprovam validade de tradução, execução real de tarefas ou qualidade da coleta.
