import { ArrowRight, Bell, Wifi } from "lucide-react";
import Reveal from "./Reveal";

const stock = [
  { name: "Sugar", value: "480g", pct: 62, color: "bg-amber-400" },
  { name: "Chili Powder", value: "175g", pct: 22, color: "bg-red-400" },
  { name: "Milk Powder", value: "650g", pct: 78, color: "bg-yellow-300" },
  { name: "Rice", value: "2.3kg", pct: 88, color: "bg-orange-400" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute top-32 right-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.06),transparent_60%)]" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:gap-14 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-medium text-amber-700 sm:px-4 sm:py-1.5 sm:text-xs"><Wifi className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Smart IoT kitchen system</span>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.1] tracking-tight text-zinc-900 sm:mt-6 sm:text-5xl lg:text-6xl">The Future of <span className="text-amber-500">Smart Kitchen</span> Storage</h1>
          <p className="mt-5 max-w-xl text-base text-zinc-600 sm:mt-6 sm:text-lg">Track spices, sugar, flour, rice, and pantry essentials automatically with intelligent IoT containers powered by real-time inventory monitoring.</p>
          <p className="mt-3 max-w-xl text-sm text-zinc-500 sm:mt-4 sm:text-base">IWARAI helps households eliminate food waste, avoid stock shortages, and manage kitchen ingredients effortlessly.</p>
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
            <a href="#waitlist" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-900/10 transition-transform hover:-translate-y-0.5 sm:px-7 sm:py-3.5 sm:text-base">Join the Waitlist <ArrowRight className="h-4 w-4" /></a>
            <a href="#about" className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 sm:px-7 sm:py-3.5 sm:text-base">Learn More</a>
          </div>
        </Reveal>
        <Reveal delay={150} className="relative">
          <div className="relative rounded-2xl border border-white/60 bg-white/70 p-5 shadow-2xl shadow-amber-900/10 backdrop-blur-xl sm:rounded-3xl sm:p-6">
            <div className="mb-4 flex items-center justify-between sm:mb-5">
              <div>
                <p className="text-sm font-semibold text-zinc-900">Kitchen Inventory</p>
                <p className="text-xs text-zinc-500">6 containers connected</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Live</span>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {stock.map((s) => (
                <div key={s.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-zinc-700">{s.name}</span>
                    <span className="text-zinc-500">{s.value}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100"><div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.pct}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -left-4 top-10 hidden animate-float rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-red-100 p-1.5 text-red-500"><Bell className="h-4 w-4" /></span>
              <div>
                <p className="text-xs font-semibold text-zinc-900">Low Stock Alert</p>
                <p className="text-[11px] text-zinc-500">Chili Powder will last 3 more days</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-3 bottom-6 hidden animate-float-slow rounded-2xl border border-white/60 bg-white/90 px-4 py-2.5 shadow-xl backdrop-blur-md sm:block"><p className="text-xs font-semibold text-amber-600">Refill Recommended</p></div>
        </Reveal>
      </div>
    </section>
  );
}