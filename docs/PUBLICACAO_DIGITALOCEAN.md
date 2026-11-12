**PONTIFÍCIA UNIVERSIDADE CATÓLICA DO PARANÁ**<br>
PPGIa - Programa de Pós-Graduação em Informática<br>
Mestrado - 2026/02

# Publicação na DigitalOcean e domínio pssuq.org

**Decisão registrada em:** 12/11/2026.
**Solicitante e responsável pela decisão:** Kelly Christine Alvarenga de Castro.
**Equipe:** [integrantes e contatos institucionais](../README.md#equipe).

## 1. Decisão confirmada

Kelly informou que publicará a plataforma web **PSSUQ Lab na DigitalOcean, utilizando o domínio pssuq.org**. Em complemento, informou que **já verificou o domínio e fará seu registro pela Cloudflare**.

| Elemento | Registro |
|---|---|
| Provedor de hospedagem escolhido | DigitalOcean |
| Registrador escolhido | Cloudflare Registrar |
| DNS previsto | Cloudflare, conforme o serviço de registro escolhido |
| Domínio pretendido | pssuq.org |
| URL canônica pretendida | https://pssuq.org |
| Repositório de código | https://github.com/castrokelly/pssuq-lab-ihc |
| Aplicação | Next.js e React |
| Persistência obrigatória | PostgreSQL |
| Estado da publicação | Planejada; infraestrutura, DNS e aplicação em produção ainda não verificados |
| Verificação do domínio | Informada como realizada por Kelly em 12/11/2026 |
| Registro/titularidade do domínio | Registro pela Cloudflare planejado; aquisição ainda não informada |
| Serviço exato e região na DigitalOcean | A definir; proposta técnica abaixo |
| Licença | Material autoral CC BY-SA 4.0; código também disponível em MIT, conforme LICENSE.md |

O domínio foi verificado por Kelly, conforme seu relato; o registro será realizado pela Cloudflare. A disponibilidade informada pela usuária não equivale à conclusão do registro ou à avaliação de direitos sobre o nome. A revisão do nome e da apresentação pública consta em [Licenciamento e plataformas](ANALISE_LICENCIAMENTO_E_PLATAFORMAS.md).

## 2. Proposta técnica dentro do provedor

Usar **DigitalOcean App Platform para o serviço Node.js/Next.js** e **PostgreSQL gerenciado** como opção inicial a validar pelo grupo. A documentação oficial confirma suporte a aplicações Next.js, domínio próprio e conexão a PostgreSQL. App Platform e banco gerenciado são uma proposta de implementação; o pedido do usuário fixou o provedor e domínio, não o produto, região ou plano de cobrança.

A aplicação precisa de execução no servidor para a futura API, autenticação e persistência. A publicação como site puramente estático não cobre esses requisitos.

| Componente | Planejamento |
|---|---|
| Código-fonte | Branch de entrega revisada no GitHub |
| Runtime | Node.js 24.x, após confirmar compatibilidade das dependências e do buildpack |
| Build | Instalação reproduzível a partir de package-lock.json e npm run build |
| Execução | Serviço Next.js escutando em 0.0.0.0 na porta configurada pela plataforma |
| Banco | PostgreSQL persistente; conexão no servidor, com TLS e validação de certificado conforme o serviço |
| Configuração pública | APP_URL=https://pssuq.org em produção; localhost permanece no exemplo de desenvolvimento |
| Segredos | Credenciais de banco e autenticação configuradas no provedor, fora do repositório |
| Domínio | Mapear pssuq.org ao app e definir redirecionamentos após confirmar controle do DNS |
| Dados | Isolamento por pesquisador, retenção definida, backup e teste de restauração |
| Observabilidade | Logs sem respostas brutas, tokens ou credenciais; verificação de saúde |

O buildpack aceita seleção de Node pela chave engines. A versão atual do projeto usa intervalo aberto; antes do deploy, fixar a série escolhida e gerar o lockfile. Os scripts atuais de banco leem .env local; a rotina de migração em produção precisará aceitar as variáveis injetadas pelo provedor.

Não imprimir DATABASE_URL em logs para verificar a configuração. Conferir conectividade com consulta de saúde sem expor credenciais.

## 3. Sequência de preparação

1. Concluir e revisar o formulário canônico, gestão de estudos, autorização e coleta.
2. Gerar e versionar package-lock.json; validar testes, typecheck e build.
3. Definir o produto DigitalOcean, região, recursos, backups e orçamento.
4. Efetuar o registro do domínio pela Cloudflare e confirmar controle da zona DNS; realizar a avaliação do nome descrita na análise.
5. Preparar o serviço Next.js e PostgreSQL com segredos próprios para produção.
6. Definir a migração de banco como etapa de implantação, executada uma única vez por versão.
7. Validar o fluxo completo com dados sintéticos em ambiente de preparação.
8. Adicionar o domínio na DigitalOcean, configurar na Cloudflare os registros DNS indicados pelo serviço e verificar HTTPS.
9. Configurar URLs de autenticação e redirecionamentos para a origem correta.
10. Verificar isolamento dos estudos, exportação, retenção e restauração.
11. Publicar a versão aprovada e registrar URL, commit, data, região e responsáveis efetivos.

O registro pela Cloudflare utiliza nameservers da Cloudflare; a hospedagem da aplicação permanece na DigitalOcean. Configurações de DNS e certificados dependem do serviço selecionado e da zona real. A documentação consultada registra uma limitação de DNSSEC em domínios associados à App Platform. Se isso se aplicar ao domínio, reavaliar a arquitetura ou encaminhar a configuração específica; não alterar proteção de DNS automaticamente.

## 4. Apresentação pública e créditos

Apresentar o sistema como plataforma independente de autoria do grupo, com referências ao instrumento e suas versões. A ligação acadêmica com o PPGIa/PUCPR não equivale, por si só, a endosso institucional da operação pública.

Manter visíveis:
- autoria da plataforma e contato responsável;
- atribuição do PSSUQ e referência da versão utilizada;
- licença da documentação e do código, com exclusões de direitos de terceiros;
- informação de independência em relação à IBM e ao autor do instrumento;
- política de privacidade e condições de participação/uso dos estudos;
- distinção entre demonstração com dados sintéticos e coleta real.

## 5. Critérios de publicação

- [ ] Build e testes da versão de entrega aprovados.
- [ ] Instrumento e idioma revisados; snapshot congelado.
- [ ] Autenticação e autorização testadas no servidor.
- [ ] Banco, migrações, backup e restauração verificados.
- [ ] Domínio sob controle do responsável e avaliação do nome concluída.
- [ ] HTTPS e redirecionamentos funcionando.
- [ ] APP_URL e callbacks de autenticação corretos.
- [ ] Segredos fora do Git e dos logs.
- [ ] Créditos, licenças, privacidade e contato publicados.
- [ ] Fluxo criar estudo -> coletar -> analisar -> exportar validado.
- [ ] Commit e data efetivos da publicação registrados.

## 6. Documentação oficial consultada em 12/11/2026

- Node.js/Next.js no buildpack: https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/
- Domínios e DNS na App Platform: https://docs.digitalocean.com/products/app-platform/how-to/manage-domains/
- Banco e pools PostgreSQL: https://docs.digitalocean.com/products/app-platform/how-to/connect-pg-pools/
- Registro e nameservers Cloudflare: https://developers.cloudflare.com/registrar/get-started/register-domain/
