"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { TEAM } from "@/lib/data";

export default function PeopleContent() {
  const [hov, setHov] = useState<number | null>(null);
  const pi = TEAM.find((m) => m.pi)!;
  const members = TEAM.filter((m) => !m.pi);

  return (
    <div className="bg-[var(--cream)] min-h-screen pt-[80px]">
      <div className="px-20 py-20 pb-[120px]">
        <SectionHeader label="People" title="The" accent="Team" />

        {/* PI Feature Row */}
        <div
          className="grid gap-10 items-center border-t border-b border-[var(--border)] py-12 mb-20"
          style={{ gridTemplateColumns: "80px 1fr auto" }}
        >
          <div className="w-20 h-20 border border-[var(--gold)] flex items-center justify-center">
            <span className="font-[family-name:var(--font-playfair)] text-[28px] text-[var(--gold)] tracking-[0.05em]">
              {pi.init}
            </span>
          </div>
          <div>
            <div className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--gold)] tracking-[0.15em] uppercase mb-2.5">
              Principal Investigator
            </div>
            <div className="font-[family-name:var(--font-playfair)] text-[40px] text-[var(--ink)] tracking-[0.02em] leading-none">
              Prof. {pi.name}
            </div>
            <div className="font-[family-name:var(--font-inter)] font-light text-[14px] text-[var(--ink-dim)] mt-2">
              {pi.sub}
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <a
              href="mailto:mseabw@nus.edu.sg"
              className="font-[family-name:var(--font-inter)] text-[12px] text-[var(--gold)] tracking-[0.06em] no-underline hover:opacity-70 transition-opacity"
            >
              mseabw@nus.edu.sg
            </a>
            <span className="font-[family-name:var(--font-inter)] text-[11px] text-[var(--ink-dim)] tracking-[0.06em]">
              +65 6601 5389
            </span>
          </div>
        </div>

        {/* Group Members */}
        <div className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--ink-faint)] tracking-[0.15em] uppercase mb-8">
          Group Members
        </div>
        <div className="grid gap-px bg-[var(--border)]" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
          {members.map((m, i) => (
            <div
              key={m.name}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              className="relative px-7 py-8 transition-colors duration-200 overflow-hidden"
              style={{ background: hov === i ? "var(--surface)" : "var(--cream)" }}
            >
              {/* Gold bottom bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--gold)] transition-transform duration-300 origin-left"
                style={{ transform: hov === i ? "scaleX(1)" : "scaleX(0)" }}
              />
              <div
                className="w-11 h-11 border flex items-center justify-center mb-5 transition-colors duration-200"
                style={{ borderColor: hov === i ? "var(--gold)" : "var(--border-bright)" }}
              >
                <span
                  className="font-[family-name:var(--font-playfair)] text-[18px] tracking-[0.05em] transition-colors duration-200"
                  style={{ color: hov === i ? "var(--gold)" : "var(--ink-dim)" }}
                >
                  {m.init}
                </span>
              </div>
              <div className="font-[family-name:var(--font-playfair)] text-[22px] text-[var(--ink)] tracking-[0.02em] mb-1">
                {m.name}
              </div>
              <div className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--gold)] tracking-[0.1em] uppercase mb-1.5">
                {m.role}
              </div>
              <div className="font-[family-name:var(--font-inter)] font-light text-[13px] text-[var(--ink-dim)]">
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
