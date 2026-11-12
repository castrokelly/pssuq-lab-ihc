**PONTIFÍCIA UNIVERSIDADE CATÓLICA DO PARANÁ**<br>
PPGIa — Programa de Pós-Graduação em Informática<br>
Mestrado · 2026/02

# Planejamento de desenvolvimento — PSSUQ Lab

**Disciplina:** Fundamentos da Interação Humano-Computador · PPGIa/PUCPR
**Professor:** Dr. Leo Natan Paschoal
**Planejamento elaborado em:** 11/11/2026 · **Início previsto da execução:** 23/10/2026 (23 de outubro) · **Entrega final:** 11/12/2026

**Repositório de código e documentação:** [castrokelly/pssuq-lab-ihc](https://github.com/castrokelly/pssuq-lab-ihc).

**Equipe:**

| Integrante | E-mail institucional |
|---|---|
| Andrey Nery Lima Bonat | [andrey.lima@pucpr.edu.br](mailto:andrey.lima@pucpr.edu.br) |
| Gotardo Campara | [gotardo.campara@pucpr.edu.br](mailto:gotardo.campara@pucpr.edu.br) |
| Kelly Christine Alvarenga de Castro | [christine.kelly@pucpr.edu.br](mailto:christine.kelly@pucpr.edu.br) |

## 1. Proposta

Desenvolver uma aplicação web para conduzir avaliações de usabilidade percebida com o PSSUQ versão 3, cobrindo o ciclo estudo → sessão de uso → questionário → análise → exportação. O instrumento foi escolhido porque oferece um resultado geral e três dimensões úteis para investigar onde a experiência de uso exige melhorias.

A ferramenta gerencia a avaliação de um sistema escolhido pelo pesquisador; o PSSUQ não é o sistema avaliado. O participante primeiro usa esse sistema em tarefas previamente definidas e, ao final da sessão, responde ao instrumento considerando o conjunto das tarefas. Não é um questionário de opinião aplicado sem uso anterior.

Este documento é um plano com base técnica inicial. Sua conclusão depende da implementação e dos testes descritos no backlog; não registra funcionalidades planejadas como prontas.

## 2. O que o professor efetivamente exige

Fonte: “Apresentação da Disciplina.pdf”, páginas 10 e 11; calendário complementar na página 13.

| ID | Exigência | Entrega e evidência de atendimento |
|---|---|---|
| D01 | Grupo de três pessoas e instrumento escolhido e justificado | Equipe identificada e justificativa metodológica neste plano |
| D02 | Criar e gerenciar estudos | Criar, editar rascunho, abrir, encerrar e arquivar estudo; lista por pesquisador |
| D03 | Aplicar instrumento e coletar respostas | Link do estudo, registro de sessão, questionário canônico e persistência |
| D04 | Calcular conforme o protocolo | Motor de cálculo versionado, casos manuais e testes automatizados |
| D05 | Analisar e visualizar resultados | Escores geral e por fator; estatísticas descritivas; gráficos e tabela acessível |
| D06 | Exportar os dados coletados | CSV com respostas brutas, escores e metadados; JSON para reprodução |
| D07 | Next.js, React e PostgreSQL | Aplicação real nessas tecnologias; banco relacional persistente |
| D08 | Código no GitHub e acompanhamento | Commits progressivos, issues, revisões e evidências de feedback |
| D09 | Apresentação final | Explicar instrumento e arquitetura, demonstrar ao vivo e apresentar código |
| D10 | Critérios de avaliação | Fidelidade, gestão de coleta/análise, arquitetura/código, usabilidade e apresentação |

O projeto corresponde a **40%** da avaliação. A fase 1 está prevista no cronograma para **23/10/2026**, marco inicial da execução: proposta, trio, instrumento, justificativa e escopo, a apresentar para feedback. Como esse marco antecede a elaboração deste documento, o grupo deverá conferir os registros do que foi executado e registrar eventuais ajustes; a data planejada não comprova a conclusão da fase.

As páginas 10–11 não fixam número mínimo de participantes, duração da apresentação, provedor de hospedagem, ORM, biblioteca de gráficos ou autenticação específica. Essas decisões abaixo são propostas de engenharia do grupo. A exigência CC BY-SA para REAs aparece na página 8; aqui a adoção da licença também atende ao pedido explícito do grupo.

## 3. Escopo do MVP

**Pesquisador:** entrar na área de gestão; criar estudo com título, objetivo, sistema/versão avaliada, população, tarefas, instruções e idioma; abrir e encerrar coleta; acompanhar sessões; analisar e exportar somente seus estudos.

**Participante:** acessar link com token; ler informações do estudo; realizar as tarefas no sistema avaliado; registrar término da sessão de uso; responder aos 16 itens, com NA e possibilidade de deixar item em branco; revisar e enviar uma única submissão.

**Analista:** consultar total de submissões, total de pessoas com escore calculável em cada escala, cobertura por item, médias e dispersão; inspecionar distribuição 1–7 e quantidade de NA/ausências; exportar dados que permitam recalcular tudo.

Fora do MVP: múltiplos instrumentos, editor de itens do PSSUQ, IA para interpretar resultados, ranking universal de produtos, testes de hipóteses automáticos, comparações pareadas complexas, recuperação avançada de senha e aplicativos móveis nativos. Uma comparação experimental entre versões pode ser extensão futura, mediante delineamento próprio.

## 4. Decisões metodológicas obrigatórias

- Fixar **PSSUQ v3, 16 itens**; preservar redação, ordem e contexto de aplicação.
- Preservar escala original: **1 = concordo totalmente; 7 = discordo totalmente**. A opção NA é separada e não é o oitavo ponto da escala.
- Aplicar uma vez ao final do conjunto de tarefas da sessão. ASQ é outro instrumento, adequado a cenários individuais.
- Geral: média dos itens 1–16; SysUse: 1–6; InfoQual: 7–12; IntQual: 13–15. O item 16 participa apenas do geral.
- Calcular com respostas numéricas disponíveis; NA e branco não entram no numerador nem no denominador; zero respostas numéricas produz resultado indisponível.
- Não inverter itens, somar como SUS, transformar em porcentagem ou atribuir aprovação por ponto de corte.
- Registrar a origem do texto e seu idioma. No MVP, usar itens canônicos em inglês e participantes que compreendam inglês; a interface de gestão pode ser em português.
- Uma tradução própria para português brasileiro exige processo de adaptação documentado e não pode ser chamada de versão validada. A validação em português europeu localizada usa 19 itens, portanto não é intercambiável com a v3.
- Guardar versão do instrumento, idioma, hash do texto e versão do algoritmo em cada coleta. Alterações após abertura exigem novo estudo.

Detalhamento e tratamento de situações especiais: [protocolo](PROTOCOLO_PSSUQ.md). Fontes: [F01–F07](FONTES.md).

## 5. Arquitetura proposta

| Camada | Tecnologia | Responsabilidade |
|---|---|---|
| Interface | React dentro do Next.js | Gestão, formulário acessível e painéis |
| Aplicação | Next.js App Router / Route Handlers | Autorização, validação, transações e exportação |
| Domínio | TypeScript puro | Escores, cobertura e estatísticas; sem dependência de UI/banco |
| Persistência | PostgreSQL + driver pg | Estudos, sessões, itens respondidos e snapshots |
| Qualidade | Node test runner + TypeScript + CI | Regressões matemáticas, integridade e compilação |

O driver pg e SQL versionado foram escolhidos para reduzir a quantidade de ferramentas. Prisma é alternativa possível, não obrigação. As versões resolvidas devem ser congeladas em package-lock.json na primeira instalação com rede.

A hospedagem de código será no repositório [castrokelly/pssuq-lab-ihc](https://github.com/castrokelly/pssuq-lab-ihc), já criado no GitHub. Em 12/11/2026, Kelly definiu a **DigitalOcean** como provedor de publicação da plataforma e **pssuq.org** como domínio pretendido, com origem canônica pretendida **https://pssuq.org**. A modalidade proposta é App Platform para Next.js/React com PostgreSQL gerenciado, sujeita à definição do serviço, região e orçamento. A publicação efetiva, o controle do domínio e o DNS ainda não foram verificados. O [registro de publicação](PUBLICACAO_DIGITALOCEAN.md) detalha a preparação. A demonstração local com Docker permanece como contingência.

## 6. Modelo de dados e integridade

Entidades: usuário pesquisador → estudos → sessões → respostas por item; cada estudo referencia um snapshot do instrumento. Cada sessão tem um token não previsível, armazenado como hash, e uma submissão final idempotente.

Itens usam número 1–16, estado ANSWERED/NA/MISSING e valor inteiro apenas em ANSWERED. A chave composta sessão + item impede duplicatas. A aplicação deve inserir exatamente 16 registros por submissão, em transação; a restrição de 16 respostas e a imutabilidade após submissão devem ser verificadas também por teste de integração.

Respostas brutas são a fonte de verdade. Escores podem ser derivados na consulta; se houver cache, guardar versão do algoritmo e invalidá-lo corretamente. Não armazenar somente médias. Identificação pessoal não é necessária para o MVP; usar código aleatório de sessão. Uma pessoa pode gerar nova sessão se o link for aberto e anônimo: declarar essa limitação em vez de prometer deduplicação de pessoas.

## 7. Responsabilidades sugeridas

A divisão é uma proposta operacional; não pressupõe competências ou acordos prévios dos membros. Os primeiros nomes nas tabelas de responsabilidades e no cronograma correspondem aos integrantes identificados acima; “Trio” designa a equipe completa.

| Frente | Responsável principal | Revisor | Resultado esperado |
|---|---|---|---|
| Interface do pesquisador e participante | Andrey | Kelly | Fluxos claros, formulários e acessibilidade |
| API, autenticação, PostgreSQL e exportação | Gotardo | Andrey | Persistência, isolamento e integridade |
| Protocolo, análise, evidências e apresentação | Kelly | Gotardo | Fidelidade, estatísticas e documentação |
| Motor de escores e revisão dos itens | Kelly + Gotardo | Andrey | Cálculos e texto conferidos por duas pessoas |
| Integração, teste de uso e demonstração | Trio | Trio | Fluxo completo reproduzível |

Cada issue deve ter um responsável real, um revisor, critérios de aceite e evidências. Não convidar colaboradores no GitHub sem conhecer seus nomes de usuário; os primeiros nomes não identificam contas com segurança.

## 8. Cronograma de execução de 23/10 a 11/12/2026

O início previsto da execução é **23 de outubro de 2026**. As etapas abaixo são marcos de planejamento; as anteriores à elaboração deste documento dependem de confirmação pelos registros do grupo.

| Período | Entrega verificável | Liderança | Marco |
|---|---|---|---|
| 23/10 | Proposta, trio, instrumento, justificativa e escopo para feedback | Trio | Início previsto da execução e fase 1 |
| 24/10–11/11 | Detalhamento do protocolo, arquitetura, backlog e wireframes | Trio | Incorporar feedback da fase 1 e preparar a base técnica |
| 12–15/11 | Revisão do protocolo; consolidação da base; vinculação ao remoto já criado; publicação dos commits; ambiente | Trio | Levar proposta e dúvidas à aula de 13/11 |
| 16–22/11 | Login/autorização; CRUD de estudos; schema/migração; tokens de sessão | Gotardo + Andrey | 20/11 sem aula segundo o calendário |
| 23–29/11 | Fluxo de tarefas → questionário → envio; gravação transacional; testes | Andrey + Gotardo | Demonstrar coleta ao professor em 27/11 |
| 30/11–06/12 | Painel, tabelas, gráficos, CSV/JSON; piloto; correções | Kelly + Trio | Demonstrar análise em 04/12 |
| 07–10/12 | Revisão final, versão v1.0.0, ensaio, documentação e plano de contingência | Trio | Congelar mudanças de escopo em 07/12 |
| 11/12 | Apresentar instrumento, arquitetura, ferramenta ao vivo e GitHub | Trio | Entrega final da disciplina |

Estimativa de planejamento: **72–96 horas totais do grupo**, distribuídas entre os membros, com reserva de aproximadamente 20% para integração e correções. Não é carga horária exigida pelo professor. Se houver atraso, cortar comparações extras e refinamentos estéticos, preservando os cinco requisitos funcionais e a fidelidade.

## 9. Critérios de pronto

### Fidelidade

Duas pessoas conferiram os 16 textos diretamente na fonte da v3; escala e ordem preservadas; nenhum item é editável por estudo. Casos manuais e automatizados confirmam fatores, item 16, NA, brancos, limites e precisão. Texto do instrumento não deriva de CSUQ nem da versão portuguesa de 19 itens.

### Coleta e gestão

Estudos em rascunho não recebem respostas; estudos encerrados rejeitam novos envios. Estado final não se perde ao recarregar. Reenvio do mesmo token retorna o resultado já salvo, sem duplicação. Toda análise e exportação verifica proprietário no servidor. O sistema não considera clicar “terminei” como prova automática de execução das tarefas; a execução deve ser observada ou documentada no estudo.

### Análise e exportação

Média entre participantes é a média dos escores individuais calculáveis, com peso igual por participante; cada fator apresenta seu próprio n. Não agrupar todas as células respondidas em uma média única, pois isso altera o peso de pessoas com respostas ausentes. Oferecer análise de sensibilidade com casos completos como extensão identificada.

Médias com até três casas no painel, sem arredondamento intermediário; CSV/JSON mantêm precisão de cálculo. Desvio padrão amostral só para n ≥ 2; sem dados, mostrar “indisponível”. Gráficos trazem eixo 1–7, legenda “menor é melhor” e tabela equivalente. NA e ausências aparecem separadamente.

CSV exporta uma linha por submissão: estudo, sessão aleatória, instrumento, idioma, hash, versão do cálculo, datas, q01–q16, quatro escores e contagens. NA vira NA; branco vira célula vazia; valor permanece inteiro. JSON mantém os estados explicitamente. Fazer exportação → recálculo independente → comparação.

### Usabilidade da ferramenta

Testar navegação por teclado, agrupamento semântico dos itens, associação label/campo, foco visível, erros compreensíveis, ausência de seleção padrão e visualização móvel. Fazer piloto formativo sugerido com 3–5 pessoas, incluindo pesquisador e participante. Esse número é uma escolha de viabilidade, não mínimo estatístico do PSSUQ nem validação psicométrica.

### Apresentação

Executar demonstração em um banco com dados sintéticos claramente identificados; criar ou abrir estudo; iniciar sessão; responder; ver painel; exportar; mostrar teste conhecido e código. Explicar limites e próximos passos. Preparar vídeo ou capturas de contingência e cópia local do código. Duração sugerida de 10–12 minutos, sujeita à orientação do professor.

## 10. Riscos e respostas concretas

| Risco | Consequência | Resposta |
|---|---|---|
| Misturar versões/idiomas | Perde-se fidelidade ao instrumento | Snapshot fixo e revisão dupla antes de abrir coleta |
| Dar valor numérico ao NA | Média incorreta | Estado explícito, testes e validação no banco |
| Painel calcular diferente do CSV | Resultado não reproduzível | Mesmo motor no servidor e recálculo de amostra exportada |
| Tempo curto | MVP incompleto | Escopo fechado e integração semanal |
| Ausência de rede na apresentação | Falha na demonstração | App/banco locais e dados sintéticos disponíveis |
| Dependências não instaladas | Build desconhecido | Gerar lockfile e executar CI assim que houver rede |
| Falha de autenticação ou rede no envio ao GitHub | Commits locais ainda não publicados | Conferir origin, autenticar e enviar os commits ao repositório já criado; verificar o resultado remoto |

## 11. Licença e autoria

O material autoral será compartilhado em **CC BY-SA 4.0**, licença de cultura livre que permite uso comercial e adaptações, com atribuição e compartilhamento pela mesma licença. O código autoral também recebe licença MIT como alternativa. Isso evita restringir a reutilização do software e mantém o material disponível sob CC.

A pesquisa de 12/11/2026 encontrou QuestionPro UX, UX Scale Labs, UIUX Trend e a ferramenta relacionada de Gary Perlman. O projeto não reivindica pioneirismo na aplicação web ou no cálculo aberto do PSSUQ; o posicionamento proposto é gestão persistente de estudos e rastreabilidade do protocolo. Consulte a [comparação e análise de licenciamento](ANALISE_LICENCIAMENTO_E_PLATAFORMAS.md).

O grupo não declara autoria do PSSUQ nem aplica sua licença aos artigos ou às dependências. Não publicar dados pessoais ou respostas reais no repositório público. O plano não constitui aprovação de pesquisa pela universidade; caso o projeto evolua para pesquisa com participantes, seguir os procedimentos institucionais aplicáveis.
