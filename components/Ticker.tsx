const items = [
  "Electrocatalysis",
  "CO₂ Reduction",
  "Molten Salt Systems",
  "Perovskite Materials",
  "Bio-Hybrid Electrocatalysis",
  "NUS Materials Science",
  "Sustainable Energy",
  "Electrochemical Conversion",
];

export default function Ticker() {
  const text = [...items, ...items].map((i) => `${i}  ·  `).join("");

  return (
    <div className="overflow-hidden border-t border-b border-[var(--border)] py-2.5 bg-[var(--cream)]">
      <div className="flex animate-ticker whitespace-nowrap">
        <span className="font-[family-name:var(--font-inter)] font-light text-[11px] tracking-[0.12em] text-[var(--ink-dim)]">
          {text}
        </span>
      </div>
    </div>
  );
}
