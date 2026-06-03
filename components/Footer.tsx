import Logo from "./Logo";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Technology", href: "#technology" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <Logo className="w-7 h-7" />
            <span className="text-lg font-bold tracking-tight font-[family-name:var(--font-display)]">IWARAI</span>
          </div>
          <p className="mt-2 text-sm text-zinc-500">Smart Storage. Smarter Kitchen.</p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-600">
          {footerLinks.map((l) => (
            <li key={l.href}><a href={l.href} className="transition-colors hover:text-amber-600">{l.label}</a></li>
          ))}
        </ul>
      </div>
      <p className="mt-10 text-center text-xs text-zinc-400">© 2026 IWARAI. All Rights Reserved.</p>
    </footer>
  );
}