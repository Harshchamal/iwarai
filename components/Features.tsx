import { Gauge, BellRing, LineChart, Boxes, Smartphone, CloudCog, Sparkles, Users } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  { icon: Gauge, title: "Real-Time Tracking", desc: "Monitor exact ingredient quantities instantly." },
  { icon: BellRing, title: "Smart Notifications", desc: "Receive alerts before ingredients run out." },
  { icon: LineChart, title: "Consumption Analytics", desc: "Understand usage trends and patterns." },
  { icon: Boxes, title: "Multi-Container", desc: "Manage multiple containers from one system." },
  { icon: Smartphone, title: "Mobile App", desc: "Access inventory anytime, anywhere." },
  { icon: CloudCog, title: "Cloud Sync", desc: "Secure and reliable data storage." },
  { icon: Sparkles, title: "AI Predictions", desc: "Estimate how many days ingredients will last." },
  { icon: Users, title: "Family Sharing", desc: "Let household members access inventory." },
];

export default function Features() {
  return (
    <section id="features" className="bg-zinc-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 sm:text-sm">Features</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 sm:mt-4 sm:text-3xl md:text-4xl">Smart Features Built For Modern Kitchens</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 80}>
              <div className="group h-full rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-6">
                <span className="inline-flex rounded-xl bg-amber-50 p-2.5 text-amber-500 transition-colors group-hover:bg-amber-500 group-hover:text-white sm:p-3"><f.icon className="h-5 w-5 sm:h-6 sm:w-6" /></span>
                <h3 className="mt-4 text-sm font-semibold text-zinc-900 sm:mt-5 sm:text-base">{f.title}</h3>
                <p className="mt-1.5 text-xs text-zinc-500 sm:mt-2 sm:text-sm">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}