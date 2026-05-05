export default function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)] px-20 py-12 bg-[var(--surface)] grid items-center gap-12"
      style={{ gridTemplateColumns: "1fr auto auto" }}
    >
      <div>
        <div className="font-[family-name:var(--font-playfair)] text-xl text-[var(--ink)] tracking-[0.05em] mb-1.5">
          A.B. Wong Group
        </div>
        <div className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--ink-faint)] tracking-[0.1em]">
          DEPT. OF MATERIALS SCIENCE &amp; ENGINEERING · NATIONAL UNIVERSITY OF SINGAPORE
        </div>
      </div>
      <a
        href="https://www.linkedin.com/in/andrew-wong-0a649452/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--ink-dim)] tracking-[0.1em] no-underline hover:text-[var(--gold)] transition-colors"
      >
        LinkedIn →
      </a>
      <div className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--ink-faint)] tracking-[0.1em]">
        ©2026 A.B. Wong Group
      </div>
    </footer>
  );
}
