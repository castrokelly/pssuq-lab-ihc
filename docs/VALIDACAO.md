# Registro de validação e pendências

## Verificado nesta entrega

- Requisitos e datas lidos no material da disciplina; páginas 10–11 também renderizadas e conferidas visualmente.
- Regras PSSUQ v3 cruzadas com publicação do autor e orientação especializada.
- Estrutura Next.js/React, domínio TypeScript, esquema PostgreSQL e documentação escritos.
- Sintaxe de scripts Node e PowerShell conferida; JSONs válidos e links relativos Markdown sem alvos ausentes.
- Testes matemáticos executáveis com Node 24, sem instalação npm; 9 testes aprovados, 0 falhas, em Node.js 24.16.0.
- Ausência de formulário de coleta nesta base indicada no README, página inicial e protocolo.

## Ainda não validado

- Instalação das dependências, resolução efetiva/lockfile, typecheck e build Next.js: terminal sem resolução de rede para registry.npmjs.org.
- Migração e integração PostgreSQL: Docker/psql não disponíveis nesta sessão.
- Execução do script de publicação: GitHub CLI não instalado, navegador sem login e integração sem operação de criação.
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
