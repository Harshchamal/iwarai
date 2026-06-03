export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="IWARAI logo"
    >
      <defs>
        <linearGradient id="iwarai-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbbf24" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <rect x="12" y="18" width="24" height="24" rx="7" fill="url(#iwarai-grad)" />
      <rect x="16" y="30" width="16" height="8" rx="3" fill="#fff" fillOpacity="0.85" />
      <rect x="16" y="13" width="16" height="5" rx="2.5" fill="#18181b" />
      <circle cx="24" cy="7" r="2.4" fill="#18181b" />
      <path d="M19.5 8.5c1-1.5 2.7-2.5 4.5-2.5s3.5 1 4.5 2.5" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}