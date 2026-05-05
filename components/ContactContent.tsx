import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Footer from "./Footer";

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "mseabw@nus.edu.sg",
    sub: "Primary correspondence",
    href: "mailto:mseabw@nus.edu.sg",
    linkLabel: "Send an email →",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+65 6601 5389",
    sub: "Office hours, Mon–Fri",
    href: "tel:+6566015389",
    linkLabel: "Call the office →",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "E3A-06-07\nFaculty of Engineering\nNational University of Singapore\nSingapore 117576",
    sub: "Engineering Faculty Block E3A",
    href: "https://maps.google.com/?q=National+University+of+Singapore+Faculty+of+Engineering",
    linkLabel: "Open in Maps →",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Dark hero banner ── */}
      <section className="relative bg-[var(--hero-bg)] pt-[60px] overflow-hidden">
        {/* Atmospheric bg */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1a1712] to-[#0e0c0a]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <filter id="cn">
              <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#cn)" />
          </svg>
          {/* Grid lines */}
          <svg className="absolute right-0 top-0 bottom-0 w-1/2 h-full opacity-[0.04]" viewBox="0 0 600 500" preserveAspectRatio="none">
            {[0,1,2,3,4,5].map(i => <line key={`v${i}`} x1={i*120} y1="0" x2={i*120} y2="500" stroke="white" strokeWidth="0.5"/>)}
            {[0,1,2,3,4,5,6].map(i => <line key={`h${i}`} x1="0" y1={i*80} x2="600" y2={i*80} stroke="white" strokeWidth="0.5"/>)}
          </svg>
          {/* Gold glow */}
          <div className="absolute left-[55%] top-[20%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(138,106,42,0.07)_0%,transparent_65%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--hero-bg)] to-transparent" />
        </div>

        <div className="relative px-20 py-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-px h-10 bg-[rgba(200,170,100,0.6)]" />
            <span className="font-[family-name:var(--font-inter)] text-[11px] text-[rgba(200,170,100,0.7)] tracking-[0.2em] uppercase">
              A.B. Wong Group · NUS
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] font-bold text-[clamp(52px,7vw,110px)] leading-[0.95] tracking-[-0.02em] text-white mb-8">
            Get In
            <br />
            <em className="italic font-normal text-[rgba(200,170,100,0.85)]">Touch.</em>
          </h1>
          <p className="font-[family-name:var(--font-inter)] font-light text-[17px] text-[rgba(255,255,255,0.45)] leading-[1.75] max-w-[540px]">
            We welcome inquiries from prospective students, collaborators, and industry partners interested in our research on electrochemical CO₂ conversion and sustainable energy materials.
          </p>
        </div>
      </section>

      {/* ── Three contact cards ── */}
      <section className="bg-[var(--cream)] px-20 py-24">
        <div className="grid gap-px bg-[var(--border)]" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {CONTACTS.map(({ icon: Icon, label, value, sub, href, linkLabel }) => (
            <div key={label} className="bg-[var(--cream)] p-12 flex flex-col gap-0 group">
              {/* Icon */}
              <div className="w-14 h-14 border border-[var(--gold-dim)] flex items-center justify-center mb-10 group-hover:border-[var(--gold)] transition-colors duration-300">
                <Icon size={22} className="text-[var(--gold)]" strokeWidth={1.5} />
              </div>

              {/* Label */}
              <div className="font-[family-name:var(--font-inter)] font-medium text-[10px] text-[var(--gold)] tracking-[0.2em] uppercase mb-4">
                {label}
              </div>

              {/* Value */}
              <div className="font-[family-name:var(--font-playfair)] text-[clamp(18px,2vw,28px)] text-[var(--ink)] leading-[1.3] tracking-[0.01em] mb-3 whitespace-pre-line flex-1">
                {value}
              </div>

              {/* Sub */}
              <div className="font-[family-name:var(--font-inter)] font-light text-[12px] text-[var(--ink-faint)] tracking-[0.05em] mb-8">
                {sub}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[var(--border)] mb-8" />

              {/* Link */}
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] font-medium text-[12px] text-[var(--gold)] tracking-[0.08em] uppercase no-underline hover:gap-4 transition-all duration-200"
              >
                {linkLabel}
                {href.startsWith("http") && <ExternalLink size={11} strokeWidth={2} />}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Campus map embed ── */}
      <section className="bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="grid" style={{ gridTemplateColumns: "1fr 2fr" }}>
          {/* Info panel */}
          <div className="px-16 py-20 flex flex-col justify-center border-r border-[var(--border)]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[var(--gold)]" />
              <span className="font-[family-name:var(--font-inter)] font-medium text-[10px] text-[var(--gold)] tracking-[0.2em] uppercase">
                Find Us
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(28px,3vw,44px)] text-[var(--ink)] leading-[1.1] tracking-[-0.01em] mb-6">
              NUS Faculty of
              <br />
              <em className="italic font-normal text-[var(--gold)]">Engineering</em>
            </h2>
            <p className="font-[family-name:var(--font-inter)] font-light text-[14px] text-[var(--ink-dim)] leading-[1.8] mb-8">
              Located in Block E3A on the NUS Kent Ridge campus, Singapore. Easily accessible via the NUS internal shuttle or the Circle Line MRT.
            </p>
            <div className="flex flex-col gap-4">
              {[
                ["Block", "E3A, Room 06-07"],
                ["Campus", "Kent Ridge, Singapore"],
                ["MRT", "Kent Ridge Station (CC24)"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-6 text-[13px]">
                  <span className="font-[family-name:var(--font-inter)] font-medium text-[10px] text-[var(--gold)] tracking-[0.12em] uppercase w-16 shrink-0 pt-[2px]">{k}</span>
                  <span className="font-[family-name:var(--font-inter)] font-light text-[var(--ink-dim)]">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="relative min-h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7586!2d103.7742!3d1.2966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a456e20e5a7%3A0x6ca36a3b7ce3f9ed!2sNUS%20Faculty%20of%20Engineering!5e0!3m2!1sen!2ssg!4v1"
              className="absolute inset-0 w-full h-full border-0 grayscale"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NUS Faculty of Engineering location"
            />
            {/* Gold overlay tint */}
            <div className="absolute inset-0 bg-[rgba(138,106,42,0.04)] pointer-events-none" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
