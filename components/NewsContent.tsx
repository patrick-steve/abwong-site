"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { NEWS } from "@/lib/data";

export default function NewsContent() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <div className="bg-[var(--cream)] min-h-screen pt-[80px]">
      <div className="px-20 py-20 pb-[120px]">
        <SectionHeader label="News" title="Latest" accent="Updates" />

        <div className="flex flex-col">
          {NEWS.map((n, i) => (
            <div
              key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              className="grid gap-12 items-center py-9 border-b border-[var(--border)] cursor-pointer transition-all duration-200"
              style={{
                gridTemplateColumns: "140px 1fr 40px",
                paddingLeft: hov === i ? 20 : 0,
                borderLeft: hov === i ? "2px solid var(--gold)" : "2px solid transparent",
              }}
            >
              <span className="font-[family-name:var(--font-inter)] text-[11px] text-[var(--gold)] tracking-[0.1em]">
                {n.date}
              </span>
              <div>
                <div className="font-[family-name:var(--font-playfair)] text-[28px] text-[var(--ink)] tracking-[0.02em] mb-2 leading-none">
                  {n.title}
                </div>
                <div className="font-[family-name:var(--font-inter)] font-light text-[14px] text-[var(--ink-dim)] leading-[1.65]">
                  {n.body}
                </div>
              </div>
              <div
                className="w-10 h-10 border flex items-center justify-center font-[family-name:var(--font-inter)] text-[16px] shrink-0 transition-all duration-200"
                style={{
                  color: hov === i ? "var(--gold)" : "var(--ink-dim)",
                  borderColor: hov === i ? "var(--gold)" : "var(--border)",
                }}
              >
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
