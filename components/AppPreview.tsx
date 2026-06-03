import { LayoutDashboard, Boxes, ListChecks, BellRing, BarChart3, Settings } from "lucide-react";
import Reveal from "./Reveal";

const screens = [
  { icon: LayoutDashboard, name: "Dashboard" },
  { icon: Boxes, name: "Container Details" },
  { icon: ListChecks, name: "Inventory" },
  { icon: BellRing, name: "Low Stock Alerts" },
  { icon: BarChart3, name: "Usage Analytics" },
  { icon: Settings, name: "Settings" },
];

export default function AppPreview() {
  return (
    <section className="relative overflow-hidden bg-zinc-900 py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10"><div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" /></div>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 sm:text-sm">Mobile App</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:mt-4 sm:text-3xl md:text-4xl">Your Kitchen In Your Pocket</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-3 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-6">
          {screens.map((s, i) => (
            <Reveal key={s.name} delay={(i % 6) * 70}>
              <div className="mx-auto w-full max-w-[110px] sm:max-w-[150px]">
                <div className="aspect-[9/19] rounded-[1.25rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-1.5 backdrop-blur-sm sm:rounded-[1.75rem] sm:p-2">
                  <div className="flex h-full flex-col items-center justify-center gap-3 rounded-[1rem] bg-zinc-800/60 sm:rounded-[1.35rem]"><span className="rounded-xl bg-amber-500/20 p-2 text-amber-400 sm:rounded-2xl sm:p-3"><s.icon className="h-5 w-5 sm:h-6 sm:w-6" /></span></div>
                </div>
                <p className="mt-2 text-center text-xs text-zinc-300 sm:mt-3 sm:text-sm">{s.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}