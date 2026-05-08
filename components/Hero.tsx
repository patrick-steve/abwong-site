"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_OUT_QUART: [number, number, number, number] = [0.25, 1, 0.5, 1];

export default function Hero() {
  const reduceMotion = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 22, mass: 0.8 };
  const sMouseX = useSpring(mouseX, springConfig);
  const sMouseY = useSpring(mouseY, springConfig);

  const noiseX = useTransform(sMouseX, [-1, 1], [-18, 18]);
  const noiseY = useTransform(sMouseY, [-1, 1], [-12, 12]);
  const gridX = useTransform(sMouseX, [-1, 1], [-12, 12]);
  const gridY = useTransform(sMouseY, [-1, 1], [-8, 8]);
  const numeralX = useTransform(sMouseX, [-1, 1], [-8, 8]);
  const numeralY = useTransform(sMouseY, [-1, 1], [-6, 6]);
  const glowX = useTransform(sMouseX, [-1, 1], [-60, 60]);
  const glowY = useTransform(sMouseY, [-1, 1], [-40, 40]);
  const moleculeX = useTransform(sMouseX, [-1, 1], [-22, 22]);
  const moleculeY = useTransform(sMouseY, [-1, 1], [-18, 18]);
  const moleculeRotate = useTransform(sMouseX, [-1, 1], [-6, 6]);

  // Cursor "lantern" mask: video visible everywhere at ~30%, brightens to ~85% inside a soft
  // 500px circle around the cursor. Alpha values in the mask gradient drive opacity directly.
  const maskCX = useTransform(sMouseX, [-1, 1], ["0%", "100%"]);
  const maskCY = useTransform(sMouseY, [-1, 1], ["0%", "100%"]);
  const maskImage = useMotionTemplate`radial-gradient(circle 500px at ${maskCX} ${maskCY}, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.32) 100%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const atmosphereVariants: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.2, ease: EASE_OUT_QUART } },
      };

  const contentContainer: Variants = reduceMotion
    ? { hidden: {}, visible: { transition: { delayChildren: 0.05 } } }
    : {
        hidden: {},
        visible: {
          transition: { delayChildren: 0.35, staggerChildren: 0.09 },
        },
      };

  const fadeUp: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE_OUT_EXPO } },
      };

  const wordReveal: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { y: "108%" },
        visible: {
          y: "0%",
          transition: { duration: 1.05, ease: EASE_OUT_EXPO },
        },
      };

  const listContainer: Variants = reduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: { transition: { delayChildren: 0.05, staggerChildren: 0.08 } },
      };

  const listItem: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, x: -16 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
      };

  const ctaContainer: Variants = reduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: { transition: { delayChildren: 0.1, staggerChildren: 0.1 } },
      };

  const badgeSlide: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, x: 32 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 1.0, ease: EASE_OUT_EXPO, delay: 1.1 },
        },
      };

  const tagPop: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, y: -8 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
      };

  const moleculeReveal: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 0.18, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, rotate: -30, scale: 0.85 },
        visible: {
          opacity: 0.18,
          rotate: 0,
          scale: 1,
          transition: { duration: 1.6, ease: EASE_OUT_QUART, delay: 1.4 },
        },
      };

  const scrollFade: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, y: -8 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT_EXPO, delay: 1.6 } },
      };

  return (
    <motion.section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen bg-[var(--hero-bg)] flex flex-col justify-center overflow-hidden"
    >
      {/* Background layers */}
      <motion.div variants={atmosphereVariants} className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1e1b17] to-[#141210]" />

        {/* Noise texture (parallax) */}
        <motion.svg
          style={{ x: noiseX, y: noiseY }}
          className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] opacity-[0.045]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="hn">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hn)" />
        </motion.svg>

        {/* Right-side overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[rgba(40,36,28,0.6)] to-transparent" />

        {/* Grid lines (parallax) */}
        <motion.svg
          style={{ x: gridX, y: gridY }}
          className="absolute right-[8%] top-[8%] w-[36%] h-[84%] opacity-[0.055]"
          viewBox="0 0 400 700"
          preserveAspectRatio="none"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="700" stroke="white" strokeWidth="0.5" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <line key={`h${i}`} x1="0" y1={i * 87} x2="400" y2={i * 87} stroke="white" strokeWidth="0.5" />
          ))}
        </motion.svg>

        {/* Ghost numeral (parallax) */}
        <motion.div
          style={{ x: numeralX, y: numeralY }}
          className="absolute right-[5%] top-1/2 -translate-y-1/2 font-[family-name:var(--font-playfair)] font-black text-[clamp(140px,20vw,300px)] text-[rgba(255,255,255,0.025)] leading-none select-none tracking-[-0.04em]"
        >
          #1
        </motion.div>

        {/* Gold glow (parallax + breathe) */}
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute right-[20%] top-[30%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(138,106,42,0.06)_0%,transparent_65%)] animate-breathe"
        />

        {/* Molten-salt video — visible everywhere as ambient texture; brightens inside a
            soft circle following the cursor (mask alpha drives opacity).
            Reduced motion: static poster, no mask, no autoplay. */}
        {reduceMotion ? (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="/hero/molten-salt.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-30 [filter:grayscale(0.7)_brightness(0.6)_contrast(1.15)]"
            />
            <div className="absolute inset-0 bg-[rgba(138,106,42,0.06)]" />
          </div>
        ) : (
          <motion.div
            style={{ maskImage, WebkitMaskImage: maskImage }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/hero/molten-salt.jpg"
              className="absolute inset-0 w-full h-full object-cover [filter:grayscale(0.7)_brightness(0.6)_contrast(1.15)]"
            >
              <source src="/hero/molten-salt.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[rgba(138,106,42,0.06)]" />
          </motion.div>
        )}

        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[rgba(10,9,8,0.7)] to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={contentContainer}
        className="relative px-20 pt-[120px] pb-20 max-w-[1200px]"
      >
        {/* Overline */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
          <div className="w-px h-10 bg-[rgba(200,170,100,0.7)]" />
          <span className="font-[family-name:var(--font-inter)] font-normal text-[11px] text-[rgba(200,170,100,0.8)] tracking-[0.2em] uppercase">
            National University of Singapore · Est. 2021
          </span>
        </motion.div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-playfair)] font-bold text-[clamp(64px,9vw,140px)] leading-[0.95] tracking-[-0.02em] text-white mb-0">
          <span className="block overflow-hidden pb-[0.05em]">
            <motion.span variants={wordReveal} className="block">
              A.B. Wong
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.05em]">
            <motion.em
              variants={wordReveal}
              className="block italic font-normal text-[rgba(200,170,100,0.85)]"
            >
              Group
            </motion.em>
          </span>
        </h1>

        {/* Descriptor row */}
        <motion.div
          variants={contentContainer}
          className="flex items-start gap-[80px] mt-10 pt-10 border-t border-[rgba(255,255,255,0.1)]"
        >
          <motion.p
            variants={fadeUp}
            className="font-[family-name:var(--font-inter)] font-light text-[17px] leading-[1.75] text-[rgba(255,255,255,0.5)] max-w-[520px]"
          >
            Advancing electrochemical CO₂ conversion and sustainable energy materials through rational synthesis and
            novel catalyst design at NUS.
          </motion.p>
          <motion.ol
            variants={listContainer}
            className="flex flex-col gap-3.5 shrink-0 list-none m-0 p-0"
          >
            <motion.li variants={listItem} className="flex items-baseline gap-5 font-[family-name:var(--font-inter)]">
              <span className="text-[11px] tracking-[0.14em] text-[var(--lit-brass-soft)] tabular-nums w-6 shrink-0">01</span>
              <span className="text-[14px] tracking-[0.04em] text-[rgba(255,255,255,0.78)]">CO₂ Reduction in Molten Salt</span>
            </motion.li>
            <motion.li variants={listItem} className="flex items-baseline gap-5 font-[family-name:var(--font-inter)]">
              <span className="text-[11px] tracking-[0.14em] text-[var(--lit-brass-soft)] tabular-nums w-6 shrink-0">02</span>
              <span className="text-[14px] tracking-[0.04em] text-[rgba(255,255,255,0.78)]">Microenvironment Engineering</span>
            </motion.li>
            <motion.li variants={listItem} className="flex items-baseline gap-5 font-[family-name:var(--font-inter)]">
              <span className="text-[11px] tracking-[0.14em] text-[var(--lit-brass-soft)] tabular-nums w-6 shrink-0">03</span>
              <span className="text-[14px] tracking-[0.04em] text-[rgba(255,255,255,0.78)]">Hybrid Biotic–Abiotic Systems</span>
            </motion.li>
            <motion.li variants={listItem} className="flex items-baseline gap-5 font-[family-name:var(--font-inter)]">
              <span className="text-[11px] tracking-[0.14em] text-[var(--lit-brass-soft)] tabular-nums w-6 shrink-0">04</span>
              <span className="text-[14px] tracking-[0.04em] text-[rgba(255,255,255,0.78)]">Perovskite-Inspired Materials</span>
            </motion.li>
          </motion.ol>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={ctaContainer} className="flex gap-4 mt-11">
          <motion.div variants={fadeUp}>
            <Link
              href="/research"
              className="bg-white text-[var(--ink)] no-underline px-9 py-3.5 font-[family-name:var(--font-inter)] font-medium text-[12px] tracking-[0.1em] uppercase hover:bg-[#e8e6e0] transition-colors inline-block"
            >
              Explore Research
            </Link>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link
              href="/people"
              className="bg-transparent text-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.25)] no-underline px-9 py-3.5 font-[family-name:var(--font-inter)] font-normal text-[12px] tracking-[0.1em] uppercase hover:border-[rgba(255,255,255,0.6)] hover:text-white transition-all inline-block"
            >
              Meet the Team
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Top-right badge */}
      <motion.div
        variants={badgeSlide}
        className="absolute top-20 right-20 flex flex-col items-end gap-2.5"
      >
        <div className="flex items-center gap-3 border border-[var(--lit-brass-faint)] px-[18px] py-2.5 bg-[var(--hero-surface)]">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--lit-brass)] animate-breathe" />
          <span className="font-[family-name:var(--font-inter)] font-normal text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.12em] uppercase">
            NUS · Dept. of MSE
          </span>
        </div>
        <motion.div variants={listContainer} className="flex gap-1.5">
          {["Electrocatalysis", "CO₂ Reduction", "Materials"].map((tag) => (
            <motion.span
              key={tag}
              variants={tagPop}
              className="font-[family-name:var(--font-inter)] font-normal text-[9px] text-[var(--lit-brass-soft)] tracking-[0.1em] uppercase border border-[var(--lit-brass-faint)] px-2.5 py-1 bg-[var(--hero-surface)]"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom-right molecule (entrance + parallax + slow rotate) */}
      <motion.div
        variants={moleculeReveal}
        style={{ x: moleculeX, y: moleculeY, rotate: moleculeRotate }}
        className="absolute right-20 bottom-20 pointer-events-none"
      >
        <motion.div
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={reduceMotion ? undefined : { duration: 90, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "110px 110px" }}
        >
          <svg width="200" height="200" viewBox="0 0 220 220">
            <circle cx="110" cy="110" r="30" fill="none" stroke="#8a6a2a" strokeWidth="1.2" />
            <circle cx="110" cy="110" r="65" fill="none" stroke="#8a6a2a" strokeWidth="0.6" strokeDasharray="5 4" />
            <circle cx="110" cy="110" r="100" fill="none" stroke="#8a6a2a" strokeWidth="0.3" strokeDasharray="2 6" />
            {[[110, 10], [200, 110], [110, 200], [20, 110], [176, 44], [176, 176], [44, 176], [44, 44]].map(
              ([x, y], i) => (
                <circle key={i} cx={x} cy={y} r={i < 4 ? 5 : 3} fill="#8a6a2a" />
              )
            )}
            <circle cx="110" cy="110" r="10" fill="#8a6a2a" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={scrollFade}
        className="absolute bottom-10 right-20 flex flex-col items-center gap-2"
      >
        <div
          className="font-[family-name:var(--font-inter)] font-light text-[10px] text-[rgba(255,255,255,0.2)] tracking-[0.15em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </div>
        <div className="w-px h-[60px] bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-transparent" />
      </motion.div>
    </motion.section>
  );
}
