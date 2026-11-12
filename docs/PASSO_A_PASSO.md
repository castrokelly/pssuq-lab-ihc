**PONTIFÍCIA UNIVERSIDADE CATÓLICA DO PARANÁ**<br>
PPGIa — Programa de Pós-Graduação em Informática<br>
Mestrado · 2026/02

# Passo a passo de execução e implementação

**Equipe:** [integrantes e contatos institucionais](../README.md#equipe).

## 1. Ler e confirmar o escopo

Começar por PLANEJAMENTO.md e PROTOCOLO_PSSUQ.md. Confirmar com o professor a aceitação do PSSUQ, a versão 3, o idioma e o que já foi apresentado em 23/10. O roteiro não depende de aprovação para tarefas preparatórias; a coleta depende de texto canônico revisado.

Distribuir as issues do BACKLOG.md. Nas aulas de 13/11, 27/11 e 04/12, apresentar a entrega incremental e registrar feedback.

## 2. Preparar o ambiente

Instalar Node.js 24 LTS, Git e, para banco local, Docker Desktop. GitHub CLI é necessário somente para o script de publicação. Usar fontes oficiais dos produtos. Em PowerShell, dentro da pasta pssuq-lab-ihc:

```powershell
node --version
git --version
node --test tests/pssuq.test.ts
npm install
npm run typecheck
npm run build
npm run dev
```

Abrir http://localhost:3000. A página inicial demonstra resultados de dados sintéticos; não é o formulário do participante. Se o projeto usar versões npm resolvidas diferentes, revisar changelog e preservar o lockfile.

A primeira instalação precisa de rede. Versionar package-lock.json assim que for gerado. Depois usar npm ci no desenvolvimento e na CI. O material da disciplina não impõe versões exatas de pacotes; o projeto fixa a série planejada e deverá congelar a resolução efetiva.

## 3. Subir e verificar PostgreSQL

Com Docker Desktop iniciado:

```powershell
Copy-Item .env.example .env
docker compose up -d db
docker compose ps
npm run db:apply
npm run db:check
```

A migração inicial cria as tabelas, restrições e índices. Repetir db:apply deve reconhecer a migração existente. O script compara hash para impedir mudança silenciosa em migração aplicada.

Não é necessário Docker se houver PostgreSQL acessível: configurar DATABASE_URL em .env e executar os scripts. Nunca commitar .env. As credenciais de exemplo são locais e não servem para hospedagem pública.

## 4. Publicar o repositório no GitHub

**Situação desta entrega:** repositório remoto já criado em [castrokelly/pssuq-lab-ihc](https://github.com/castrokelly/pssuq-lab-ihc); o histórico local já contém o commit inicial. A publicação dos commits está pendente.

Conferir primeiro a configuração do remoto:

```powershell
git remote -v
```

Se uma cópia local ainda não tiver origin configurado, adicionar uma única vez:

```powershell
git remote add origin https://github.com/castrokelly/pssuq-lab-ihc.git
```

Revisar o estado local e publicar a branch main em ambiente autenticado:

```powershell
git status
git push -u origin main
```

Se for necessário autenticar com GitHub CLI, executar `gh auth login` antes do envio. Publicar apenas código, documentação e exemplos sintéticos.

O script `scripts/publicar-github.ps1` cria um novo repositório e recusa um já existente; não se aplica à publicação neste remoto. Após o push, conferir que README e docs estão no GitHub. Só então o requisito de código no GitHub está atendido.

Não convidar Andrey Nery Lima Bonat e Gotardo Campara por nomes aproximados: obter os nomes de usuário corretos. Convites não foram enviados.

## 5. Congelar o instrumento

1. Conferir os 16 textos do PSSUQ v3 na fonte canônica citada.
2. Criar catálogo versionado com id/número/texto, idioma, instruções, rótulos e fonte.
3. Calcular SHA-256 do JSON canônico estável.
4. Dois integrantes revisam conteúdo e correspondência dos fatores.
5. Persistir snapshot e registrar protocol_reviewed_at.
6. Impedir alteração em snapshot usado; novos textos exigem novo snapshot.
7. Não liberar OPEN sem snapshot revisado, tarefas e versão do sistema.

Os testes matemáticos podem rodar antes dessa etapa. A redação dos itens não deve ser inventada para viabilizar uma demonstração.

## 6. Construir gestão de estudos

Implementar autenticação do pesquisador e verificação de proprietário no servidor. Criar listagem, rascunho, edição e transições OPEN/CLOSED/ARCHIVED. Usar consultas parametrizadas e mensagens de erro claras.

Aceite: uma conta não lê, edita, analisa ou exporta estudos de outra. Um estudo aberto não permite alterar idioma, instrumento, tarefas ou sistema avaliado. Alteração de escopo exige novo estudo.

## 7. Construir a coleta

Criar sessão com token imprevisível, guardar somente hash e entregar o token apenas ao participante. Exibir informações e tarefas do estudo. Após a sessão de uso, disponibilizar questionário canônico.

Implementar cada item como grupo semântico de controles, com nome e número acessíveis. Manter ordem 1–16, extremos originais e NA separado. Sem seleção prévia; oferecer revisão de brancos sem obrigar respostas numéricas.

Enviar array com 16 posições: inteiro 1–7, NA ou null. O servidor valida tudo. Gravar as 16 respostas e marcar submissão na mesma transação; reenvio não duplica. Encerramento do estudo bloqueia novos envios.

## 8. Construir a análise

Usar src/domain/pssuq.ts no servidor. Calcular escores por sessão; depois calcular resumo entre pessoas. Exibir quatro escalas, n de cada uma, desvio padrão quando definido, cobertura, distribuição das alternativas e contagens separadas de NA/branco.

Adicionar gráficos simples e tabela equivalente. Manter escala 1–7 e indicação “menor é melhor”. Não exibir classificação automática de qualidade.

Aceite manual: o vetor sintético dos testes deve produzir geral 2,125, SysUse 1, InfoQual 2 e IntQual 3 em painel e exportação.

## 9. Construir exportação

Implementar CSV e JSON autorizados. Conservar dados brutos, estados, versão, idioma, hash e versão do cálculo. Não exportar tokens. Conferir escape de texto e formato de números/datas.

Recalcular uma exportação em planilha ou script independente, sem reutilizar as médias já exportadas como entrada. Comparar com o painel. Registrar evidência no relatório.

## 10. Testar integração e usabilidade

Executar:

```powershell
npm test
npm run typecheck
npm run build
npm run db:apply
npm run db:check
```

Acrescentar testes de integração para constraints, cardinalidade de 16 respostas, rollback, concorrência/idempotência, autorização, fechamento da coleta e exportação.

Executar percurso real em navegador: criar estudo → abrir → realizar tarefas → responder → confirmar → ver painel → exportar. Testar teclado e tela móvel. Fazer piloto formativo sugerido de 3–5 pessoas e corrigir problemas prioritários. Não chamar esse piloto de validação psicométrica.

## 11. Preparar entrega em 11/12

1. Registrar release v1.0.0 após os critérios de pronto.
2. Preparar apresentação: problema e instrumento; regras; arquitetura; demonstração; limites.
3. Demonstrar o exemplo manual e os testes do motor.
4. Mostrar histórico e organização do GitHub.
5. Manter banco local e dados sintéticos para contingência sem internet.
6. Conferir licença, créditos e links de execução no README.
7. Verificar o tempo disponível com o professor; 10–12 minutos é somente sugestão deste plano.

## 12. Publicar a plataforma web

O provedor escolhido é **DigitalOcean**, com domínio pretendido **pssuq.org**, conforme decisão de Kelly registrada em 12/11/2026. Seguir [PUBLICACAO_DIGITALOCEAN.md](PUBLICACAO_DIGITALOCEAN.md) para definir o serviço, validar build e banco, configurar a origem, conferir domínio/HTTPS e registrar a publicação. Essa decisão não significa que a infraestrutura ou o domínio já estejam operacionais. Conferir também [licenciamento e plataformas comparáveis](ANALISE_LICENCIAMENTO_E_PLATAFORMAS.md).

## 13. Trabalho diário do grupo

Criar branch por tarefa, implementar um comportamento verificável, testar, abrir pull request e solicitar revisão de outro membro. Alterações no instrumento exigem revisão metodológica. Não fazer toda a publicação somente na véspera: o acompanhamento da disciplina é contínuo.
