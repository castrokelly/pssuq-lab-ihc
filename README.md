**PONTIFÍCIA UNIVERSIDADE CATÓLICA DO PARANÁ**<br>
PPGIa — Programa de Pós-Graduação em Informática<br>
Mestrado · 2026/02

# PSSUQ Lab · Fundamentos da IHC

Ferramenta acadêmica planejada para gerenciar estudos e coletar, analisar e exportar avaliações com o **Post-Study System Usability Questionnaire (PSSUQ), versão 3**.

**Disciplina:** Fundamentos da Interação Humano-Computador · **Professor:** Dr. Leo Natan Paschoal · **Apresentação final:** 11/12/2026.

## Equipe

| Integrante | E-mail institucional |
|---|---|
| Andrey Nery Lima Bonat | [andrey.lima@pucpr.edu.br](mailto:andrey.lima@pucpr.edu.br) |
| Gotardo Campara | [gotardo.campara@pucpr.edu.br](mailto:gotardo.campara@pucpr.edu.br) |
| Kelly Christine Alvarenga de Castro | [christine.kelly@pucpr.edu.br](mailto:christine.kelly@pucpr.edu.br) |

## Comece por aqui

1. [Planejamento completo](docs/PLANEJAMENTO.md): requisitos da disciplina, escopo, cronograma, responsáveis, backlog e critérios de aceite.
2. [Protocolo metodológico](docs/PROTOCOLO_PSSUQ.md): versão, aplicação, escala, itens por fator, ausências e interpretação.
3. [Execução e implementação](docs/PASSO_A_PASSO.md): ambiente, comandos, sequência de desenvolvimento e roteiro de demonstração.
4. [Arquitetura e contratos](docs/ARQUITETURA.md): entidades, rotas, integridade e decisões técnicas.
5. [Pesquisa e referências](docs/FONTES.md): fontes primárias, achados confirmados e limitações de acesso.
6. [Backlog](docs/BACKLOG.md) e [validação](docs/VALIDACAO.md).
7. [Publicação na DigitalOcean e domínio pssuq.org](docs/PUBLICACAO_DIGITALOCEAN.md): decisão registrada, arquitetura proposta e preparação.
8. [Licenciamento, domínio e plataformas comparáveis](docs/ANALISE_LICENCIAMENTO_E_PLATAFORMAS.md): pesquisa e limites do uso do instrumento e do nome.

## Estado desta entrega

Este é o **planejamento acompanhado de uma base inicial**, não a ferramenta completa. Inclui página inicial em Next.js/React, motor de cálculo em TypeScript, testes executáveis sem dependências externas, esquema PostgreSQL, scripts de banco, CI e roteiro de publicação no GitHub.

Ainda devem ser implementados: autenticação, gestão de estudos, formulário com a redação canônica dos 16 itens, coleta persistente, painéis e exportações. Não há coleta de participantes habilitada. O formulário do instrumento não foi substituído por uma tradução improvisada.

O repositório remoto já foi criado em [castrokelly/pssuq-lab-ihc](https://github.com/castrokelly/pssuq-lab-ihc). O início previsto da execução do planejamento é **23/10/2026**, com entrega final em **11/12/2026**. A publicação dos commits locais está pendente; os comandos para conferir o remoto e enviar o código estão no [passo a passo](docs/PASSO_A_PASSO.md#4-publicar-o-repositório-no-github).

## Publicação planejada

**Decisão registrada em 12/11/2026:** Kelly publicará a plataforma na **DigitalOcean**, utilizando o domínio pretendido **pssuq.org** e a URL canônica pretendida **https://pssuq.org**. O serviço exato, a região e o plano de recursos ainda serão definidos. Kelly informou que já verificou o domínio e fará o registro pela **Cloudflare**. O registro, o DNS e a publicação efetiva ainda serão executados. Veja o [registro de publicação](docs/PUBLICACAO_DIGITALOCEAN.md).

## Tecnologias

Obrigatórias no material: **Next.js, React e PostgreSQL**, com código no GitHub. Escolhas do grupo propostas neste plano: TypeScript, App Router, driver `pg`, SQL versionado e testes nativos do Node.js. Não são exigências adicionais do professor.

## Executar

Pré-requisito recomendado: Node.js 24 LTS. O motor e seus testes não precisam de instalação:

```powershell
node --test tests/pssuq.test.ts
```

Para a página Next.js:

```powershell
npm install
npm run dev
```

Abra http://localhost:3000. A primeira instalação deverá gerar e versionar `package-lock.json`; depois use `npm ci`. As dependências não foram baixadas neste ambiente, que não resolve `registry.npmjs.org`.

Para PostgreSQL local, com Docker Desktop instalado e iniciado:

```powershell
Copy-Item .env.example .env
docker compose up -d db
npm run db:apply
npm run db:check
```

As credenciais de exemplo servem apenas para desenvolvimento local. Configure segredos próprios em qualquer hospedagem. Veja o [passo a passo](docs/PASSO_A_PASSO.md).

## Regra central

O instrumento usa 16 itens ordenados, escala original de 1 a 7, com **1 = concordo totalmente** e **7 = discordo totalmente**; menor é melhor. Geral = itens 1–16; SysUse = 1–6; InfoQual = 7–12; IntQual = 13–15. O item 16 entra somente no geral. Calcular médias das respostas numéricas disponíveis, sem converter NA em zero ou em 4. A [documentação metodológica](docs/PROTOCOLO_PSSUQ.md) distingue protocolo e escolhas da aplicação.

## Licenciamento

Material autoral deste projeto sob **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)**. O código autoral também está disponível, alternativamente, sob [MIT](LICENSE-CODE-MIT), para facilitar reutilização como software. Instrumento PSSUQ, artigos, marcas e dependências permanecem sob seus próprios direitos; não são relicenciados pelo grupo. Consulte [LICENSE.md](LICENSE.md) e [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

Texto de atribuição: “PSSUQ Lab — Andrey Nery Lima Bonat, Gotardo Campara e Kelly Christine Alvarenga de Castro, 2026. CC BY-SA 4.0. Informar alterações e preservar a atribuição.”
