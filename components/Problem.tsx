import { PackageX, Search, Trash2, Timer } from "lucide-react";
import Reveal from "./Reveal";

const problems = [
  { icon: PackageX, stat: "73%", title: "Running out", desc: "Households run out of essential ingredients mid-recipe more often than they expect." },
  { icon: Search, stat: "Daily", title: "Hard to track", desc: "Keeping a mental list of what's left across dozens of jars is nearly impossible." },
  { icon: Trash2, stat: "30%", title: "Food waste", desc: "Poor inventory visibility leads to forgotten, expired, and wasted ingredients." },
  { icon: Timer, stat: "Mins/day", title: "Time wasted", desc: "Manually opening and inspecting containers adds up to wasted time every day." },
];

export default function Problem() {
  return (
    <section className="bg-zinc-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">Kitchen Storage Should Be Smarter</h2>
          <p className="mt-3 text-sm text-zinc-600 sm:mt-4 sm:text-base">The everyday problems with managing a kitchen the old way.</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg sm:p-6">
                <span className="inline-flex rounded-xl bg-amber-50 p-2.5 text-amber-500 sm:p-3"><p.icon className="h-5 w-5 sm:h-6 sm:w-6" /></span>
                <p className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-zinc-900 sm:mt-5 sm:text-2xl">{p.stat}</p>
                <h3 className="mt-1 text-sm font-semibold text-zinc-900 sm:text-base">{p.title}</h3>
                <p className="mt-1.5 text-xs text-zinc-500 sm:mt-2 sm:text-sm">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}