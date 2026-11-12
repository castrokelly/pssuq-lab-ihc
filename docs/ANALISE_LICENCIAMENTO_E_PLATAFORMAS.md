**PONTIFÍCIA UNIVERSIDADE CATÓLICA DO PARANÁ**<br>
PPGIa - Programa de Pós-Graduação em Informática<br>
Mestrado - 2026/02

# Licenciamento, domínio e plataformas comparáveis

**Pesquisa e registro:** 12/11/2026.
**Equipe:** [integrantes e contatos institucionais](../README.md#equipe).

## 1. Conclusão prática

As fontes do próprio autor sustentam o uso do PSSUQ sem taxa de licença, com citação da origem e identificação de versão/formato. Isso oferece fundamento para uma implementação web independente, preservando o protocolo.

É possível licenciar as contribuições autorais do grupo. A licença do grupo não altera os direitos do instrumento, dos artigos, das traduções de terceiros, das marcas ou dos dados dos participantes. A ausência de taxa não deve ser convertida em uma declaração de que tudo está em domínio público.

O nome de domínio exige avaliação separada. Kelly informou que já verificou o domínio e fará o registro pela Cloudflare. Esta pesquisa não constitui busca marcária conclusiva nem confirma titularidade ou autorização específica para o uso do nome.

## 2. Instrumento, software e documentação são objetos diferentes

| Objeto | Tratamento no projeto |
|---|---|
| Método e regras matemáticas do PSSUQ | Implementar com fidelidade e citar as fontes; não reivindicar autoria |
| Redação dos itens e tradução escolhida | Conferir fonte, versão e condições de uso/reprodução; manter créditos |
| Documentação, plano, explicações e recursos autorais | CC BY-SA 4.0 |
| Código autoral | Licenciamento alternativo já existente: CC BY-SA 4.0 ou MIT, à escolha do reutilizador |
| Artigos, livros, marcas e dependências | Direitos próprios; não abrangidos pela licença do grupo |
| Respostas reais e dados pessoais | Fora da licença aberta do repositório; acesso restrito conforme o estudo |

Lewis (2019), seção 2.4, afirma que o uso do PSSUQ e CSUQ não exige taxa de licença, e pede a identificação da versão e formato. Para a v3, recomenda citar Sauro e Lewis (2016). A referência não transforma a publicação editorial inteira em material livre para redistribuição [R1].

A Creative Commons recomenda licenças próprias para software e permite CC para documentação e outros materiais autorais [R2]. Por isso, o arranjo atual do projeto pode ser mantido: material autoral em CC BY-SA 4.0, com MIT como alternativa adicional para o código. Não se mudou a licença nesta etapa.

No Brasil, o art. 8º da Lei 9.610/1998 distingue ideias, métodos e sistemas da expressão autoral protegida. Isso não resolve automaticamente o tratamento de toda redação ou tradução de um questionário e não substitui verificar a origem do conteúdo utilizado [R3].

## 3. Uso de pssuq.org

**Decisão informada por Kelly:** publicar a plataforma na DigitalOcean com o domínio pretendido pssuq.org; verificação do domínio já realizada pela usuária e registro planejado pela Cloudflare.

O registro .org é aberto e não exige que o titular seja uma organização sem fins lucrativos, conforme o registro responsável, PIR [R4]. Domínio e marca, porém, são proteções diferentes, como explica o INPI [R5]. Domínios também podem ser objeto de disputa por direitos de marca, interesse legítimo e má-fé, conforme a UDRP descrita pela WIPO [R6].

Foi consultada a política oficial de marcas da IBM. Ela:
- distingue referências textuais de uso de logotipos;
- pede que a relação com a IBM seja descrita de forma verdadeira;
- orienta contra incorporar nomes de produtos IBM a domínios;
- informa que sua lista de marcas não é exaustiva [R7].

Não foi localizada a expressão PSSUQ na página de marcas consultada. Isso não demonstra ausência de direitos de marca, tampouco prova que a orientação sobre nomes de produtos se aplique especificamente a esse instrumento. Não foi concluída busca de anterioridade no INPI e na Global Brand Database.

### Encaminhamento para o lançamento

1. Usar identidade própria para o software e apresentar o PSSUQ como instrumento aplicado.
2. Identificar James R. Lewis, a origem em pesquisas na IBM, a versão 3 e as referências.
3. Evitar apresentação como portal oficial, certificado ou endossado pela IBM ou pelo autor.
4. Após o registro planejado pela Cloudflare, confirmar titularidade e controle da zona DNS.
5. Fazer busca de marcas nominativas e semelhantes nos registros pertinentes; a WIPO recomenda consultar também registros nacionais [R8].
6. Se houver conflito ou dúvida sobre o uso do nome no domínio, obter orientação especializada ou esclarecimento do titular pertinente antes de consolidar a identidade pública. Um aviso de independência ajuda a esclarecer o projeto, mas não elimina direitos de terceiros.

Texto sugerido para a página institucional:

> PSSUQ Lab é uma plataforma independente para aplicação e análise do PSSUQ versão 3. O instrumento foi desenvolvido por James R. Lewis no contexto de pesquisas da IBM. A plataforma é de autoria da equipe identificada neste projeto e não possui vínculo, certificação ou endosso da IBM ou do autor do instrumento. Os direitos de terceiros permanecem com seus respectivos titulares.

Kelly informou que já verificou o domínio e pretende registrá-lo pela Cloudflare. O registro permanece uma etapa futura. A tentativa de abrir https://pssuq.org nesta pesquisa não produziu evidência sobre propriedade ou configuração DNS e não substitui a verificação relatada pela usuária.

## 4. Plataformas e ferramentas encontradas

A comparação se baseia nas páginas públicas dos próprios fornecedores/autores, consultadas em 12/11/2026. Não foram criadas contas, realizados estudos com participantes ou auditados os serviços autenticados. “Não documentado” não significa ausência do recurso.

| Solução | Aplicação/coleta | Análise e exportação documentadas | Relação com nosso projeto |
|---|---|---|---|
| QuestionPro UX [R9, R10] | PSSUQ pode ser habilitado na etapa pós-teste de um estudo | Painel com dimensões; a plataforma documenta exportação CSV com respostas e outros dados | Comparável funcional mais próximo: já integra estudo, aplicação e resultados |
| UX Scale Labs - PSSUQ [R11, R12] | Formulário v3 de 16 itens com NA; fluxo de participante baixar resultado e enviá-lo ao pesquisador; processamento declarado no navegador | Análise de tabelas e múltiplos participantes, médias, DP/IC, confiabilidade; arquivos PDF/JSON/CSV/TXT/ZIP; declara MIT | Concorrente aberto direto para aplicação e análise; nosso escopo acrescenta coleta centralizada e gestão persistente no servidor |
| UIUX Trend - PSSUQ Calculator [R13] | Página pública de cálculo de escores; gestão de participantes e estudos não documentada nessa página | Geral e três subescalas; exportação não identificada na página consultada | Referência para um cálculo simples; nosso escopo cobre o ciclo completo de estudos |
| Gary Perlman - quest.cgi [R14] | Aplicação web de questionários e envio de respostas por e-mail; inclui CSUQ de 19 itens | Dados em formato simples; software disponibilizado pelo autor | Referência histórica relacionada: CSUQ não deve ser apresentado como implementação do PSSUQ v3 |
| PSSUQ Lab - estado atual | Gestão e coleta ainda por implementar | Motor TypeScript testado, schema PostgreSQL e base Next.js/React | A implementação atual é uma base, não uma plataforma já equivalente aos serviços citados |
| PSSUQ Lab - MVP planejado | Estudos, tarefas, sessões, tokens, questionário e persistência centralizada | Quatro escores, cobertura, gráficos/tabelas, CSV/JSON e protocolo versionado | Plataforma especializada, aberta e instalável pelo grupo; produção pretendida na DigitalOcean/pssuq.org |

### Cuidados de comparação metodológica

- QuestionPro: a página pública confirma a integração pós-teste, mas não detalha todas as regras de NA, versão textual e algoritmo; esses pontos não foram auditados.
- UX Scale Labs: documenta v3, orientação original e exclusão de NA. Ao importar tabelas, orienta representar não aplicável por célula vazia ou NA. Nosso modelo pretende preservar NA e ausência como estados distintos para rastreabilidade.
- UX Scale Labs exibe médias históricas como referências. Nosso projeto deve explicar sua origem e limites; não transformar essas médias em limites universais de aprovação.
- UIUX Trend mostra os grupos de itens e a orientação correta na página consultada. Não se confirmou o comportamento em casos incompletos por testes de execução.
- CSUQ e PSSUQ possuem diferenças de contexto e redação; o software de Gary Perlman não pode validar o texto do nosso formulário.

## 5. Posicionamento recomendado

A proposta não deve se apresentar como a primeira calculadora PSSUQ, a primeira aplicação web ou a única ferramenta aberta: já existem alternativas.

O valor a demonstrar é a combinação de:
- estudos e sessões persistentes em PostgreSQL;
- abertura/encerramento de coleta e isolamento entre pesquisadores;
- rastreabilidade de instrumento, idioma, redação, hash e algoritmo;
- distinção entre NA e ausência;
- exportação que permita reproduzir os resultados;
- instalação e operação sob controle do grupo;
- interface de gestão em português, preservando o idioma metodologicamente documentado dos itens.

Esses são objetivos do MVP, não alegações de exclusividade ou recursos já entregues. QuestionPro já cobre parte importante da gestão e UX Scale Labs já oferece análise aberta no navegador. A diferenciação é uma decisão de escopo e arquitetura, que precisará ser comprovada na implementação.

## 6. Referências consultadas

- **R1. Lewis (2019).** Measuring perceived usability: SUS, UMUX, and CSUQ ratings for four everyday products. DOI: https://doi.org/10.1080/10447318.2018.1533152 ; texto disponibilizado pelo autor: https://www.researchgate.net/publication/328360884_Measuring_Perceived_Usability_SUS_UMUX_and_CSUQ_Ratings_for_Four_Everyday_Products
- **R2. Creative Commons.** FAQ, titularidade e software: https://creativecommons.org/faq/ ; CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/
- **R3. Brasil.** Lei 9.610/1998, art. 8º: https://www.planalto.gov.br/ccivil_03/leis/l9610.htm
- **R4. PIR.** FAQ sobre .org: https://pir.org/for-orgs/faq/
- **R5. INPI.** Marca x Nome Empresarial x Domínio: https://www.gov.br/inpi/pt-br/plataforma-integrada-de-atendimento/marca-x-nome-empresarial-x-dominio
- **R6. WIPO.** FAQ sobre disputas de domínio: https://www.wipo.int/amc/en/center/faq/domains.html
- **R7. IBM.** Copyright and Trademark Information: https://www.ibm.com/legal/copyright-trademark
- **R8. WIPO.** Global Brand Database: https://www.wipo.int/en/web/global-brand-database
- **R9. QuestionPro.** PSSUQ no pós-teste: https://www.questionpro.com/help/ux/PSSUQ.html
- **R10. QuestionPro.** Exportação: https://www.questionpro.com/help/ux/Data-Export.html
- **R11. UX Scale Labs.** PSSUQ: https://uxscalelabs.online/pssuq/
- **R12. UX Scale Labs.** Combinação de resultados: https://uxscalelabs.online/combine/ ; visão geral: https://uxscalelabs.online/
- **R13. UIUX Trend.** Calculadora: https://uiuxtrend.com/pssuq-calculator/
- **R14. Gary Perlman.** Web-Based Questionnaires: https://garyperlman.com/quest/

Para a operação prevista, consultar também [Publicação na DigitalOcean](PUBLICACAO_DIGITALOCEAN.md).
