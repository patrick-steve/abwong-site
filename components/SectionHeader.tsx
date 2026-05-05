interface SectionHeaderProps {
  label: string;
  title: string;
  accent?: string;
  light?: boolean;
}

export default function SectionHeader({ label, title, accent, light }: SectionHeaderProps) {
  const textColor = light ? "text-white" : "text-[var(--ink)]";
  const labelColor = light ? "text-[rgba(200,170,100,0.9)]" : "text-[var(--gold)]";
  const accentColor = light ? "text-[rgba(200,170,100,0.85)]" : "text-[var(--gold)]";

  return (
    <div className="mb-16">
      <div className="flex items-center gap-3.5 mb-5">
        <div className={`w-8 h-px ${light ? "bg-[rgba(200,170,100,0.7)]" : "bg-[var(--gold)]"}`} />
        <span
          className={`font-[family-name:var(--font-inter)] font-medium text-[10px] ${labelColor} tracking-[0.2em] uppercase`}
        >
          {label}
        </span>
      </div>
      <h2
        className={`font-[family-name:var(--font-playfair)] font-medium text-[clamp(36px,4.5vw,64px)] leading-[1.05] tracking-[-0.01em] ${textColor}`}
      >
        {title}
        {accent && (
          <>
            <br />
            <em className={`not-italic font-normal italic ${accentColor}`}>{accent}</em>
          </>
        )}
      </h2>
    </div>
  );
}
