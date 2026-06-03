"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how" },
  { label: "Benefits", href: "#benefits" },
  { label: "Technology", href: "#technology" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 mt-3">
        <nav className="flex items-center justify-between rounded-2xl border border-white/40 bg-white/60 px-4 py-3 shadow-lg shadow-zinc-900/5 backdrop-blur-xl">
          <a href="#home" className="flex items-center gap-2">
            <Logo className="w-7 h-7" />
            <span className="text-lg font-bold tracking-tight font-[family-name:var(--font-display)]">IWARAI</span>
          </a>

          <ul className="hidden lg:flex items-center gap-7 text-sm text-zinc-600">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-zinc-900">{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#waitlist" className="hidden sm:inline-flex rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700">
              Join Waitlist
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden rounded-lg p-2 text-zinc-700 hover:bg-zinc-100" aria-label="Toggle menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-lg backdrop-blur-xl">
            <ul className="flex flex-col gap-1 text-sm text-zinc-700">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-zinc-100">{l.label}</a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#waitlist" onClick={() => setOpen(false)} className="block rounded-full bg-zinc-900 px-5 py-2 text-center text-white">Join Waitlist</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}