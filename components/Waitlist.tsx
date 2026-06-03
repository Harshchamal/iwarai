"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) return;
    setDone(true);
  };

  return (
    <section id="waitlist" className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-5 py-12 text-center text-white sm:px-6 sm:py-16 md:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Be The First To Experience The Future Of Kitchen Storage</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-300 sm:mt-4 sm:text-base">Join our early access program and receive updates about product development, beta testing, and launch announcements.</p>
            {done ? (
              <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-2xl bg-emerald-500/15 px-5 py-4 text-emerald-300 sm:mt-10 sm:px-6 sm:py-5">
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-sm font-medium sm:text-base">You're on the list!</span>
              </div>
            ) : (
              <div className="mx-auto mt-8 flex max-w-lg flex-col gap-2.5 sm:mt-10 sm:gap-3 sm:flex-row">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder-zinc-400 outline-none focus:border-amber-400 sm:text-base" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder-zinc-400 outline-none focus:border-amber-400 sm:text-base" />
                <button onClick={handleSubmit} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-amber-400 sm:text-base">Join <ArrowRight className="h-4 w-4" /></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}