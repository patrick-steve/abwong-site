"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[var(--hero-bg)] flex flex-col justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1e1b17] to-[#141210]" />

        {/* Noise texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.045]" xmlns="http://www.w3.org/2000/svg">
          <filter id="hn">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hn)" />
        </svg>

        {/* Right-side overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[rgba(40,36,28,0.6)] to-transparent" />

        {/* Grid lines */}
        <svg
          className="absolute right-[8%] top-[8%] w-[36%] h-[84%] opacity-[0.055]"
          viewBox="0 0 400 700"
          preserveAspectRatio="none"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="700" stroke="white" strokeWidth="0.5" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <line key={`h${i}`} x1="0" y1={i * 87} x2="400" y2={i * 87} stroke="white" strokeWidth="0.5" />
          ))}
        </svg>

        {/* Ghost numeral */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 font-[family-name:var(--font-playfair)] font-black text-[clamp(140px,20vw,300px)] text-[rgba(255,255,255,0.025)] leading-none select-none tracking-[-0.04em]">
          #1
        </div>

        {/* Gold glow */}
        <div className="absolute right-[20%] top-[30%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(138,106,42,0.06)_0%,transparent_65%)] animate-breathe" />

        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[rgba(10,9,8,0.7)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative px-20 pt-[120px] pb-20 max-w-[1200px]">
        {/* Overline */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-px h-10 bg-[rgba(200,170,100,0.7)]" />
          <span className="font-[family-name:var(--font-inter)] font-normal text-[11px] text-[rgba(200,170,100,0.8)] tracking-[0.2em] uppercase">
            National University of Singapore · Est. 2021
          </span>
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-playfair)] font-bold text-[clamp(64px,9vw,140px)] leading-[0.95] tracking-[-0.02em] text-white mb-0">
          A.B. Wong
          <br />
          <em className="italic font-normal text-[rgba(200,170,100,0.85)]">Group</em>
        </h1>

        {/* Descriptor row */}
        <div className="flex items-start gap-[60px] mt-10 pt-10 border-t border-[rgba(255,255,255,0.1)]">
          <p className="font-[family-name:var(--font-inter)] font-light text-[17px] leading-[1.75] text-[rgba(255,255,255,0.5)] max-w-[520px]">
            Advancing electrochemical CO₂ conversion and sustainable energy materials through rational synthesis and
            novel catalyst design at NUS.
          </p>
          <div className="flex gap-12 shrink-0">
            {[
              ["4", "Research Dirs."],
              ["20+", "Publications"],
              ["6", "Team Members"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-[family-name:var(--font-playfair)] font-bold text-[48px] text-white leading-none tracking-[-0.02em]">
                  {n}
                </div>
                <div className="font-[family-name:var(--font-inter)] font-normal text-[10px] text-[rgba(255,255,255,0.4)] tracking-[0.14em] uppercase mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-4 mt-11">
          <Link
            href="/research"
            className="bg-white text-[var(--ink)] no-underline px-9 py-3.5 font-[family-name:var(--font-inter)] font-medium text-[12px] tracking-[0.1em] uppercase hover:bg-[#e8e6e0] transition-colors"
          >
            Explore Research
          </Link>
          <Link
            href="/people"
            className="bg-transparent text-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.25)] no-underline px-9 py-3.5 font-[family-name:var(--font-inter)] font-normal text-[12px] tracking-[0.1em] uppercase hover:border-[rgba(255,255,255,0.6)] hover:text-white transition-all"
          >
            Meet the Team
          </Link>
        </div>
      </div>

      {/* Top-right badge */}
      <div className="absolute top-20 right-20 flex flex-col items-end gap-2.5">
        <div className="flex items-center gap-3 border border-[rgba(255,255,255,0.15)] px-[18px] py-2.5 bg-[rgba(20,18,16,0.5)] backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-breathe" />
          <span className="font-[family-name:var(--font-inter)] font-normal text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.12em] uppercase">
            NUS · Dept. of MSE
          </span>
        </div>
        <div className="flex gap-1.5">
          {["Electrocatalysis", "CO₂ Reduction", "Materials"].map((tag) => (
            <span
              key={tag}
              className="font-[family-name:var(--font-inter)] font-normal text-[9px] text-[rgba(200,170,100,0.9)] tracking-[0.1em] uppercase border border-[rgba(200,170,100,0.25)] px-2.5 py-1 bg-[rgba(20,18,16,0.5)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom-right molecule */}
      <div className="absolute right-20 bottom-20 opacity-[0.18] pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 220 220">
          <circle cx="110" cy="110" r="30" fill="none" stroke="#8a6a2a" strokeWidth="1.2" />
          <circle cx="110" cy="110" r="65" fill="none" stroke="#8a6a2a" strokeWidth="0.6" strokeDasharray="5 4" />
          <circle cx="110" cy="110" r="100" fill="none" stroke="#8a6a2a" strokeWidth="0.3" strokeDasharray="2 6" />
          {[[110, 10], [200, 110], [110, 200], [20, 110], [176, 44], [176, 176], [44, 176], [44, 44]].map(
            ([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i < 4 ? 5 : 3} fill="#8a6a2a" />
            )
          )}
          <circle cx="110" cy="110" r="10" fill="#8a6a2a" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-20 flex flex-col items-center gap-2">
        <div
          className="font-[family-name:var(--font-inter)] font-light text-[10px] text-[rgba(255,255,255,0.2)] tracking-[0.15em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </div>
        <div className="w-px h-[60px] bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-transparent" />
      </div>
    </section>
  );
}
