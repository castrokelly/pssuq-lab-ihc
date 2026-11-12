# PSSUQ Lab · Fundamentos da IHC

Ferramenta acadêmica planejada para gerenciar estudos e coletar, analisar e exportar avaliações com o **Post-Study System Usability Questionnaire (PSSUQ), versão 3**.

**Equipe:** Andrey, Gotardo e Kelly · **Disciplina:** Fundamentos da Interação Humano-Computador, PPGIa/PUCPR · **Professor:** Dr. Leo Natan Paschoal · **Apresentação final:** 11/12/2026.

## Comece por aqui

1. [Planejamento completo](docs/PLANEJAMENTO.md): requisitos da disciplina, escopo, cronograma, responsáveis, backlog e critérios de aceite.
2. [Protocolo metodológico](docs/PROTOCOLO_PSSUQ.md): versão, aplicação, escala, itens por fator, ausências e interpretação.
3. [Execução e implementação](docs/PASSO_A_PASSO.md): ambiente, comandos, sequência de desenvolvimento e roteiro de demonstração.
4. [Arquitetura e contratos](docs/ARQUITETURA.md): entidades, rotas, integridade e decisões técnicas.
5. [Pesquisa e referências](docs/FONTES.md): fontes primárias, achados confirmados e limitações de acesso.
6. [Backlog](docs/BACKLOG.md) e [validação](docs/VALIDACAO.md).

## Estado desta entrega

Este é o **planejamento acompanhado de uma base inicial**, não a ferramenta completa. Inclui página inicial em Next.js/React, motor de cálculo em TypeScript, testes executáveis sem dependências externas, esquema PostgreSQL, scripts de banco, CI e roteiro de publicação no GitHub.

Ainda devem ser implementados: autenticação, gestão de estudos, formulário com a redação canônica dos 16 itens, coleta persistente, painéis e exportações. Não há coleta de participantes habilitada. O formulário do instrumento não foi substituído por uma tradução improvisada.

O repositório remoto ainda não foi criado: a sessão de navegador disponível exige login, a integração conectada não expõe criação de repositórios e o terminal está sem resolução de rede. O script `scripts/publicar-github.ps1` cria e publica o repositório quando executado em ambiente com GitHub CLI autenticado. Nenhuma URL remota é apresentada como existente.

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

Texto de atribuição: “PSSUQ Lab — Andrey, Gotardo e Kelly, 2026. CC BY-SA 4.0. Informar alterações e preservar a atribuição.”
