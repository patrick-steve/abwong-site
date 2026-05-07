"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { POSITIONS } from "@/lib/data";

export default function OpenPositionsContent() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <div className="bg-[var(--cream)] min-h-screen pt-[80px]">
      <div className="px-20 py-20 pb-[120px]">
        <SectionHeader label="Careers" title="Open" accent="Positions" />

        <p className="font-[family-name:var(--font-inter)] font-light text-[16px] text-[var(--ink-dim)] leading-[1.75] max-w-[600px] mb-[72px]">
          We seek motivated researchers at every level. Interested in joining? Reach out even if you don&apos;t see your
          exact role listed.
        </p>

        <div className="flex flex-col -mx-6">
          {POSITIONS.map((pos, i) => (
            <div
              key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              className="grid gap-12 items-center px-6 py-10 border-b border-[var(--border)] transition-colors duration-200"
              style={{
                gridTemplateColumns: "100px 1fr auto",
                background: hov === i ? "var(--off-cream)" : "transparent",
              }}
            >
              <div
                className="border px-3 py-1.5 font-[family-name:var(--font-inter)] text-[10px] text-[var(--gold)] tracking-[0.1em] text-center transition-colors duration-200"
                style={{ borderColor: hov === i ? "var(--gold)" : "var(--border-bright)" }}
              >
                {pos.type}
              </div>
              <div>
                <div className="font-[family-name:var(--font-playfair)] text-[26px] text-[var(--ink)] tracking-[0.02em] mb-2.5 leading-none">
                  {pos.title}
                </div>
                <div className="font-[family-name:var(--font-inter)] font-light text-[14px] text-[var(--ink-dim)] leading-[1.65]">
                  {pos.desc}
                </div>
              </div>
              <Link
                href="/contact"
                className="no-underline px-7 py-3 font-[family-name:var(--font-inter)] font-semibold text-[12px] tracking-[0.08em] uppercase whitespace-nowrap border transition-all duration-200"
                style={{
                  background: hov === i ? "var(--gold)" : "transparent",
                  color: hov === i ? "var(--cream)" : "var(--ink-dim)",
                  borderColor: hov === i ? "var(--gold)" : "var(--border)",
                }}
              >
                Apply
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
