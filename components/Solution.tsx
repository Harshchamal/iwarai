import { Box, Scale, Cpu, CloudUpload, Smartphone, Brain } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  { icon: Box, title: "Store ingredients", desc: "Place ingredients inside smart containers." },
  { icon: Scale, title: "Sensors measure", desc: "Weight sensors measure quantities automatically." },
  { icon: Cpu, title: "ESP32 collects", desc: "The IoT controller gathers readings in real time." },
  { icon: CloudUpload, title: "Sent to cloud", desc: "Data is transmitted securely to the cloud." },
  { icon: Smartphone, title: "App shows stock", desc: "Mobile app shows real-time inventory levels." },
  { icon: Brain, title: "AI predicts", desc: "AI forecasts consumption and sends alerts." },
];

export default function Solution() {
  return (
    <section id="how" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 sm:text-sm">How It Works</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 sm:mt-4 sm:text-3xl md:text-4xl">One Smart System For Every Container</h2>
          <p className="mt-3 text-sm text-zinc-600 sm:mt-4 sm:text-base">From the jar on your shelf to a prediction on your phone.</p>
        </Reveal>
        <div className="relative mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-16 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="relative">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-lg shadow-amber-500/30 sm:h-14 sm:w-14 sm:rounded-2xl"><s.icon className="h-5 w-5 sm:h-6 sm:w-6" /></span>
                  <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-100 sm:text-5xl">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-zinc-900 sm:mt-5 sm:text-base">{s.title}</h3>
                <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}