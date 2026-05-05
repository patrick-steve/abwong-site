"use client";

import Image from "next/image";
import { useState } from "react";
import { POSTDOCS, PHD_STUDENTS, COADV_STUDENTS, ALUMNI } from "@/lib/data";

// ── Reusable member card ─────────────────────────────────────────────────────
function MemberCard({
  name, init, since, focus, sub,
}: {
  name: string; init: string; since: string; focus: string; sub: string;
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative flex flex-col p-8 border border-[var(--border)] transition-all duration-300 overflow-hidden cursor-default"
      style={{ background: hov ? "var(--surface)" : "var(--cream)" }}
    >
      {/* Gold left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--gold)] transition-transform duration-300 origin-top"
        style={{ transform: hov ? "scaleY(1)" : "scaleY(0)" }}
      />
      {/* Initials box */}
      <div
        className="w-12 h-12 border flex items-center justify-center mb-6 transition-colors duration-300 shrink-0"
        style={{ borderColor: hov ? "var(--gold)" : "var(--border-bright)" }}
      >
        <span
          className="font-[family-name:var(--font-playfair)] text-[18px] tracking-[0.05em] transition-colors duration-300"
          style={{ color: hov ? "var(--gold)" : "var(--ink-dim)" }}
        >
          {init}
        </span>
      </div>
      {/* Name */}
      <div className="font-[family-name:var(--font-playfair)] text-[20px] text-[var(--ink)] leading-[1.2] tracking-[0.01em] mb-1">
        {name}
      </div>
      {/* Sub-role */}
      <div className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--gold)] tracking-[0.14em] uppercase mb-3">
        {sub}
      </div>
      {/* Focus */}
      <div className="font-[family-name:var(--font-inter)] font-light text-[13px] text-[var(--ink-dim)] leading-[1.6] mb-4 flex-1">
        {focus}
      </div>
      {/* Since */}
      <div className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--ink-faint)] tracking-[0.1em]">
        Since {since}
      </div>
    </div>
  );
}

// ── Section label ────────────────────────────────────────────────────────────
function GroupLabel({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center gap-5 mb-8">
      <div className="w-6 h-px bg-[var(--gold)]" />
      <span className="font-[family-name:var(--font-inter)] font-medium text-[10px] text-[var(--gold)] tracking-[0.2em] uppercase">
        {label}
      </span>
      <span className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--ink-faint)] tracking-[0.1em]">
        — {count}
      </span>
      <div className="flex-1 h-px bg-[var(--border)]" />
    </div>
  );
}

