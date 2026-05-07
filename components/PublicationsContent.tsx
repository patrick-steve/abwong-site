"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { PUBS } from "@/lib/data";

export default function PublicationsContent() {
  const [hov, setHov] = useState<string | null>(null);
  const years = [...new Set(PUBS.map((p) => p.y))].sort((a, b) => b - a);

  return (
    <div className="bg-[var(--cream)] min-h-screen pt-[80px]">
      <div className="px-20 py-20 pb-[120px]">
        <SectionHeader label="Publications" title="Our" accent="Work" />

        {years.map((y) => (
          <div key={y} className="mb-[60px]">
            <div className="flex items-center gap-6 mb-0">
              <span className="font-[family-name:var(--font-playfair)] text-[14px] text-[var(--ink-dim)] tracking-[0.1em]">
                {y}
              </span>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>

            {PUBS.filter((p) => p.y === y).map((pub, i) => {
              const key = `${y}-${i}`;
              return (
                <div
                  key={key}
                  onMouseEnter={() => setHov(key)}
                  onMouseLeave={() => setHov(null)}
                  className="grid gap-10 items-center px-6 -mx-6 py-7 border-b border-[var(--border)] cursor-pointer transition-colors duration-200"
                  style={{
                    gridTemplateColumns: "1fr auto",
                    background: hov === key ? "var(--off-cream)" : "transparent",
                  }}
                >
                  <div>
                    <div className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--gold)] tracking-[0.1em] uppercase mb-2.5">
                      {pub.journal}
                    </div>
                    <div className="font-[family-name:var(--font-inter)] font-medium text-[17px] text-[var(--ink)] leading-[1.35] mb-2">
                      {pub.title}
                    </div>
                    <div className="font-[family-name:var(--font-inter)] font-light text-[13px] text-[var(--ink-dim)]">
                      {pub.authors}
                    </div>
                  </div>
                  <div
                    className="border px-[18px] py-2 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.1em] uppercase whitespace-nowrap transition-all duration-200"
                    style={{
                      color: hov === key ? "var(--gold)" : "var(--ink-dim)",
                      borderColor: hov === key ? "var(--gold)" : "var(--border)",
                    }}
                  >
                    View →
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
