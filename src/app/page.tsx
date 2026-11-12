import { scorePSSUQ } from "../domain/pssuq.ts";

const score = scorePSSUQ([...Array(6).fill(1), ...Array(6).fill(2), 3, 3, 3, 7]);
const labels = { overall: "Geral", sysUse: "Utilidade do sistema", infoQual: "Qualidade da informação", intQual: "Qualidade da interface" } as const;

export default function Home() {
  return <main>
    <span className="eyebrow">PPGIa · PUCPR · Fundamentos da IHC</span>
    <h1>PSSUQ Lab</h1>
    <p className="lead">Da coleta à análise, com fidelidade ao instrumento.</p>
    <p>Andrey · Gotardo · Kelly</p>
    <aside><strong>Base inicial de desenvolvimento.</strong> Gestão de estudos e coleta serão implementadas. Os números abaixo são exemplos sintéticos de cálculo.</aside>
    <section aria-labelledby="score-heading">
      <h2 id="score-heading">PSSUQ versão 3</h2>
      <p>16 itens · escala de 1 a 7 · menor escore indica melhor usabilidade percebida.</p>
      <div className="cards">{Object.entries(labels).map(([key, label]) => <article key={key}>
        <h3>{label}</h3><strong className="number">{score[key as keyof typeof score].mean?.toLocaleString("pt-BR", { maximumFractionDigits: 3 })}</strong>
        <p>{score[key as keyof typeof score].nItems} itens</p>
      </article>)}</div>
    </section>
    <section><h2>Próximas entregas</h2><ol>
      <li>Conferir a redação canônica e congelar o instrumento.</li>
      <li>Implementar estudos, tarefas e aplicação após a sessão de uso.</li>
      <li>Persistir respostas no PostgreSQL e disponibilizar análise e exportação.</li>
    </ol></section>
    <footer>Material autoral: <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>. Instrumento: James R. Lewis e fontes indicadas na documentação.</footer>
  </main>;
}