export default function PeopleContent() {
  return (
    <div className="bg-[var(--cream)]">

      {/* ── PI Section ────────────────────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="grid" style={{ gridTemplateColumns: "420px 1fr" }}>

          {/* Photo panel — fills full grid row height, object-cover from top */}
          <div className="relative bg-[var(--hero-bg)] overflow-hidden" style={{ minHeight: "100%" }}>
            {/* Noise */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <filter id="pin">
                <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch"/>
                <feColorMatrix type="saturate" values="0"/>
              </filter>
              <rect width="100%" height="100%" filter="url(#pin)"/>
            </svg>
            {/* Gold glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(138,106,42,0.1)_0%,transparent_65%)] pointer-events-none"/>
            {/* Photo */}
            <Image
              src="/prof-wong.png"
              alt="Prof. Andrew B. Wong"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[rgba(10,9,8,0.92)] to-transparent"/>
            <div className="absolute bottom-0 left-0 right-0 px-8 py-7">
              <div className="font-[family-name:var(--font-playfair)] font-medium text-[22px] text-white leading-none mb-1.5">
                Prof. Andrew B. Wong
              </div>
              <div className="font-[family-name:var(--font-inter)] text-[9px] text-[rgba(200,170,100,0.8)] tracking-[0.16em] uppercase">
                Principal Investigator
              </div>
            </div>
          </div>

          {/* Bio panel */}
          <div className="px-16 py-20 pt-[100px] flex flex-col justify-center">
            <h1 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(36px,4vw,60px)] text-[var(--ink)] leading-[1.0] tracking-[-0.02em] mb-5">
              Prof. Andrew B. <em className="italic font-normal text-[var(--gold)]">Wong</em>
            </h1>

            <div className="flex flex-col gap-2 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[var(--gold)]"/>
                <span className="font-[family-name:var(--font-inter)] font-medium text-[10px] text-[var(--gold)] tracking-[0.2em] uppercase">
                  Principal Investigator · NUS Dept. of MSE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[var(--gold-dim)]"/>
                <span className="font-[family-name:var(--font-inter)] font-medium text-[10px] text-[var(--gold)] tracking-[0.2em] uppercase opacity-75">
                  NUS Presidential Young Professor
                </span>
              </div>
            </div>

            <p className="font-[family-name:var(--font-inter)] font-light text-[15px] text-[var(--ink-dim)] leading-[1.85] mb-5">
              Prof. Andrew B. Wong is a Presidential Young Professor and Assistant Professor in the Department of Materials Science and Engineering at the National University of Singapore. His research sits at the intersection of electrochemistry and materials synthesis, with a focus on developing novel routes for electrochemical CO₂ conversion and sustainable energy materials.
            </p>
            <p className="font-[family-name:var(--font-inter)] font-light text-[15px] text-[var(--ink-dim)] leading-[1.85] mb-10">
              He received his PhD from UC Berkeley and completed postdoctoral training before joining NUS in 2021. His group combines expertise in rational material synthesis, electrocatalysis, and device engineering.
            </p>

            {/* Credentials row */}
            <div className="grid grid-cols-3 border-t border-[var(--border)] pt-8 gap-6">
              {[
                { label: "Affiliation", val: "NUS, Dept. of MSE" },
                { label: "PhD", val: "UC Berkeley" },
                { label: "Award", val: "Presidential Young Professor" },
              ].map(({ label, val }) => (
                <div key={label}>
                  <div className="font-[family-name:var(--font-inter)] font-medium text-[9px] text-[var(--gold)] tracking-[0.15em] uppercase mb-1.5">
                    {label}
                  </div>
                  <div className="font-[family-name:var(--font-inter)] text-[14px] text-[var(--ink)] leading-[1.4]">
                    {val}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:mseabw@nus.edu.sg"
              className="inline-flex items-center gap-3 mt-8 font-[family-name:var(--font-inter)] text-[12px] text-[var(--gold)] tracking-[0.08em] no-underline border-b border-[rgba(138,106,42,0.3)] pb-[3px] hover:border-[var(--gold)] transition-all self-start"
            >
              mseabw@nus.edu.sg →
            </a>
          </div>
        </div>
      </section>

      {/* ── Group Members ─────────────────────────────────────────────────── */}
      <section className="px-20 py-20 border-b border-[var(--border)]">
        {/* Section heading */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[var(--gold)]"/>
            <span className="font-[family-name:var(--font-inter)] font-medium text-[10px] text-[var(--gold)] tracking-[0.2em] uppercase">
              Group Members
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(32px,4vw,56px)] text-[var(--ink)] leading-[1.05] tracking-[-0.01em]">
            The <em className="italic font-normal text-[var(--gold)]">Team</em>
          </h2>
        </div>

        {/* Postdocs */}
        <div className="mb-14">
          <GroupLabel label="Postdoctoral Researchers" count={POSTDOCS.length}/>
          <div className="grid gap-px bg-[var(--border)]" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
            {POSTDOCS.map(m => (
              <MemberCard key={m.name} name={m.name} init={m.init} since={m.since} focus={m.focus} sub={`PhD · ${m.phd}`}/>
            ))}
          </div>
        </div>

        {/* PhD Students */}
        <div className="mb-14">
          <GroupLabel label="PhD Students" count={PHD_STUDENTS.length}/>
          <div className="grid gap-px bg-[var(--border)]" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
            {PHD_STUDENTS.map(m => (
              <MemberCard key={m.name} name={m.name} init={m.init} since={m.since} focus={m.focus} sub={m.prev}/>
            ))}
          </div>
        </div>

        {/* Co-advised */}
        <div>
          <GroupLabel label="Co-advised PhD Students" count={COADV_STUDENTS.length}/>
          <p className="font-[family-name:var(--font-inter)] font-light text-[12px] text-[var(--ink-faint)] tracking-[0.05em] mb-6 -mt-2">
            Joint program with Prof. Chunnian HE
          </p>
          <div className="grid gap-px bg-[var(--border)]" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {COADV_STUDENTS.map(m => (
              <MemberCard key={m.name} name={m.name} init={m.init} since={m.since} focus={m.focus} sub={m.prev}/>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alumni ────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--surface)] px-20 py-20">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[var(--gold)]"/>
            <span className="font-[family-name:var(--font-inter)] font-medium text-[10px] text-[var(--gold)] tracking-[0.2em] uppercase">
              Alumni
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(32px,4vw,56px)] text-[var(--ink)] leading-[1.05] tracking-[-0.01em]">
            Former <em className="italic font-normal text-[var(--gold)]">Members</em>
          </h2>
        </div>

        <div className="grid gap-16" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
          {ALUMNI.map(({ group, members }) => (
            <div key={group}>
              <div className="font-[family-name:var(--font-inter)] font-medium text-[10px] text-[var(--gold)] tracking-[0.18em] uppercase mb-6 pb-3 border-b border-[var(--border)]">
                {group}
              </div>
              <div className="flex flex-col gap-0">
                {members.map((m, i) => (
                  <div
                    key={m.name}
                    className="flex justify-between items-baseline py-3.5 border-b border-[var(--border)] gap-4"
                  >
                    <div>
                      <div className="font-[family-name:var(--font-inter)] font-normal text-[14px] text-[var(--ink)] leading-[1.3]">
                        {m.name}
                      </div>
                      <div className="font-[family-name:var(--font-inter)] font-light text-[11px] text-[var(--ink-faint)] mt-0.5">
                        {m.role}
                      </div>
                    </div>
                    <div className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--ink-faint)] tracking-[0.05em] whitespace-nowrap shrink-0">
                      {m.tenure}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
