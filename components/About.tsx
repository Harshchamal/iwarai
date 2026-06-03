import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 sm:text-sm">About IWARAI</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 sm:mt-4 sm:text-3xl md:text-4xl">What is IWARAI?</h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:mt-6 sm:text-lg">IWARAI is a smart kitchen inventory platform designed to modernize household food storage. Using intelligent weight sensors and wireless connectivity, the system continuously monitors ingredient quantities and provides real-time visibility through a mobile application.</p>
          <p className="mt-3 text-base leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg">Instead of manually checking jars and containers, users can instantly see their available stock, receive alerts, and make smarter purchasing decisions.</p>
        </Reveal>
      </div>
    </section>
  );
}