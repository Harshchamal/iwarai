import { Clock, Leaf, ShieldCheck, LayoutGrid, ShoppingCart, Eye, Sparkles, RefreshCw } from "lucide-react";
import Reveal from "./Reveal";

const benefits = [
  { icon: Clock, name: "Save Time" },
  { icon: Leaf, name: "Reduce Food Waste" },
  { icon: ShieldCheck, name: "Prevent Shortages" },
  { icon: LayoutGrid, name: "Better Organization" },
  { icon: ShoppingCart, name: "Smart Purchasing" },
  { icon: Eye, name: "Real-Time Visibility" },
  { icon: Sparkles, name: "Modern Experience" },
  { icon: RefreshCw, name: "Automated Inventory" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-gradient-to-b from-amber-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 sm:text-sm">Benefits</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 sm:mt-4 sm:text-3xl md:text-4xl">Why Choose IWARAI?</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.name} delay={(i % 4) * 80}>
              <div className="flex flex-col items-center gap-2.5 rounded-2xl border border-white bg-white/70 p-4 text-center shadow-sm backdrop-blur sm:gap-3 sm:p-6">
                <span className="inline-flex rounded-full bg-amber-100 p-2.5 text-amber-600 sm:p-3"><b.icon className="h-5 w-5 sm:h-6 sm:w-6" /></span>
                <span className="text-xs font-medium text-zinc-800 sm:text-sm md:text-base">{b.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}