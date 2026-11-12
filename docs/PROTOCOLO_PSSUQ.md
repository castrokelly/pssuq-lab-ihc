**PONTIFÍCIA UNIVERSIDADE CATÓLICA DO PARANÁ**<br>
PPGIa — Programa de Pós-Graduação em Informática<br>
Mestrado · 2026/02

# Protocolo metodológico — PSSUQ versão 3

**Equipe:** [integrantes e contatos institucionais](../README.md#equipe).

**Decisão do projeto:** PSSUQ v3; 16 itens; formato original; aplicação ao final de uma sessão com tarefas. Identificador: PSSUQ-3. Versão do cálculo: pssuq3-mean-available-v1.

## O que é medido

O PSSUQ avalia a percepção de usabilidade/satisfação com o sistema após seu uso. Não mede sozinho eficiência observada, taxa de sucesso, carga cognitiva ou toda a experiência do usuário. Tem um escore geral e três subescalas. A origem é o trabalho de James R. Lewis na IBM. Referências [F01–F05](FONTES.md).

## Versões: não combinar numerações

| Versão | Número de itens | Tratamento no projeto |
|---|---:|---|
| Primeira versão histórica | 18 | Contexto bibliográfico, sem suporte no MVP |
| Segunda versão | 19 | Não usar índices desta versão no motor v3 |
| Terceira versão | 16 | Única versão aceita no MVP |

A v3 remove os antigos itens 3, 5 e 13 da versão de 19 itens e renumera os demais. Correspondência para conferir a transcrição na fonte, não para autorizar uma tradução ou um instrumento híbrido:

| Item v3 | Item v2 original | Entra em |
|---|---:|---|
| 1 | 1 | SysUse e geral |
| 2 | 2 | SysUse e geral |
| 3 | 4 | SysUse e geral |
| 4 | 6 | SysUse e geral |
| 5 | 7 | SysUse e geral |
| 6 | 8 | SysUse e geral |
| 7 | 9 | InfoQual e geral |
| 8 | 10 | InfoQual e geral |
| 9 | 11 | InfoQual e geral |
| 10 | 12 | InfoQual e geral |
| 11 | 14 | InfoQual e geral |
| 12 | 15 | InfoQual e geral |
| 13 | 16 | IntQual e geral |
| 14 | 17 | IntQual e geral |
| 15 | 18 | IntQual e geral |
| 16 | 19 | Somente geral |

A correspondência decorre da remoção dos três itens descrita por Lewis; a lista canônica da v3 deve ser conferida em Sauro e Lewis (2016), indicada pelo próprio autor como fonte para citar a versão 3. Não usar a figura do CSUQ como se fosse redação do PSSUQ: os contextos e tempos verbais diferem.

Este pacote não contém uma reprodução integral das perguntas. O motor de cálculo e o schema estão prontos para receber o catálogo verificado; a coleta continuará indisponível até a importação e a revisão dupla da redação canônica. O plano não afirma que o formulário completo já foi implementado.

## Administração: sequência de uma sessão

1. Definir sistema e versão, objetivo, participantes, tarefas/cenários e condições de uso. Guardar isso no estudo.
2. Apresentar as informações de participação e explicar que se avalia o sistema. Não apresentar resultados esperados nem sugerir respostas.
3. Solicitar a execução do conjunto de tarefas no sistema avaliado. Observar e registrar intervenções de modo consistente. Concluir ou encerrar tentativas não significa que todas as tarefas tenham sido bem-sucedidas.
4. Imediatamente após a sessão, apresentar o PSSUQ, pedindo que a pessoa considere todas as tarefas realizadas, leia as afirmações e marque sua concordância.
5. Exibir as 16 afirmações, na ordem da versão escolhida. Escala com extremos originais e NA separado; nenhuma alternativa pré-selecionada.
6. Permitir comentários para explicar respostas, sem incluí-los no cálculo. Preservar o direito de não responder e registrar branco de forma distinta de NA.
7. Revisar eventuais comentários/dúvidas após a resposta, sem induzir alterações. Se a aplicação for autoadministrada, documentar essa condição e a forma de esclarecimento.
8. Registrar a submissão de forma transacional e oferecer confirmação. Não mostrar comparação com outros participantes antes do envio.

As instruções acima são uma síntese operacional em português, não uma tradução validada das instruções ou dos itens. A redação apresentada ao participante deve acompanhar a fonte e a escolha de idioma.

## Escala e idioma

Formato de sete pontos: 1 representa concordância máxima e 7 discordância máxima. No formulário canônico em inglês, os extremos são “Strongly agree” e “Strongly disagree”; NA corresponde a “Not applicable”. Preservar a orientação original para manter comparabilidade. Os valores intermediários permanecem numerados; não inventar rótulos com nova validação implícita.

**Escolha conservadora do MVP:** texto do instrumento em inglês; interface de gestão em português; participação restrita a quem compreenda as afirmações. Não apresentar simultaneamente tradução livre como se também fosse original.

Foi localizada a publicação de Rosa et al. (2015) sobre português europeu, com **19 itens**. O resumo e os metadados foram consultados, mas o texto integral não ficou acessível. Não se verificou, nas fontes consultadas, uma validação brasileira da v3 suficiente para adotá-la como oficial. Isso é uma limitação da busca, não prova de inexistência.

Se o grupo decidir atender participantes somente em português brasileiro, deverá escolher e documentar uma adaptação adequada, conferindo versão e regras, ou tratar uma tradução própria como adaptação experimental: tradução independente, síntese, retrotradução, revisão e pré-teste de compreensão. Esse trabalho não se torna validado só por ser revisado pelo grupo.

## Regras exatas do cálculo v3

| Escore | Conjunto de itens |
|---|---|
| Geral / Overall | 1–16 |
| Utilidade do sistema / SysUse | 1–6 |
| Qualidade da informação / InfoQual | 7–12 |
| Qualidade da interface / IntQual | 13–15 |

Para cada pessoa e escala, somar as respostas numéricas disponíveis e dividir pela quantidade dessas respostas dentro do conjunto. Se não houver resposta numérica, o escore é null/indisponível. O item 16 não entra em IntQual. Não fazer média das três subescalas para obter o geral: isso altera os pesos e exclui o item 16.

Armazenamento:
- inteiro 1–7: resposta numérica;
- NA: a pessoa indicou que o item não se aplica;
- null: o item ficou sem resposta.

Excluir NA/branco apenas do cálculo correspondente, mantendo os registros brutos e as contagens. Não imputar média, não preencher com zero, não tratar branco como concordância. Questionários parcialmente respondidos não precisam ser descartados automaticamente. Lewis (2002) fundamenta o uso de médias das respostas disponíveis; os índices dos fatores aqui são os da v3, não os da versão antiga do artigo.

As fontes consultadas não sustentam um limite universal de “80% dos itens obrigatórios”. Por isso, o algoritmo não inventa essa regra. Exibir a cobertura junto de cada escore permite identificar resultados baseados em poucos itens. Estudos podem definir uma análise adicional de casos completos antes da coleta, sempre distinguindo essa decisão analítica das regras do instrumento.

## Exemplo manual de referência

Dados sintéticos: itens 1–6 = 1; itens 7–12 = 2; itens 13–15 = 3; item 16 = 7.

- SysUse = 1.
- InfoQual = 2.
- IntQual = 3.
- Geral = (6 + 12 + 9 + 7) / 16 = **2,125**.

Com itens 1 = 1, 2 = 3, 3 = NA e demais em branco: SysUse = 2, com 2 respostas numéricas, 1 NA e 3 brancos; o geral também é 2, com cobertura 2/16. InfoQual e IntQual ficam indisponíveis. A interface deve tornar a cobertura explícita.

## Análise do estudo: decisões adicionais da ferramenta

Estas regras são de agregação e apresentação, não novos requisitos psicométricos do PSSUQ:

1. Calcular primeiro os quatro escores individuais.
2. Para cada escala, agregar os escores individuais calculáveis com peso igual por pessoa; informar n próprio da escala.
3. Exibir média, desvio padrão amostral quando n ≥ 2, distribuição por item e cobertura. Mediana e intervalo interquartil podem ser extensões.
4. Não misturar respostas de estudos, idiomas, versões ou rodadas diferentes por padrão.
5. Manter precisão interna e arredondar somente para exibição.
6. Não inferir significância ou efeito causal a partir de diferenças visuais. Comparar sistemas exige delineamento, tamanho de amostra e análise compatíveis.
7. Se forem acrescentados intervalos de confiança, documentar nível, método e unidade de análise; não reutilizar como IC da amostra os intervalos de normas históricas.

## Interpretação

Menor escore significa melhor percepção de usabilidade no formato original. O valor 4 é o ponto central numérico, não um ponto de corte validado de aprovação. Não usar automaticamente os parâmetros do SUS, notas A–F, percentis ou porcentagens.

Há médias históricas frequentemente citadas, como geral 2,82, mas Lewis alerta para limitações de generalização entre amostras, tarefas, produtos e versões. São referências de contexto, não regras universais. O MVP não exibe semáforo nem aprovação automática.

Não declarar que a consistência interna observada em pesquisas anteriores é a confiabilidade desta amostra ou de uma tradução própria. Um piloto de desenvolvimento avalia funcionamento e compreensão; não substitui validação psicométrica.

## Revisão antes de liberar coleta

- [ ] Fonte canônica da versão 3 identificada, edição/página registradas.
- [ ] Texto dos 16 itens conferido por dois membros.
- [ ] Redação realmente PSSUQ, não CSUQ; idioma documentado.
- [ ] Ordem, escala e extremos originais preservados.
- [ ] Snapshot com hash e versão persistido; edição bloqueada após abertura.
- [ ] NA e branco distintos no formulário, banco e exportação.
- [ ] Motor e exemplo manual coincidem.
- [ ] Questionário acessível por teclado e sem seleção padrão.
- [ ] Sistema/tarefas/condições da sessão documentados.
- [ ] Coleta e apresentação testadas sem dados pessoais reais.
