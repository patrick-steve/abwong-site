"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { RESEARCH } from "@/lib/data";

export default function ResearchTeaser() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-[var(--hero-bg)] px-20 py-[120px]">
      <div className="grid gap-20 items-start" style={{ gridTemplateColumns: "320px 1fr" }}>
        <div>
          <SectionHeader label="What We Do" title="Research" accent="Directions" light />
          <Link
            href="/research"
            className="inline-flex items-center gap-3 font-[family-name:var(--font-inter)] font-medium text-[13px] text-[var(--gold)] tracking-[0.08em] uppercase no-underline hover:gap-5 transition-all"
          >
            View All Research <span>→</span>
          </Link>
        </div>

        <div className="grid gap-px bg-[var(--border)]" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {RESEARCH.map((r, i) => (
            <div
              key={r.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-8 py-9 cursor-pointer overflow-hidden transition-colors duration-300"
              style={{ background: hovered === i ? "#1c1a16" : "#1a1712" }}
              onClick={() => {}}
            >
              {/* Gold top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--gold)] transition-transform duration-300 origin-left"
                style={{ transform: hovered === i ? "scaleX(1)" : "scaleX(0)" }}
              />
              <div className="font-[family-name:var(--font-inter)] text-[11px] text-[rgba(200,170,100,0.8)] tracking-[0.1em] mb-4">
                {r.num}
              </div>
              <div className="font-[family-name:var(--font-playfair)] text-[26px] text-white leading-[1.1] tracking-[-0.01em] mb-3">
                {r.short}
              </div>
              <div className="font-[family-name:var(--font-inter)] text-[10px] text-[rgba(255,255,255,0.4)] tracking-[0.08em] uppercase">
                {r.tag}
              </div>
              <div
                className="mt-5 font-[family-name:var(--font-inter)] text-[14px] text-[rgba(255,255,255,0.55)] leading-[1.65] overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: hovered === i ? 100 : 0,
                  opacity: hovered === i ? 1 : 0,
                }}
              >
                {r.body.slice(0, 120)}…
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
