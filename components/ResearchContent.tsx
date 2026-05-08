"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { RESEARCH } from "@/lib/data";

const VIDEO_BY_ID: Record<string, { mp4: string; poster: string } | undefined> = {
  co2: { mp4: "/research/co2.mp4", poster: "/research/co2.jpg" },
  micro: { mp4: "/research/microenv.mp4", poster: "/research/microenv.jpg" },
  bio: { mp4: "/research/bio.mp4", poster: "/research/bio.jpg" },
  pero: { mp4: "/research/pero.mp4", poster: "/research/pero.jpg" },
};

// Hover-to-ignite atmospheric video for a research direction.
// Default: paused poster. Hover the panel: play. Leave: pause.
// Reduced motion: poster only, no <video> mounted.
function ResearchVideo({ id, hovered }: { id: string; hovered: boolean }) {
  const reduceMotion = useReducedMotion() ?? false;
  const ref = useRef<HTMLVideoElement>(null);
  const asset = VIDEO_BY_ID[id];

  useEffect(() => {
    if (reduceMotion) return;
    const v = ref.current;
    if (!v) return;
    if (hovered) v.play().catch(() => {});
    else v.pause();
  }, [hovered, reduceMotion]);

  if (!asset) return null;

  if (reduceMotion) {
    return (
      <>
        <img
          src={asset.poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30 [filter:grayscale(0.7)_brightness(0.6)_contrast(1.15)] pointer-events-none"
        />
        <div className="absolute inset-0 bg-[rgba(138,106,42,0.06)] pointer-events-none" />
      </>
    );
  }

  return (
    <>
      <video
        ref={ref}
        loop
        muted
        playsInline
        preload="metadata"
        poster={asset.poster}
        className="absolute inset-0 w-full h-full object-cover [filter:grayscale(0.7)_brightness(0.6)_contrast(1.15)] pointer-events-none transition-opacity duration-700"
        style={{ opacity: hovered ? 0.55 : 0.28 }}
      >
        <source src={asset.mp4} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[rgba(138,106,42,0.06)] pointer-events-none" />
    </>
  );
}

// Unique SVG scientific illustration for each research direction
function ResearchVisual({ id, num }: { id: string; num: string }) {
  if (id === "co2") {
    // Electrochemical CO₂ reduction in molten salt — bubbles, electrode, molecule paths
    return (
      <svg viewBox="0 0 560 480" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Electrode top */}
        <rect x="40" y="40" width="480" height="6" fill="rgba(200,170,100,0.6)" rx="1"/>
        <rect x="40" y="434" width="480" height="6" fill="rgba(200,170,100,0.6)" rx="1"/>
        {/* Grid lines suggesting molten bath */}
        {[0,1,2,3,4,5,6].map(i => (
          <line key={`h${i}`} x1="40" y1={80+i*54} x2="520" y2={80+i*54} stroke="rgba(200,170,100,0.07)" strokeWidth="1"/>
        ))}
        {[0,1,2,3,4,5,6,7].map(i => (
          <line key={`v${i}`} x1={40+i*69} y1="46" x2={40+i*69} y2="434" stroke="rgba(200,170,100,0.07)" strokeWidth="1"/>
        ))}
        {/* CO₂ molecule symbols — scattered */}
        {[[120,130],[280,100],[420,160],[160,260],[340,220],[480,300],[100,360],[260,380],[440,340]].map(([cx,cy],i) => (
          <g key={i} opacity={0.55 + (i%3)*0.15}>
            <circle cx={cx} cy={cy} r="9" fill="none" stroke="rgba(200,170,100,0.9)" strokeWidth="1.2"/>
            <circle cx={cx-22} cy={cy} r="6" fill="none" stroke="rgba(200,170,100,0.6)" strokeWidth="0.8"/>
            <circle cx={cx+22} cy={cy} r="6" fill="none" stroke="rgba(200,170,100,0.6)" strokeWidth="0.8"/>
            <line x1={cx-13} y1={cy} x2={cx-6} y2={cy} stroke="rgba(200,170,100,0.5)" strokeWidth="1"/>
            <line x1={cx+6} y1={cy} x2={cx+13} y2={cy} stroke="rgba(200,170,100,0.5)" strokeWidth="1"/>
          </g>
        ))}
        {/* Bubbles rising */}
        {[[200,400,18],[320,380,12],[150,300,8],[370,290,14],[240,200,9],[450,180,7]].map(([cx,cy,r],i) => (
          <circle key={`b${i}`} cx={cx} cy={cy} r={r} fill="none" stroke="rgba(200,170,100,0.25)" strokeWidth="1" strokeDasharray="3 2"/>
        ))}
        {/* Ghost numeral */}
        <text x="280" y="280" textAnchor="middle" dominantBaseline="middle"
          fontFamily="Georgia,serif" fontSize="180" fill="rgba(200,170,100,0.04)" fontWeight="700"
          letterSpacing="-4">{num}</text>
        {/* Reaction arrows */}
        {[[100,200,180,200],[380,160,380,340]].map(([x1,y1,x2,y2],i) => (
          <line key={`a${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(200,170,100,0.18)" strokeWidth="1" strokeDasharray="6 4" markerEnd="url(#arr)"/>
        ))}
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(200,170,100,0.4)"/>
          </marker>
        </defs>
        {/* Label */}
        <text x="280" y="460" textAnchor="middle" fontFamily="sans-serif" fontSize="10"
          fill="rgba(200,170,100,0.35)" letterSpacing="3">HIGH-TEMP ELECTROCATALYSIS</text>
      </svg>
    );
  }

  if (id === "micro") {
    // Microenvironment — catalyst lattice with species transport arrows
    return (
      <svg viewBox="0 0 560 480" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Ghost numeral */}
        <text x="280" y="260" textAnchor="middle" dominantBaseline="middle"
          fontFamily="Georgia,serif" fontSize="180" fill="rgba(200,170,100,0.04)" fontWeight="700">{num}</text>
        {/* Catalyst lattice nodes */}
        {Array.from({length:7}, (_,row) =>
          Array.from({length:8}, (_,col) => {
            const cx = 60 + col*65;
            const cy = 70 + row*52;
            const isActive = (row+col)%3===0;
            return (
              <g key={`${row}-${col}`}>
                {col < 7 && <line x1={cx} y1={cy} x2={cx+65} y2={cy} stroke="rgba(200,170,100,0.12)" strokeWidth="0.8"/>}
                {row < 6 && <line x1={cx} y1={cy} x2={cx} y2={cy+52} stroke="rgba(200,170,100,0.12)" strokeWidth="0.8"/>}
                <circle cx={cx} cy={cy} r={isActive ? 7 : 4}
                  fill={isActive ? "rgba(200,170,100,0.25)" : "rgba(200,170,100,0.1)"}
                  stroke={isActive ? "rgba(200,170,100,0.8)" : "rgba(200,170,100,0.3)"}
                  strokeWidth={isActive ? "1.2" : "0.6"}/>
              </g>
            );
          })
        )}
        {/* pH gradient bar */}
        <defs>
          <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(200,170,100,0.6)"/>
            <stop offset="100%" stopColor="rgba(200,170,100,0.05)"/>
          </linearGradient>
        </defs>
        <rect x="40" y="430" width="480" height="6" fill="url(#phGrad)" rx="3"/>
        <text x="40" y="450" fontFamily="sans-serif" fontSize="9" fill="rgba(200,170,100,0.4)" letterSpacing="1">LOW pH</text>
        <text x="480" y="450" textAnchor="end" fontFamily="sans-serif" fontSize="9" fill="rgba(200,170,100,0.2)" letterSpacing="1">HIGH pH</text>
        {/* Transport arrows */}
        {[[280,30,280,90,"CO₂"],[160,30,160,90,"CO₂"],[400,90,400,30,"CO"]].map(([x1,y1,x2,y2,lbl],i) => (
          <g key={`t${i}`}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(200,170,100,0.45)" strokeWidth="1.2"
              strokeDasharray={i===2?"0":"5 3"} markerEnd={i===2?"url(#up)":"url(#dn)"}/>
            <text x={Number(x1)+10} y={Number(y1)+(i===2?-6:6)} fontFamily="sans-serif" fontSize="9"
              fill="rgba(200,170,100,0.5)" letterSpacing="1">{lbl}</text>
          </g>
        ))}
        <defs>
          <marker id="dn" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(200,170,100,0.5)"/>
          </marker>
          <marker id="up" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(200,170,100,0.5)"/>
          </marker>
        </defs>
        <text x="280" y="15" textAnchor="middle" fontFamily="sans-serif" fontSize="10"
          fill="rgba(200,170,100,0.35)" letterSpacing="3">SPECIES TRANSPORT</text>
      </svg>
    );
  }

  if (id === "bio") {
    // Bio-Hybrid — DNA helix merging with circuit traces
    return (
      <svg viewBox="0 0 560 480" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Ghost numeral */}
        <text x="280" y="260" textAnchor="middle" dominantBaseline="middle"
          fontFamily="Georgia,serif" fontSize="180" fill="rgba(200,170,100,0.04)" fontWeight="700">{num}</text>
        {/* Helix backbone left side */}
        {Array.from({length:20}, (_,i) => {
          const t = i/19;
          const y = 40 + t*400;
          const x = 160 + Math.sin(t*Math.PI*4)*50;
          return <circle key={`hl${i}`} cx={x} cy={y} r="4" fill="none" stroke="rgba(200,170,100,0.7)" strokeWidth="1.2"/>;
        })}
        {/* Helix backbone right side */}
        {Array.from({length:20}, (_,i) => {
          const t = i/19;
          const y = 40 + t*400;
          const x = 160 + Math.sin(t*Math.PI*4+Math.PI)*50;
          return <circle key={`hr${i}`} cx={x} cy={y} r="4" fill="none" stroke="rgba(200,170,100,0.4)" strokeWidth="1"/>;
        })}
        {/* Helix rungs */}
        {Array.from({length:10}, (_,i) => {
          const t = (i+0.5)/10;
          const y = 40 + t*400;
          const x1 = 160 + Math.sin(t*Math.PI*4)*50;
          const x2 = 160 + Math.sin(t*Math.PI*4+Math.PI)*50;
          return <line key={`rng${i}`} x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(200,170,100,0.3)" strokeWidth="0.8"/>;
        })}
        {/* Circuit traces right side */}
        <polyline points="340,60 380,60 380,120 420,120 420,180 460,180 460,240 500,240"
          fill="none" stroke="rgba(200,170,100,0.6)" strokeWidth="1.5"/>
        <polyline points="340,160 370,160 370,220 410,220 410,300 450,300 450,360 490,360"
          fill="none" stroke="rgba(200,170,100,0.4)" strokeWidth="1"/>
        <polyline points="340,260 360,260 360,320 400,320 400,400 440,400 440,420"
          fill="none" stroke="rgba(200,170,100,0.25)" strokeWidth="0.8"/>
        {/* Circuit nodes */}
        {[[380,60],[420,120],[460,180],[500,240],[370,160],[410,220],[450,300],[490,360],[360,260],[400,320],[440,400]].map(([cx,cy],i) => (
          <rect key={`nd${i}`} x={cx-4} y={cy-4} width="8" height="8"
            fill="rgba(200,170,100,0.15)" stroke="rgba(200,170,100,0.6)" strokeWidth="0.8"/>
        ))}
        {/* Merge line from helix to circuit */}
        <line x1="210" y1="240" x2="340" y2="240" stroke="rgba(200,170,100,0.35)" strokeWidth="1" strokeDasharray="4 3"/>
        <line x1="210" y1="140" x2="340" y2="160" stroke="rgba(200,170,100,0.25)" strokeWidth="0.8" strokeDasharray="4 3"/>
        <line x1="210" y1="340" x2="340" y2="260" stroke="rgba(200,170,100,0.2)" strokeWidth="0.8" strokeDasharray="4 3"/>
        <text x="280" y="466" textAnchor="middle" fontFamily="sans-serif" fontSize="10"
          fill="rgba(200,170,100,0.35)" letterSpacing="3">BIOTIC–ABIOTIC INTERFACE</text>
      </svg>
    );
  }

  // perovskites — crystal unit cell lattice
  return (
    <svg viewBox="0 0 560 480" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Ghost numeral */}
      <text x="280" y="260" textAnchor="middle" dominantBaseline="middle"
        fontFamily="Georgia,serif" fontSize="180" fill="rgba(200,170,100,0.04)" fontWeight="700">{num}</text>
      {/* 3×3 grid of unit cells */}
      {[0,1,2].map(row => [0,1,2].map(col => {
        const ox = 80 + col*130;
        const oy = 60 + row*120;
        const pts = `${ox},${oy+40} ${ox+50},${oy} ${ox+130},${oy} ${ox+80},${oy+40}`;
        const pts2 = `${ox+50},${oy+120} ${ox+130},${oy+120} ${ox+130},${oy} ${ox+80},${oy+40} ${ox+80},${oy+160} ${ox+50},${oy+120}`;
        const isCenter = row===1&&col===1;
        const alpha = isCenter ? 0.9 : 0.35;
        return (
          <g key={`cell${row}-${col}`}>
            <polygon points={pts} fill="none" stroke={`rgba(200,170,100,${alpha*0.6})`} strokeWidth={isCenter?"1.2":"0.6"}/>
            <polyline points={pts2} fill="none" stroke={`rgba(200,170,100,${alpha*0.5})`} strokeWidth={isCenter?"1":"0.5"}/>
            {/* Corner atoms */}
            {[[ox,oy+40],[ox+50,oy],[ox+130,oy],[ox+80,oy+40],[ox+50,oy+120],[ox+130,oy+120],[ox+80,oy+160]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r={isCenter?5:3}
                fill={`rgba(200,170,100,${isCenter?0.3:0.1})`}
                stroke={`rgba(200,170,100,${isCenter?0.9:0.4})`}
                strokeWidth={isCenter?"1.2":"0.6"}/>
            ))}
            {/* B-site center atom */}
            <circle cx={ox+70} cy={oy+70} r={isCenter?8:5}
              fill={`rgba(200,170,100,${isCenter?0.5:0.15})`}
              stroke={`rgba(200,170,100,${isCenter?1:0.5})`}
              strokeWidth={isCenter?"1.5":"0.8"}/>
            {/* Defect marker on center cell */}
            {isCenter && (
              <>
                <circle cx={ox+30} cy={oy+30} r="5" fill="none" stroke="rgba(200,170,100,0.9)" strokeWidth="1.5" strokeDasharray="2 2"/>
                <line x1={ox+26} y1={oy+26} x2={ox+34} y2={oy+34} stroke="rgba(200,170,100,0.8)" strokeWidth="1.2"/>
                <line x1={ox+34} y1={oy+26} x2={ox+26} y2={oy+34} stroke="rgba(200,170,100,0.8)" strokeWidth="1.2"/>
              </>
            )}
          </g>
        );
      }))}
      <text x="280" y="468" textAnchor="middle" fontFamily="sans-serif" fontSize="10"
        fill="rgba(200,170,100,0.35)" letterSpacing="3">CRYSTAL LATTICE STRUCTURE</text>
    </svg>
  );
}

type ResearchItem = (typeof RESEARCH)[number];

function ResearchRow({ r, i }: { r: ResearchItem; i: number }) {
  const isEven = i % 2 === 0;
  const [hovered, setHovered] = useState(false);

  return (
    <div className="border-b border-[var(--border)]">
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {/* Visual panel */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`bg-[var(--hero-bg)] flex items-center justify-center relative overflow-hidden min-h-[560px] ${isEven ? "order-first" : "order-last"}`}
        >
          {/* Atmospheric video — deepest layer, hover-to-ignite */}
          <ResearchVideo id={r.id} hovered={hovered} />
          {/* Noise */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <filter id={`n${i}`}>
              <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch"/>
              <feColorMatrix type="saturate" values="0"/>
            </filter>
            <rect width="100%" height="100%" filter={`url(#n${i})`}/>
          </svg>
          {/* Gold glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,106,42,0.08)_0%,transparent_70%)] pointer-events-none"/>
          {/* Number watermark */}
          <span
            className="absolute font-[family-name:var(--font-playfair)] font-black text-[220px] leading-none select-none pointer-events-none"
            style={{ color: "rgba(200,170,100,0.035)", bottom: "-20px", right: isEven ? "-10px" : "auto", left: isEven ? "auto" : "-10px" }}
          >
            {r.num}
          </span>
          {/* SVG illustration — fades back on hover so the video can breathe */}
          <div
            className="relative w-full h-full p-10 flex items-center justify-center transition-opacity duration-700 pointer-events-none"
            style={{ opacity: hovered ? 0.55 : 1 }}
          >
            <ResearchVisual id={r.id} num={r.num} />
          </div>
          {/* Tag strip at bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-8 py-4 border-t border-[rgba(200,170,100,0.12)] flex items-center gap-3 bg-[rgba(20,18,16,0.4)] pointer-events-none">
            <div className="w-4 h-px bg-[rgba(200,170,100,0.5)]"/>
            <span className="font-[family-name:var(--font-inter)] text-[10px] text-[rgba(200,170,100,0.6)] tracking-[0.18em] uppercase">
              {r.tag}
            </span>
          </div>
        </div>

        {/* Text panel */}
        <div className={`px-16 py-20 flex flex-col justify-center ${isEven ? "order-last" : "order-first"}`}>
          <div className="font-[family-name:var(--font-inter)] text-[11px] text-[var(--gold)] tracking-[0.18em] mb-6">
            {r.num} <span className="text-[var(--ink-faint)]">/ 04</span>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(36px,4vw,60px)] text-[var(--ink)] leading-[1.0] tracking-[-0.01em] mb-6 whitespace-pre-line">
            {r.title}
          </h2>
          <div className="inline-flex self-start border border-[var(--gold-dim)] px-3.5 py-[5px] mb-8">
            <span className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--gold)] tracking-[0.14em] uppercase">
              {r.tag}
            </span>
          </div>
          <p className="font-[family-name:var(--font-inter)] font-light text-[16px] text-[var(--ink-dim)] leading-[1.85] mb-10">
            {r.body}
          </p>
          <div className="border-t border-[var(--border)] pt-8">
            <div className="font-[family-name:var(--font-inter)] text-[10px] text-[var(--ink-faint)] tracking-[0.15em] uppercase mb-5">
              Key Objectives
            </div>
            <div className="flex flex-col gap-3">
              {r.bullets.map((b, j) => (
                <div key={j} className="flex items-center gap-4">
                  <div className="w-5 h-px bg-[var(--gold)] shrink-0" />
                  <span className="font-[family-name:var(--font-inter)] text-[15px] text-[var(--ink)]">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResearchContent() {
  return (
    <div className="bg-[var(--cream)]">
      {/* ── Page header ── */}
      <div className="pt-[80px] px-20 py-20 border-b border-[var(--border)]">
        <div className="max-w-[640px]">
          <SectionHeader label="Research" title="Our Research" accent="Directions" />
          <p className="font-[family-name:var(--font-inter)] font-light text-[16px] text-[var(--ink-dim)] leading-[1.8]">
            Four interconnected research directions unified by the pursuit of rational design principles
            for next-generation electrochemical and materials systems.
          </p>
        </div>
      </div>

      {RESEARCH.map((r, i) => (
        <ResearchRow key={r.id} r={r} i={i} />
      ))}
    </div>
  );
}
