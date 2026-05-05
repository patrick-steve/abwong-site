import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ResearchTeaser from "@/components/ResearchTeaser";
import { NEWS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />

      {/* PI Intro */}
      <section className="bg-[var(--cream)] border-b border-[var(--border)] px-20 py-[100px]">
        <div className="grid gap-20 items-center" style={{ gridTemplateColumns: "380px 1fr" }}>
          {/* Portrait */}
          <div className="shrink-0">
            <div className="relative w-[380px] h-[460px] overflow-hidden">
              <Image
                src="/prof-wong.png"
                alt="Prof. Andrew B. Wong"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-[rgba(14,12,10,0.88)] to-transparent">
                <div className="font-[family-name:var(--font-playfair)] font-medium text-[18px] text-white leading-none">
                  Prof. Andrew B. Wong
                </div>
                <div className="font-[family-name:var(--font-inter)] font-normal text-[10px] text-[rgba(200,170,100,0.9)] tracking-[0.12em] uppercase mt-1.5">
                  Principal Investigator
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(36px,4vw,60px)] leading-[1.0] tracking-[-0.02em] text-[var(--ink)] mb-5">
              Prof. Andrew B. <em className="italic font-normal text-[var(--gold)]">Wong</em>
            </h2>

            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-8 h-px bg-[var(--gold)]" />
              <span className="font-[family-name:var(--font-inter)] font-medium text-[10px] text-[var(--gold)] tracking-[0.2em] uppercase">
                Principal Investigator · NUS Dept. of MSE
              </span>
            </div>
            <p className="font-[family-name:var(--font-inter)] font-light text-[15px] text-[var(--ink-dim)] leading-[1.85] mb-6">
              Prof. Andrew B. Wong is an Assistant Professor in the Department of Materials Science and Engineering at
              the National University of Singapore. His research sits at the intersection of electrochemistry and
              materials synthesis, with a focus on developing novel routes for electrochemical CO₂ conversion and
              sustainable energy materials.
            </p>
            <p className="font-[family-name:var(--font-inter)] font-light text-[15px] text-[var(--ink-dim)] leading-[1.85] mb-9">
              He received his PhD from UC Berkeley and completed postdoctoral training before joining NUS in 2021. His
              group combines expertise in rational material synthesis, electrocatalysis, and device engineering to tackle
              pressing challenges in clean energy conversion.
            </p>

            <div className="flex gap-0 border-t border-[var(--border)] pt-7">
              {[
                { label: "Affiliation", val: "NUS, Dept. of MSE" },
                { label: "PhD", val: "UC Berkeley" },
                { label: "Focus", val: "Electrocatalysis · CO₂" },
              ].map(({ label, val }, i) => (
                <div
                  key={label}
                  className="flex-1"
                  style={{
                    paddingRight: i < 2 ? 24 : 0,
                    paddingLeft: i > 0 ? 24 : 0,
                    borderRight: i < 2 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div className="font-[family-name:var(--font-inter)] font-medium text-[9px] text-[var(--gold)] tracking-[0.15em] uppercase mb-1.5">
                    {label}
                  </div>
                  <div className="font-[family-name:var(--font-inter)] font-normal text-[14px] text-[var(--ink)] leading-[1.4]">
                    {val}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:mseabw@nus.edu.sg"
              className="inline-flex items-center gap-3 mt-7 font-[family-name:var(--font-inter)] text-[12px] text-[var(--gold)] tracking-[0.08em] no-underline border-b border-[rgba(138,106,42,0.3)] pb-[3px] hover:border-[var(--gold)] transition-all"
            >
              mseabw@nus.edu.sg →
            </a>
          </div>
        </div>
      </section>

      {/* Research Teaser */}
      <ResearchTeaser />

      {/* Latest News */}
      <section className="bg-[var(--surface)] border-t border-b border-[var(--border)] px-20 py-20">
        <div className="grid gap-20" style={{ gridTemplateColumns: "320px 1fr" }}>
          <div>
            <SectionHeader label="Updates" title="Latest" accent="News" />
            <Link
              href="/news"
              className="inline-flex items-center gap-3 font-[family-name:var(--font-inter)] font-medium text-[13px] text-[var(--gold)] tracking-[0.08em] uppercase no-underline hover:gap-5 transition-all"
            >
              All News <span>→</span>
            </Link>
          </div>
          <div className="flex flex-col">
            {NEWS.slice(0, 3).map((n, i) => (
              <Link
                key={i}
                href="/news"
                className="grid gap-8 py-6 border-b border-[var(--border)] no-underline cursor-pointer hover:pl-4 hover:border-l-2 hover:border-l-[var(--gold)] transition-all"
                style={{ gridTemplateColumns: "100px 1fr" }}
              >
                <span className="font-[family-name:var(--font-inter)] text-[11px] text-[var(--gold)] tracking-[0.08em] pt-[3px]">
                  {n.date}
                </span>
                <div>
                  <div className="font-[family-name:var(--font-inter)] font-medium text-[16px] text-[var(--ink)] mb-1.5 leading-[1.3]">
                    {n.title}
                  </div>
                  <div className="font-[family-name:var(--font-inter)] font-light text-[13px] text-[var(--ink-dim)] leading-[1.6]">
                    {n.body}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="bg-[var(--off-cream)] px-20 py-[120px] grid gap-20 items-center"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        <div>
          <SectionHeader label="Get In Touch" title="Join the" accent="Group" />
          <p className="font-[family-name:var(--font-inter)] font-light text-[16px] text-[var(--ink-dim)] leading-[1.75] max-w-[480px]">
            We are always seeking motivated researchers at all levels — PhD students, postdocs, and research assistants
            — to join our team.
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-self-end">
          <Link
            href="/open-positions"
            className="bg-[var(--gold)] text-[var(--cream)] border-none no-underline px-12 py-[18px] font-[family-name:var(--font-inter)] font-semibold text-[13px] tracking-[0.08em] uppercase hover:bg-[var(--ink)] transition-colors text-center"
          >
            Open Positions
          </Link>
          <Link
            href="/contact"
            className="bg-transparent text-[var(--ink)] border border-[var(--border-bright)] no-underline px-12 py-[18px] font-[family-name:var(--font-inter)] font-normal text-[13px] tracking-[0.08em] uppercase hover:border-[var(--ink)] transition-colors text-center"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
