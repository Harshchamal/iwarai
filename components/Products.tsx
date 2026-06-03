import { Soup, Wheat, Candy, CookingPot, Container, LayoutDashboard } from "lucide-react";
import Reveal from "./Reveal";

const products = [
  { icon: Soup, name: "Smart Spice Containers", tone: "from-red-400 to-orange-400" },
  { icon: Container, name: "Smart Pantry Containers", tone: "from-amber-400 to-yellow-400" },
  { icon: Wheat, name: "Smart Flour Storage", tone: "from-yellow-400 to-amber-300" },
  { icon: Candy, name: "Smart Sugar Storage", tone: "from-pink-400 to-rose-400" },
  { icon: CookingPot, name: "Smart Rice Containers", tone: "from-orange-400 to-amber-500" },
  { icon: LayoutDashboard, name: "Inventory Dashboard", tone: "from-zinc-700 to-zinc-900" },
];

export default function Products() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 sm:text-sm">Product Range</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 sm:mt-4 sm:text-3xl md:text-4xl">Designed For Everyday Kitchens</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 100}>
              <div className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl">
                <div className={`flex h-28 items-center justify-center bg-gradient-to-br sm:h-40 ${p.tone}`}><p.icon className="h-10 w-10 text-white/90 transition-transform group-hover:scale-110 sm:h-14 sm:w-14" /></div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-sm font-semibold text-zinc-900 sm:text-base">{p.name}</h3>
                  <p className="mt-1 text-xs text-zinc-500 sm:text-sm">IoT-enabled, real-time tracking.</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}