"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Footer from "./Footer";

export default function ContactContent() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const fieldClass =
    "w-full bg-transparent border-none border-b border-[var(--border)] py-3.5 font-[family-name:var(--font-inter)] font-light text-[15px] text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--ink-faint)] focus:border-b-[var(--gold)]";

  return (
    <>
      <div className="bg-[var(--cream)] min-h-screen pt-[80px]">
        <div
          className="px-20 py-20 pb-[120px] grid gap-[120px] items-start"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Contact info */}
          <div>
            <SectionHeader label="Contact" title="Get In" accent="Touch" />
            <div className="flex flex-col gap-8">
              {[
                ["Email", "mseabw@nus.edu.sg"],
                ["Phone", "+65 6601 5389 (Office)"],
                ["Address", "E3A-06-07, Faculty of Engineering\nNational University of Singapore\nSingapore 117576"],
              ].map(([label, val]) => (
                <div key={label} className="border-b border-[var(--border)] pb-6">
                  <div className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--gold)] tracking-[0.15em] uppercase mb-2.5">
                    {label}
                  </div>
                  <div className="font-[family-name:var(--font-inter)] font-light text-[15px] text-[var(--ink)] leading-[1.7] whitespace-pre-line">
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form or success state */}
          {!sent ? (
            <div>
              <div className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--ink-faint)] tracking-[0.15em] uppercase mb-10">
                Send a Message
              </div>
              <div className="flex flex-col gap-6">
                {(["name", "email"] as const).map((f) => (
                  <input
                    key={f}
                    type={f === "email" ? "email" : "text"}
                    placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
                    value={form[f]}
                    onChange={(e) => setForm((p) => ({ ...p, [f]: e.target.value }))}
                    className={fieldClass}
                    style={{ borderBottom: "1px solid var(--border)" }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "var(--border)")}
                  />
                ))}
                <textarea
                  placeholder="Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className={fieldClass + " resize-none"}
                  style={{ borderBottom: "1px solid var(--border)" }}
                  onFocus={(e) => (e.target.style.borderBottomColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "var(--border)")}
                />
                <button
                  onClick={() => setSent(true)}
                  className="w-full bg-[var(--gold)] text-[var(--cream)] border-none cursor-pointer py-4 font-[family-name:var(--font-inter)] font-semibold text-[13px] tracking-[0.1em] uppercase hover:bg-[var(--ink)] transition-colors mt-4"
                >
                  Send Message
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center gap-5 pt-10">
              <div className="w-12 h-12 border border-[var(--gold)] flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-[24px] text-[var(--gold)]">✓</span>
              </div>
              <div className="font-[family-name:var(--font-playfair)] text-[40px] text-[var(--ink)] tracking-[0.02em] leading-none">
                Message Sent
              </div>
              <p className="font-[family-name:var(--font-inter)] font-light text-[15px] text-[var(--ink-dim)] leading-[1.7]">
                Thank you. Prof. Wong's office will respond within 2–3 business days.
              </p>
              <button
                onClick={() => setSent(false)}
                className="self-start bg-none border border-[var(--border)] text-[var(--gold)] cursor-pointer px-7 py-3 font-[family-name:var(--font-inter)] text-[11px] tracking-[0.1em] hover:border-[var(--gold)] transition-colors"
              >
                Send Another
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
