"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { RESEARCH } from "@/lib/data";

export default function ResearchContent() {
  const [active, setActive] = useState(0);
  const r = RESEARCH[active];

  return (
    <div className="bg-[var(--cream)] min-h-screen pt-[80px]">
      <div className="px-20 pt-20">
        <SectionHeader label="Research" title="Our Research" accent="Directions" />

        {/* Tab bar */}
        <div className="flex border-b border-[var(--border)] gap-0 -mb-px">
          {RESEARCH.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className="bg-none border-none cursor-pointer px-7 py-3.5 font-[family-name:var(--font-inter)] text-[11px] tracking-[0.1em] uppercase transition-colors"
              style={{
                color: active === i ? "var(--gold)" : "rgba(20,18,16,0.45)",
                borderBottom: active === i ? "1px solid var(--gold)" : "1px solid transparent",
              }}
            >
              {item.short}
            </button>
          ))}
        </div>
      </div>

      {/* Content panel */}
      <div key={active} className="px-20 py-20 pb-[120px]" style={{ animation: "fadeIn 0.4s ease both" }}>
        <div className="grid gap-[100px] items-start" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <div className="font-[family-name:var(--font-inter)] text-[13px] text-[var(--gold)] tracking-[0.1em] mb-6">
              {r.num} / 04
            </div>
            <h3
              className="font-[family-name:var(--font-playfair)] text-[64px] leading-[0.95] tracking-[0.01em] text-[var(--ink)] mb-8 whitespace-pre-line"
            >
              {r.title}
            </h3>
            <div className="inline-block border border-[var(--gold-dim)] px-3.5 py-[5px] mb-8">
              <span className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--gold)] tracking-[0.12em] uppercase">
                {r.tag}
              </span>
            </div>
            <p className="font-[family-name:var(--font-inter)] font-light text-[16px] text-[var(--ink-dim)] leading-[1.8] mb-12">
              {r.body}
            </p>

            <div className="border-t border-[var(--border)] pt-8">
              <div className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--ink-faint)] tracking-[0.15em] uppercase mb-5">
                Key Objectives
              </div>
              {r.bullets.map((b, i) => (
                <div key={i} className="flex items-center gap-4 mb-3.5">
                  <div className="w-5 h-px bg-[var(--gold)] shrink-0" />
                  <span className="font-[family-name:var(--font-inter)] font-normal text-[15px] text-[var(--ink)]">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual panel */}
          <div>
            <div className="relative aspect-square bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 300 300" className="w-[70%] h-[70%] opacity-50">
                <circle cx="150" cy="150" r="40" fill="none" stroke="rgba(138,106,42,0.8)" strokeWidth="1" />
                <circle
                  cx="150"
                  cy="150"
                  r="80"
                  fill="none"
                  stroke="rgba(138,106,42,0.4)"
                  strokeWidth="0.5"
                  strokeDasharray="6 4"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="120"
                  fill="none"
                  stroke="rgba(138,106,42,0.2)"
                  strokeWidth="0.5"
                  strokeDasharray="3 8"
                />
                <text
                  x="150"
                  y="158"
                  textAnchor="middle"
                  fontFamily="serif"
                  fontSize="28"
                  fill="rgba(138,106,42,0.9)"
                  letterSpacing="1"
                >
                  {r.num}
                </text>
                {[0, 90, 180, 270].map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 150 + 80 * Math.cos(rad);
                  const y = 150 + 80 * Math.sin(rad);
                  return <circle key={angle} cx={x} cy={y} r="3" fill="rgba(138,106,42,0.6)" />;
                })}
              </svg>
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-[rgba(20,18,16,0.12)] to-transparent">
                <div className="font-[family-name:var(--font-playfair)] text-[20px] text-[var(--ink)] tracking-[0.05em]">
                  {r.tag}
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                className="bg-none border border-[var(--border)] text-[var(--ink-dim)] cursor-pointer px-5 py-2.5 font-[family-name:var(--font-inter)] text-[11px] tracking-[0.1em] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all"
              >
                ← Prev
              </button>
              <button
                onClick={() => setActive((a) => Math.min(RESEARCH.length - 1, a + 1))}
                className="bg-none border border-[var(--border)] text-[var(--ink-dim)] cursor-pointer px-5 py-2.5 font-[family-name:var(--font-inter)] text-[11px] tracking-[0.1em] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
