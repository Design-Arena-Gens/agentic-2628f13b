"use client";

import { useMemo, useState } from "react";
import {
  baseFinancials,
  coreFeatures,
  differentiators,
  heroHighlights,
  integrationMatrix,
  marketInsights,
  monetizationStreams,
  navSections,
  quarterlyProjection,
  scenarioOutlooks,
  scaleStrategies,
} from "@/data/content";

function SectionTitle({
  label,
  eyebrow,
  description,
}: {
  label: string;
  eyebrow?: string;
  description?: string;
}) {
  return (
    <header className="mb-12 max-w-3xl">
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-lime-200/80">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-semibold text-slate-50 lg:text-4xl">
        {label}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-300/80">
          {description}
        </p>
      )}
    </header>
  );
}

export default function Home() {
  const [activeScenarioId, setActiveScenarioId] = useState("base");
  const activeScenario = useMemo(
    () => scenarioOutlooks.find((scenario) => scenario.id === activeScenarioId),
    [activeScenarioId],
  );

  return (
    <div className="relative min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-lime-300/90 to-emerald-400/40 text-slate-900">
              ⚽️
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-lime-200/80">
                SoccerAlert
              </p>
              <p className="text-xs text-slate-300/70">
                Experiência social de futebol com monetização nativa
              </p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
            {navSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="transition hover:text-lime-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16 lg:px-8">
        <section
          id="visao"
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_40px_120px_-50px_rgba(49,78,106,0.7)] lg:p-16"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-lime-200/80">
                Documento de Conceito
              </p>
              <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                SoccerAlert transforma a torcida em uma plataforma social
                monetizável.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-200/90">
                Aplicativo brasileiro que mistura informação, humor e apostas
                sociais para aproximar os torcedores de seus clubes e amigos.
                Alertas em tempo real, memes personalizados e uma economia
                própria de SoccerCoins elevam a experiência de acompanhar o
                futebol.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#monetizacao"
                  className="inline-flex items-center gap-2 rounded-full border border-lime-300/80 bg-lime-200/20 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-lime-200"
                >
                  💸 Ver monetização
                </a>
                <a
                  href="#projecoes"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-lime-200/60 hover:text-lime-100"
                >
                  📊 Projeções financeiras
                </a>
              </div>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3">
              {heroHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 text-center shadow-inner"
                >
                  <p className="text-3xl font-extrabold text-lime-200">
                    {highlight.title}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.35em] text-slate-400">
                    {highlight.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mercado" className="mt-24">
          <SectionTitle
            eyebrow="Mercado"
            label="Nicho apaixonado com predisposição à gamificação"
            description="Foco inicial em homens de 16 a 45 anos, urbanos e altamente conectados. O Brasil tem 150 milhões de torcedores ativos — captar 0,1% já habilita um negócio lucrativo."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {marketInsights.map((insight) => (
              <div
                key={insight.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-lime-200/60 hover:bg-white/[0.08]"
              >
                <p className="text-4xl font-black text-lime-200">
                  {insight.stat}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {insight.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300/80">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="funcionalidades" className="mt-24">
          <SectionTitle
            eyebrow="Produto"
            label="Funcionalidades que combinam dados, humor e competição social"
            description="Cada módulo foi desenhado para maximizar retenção e receita, mantendo o tom irreverente que os torcedores brasileiros amam."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {coreFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-8"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300/90">
                  {feature.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-300/70">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 text-lime-200">●</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="monetizacao" className="mt-24">
          <SectionTitle
            eyebrow="Modelo de Negócio"
            label="Monetização diversificada com economia própria"
            description="SoccerCoins criam uma camada de valor recorrente enquanto assinaturas, publicidade e afiliados aumentam o LTV por segmento."
          />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
            <table className="w-full table-fixed border-separate border-spacing-y-3 px-6 py-8 text-left text-sm">
              <thead className="text-slate-400">
                <tr className="[&>th]:px-6 [&>th]:py-2">
                  <th>Fonte de Receita</th>
                  <th>% Usuários</th>
                  <th>Ticket Médio</th>
                  <th>Receita Mensal</th>
                  <th className="w-2/5">Como monetiza</th>
                </tr>
              </thead>
              <tbody className="[&>tr>td]:px-6 [&>tr>td]:py-4">
                {monetizationStreams.map((stream) => (
                  <tr
                    key={stream.name}
                    className="rounded-2xl border border-white/5 bg-white/[0.04]"
                  >
                    <td className="font-semibold text-white">{stream.name}</td>
                    <td className="text-slate-200/80">{stream.percent}</td>
                    <td className="text-slate-200/80">{stream.ticket}</td>
                    <td className="text-lime-200">{stream.revenue}</td>
                    <td className="text-slate-300/80">{stream.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 rounded-3xl border border-lime-200/30 bg-lime-200/10 p-6">
            <div className="text-5xl font-black text-lime-200 md:text-6xl">
              {baseFinancials.monthly}
            </div>
            <div className="max-w-xl text-sm text-slate-200/90">
              <p className="font-semibold uppercase tracking-widest text-lime-200/80">
                Receita mensal estimada
              </p>
              <p className="mt-2">
                No cenário base, o SoccerAlert projeta{" "}
                <span className="font-semibold text-white">
                  {baseFinancials.annual} anuais
                </span>{" "}
                apoiado nas hipóteses:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-300/80">
                {baseFinancials.assumptions.map((assumption) => (
                  <li key={assumption}>{assumption}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projecoes" className="mt-24">
          <SectionTitle
            eyebrow="Financeiro"
            label="Projeções por cenário e por trimestre"
            description="Sensibilidade considera aquisição orgânica via influenciadores e desempenho de monetização por coorte."
          />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-8">
              <h3 className="text-lg font-semibold text-white">
                Sensibilidade por cenário
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {scenarioOutlooks.map((scenario) => (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => setActiveScenarioId(scenario.id)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition focus:outline-none focus:ring-2 focus:ring-lime-300/70 ${
                      activeScenarioId === scenario.id
                        ? `${scenario.color}`
                        : "border-white/20 text-slate-300 hover:border-lime-200/60 hover:text-lime-100"
                    }`}
                  >
                    {scenario.label}
                  </button>
                ))}
              </div>
              {activeScenario && (
                <div className="mt-8 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">
                      Usuários ativos
                    </p>
                    <p className="mt-2 text-3xl font-bold text-white">
                      {activeScenario.metrics.usuarios}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">
                      Receita anual
                    </p>
                    <p className="mt-2 text-3xl font-bold text-lime-200">
                      {activeScenario.metrics.receitaTotal}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">
                      Ticket moedas
                    </p>
                    <p className="mt-2 text-3xl font-bold text-white">
                      {activeScenario.metrics.ticket}
                    </p>
                  </div>
                  <div className="sm:col-span-3">
                    <ul className="space-y-2 text-sm text-slate-300/80">
                      {activeScenario.metrics.detalhes.map((detail) => (
                        <li key={detail} className="flex gap-2">
                          <span className="mt-1 text-lime-200">▹</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </article>

            <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-8">
              <h3 className="text-lg font-semibold text-white">
                Projeção trimestral (ano 1)
              </h3>
              <div className="mt-6 space-y-4">
                {quarterlyProjection.map((quarter) => (
                  <div
                    key={quarter.quarter}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {quarter.quarter}
                      </p>
                      <p className="text-xs text-slate-400">
                        {quarter.users} usuários ativos
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-lime-200">
                        {quarter.monthly}/mês
                      </p>
                      <p className="text-xs text-slate-400">
                        Receita trimestral {quarter.total}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="apis" className="mt-24">
          <SectionTitle
            eyebrow="Tecnologia"
            label="Stack de integrações para dados, alertas e vídeos"
            description="Começamos enxuto com API-Football + ScoreBat e evoluímos para webhooks e WebSocket conforme a base cresce."
          />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
            <table className="w-full table-auto border-separate border-spacing-y-3 px-6 py-8 text-left text-sm">
              <thead className="text-slate-400">
                <tr className="[&>th]:px-6 [&>th]:py-2">
                  <th>API</th>
                  <th>Cobertura</th>
                  <th>Vídeos</th>
                  <th>Histórico</th>
                  <th>Entrega</th>
                  <th>Custo</th>
                  <th>Uso recomendado</th>
                </tr>
              </thead>
              <tbody className="[&>tr>td]:px-6 [&>tr>td]:py-4">
                {integrationMatrix.map((integration) => (
                  <tr
                    key={integration.provider}
                    className="rounded-2xl border border-white/5 bg-white/[0.04]"
                  >
                    <td className="font-semibold text-white">
                      {integration.provider}
                    </td>
                    <td className="text-slate-300/80">{integration.coverage}</td>
                    <td className="text-slate-300/80">{integration.video}</td>
                    <td className="text-slate-300/80">{integration.history}</td>
                    <td className="text-slate-300/80">{integration.delivery}</td>
                    <td className="text-lime-200">{integration.cost}</td>
                    <td className="text-slate-200/90">{integration.stage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-sm text-slate-300/80">
            <p>
              🧠 Estratégia: iniciar com API-Football para estatísticas + ScoreBat
              para vídeos licenciados embutíveis, adicionando Sportmonks ou
              Roanuz conforme demanda por alertas instantâneos se intensificar.
            </p>
          </div>
        </section>

        <section id="escala" className="mt-24">
          <SectionTitle
            eyebrow="Go-to-market"
            label="Estratégias de escala e distribuição"
            description="Plano combina mídia orgânica, parcerias e recursos nativos de compartilhamento para crescer com eficiência."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {scaleStrategies.map((strategy) => (
              <article
                key={strategy.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {strategy.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300/80">
                  {strategy.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="diferenciais" className="mt-24">
          <SectionTitle
            eyebrow="Porque agora"
            label="Diferenciais competitivos do SoccerAlert"
            description="A combinação de humor, dados proprietários e economia virtual cria barreiras de entrada e aumenta switching costs."
          />
          <div className="rounded-3xl border border-lime-200/20 bg-lime-200/15 p-8">
            <ul className="space-y-4 text-sm text-slate-100 sm:text-base">
              {differentiators.map((item) => (
                <li key={item} className="flex gap-3 text-slate-100">
                  <span className="mt-1">🏆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="mt-24 border-t border-white/5 pt-8 text-center text-xs text-slate-400">
          SoccerAlert © {new Date().getFullYear()} · Futuro da resenha brasileira
        </footer>
      </main>
    </div>
  );
}
