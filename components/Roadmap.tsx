import Reveal from "./Reveal";

const milestones = [
  { period: "2026 Q1", title: "Research & Concept Development" },
  { period: "2026 Q2", title: "Prototype Development" },
  { period: "2026 Q3", title: "Mobile Application Launch" },
  { period: "2026 Q4", title: "Beta Testing" },
  { period: "2027 Q1", title: "Official Product Launch" },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 sm:text-sm">Roadmap</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 sm:mt-4 sm:text-3xl md:text-4xl">Our Journey</h2>
        </Reveal>
        <div className="relative mt-10 pl-7 sm:mt-14 sm:pl-8">
          <div className="absolute left-[6px] top-2 bottom-2 w-px bg-gradient-to-b from-amber-400 to-amber-100 sm:left-[7px]" />
          {milestones.map((m, i) => (
            <Reveal key={m.period} delay={i * 90}>
              <div className="relative pb-8 last:pb-0 sm:pb-10">
                <span className="absolute -left-[27px] top-1 h-3.5 w-3.5 rounded-full border-4 border-white bg-amber-500 shadow sm:-left-[31px] sm:h-4 sm:w-4" />
                <p className="text-xs font-semibold text-amber-600 sm:text-sm">{m.period}</p>
                <h3 className="mt-0.5 text-base font-semibold text-zinc-900 sm:mt-1 sm:text-lg">{m.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}