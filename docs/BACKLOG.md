**PONTIFÍCIA UNIVERSIDADE CATÓLICA DO PARANÁ**<br>
PPGIa — Programa de Pós-Graduação em Informática<br>
Mestrado · 2026/02

# Backlog com critérios de aceite

**Equipe:** [integrantes e contatos institucionais](../README.md#equipe).

As atribuições são propostas. O repositório remoto já existe em [castrokelly/pssuq-lab-ihc](https://github.com/castrokelly/pssuq-lab-ihc); a criação das issues permanece pendente.

Os primeiros nomes usados nas tabelas correspondem aos integrantes identificados com nome completo e contato institucional no [README](../README.md#equipe).

| ID | Prioridade | Responsável | Entrega e aceite | Dependência |
|---|---|---|---|---|
| 01 | P0 | Kelly | Conferir v3 canônica; fonte/idioma/hash e revisão dupla registrados | Nenhuma |
| 02 | P0 | Trio | Vincular o remoto já criado, publicar base, gerar lockfile e CI verde | Acesso GitHub/rede |
| 03 | P0 | Andrey | Wireframes de gestão, sessão, formulário e painel; revisão por teclado | 01 |
| 04 | P0 | Gotardo | Autenticação de pesquisador e isolamento de estudos no servidor | 02 |
| 05 | P0 | Gotardo | Aplicar migração PostgreSQL; teste real de constraints/rollback | 02 |
| 06 | P0 | Andrey + Gotardo | Criar/editar/abrir/encerrar estudos; protocolo imutável após abertura | 01,04,05 |
| 07 | P0 | Gotardo | Sessões com token hash, término de tarefas e idempotência | 06 |
| 08 | P0 | Andrey | Formulário com os 16 textos canônicos; 1–7/NA/branco; sem defaults | 01,03,07 |
| 09 | P0 | Gotardo | Persistência de 16 estados em transação; nenhuma duplicação | 05,07,08 |
| 10 | P0 | Kelly + Gotardo | Motor de cálculo e revisão manual independente; testes verdes | 01 |
| 11 | P0 | Kelly + Andrey | Painel com 4 escores, n por fator, DP, cobertura e gráficos/tabela | 09,10 |
| 12 | P0 | Gotardo + Kelly | CSV/JSON reprodutíveis; recálculo coincide com painel | 09,10 |
| 13 | P0 | Trio | Testes de fluxo/segurança/concorrência e piloto de uso; correções | 06–12 |
| 14 | P0 | Kelly | Roteiro final, fontes, licença, README e evidências atualizados | 13 |
| 15 | P0 | Trio | Release v1.0.0, ensaio e demonstração local de contingência | 14 |
| 16 | P2 | Trio | Comparação entre rodadas com delineamento e análise próprios | MVP pronto |
| 17 | P0 | Kelly + Gotardo | Preparar publicação DigitalOcean/pssuq.org; verificar domínio, build, banco, HTTPS e registro do commit publicado | 01–15; decisão em PUBLICACAO_DIGITALOCEAN.md |
| 18 | P0 | Kelly + Trio | Conferir atribuição, condições do texto, identidade independente e uso do nome/domínio para o lançamento público | Pesquisa em ANALISE_LICENCIAMENTO_E_PLATAFORMAS.md |

## Definição de pronto de uma issue

- Critério de aceite demonstrado e evidência anexada.
- Revisão por outro membro.
- Sem dados pessoais nem segredos no commit.
- Motor/validação/fluxos relevantes testados.
- Documentação atualizada quando o comportamento mudar.
- Estados vazios/erros e acessibilidade considerados.

## Organização do GitHub

Labels sugeridas: metodologia, frontend, backend, analise, documentacao, teste, P0, P2. Milestones: M1 protocolo/ambiente (15/11); M2 gestão (22/11); M3 coleta (29/11); M4 análise (06/12); M5 entrega (11/12).

Branches curtas: feat/estudos, feat/coleta, feat/painel. Pull requests pequenos com problema, mudança, teste e evidência. Sem merge automático de alterações metodológicas não revisadas.
