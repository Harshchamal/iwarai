import { Cpu, Scale, Cloud, Smartphone, TrendingUp, Radio, Activity, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const tech = [
  { icon: Cpu, name: "ESP32 Controller" },
  { icon: Scale, name: "Load Cell Sensors" },
  { icon: Cloud, name: "Cloud Platform" },
  { icon: Smartphone, name: "Mobile App" },
  { icon: TrendingUp, name: "Predictive Analytics" },
  { icon: Radio, name: "IoT Connectivity" },
  { icon: Activity, name: "Real-Time Monitoring" },
  { icon: ShieldCheck, name: "Secure Storage" },
];

export default function Technology() {
  return (
    <section id="technology" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 sm:text-sm">Technology</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 sm:mt-4 sm:text-3xl md:text-4xl">Powered By Smart Technology</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4">
          {tech.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 80}>
              <div className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white p-3 shadow-sm transition-shadow hover:shadow-md sm:gap-4 sm:p-5">
                <span className="inline-flex shrink-0 rounded-lg bg-zinc-900 p-2 text-amber-400 sm:rounded-xl sm:p-3"><t.icon className="h-4 w-4 sm:h-5 sm:w-5" /></span>
                <span className="text-xs font-medium text-zinc-800 sm:text-sm md:text-base">{t.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}