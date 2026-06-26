"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Menu } from "lucide-react";

// ─── Animation helpers ────────────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function StickerAccent({
  src, size, rotate = 0, opacity = 0.9, className = "", delay = 0,
}: {
  src: string; size: number; rotate?: number; opacity?: number; className?: string; delay?: number;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, y: 14, rotate: rotate - 3, scale: 0.88 }}
      whileInView={{ opacity, y: 0, rotate, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease }}
      aria-hidden
    >
      <Image src={src} alt="" fill className="object-contain" sizes={`${size}px`} />
    </motion.div>
  );
}

function Label({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`block font-sans text-[11px] font-bold tracking-[0.22em] uppercase mb-4 ${
        light ? "text-[#F47A5A]" : "text-[#F47A5A]"
      }`}
    >
      {children}
    </span>
  );
}

function Heading({
  children,
  light,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`font-display font-bold leading-[1.1] tracking-[-0.015em] text-[clamp(36px,5.5vw,62px)] ${
        light ? "text-white" : "text-[#223A70]"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-[#F7F1E7] text-[#223A70] overflow-x-hidden">
      <Header />
      <Hero />
      <BrandIdentity />
      <StickerMarquee />
      <BrandStrategy />
      <BrandApplications />
      <LogoSystem />
      <BrandSystemShowcase />
      <MascotSystem />
      <StickerSystem />
      <ColorPalette />
      <CupsPackaging />
      <FinalCTA />
      <Footer />
    </main>
  );
}

// ─── 1 · Header ───────────────────────────────────────────────────────────────

function Header() {
  const navLinks = ["Strategy", "Logo", "Mascot", "Mockups", "Launch"];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F1E7]/95 backdrop-blur-md border-b border-[#4A2E24]/8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[88px] flex items-center justify-between gap-4">

        {/* Left — mascot + wordmark brand lockup */}
        <motion.div
          className="flex items-center gap-3 shrink-0 select-none cursor-default"
          whileHover="hovered"
        >
          {/* Mascot — natural, no circle container */}
          <motion.div
            className="relative w-[58px] h-[58px] shrink-0"
            variants={{
              hovered: {
                y: -4,
                rotate: -7,
                transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <Image
              src="/cocos/cocos-mascot-cold-drink-navy.png"
              alt=""
              fill
              className="object-contain mix-blend-multiply"
              sizes="58px"
            />
          </motion.div>

          {/* Wordmark stack */}
          <div className="flex flex-col justify-center leading-none">
            <span className="font-display font-semibold text-[22px] tracking-normal text-[#223A70]">
              Coco&rsquo;s Coffee
            </span>
            <span className="font-sans text-[9px] font-bold tracking-[0.22em] uppercase text-[#223A70] mt-[3px]">
              Tampa, FL
            </span>
          </div>
        </motion.div>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative font-sans font-bold text-[17px] tracking-[0.01em] text-[#223A70] hover:text-[#F47A5A] px-3 py-2 transition-colors duration-200 group"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              {item}
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#F47A5A] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </motion.a>
          ))}
        </nav>

        {/* Right — Approve Direction only */}
        <div className="flex items-center shrink-0">
          <motion.button
            whileHover={{ y: -1, boxShadow: "0 6px 20px rgba(244,122,90,0.28)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="hidden md:flex items-center gap-2 bg-[#F47A5A] text-[#F7F1E7] px-6 py-2.5 rounded-full text-[15px] font-bold font-sans tracking-tight shadow-sm"
          >
            <Check size={13} strokeWidth={2.5} />
            Approve Direction
          </motion.button>

          {/* Mobile hamburger */}
          <button className="md:hidden p-1 text-[#223A70] hover:text-[#223A70] transition-colors">
            <Menu size={20} />
          </button>
        </div>

      </div>
    </header>
  );
}

// ─── 2 · Hero ─────────────────────────────────────────────────────────────────

function Hero() {
  // Desktop carousel slides
  const slides = [
    { src: "/cocos/cocos-coffee-trailer-mockup-navy-coral.png",        alt: "Coco's Coffee trailer — navy & coral" },
    { src: "/cocos/cocos-cup-mockup-coral-mascot-palm.png",            alt: "Coco's Coffee cup system" },
    { src: "/cocos/cocos-matcha-cups-sky-mockup-primary-logo.png",     alt: "Coco's Coffee iced matcha cups" },
    { src: "/cocos/cocos-menu-trifold-navy-coral.png",                 alt: "Coco's Coffee menu trifold" },
    { src: "/cocos/cocos-loyalty-card-flatlay-navy.png",               alt: "Coco's Coffee loyalty card" },
    { src: "/cocos/cocos-bag-cup-mockup-natural-coral.png",            alt: "Coco's Coffee bag and cup" },
  ];

  // Mobile slideshow — one card, no side cards, curated assets
  const mobileSlides: Array<{ src: string; alt: string; fit: "cover" | "contain" }> = [
    { src: "/cocos/cocos-coffee-trailer-mockup-navy-coral.png",       alt: "Coco's Coffee trailer — brand identity",      fit: "cover" },
    { src: "/cocos/cocos-cup-mockup-coral-mascot-palm.png",           alt: "Coco's Coffee cup system",                    fit: "cover" },
    { src: "/cocos/cocos-bag-cup-brand-mockup-navy-coral.png",        alt: "Coco's Coffee bag and cup brand mockup",      fit: "cover" },
    { src: "/cocos/cocos-menu-trifold-navy-coral.png",                alt: "Coco's Coffee menu trifold",                 fit: "contain" },
    { src: "/cocos/cocos-matcha-cups-sky-mockup-primary-logo.png",    alt: "Coco's Coffee iced matcha — sky lifestyle",   fit: "cover" },
    { src: "/cocos/cocos-sticker-pack-cafe-scene-navy-coral.png",     alt: "Coco's Coffee sticker pack — café scene",     fit: "contain" },
  ];

  const n = slides.length; // 6 — same length for both arrays
  const [active, setActive] = useState(0);
  const prev = (active - 1 + n) % n;
  const next = (active + 1) % n;

  useEffect(() => {
    const id = setInterval(() => setActive(i => (i + 1) % n), 2800);
    return () => clearInterval(id);
  }, [n]);

  return (
    <section
      className="relative flex flex-col items-center px-5 md:px-8 pt-7 pb-8 md:pb-3 overflow-hidden md:h-[calc(100vh-88px)]"
      style={{ background: "#F47A5A" }}
    >
      {/* Background: ghosted mascot watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ paddingTop: 120 }}
        aria-hidden
      >
        <div className="relative w-[680px] h-[680px]" style={{ opacity: 0.07 }}>
          <Image
            src="/cocos/cocos-mascot-cold-drink-navy.png"
            alt=""
            fill
            className="object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
            sizes="680px"
          />
        </div>
      </div>

      {/* Background: deep navy vignette at base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 50% at 50% 115%, rgba(34,58,112,0.30) 0%, transparent 68%)",
        }}
        aria-hidden
      />

      {/* Sparkles sticker — upper-right accent, desktop only */}
      <motion.div
        className="hidden md:block absolute top-[15%] right-[7%] w-[80px] h-[80px] pointer-events-none select-none z-10"
        initial={{ opacity: 0, rotate: -8, y: 10 }}
        animate={{ opacity: 0.80, rotate: 5, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55, ease }}
        aria-hidden
      >
        <Image src="/cocos/cocos-sparkles-sticker-navy-coral.png" alt="" fill className="object-contain" sizes="80px" />
      </motion.div>

      {/* Text block */}
      <motion.div
        className="relative z-10 w-full max-w-[560px] mx-auto text-center shrink-0 mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, ease }}
      >
        <span
          className="block font-sans text-[10px] font-bold tracking-[0.16em] md:tracking-[0.24em] uppercase text-[#223A70] mb-2.5"
          style={{ opacity: 0.72 }}
        >
          Brand Identity · Coffee Trailer · Tampa, FL
        </span>
        <h1
          className="font-display font-bold text-[#223A70] leading-[1.0] tracking-[-0.02em] mb-3"
          style={{ fontSize: "clamp(42px, 5vw, 68px)" }}
        >
          Coco&rsquo;s Coffee
        </h1>
        <p
          className="font-sans text-[13px] text-[#223A70] leading-[1.55] max-w-[320px] md:max-w-[420px] mx-auto mb-5"
          style={{ opacity: 0.78 }}
        >
          A warm, playful identity built for good coffee, sweet moments, and repeat visits.
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <button
            onClick={() =>
              document.getElementById("brand")?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-1.5 bg-[#223A70] text-[#F7F1E7] px-5 py-2 rounded-full text-[12px] font-sans font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Brand <ArrowRight size={12} />
          </button>
          <button
            onClick={() =>
              document.getElementById("applications")?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-1.5 border border-[#223A70]/40 hover:border-[#223A70]/70 text-[#223A70] px-5 py-2 rounded-full text-[12px] font-sans font-semibold transition-colors"
          >
            View Mockups
          </button>
        </div>
      </motion.div>

      {/* Visual composition stage */}
      <div className="relative z-10 w-full flex-1 min-h-0 flex items-end justify-center pb-3">

        {/* ── Mobile: animated one-card slideshow, no side cards ──────────── */}
        <div className="md:hidden w-full shrink-0">

          {/* Single card — fills width, fades between slides */}
          <div
            className="relative w-full rounded-3xl overflow-hidden bg-[#223A70]"
            style={{
              height: 380,
              boxShadow: "0 24px 64px rgba(34,58,112,0.45), 0 8px 24px rgba(34,58,112,0.24)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={mobileSlides[active].src}
                  alt={mobileSlides[active].alt}
                  fill
                  className={
                    mobileSlides[active].fit === "cover" ? "object-cover" : "object-contain"
                  }
                  sizes="100vw"
                  priority={active === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile slide indicators */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {mobileSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === active
                    ? "w-5 h-[3px] bg-[#F7F1E7]"
                    : "w-2 h-[3px] bg-[#223A70]/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop: 3-card rotating carousel ──────────────────────────── */}
        <div className="hidden md:flex w-full max-w-6xl mx-auto items-end justify-center gap-5 px-4">

          {/* Left — prev slide */}
          <motion.div
            className="w-[19%] shrink-0"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
          >
            <div style={{ transform: "rotate(-4deg)" }}>
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  height: 218,
                  boxShadow: "0 22px 60px rgba(34,58,112,0.46), 0 6px 18px rgba(34,58,112,0.24)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={prev}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={slides[prev].src}
                      alt={slides[prev].alt}
                      fill
                      className="object-cover"
                      sizes="19vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Center — active slide, dominant */}
          <motion.div
            className="w-[59%] shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
          >
            <div className="relative">
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-8%",
                  background: "radial-gradient(ellipse at 50% 68%, rgba(34,58,112,0.28) 0%, transparent 72%)",
                  filter: "blur(36px)",
                }}
                aria-hidden
              />
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease }}>
                <div
                  className="relative w-full rounded-2xl overflow-hidden"
                  style={{
                    height: 368,
                    boxShadow: "0 40px 100px rgba(34,58,112,0.55), 0 10px 36px rgba(34,58,112,0.28)",
                  }}
                >
                  <AnimatePresence>
                    <motion.div
                      key={active}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 0.985 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={slides[active].src}
                        alt={slides[active].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 80vw, 59vw"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div
                  className="mx-7 mt-2 rounded-full"
                  style={{ height: 2, background: "rgba(244,122,90,0.60)" }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right — next slide */}
          <motion.div
            className="w-[19%] shrink-0"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
          >
            <div style={{ transform: "rotate(3deg)" }}>
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  height: 218,
                  boxShadow: "0 22px 60px rgba(34,58,112,0.46), 0 6px 18px rgba(34,58,112,0.24)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={next}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={slides[next].src}
                      alt={slides[next].alt}
                      fill
                      className="object-cover"
                      sizes="19vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Desktop dot controls */}
      <div className="hidden md:flex relative z-10 items-center justify-center gap-1.5 mt-3 pb-1 shrink-0">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === active
                ? "w-5 h-[2px] bg-[#F47A5A]"
                : "w-2 h-[2px] bg-[#223A70]/30"
            }`}
          />
        ))}
      </div>

    </section>
  );
}


// ─── 3 · Brand Identity ───────────────────────────────────────────────────────

function BrandIdentity() {
  return (
    <section id="brand" className="relative py-16 md:py-24 px-5 md:px-8 bg-[#F7F1E7] overflow-hidden">

      {/* Subtle depth gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 98% 110%, rgba(244,122,90,0.12) 0%, transparent 65%), " +
            "radial-gradient(ellipse 50% 45% at 2% -5%, rgba(34,58,112,0.04) 0%, transparent 55%)",
        }}
        aria-hidden
      />

      {/* Ghost mascot — very faint watermark, lower-right */}
      <div className="absolute -bottom-20 -right-12 w-[400px] h-[400px] pointer-events-none select-none" aria-hidden>
        <Image
          src="/cocos/cocos-mascot-cold-drink-navy.png"
          alt=""
          fill
          className="object-contain opacity-[0.05] mix-blend-multiply"
          sizes="400px"
        />
      </div>

      {/* Palm sticker — upper right, accent behind image column */}
      <StickerAccent
        src="/cocos/cocos-palm-sun-sticker-navy-coral.png"
        size={84}
        rotate={14}
        opacity={0.55}
        className="top-8 right-[5%] hidden xl:block"
        delay={0.4}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-center">

          {/* ── Left: compact editorial text ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0 } } }}
          >
            <motion.div variants={fadeUp}>
              <Label>Brand Identity</Label>
            </motion.div>

            <motion.h2
              className="font-display font-bold text-[#223A70] leading-[1.06] tracking-[-0.015em] mt-4 mb-5"
              style={{ fontSize: "clamp(34px, 4vw, 54px)" }}
              variants={fadeUp}
            >
              A warm brand world built for daily coffee rituals.
            </motion.h2>

            <motion.p
              className="font-sans text-[#223A70] text-[15px] md:text-[16px] leading-[1.75] mb-6 max-w-[400px]"
              style={{ opacity: 0.80 }}
              variants={fadeUp}
            >
              Coco&rsquo;s blends a bold mascot, rounded typography, coastal color, and trailer-ready
              applications into one flexible identity system.
            </motion.p>

            <motion.div
              className="w-12 h-[2px] bg-[#F47A5A] rounded-full mb-5"
              variants={fadeUp}
            />

            <motion.p
              className="font-sans text-[10px] font-bold tracking-[0.24em] uppercase text-[#F47A5A]"
              variants={fadeUp}
            >
              Cups &middot; Trailer graphics &middot; Menus &middot; Loyalty &middot; Totes &middot; Launch
            </motion.p>
          </motion.div>

          {/* ── Right: image — dominant, close-cropped ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease }}
          >
            <motion.div
              className="relative"
              whileHover={{ y: -7 }}
              transition={{ duration: 0.45, ease }}
            >
              {/* Coral corner accent — top right */}
              <div
                className="absolute -top-3 -right-3 w-[20px] h-[20px] rounded-full bg-[#F47A5A] hidden lg:block"
                style={{ opacity: 0.68 }}
              />

              {/* Image card */}
              <div
                className="rounded-3xl overflow-hidden relative h-[360px] md:h-[460px] lg:h-[520px]"
                style={{
                  background: "linear-gradient(145deg, #EDE3D4 0%, rgba(244,122,90,0.13) 100%)",
                  border: "1.5px solid rgba(244,122,90,0.42)",
                  boxShadow:
                    "0 40px 100px rgba(34,58,112,0.12), 0 8px 28px rgba(34,58,112,0.07)",
                }}
              >
                <Image
                  src="/cocos/cocos-cup-mockup-coral-mascot-palm.png"
                  alt="Coco's Coffee cup system — coral mascot palm motif"
                  fill
                  className="object-contain p-5 md:p-8"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>

              {/* Coral corner accent — bottom left */}
              <div className="absolute -bottom-3 -left-3 w-[14px] h-[14px] rounded-full bg-[#F47A5A] opacity-55 hidden lg:block" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
// ─── 3b · Sticker Marquee ─────────────────────────────────────────────

function StickerMarquee() {
  type MarqueeItem =
    | { k: string; type: "word"; text: string }
    | { k: string; type: "img";  src: string; w: number; h: number; rotate: number };

  const items: MarqueeItem[] = [
    { k: "w1", type: "word", text: "GOOD COFFEE" },
    { k: "i1", type: "img",  src: "/cocos/cocos-espresso-machine-sticker-navy-coral.png", w: 74, h: 74, rotate: -6 },
    { k: "w2", type: "word", text: "GOOD DAYS" },
    { k: "i2", type: "img",  src: "/cocos/cocos-sparkles-sticker-navy-coral.png",          w: 64, h: 64, rotate:  5 },
    { k: "w3", type: "word", text: "MATCHA" },
    { k: "i3", type: "img",  src: "/cocos/cocos-palm-sun-sticker-navy-coral.png",          w: 74, h: 74, rotate: -4 },
    { k: "w4", type: "word", text: "REFRESHERS" },
    { k: "i4", type: "img",  src: "/cocos/cocos-sipping-mascot-sticker-navy-cream.png",    w: 68, h: 68, rotate:  4 },
    { k: "w5", type: "word", text: "TAMPA" },
    { k: "i5", type: "img",  src: "/cocos/cocos-hot-coffee-cup-sticker-navy-coral.png",    w: 64, h: 64, rotate: -5 },
    { k: "w6", type: "word", text: "DAILY STOP" },
    { k: "i6", type: "img",  src: "/cocos/cocos-moka-pot-sticker-navy-cream.png",          w: 68, h: 68, rotate:  5 },
    { k: "w7", type: "word", text: "SIP SMILE REPEAT" },
    { k: "i7", type: "img",  src: "/cocos/cocos-primary-logo-navy-approved.png",           w: 94, h: 44, rotate: -2 },
  ];

  function renderItem(item: MarqueeItem, prefix: string) {
    if (item.type === "word") {
      return (
        <span
          key={prefix + item.k}
          className="shrink-0 font-display font-bold uppercase leading-none text-[#223A70] tracking-[-0.02em] select-none mx-8 md:mx-12"
          style={{ fontSize: "clamp(34px, 4.5vw, 52px)" }}
        >
          {item.text}
        </span>
      );
    }

    return (
      <div
        key={prefix + item.k}
        className="relative shrink-0 self-center mx-4 md:mx-6"
        style={{ transform: `rotate(${item.rotate}deg)`, width: item.w, height: item.h }}
      >
        <Image
          src={item.src}
          alt=""
          fill
          className="object-contain"
          sizes={`${item.w}px`}
        />
      </div>
    );
  }

  return (
    <div
      className="overflow-hidden"
      style={{
        background: "#F47A5A",
        borderTop: "2px solid #223A70",
        borderBottom: "2px solid #223A70",
        height: "128px",
      }}
    >
      <div
        className="flex items-center h-full will-change-transform"
        style={{ animation: "ticker 30s linear infinite" }}
      >
        {items.map((item) => renderItem(item, "a"))}
        {items.map((item) => renderItem(item, "b"))}
      </div>
    </div>
  );
}

// ─── 4 · Brand Strategy ──────────────────────────────────────────────────────────────────

function BrandStrategy() {
  const statements = [
    {
      num: "01",
      title: "Fast Recognition",
      body: "A bold mascot and simple color system make the brand easy to spot from the street.",
    },
    {
      num: "02",
      title: "Daily Ritual",
      body: "The identity is built for morning coffee runs, beach stops, lunch breaks, and regular customers.",
    },
    {
      num: "03",
      title: "Trailer-Ready System",
      body: "Every asset is designed to work across signage, cups, menus, bags, stickers, social, and launch materials.",
    },
  ];

  return (
    <section id="strategy" className="relative pt-14 pb-8 md:py-28 px-5 md:px-8 bg-[#223A70] overflow-hidden">


      {/* Coral ghosted mascot — background watermark, both mobile & desktop */}
      <div
        className="absolute pointer-events-none select-none"
        aria-hidden
        style={{
          width: 520,
          height: 520,
          bottom: -40,
          right: -80,
          opacity: 0.09,
          background: "#F47A5A",
          WebkitMaskImage: "url('/cocos/cocos-mascot-cold-drink-navy.png')",
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: "url('/cocos/cocos-mascot-cold-drink-navy.png')",
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* Left — editorial copy block */}
          <Reveal>
            <span className="block font-sans text-[11px] font-bold tracking-[0.22em] uppercase text-[#F47A5A] mb-3 md:mb-6">
              Brand Strategy
            </span>
            <h2
              className="font-display font-bold text-[#F7F1E7] leading-[1.08] tracking-[-0.015em] mb-3 md:mb-6"
              style={{ fontSize: "clamp(34px,4vw,54px)" }}
            >
              Built for the daily stop.
            </h2>
            <p
              className="font-sans text-[15px] text-[#F7F1E7] leading-[1.75] mb-6 md:mb-10 max-w-md"
              style={{ opacity: 0.80 }}
            >
              Coco&rsquo;s is designed for the real coffee trailer experience — fast ordering, familiar faces, repeat visits, and brand moments people remember.
            </p>

            {/* Strategy statements */}
            <motion.div
              className="flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              {statements.map(({ num, title, body }, i) => (
                <motion.div
                  key={num}
                  variants={fadeUp}
                  className={`flex gap-5 py-5${i < statements.length - 1 ? " border-b border-[#F47A5A]/20" : ""}`}
                >
                  <span className="font-sans font-bold text-[11px] text-[#F47A5A] tracking-[0.10em] shrink-0 pt-0.5 w-6">
                    {num}
                  </span>
                  <div>
                    <p className="font-display font-semibold text-[17px] text-[#F7F1E7] leading-snug mb-1">
                      {title}
                    </p>
                    <p className="font-sans text-[13px] text-[#F7F1E7] leading-relaxed" style={{ opacity: 0.72 }}>
                      {body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Reveal>

          {/* Right — trailer image + palm-sun sticker accent */}
          <div className="relative">
            <Reveal delay={0.14}>
              <motion.div
                className="rounded-3xl overflow-hidden"
                style={{
                  boxShadow: "0 24px 80px rgba(0,0,0,0.38), 0 6px 24px rgba(0,0,0,0.20)",
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 36px 100px rgba(0,0,0,0.44), 0 10px 32px rgba(0,0,0,0.24)",
                }}
                transition={{ duration: 0.38, ease }}
              >
                <div className="h-[5px] bg-[#F47A5A]" />
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/cocos/cocos-coffee-trailer-mockup-navy-coral.png"
                    alt="Coco's Coffee trailer mockup — navy & coral brand identity"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </Reveal>

            {/* Palm-sun sticker — branded stamp on image upper-right corner */}
            <StickerAccent
              src="/cocos/cocos-palm-sun-sticker-navy-coral.png"
              size={72}
              rotate={12}
              opacity={0.95}
              className="-top-7 -right-3 z-20 hidden sm:block"
              delay={0.42}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── 4b · Brand Applications ───────────────────────────────────────────────────────────────

function BrandApplications() {
  const appItems = ["Trailer Graphics", "Cups", "Menus", "Loyalty", "Totes", "Matcha", "Launch"];

  // Mobile carousel
  const carouselRef = useRef<HTMLDivElement>(null);
  const [mobileActive, setMobileActive] = useState(0);

  const mobileCards: {
    label: string; src: string; alt: string; copy: string;
    fit: "cover" | "contain"; bg: string;
  }[] = [
    {
      label: "Iced Matcha System",
      src: "/cocos/cocos-matcha-cups-sky-mockup-primary-logo.png",
      alt: "Coco's Coffee iced matcha cups — sky lifestyle mockup",
      copy: "A sunny beverage application using the primary Coco’s logo, coral straw detail, and matcha-forward product photography.",
      fit: "contain",
      bg: "#F7F1E7",
    },
    {
      label: "Bag + Cup System",
      src: "/cocos/cocos-bag-cup-brand-mockup-navy-coral.png",
      alt: "Coco's Coffee bag and cup brand mockup",
      copy: "Takeaway packaging that carries the brand into every customer’s day.",
      fit: "cover",
      bg: "#EDE3D4",
    },
    {
      label: "Cup System",
      src: "/cocos/cocos-cup-mockup-coral-mascot-palm.png",
      alt: "Coco's Coffee cup system — coral mascot palm",
      copy: "A playful cup system using the mascot, palm motif, coral, navy, and cream.",
      fit: "cover",
      bg: "#F7F1E7",
    },
    {
      label: "Menu Trifold",
      src: "/cocos/cocos-menu-trifold-navy-coral.png",
      alt: "Coco's Coffee menu trifold",
      copy: "A compact menu system built for trailer ordering, speed, and brand clarity.",
      fit: "contain",
      bg: "#EDE3D4",
    },
    {
      label: "Loyalty Card",
      src: "/cocos/cocos-loyalty-card-flatlay-navy.png",
      alt: "Coco's Coffee loyalty card system — flatlay",
      copy: "A repeat-visit touchpoint designed to feel collectible and memorable.",
      fit: "cover",
      bg: "#F7F1E7",
    },
    {
      label: "Sticker System",
      src: "/cocos/cocos-sticker-pack-cafe-scene-navy-coral.png",
      alt: "Coco's Coffee sticker pack — café scene",
      copy: "A hand-drawn sticker world for packaging, social content, launch moments, and merch.",
      fit: "contain",
      bg: "#223A70",
    },
    {
      label: "Tote Lifestyle",
      src: "/cocos/cocos-tote-lifestyle-model-navy.png",
      alt: "Coco's Coffee lifestyle tote — brand merch in daily use",
      copy: "A merch application that turns Coco’s into something customers carry with them.",
      fit: "contain",
      bg: "#EDE3D4",
    },
    {
      label: "Trailer Identity",
      src: "/cocos/cocos-coffee-trailer-mockup-navy-coral.png",
      alt: "Coco's Coffee trailer — navy & coral brand identity",
      copy: "The flagship brand vehicle — navy and coral signage system ready for the road.",
      fit: "cover",
      bg: "#EDE3D4",
    },
  ];

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth } = carouselRef.current;
    const idx = Math.round((scrollLeft / scrollWidth) * mobileCards.length);
    setMobileActive(Math.min(Math.max(idx, 0), mobileCards.length - 1));
  };

  const scrollToCard = (i: number) => {
    if (!carouselRef.current) return;
    const { scrollWidth } = carouselRef.current;
    carouselRef.current.scrollTo({ left: (scrollWidth / mobileCards.length) * i, behavior: "smooth" });
  };

  return (
    <section id="applications" className="relative pt-10 pb-16 md:py-24 px-5 md:px-8 bg-[#223A70] overflow-hidden">

      {/* Decorative sticker accents — desktop only */}
      <StickerAccent
        src="/cocos/cocos-croissant-sticker-navy-cream.png"
        size={88}
        rotate={-4}
        opacity={0.72}
        className="top-16 right-[3%] hidden xl:block"
        delay={0.2}
      />
      <StickerAccent
        src="/cocos/cocos-espresso-machine-sticker-navy-coral.png"
        size={96}
        rotate={5}
        opacity={0.62}
        className="bottom-14 left-[2%] hidden xl:block"
        delay={0.4}
      />

      {/* Subtle coral glow behind grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 62%, rgba(244,122,90,0.07) 0%, transparent 68%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-[1440px] mx-auto">

        {/* Shared header */}
        <Reveal>
          <div className="text-center mb-7 md:mb-12">
            <span className="block font-sans text-[10px] font-bold tracking-[0.26em] uppercase text-[#F47A5A] mb-3">
              Brand Applications
            </span>
            <h2
              className="font-display font-bold text-[#F7F1E7] leading-[1.05] tracking-[-0.015em]"
              style={{ fontSize: "clamp(26px, 3.4vw, 44px)" }}
            >
              Built for every daily ritual.
            </h2>
            <p
              className="font-sans text-[13px] md:text-[14px] text-[#F7F1E7] leading-[1.65] max-w-[540px] mx-auto mt-3.5"
              style={{ opacity: 0.68 }}
            >
              Coco&rsquo;s extends across trailer graphics, cups, menus, loyalty cards, totes, matcha drinks, and launch materials.
            </p>
            <div className="w-10 h-[2px] rounded-full mx-auto mt-6" style={{ background: "#F47A5A" }} />
          </div>
        </Reveal>

        {/* ── Mobile: horizontal swipe carousel ─────────────────────────────── */}
        <div className="md:hidden">

          {/* Swipe hint */}
          <p
            className="font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-center text-[#F7F1E7] mb-3"
            style={{ opacity: 0.45 }}
          >
            Swipe to explore applications
          </p>

          {/* Scroll container — negative margin bleeds through section px-5 for peek effect */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-pl-3 gap-3 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", marginLeft: "-20px", marginRight: "-20px", paddingLeft: "12px", paddingRight: "12px" }}
            onScroll={handleCarouselScroll}
          >
            {mobileCards.map(({ label, src, alt, copy, fit, bg }) => (
              <div
                key={label}
                className="snap-start flex-shrink-0 w-[86vw] rounded-3xl overflow-hidden cursor-default"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.38)" }}
              >
                <div className="relative h-[240px]" style={{ background: bg }}>
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className={fit === "cover" ? "object-cover" : "object-contain"}
                    sizes="86vw"
                  />
                </div>
                <div className="px-4 py-3.5 bg-[#F7F1E7] border-t-2 border-[#F47A5A]">
                  <span className="font-sans text-[9px] font-bold tracking-[0.22em] uppercase text-[#F47A5A] block mb-1">
                    {label}
                  </span>
                  <p className="font-sans text-[11px] text-[#223A70] leading-[1.5]">
                    {copy}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-1.5 mt-2">
            {mobileCards.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                aria-label={`Application ${i + 1}`}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === mobileActive
                    ? "w-5 h-[3px] bg-[#F47A5A]"
                    : "w-2 h-[3px] bg-[#F7F1E7]/35"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop: editorial grid ───────────────────────────────────────── */}
        <div className="hidden md:block">

          {/* Row 1 — Equal 2-column: Trailer + Iced Matcha */}
          <motion.div
            className="grid grid-cols-2 gap-5 mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="rounded-2xl overflow-hidden cursor-default"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.32)" }}
              whileHover={{ y: -5, boxShadow: "0 22px 56px rgba(0,0,0,0.42)" }}
              transition={{ duration: 0.30, ease }}
            >
              <div className="relative h-[420px]" style={{ background: "#EDE3D4" }}>
                <Image
                  src="/cocos/cocos-coffee-trailer-mockup-navy-coral.png"
                  alt="Coco's Coffee trailer — navy & coral brand identity"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="px-5 py-4 bg-[#F7F1E7] border-t-2 border-[#F47A5A]">
                <span className="font-sans text-[10px] font-bold tracking-[0.22em] uppercase text-[#F47A5A] block mb-1">
                  Trailer Identity
                </span>
                <p className="font-sans text-[12px] text-[#223A70] leading-[1.5]">
                  The flagship brand vehicle — navy & coral signage system ready for the road.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl overflow-hidden cursor-default"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.32)" }}
              whileHover={{ y: -5, boxShadow: "0 22px 56px rgba(0,0,0,0.42)" }}
              transition={{ duration: 0.30, ease }}
            >
              <div className="relative h-[420px]" style={{ background: "#F7F1E7" }}>
                <Image
                  src="/cocos/cocos-matcha-cups-sky-mockup-primary-logo.png"
                  alt="Coco's Coffee iced matcha cups — sky lifestyle mockup with primary logo"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="px-5 py-4 bg-[#F7F1E7] border-t-2 border-[#F47A5A]">
                <span className="font-sans text-[10px] font-bold tracking-[0.22em] uppercase text-[#F47A5A] block mb-1">
                  Iced Matcha System
                </span>
                <p className="font-sans text-[12px] text-[#223A70] leading-[1.5]">
                  A sunny beverage application using the primary Coco&rsquo;s logo, coral straw detail, and matcha-forward photography.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Row 2 — Three equal supporting cards */}
          <motion.div
            className="grid grid-cols-3 gap-5 mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {(
              [
                { label: "Bag + Cup System",  src: "/cocos/cocos-bag-cup-mockup-natural-coral.png",   alt: "Coco's Coffee bag and cup system",        bg: "#EDE3D4", fit: "cover"   as const },
                { label: "Cup System",         src: "/cocos/cocos-cup-mockup-coral-mascot-palm.png",   alt: "Coco's Coffee cup system — coral mascot", bg: "#F7F1E7", fit: "cover"   as const },
                { label: "Menu Trifold",       src: "/cocos/cocos-menu-trifold-navy-coral.png",        alt: "Coco's Coffee menu trifold",              bg: "#EDE3D4", fit: "contain" as const },
              ]
            ).map(({ label, src, alt, bg, fit }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="rounded-2xl overflow-hidden cursor-default"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.32)" }}
                whileHover={{ y: -5, boxShadow: "0 22px 56px rgba(0,0,0,0.42)" }}
                transition={{ duration: 0.30, ease }}
              >
                <div className="relative h-[260px]" style={{ background: bg }}>
                  <Image src={src} alt={alt} fill className={fit === "cover" ? "object-cover" : "object-contain"} sizes="33vw" />
                </div>
                <div className="px-4 py-3 bg-[#F7F1E7] border-t-2 border-[#F47A5A]">
                  <span className="font-sans text-[9px] font-bold tracking-[0.22em] uppercase text-[#F47A5A]">
                    {label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 3 — Wide pair: Tote + Loyalty Card */}
          <motion.div
            className="grid grid-cols-12 gap-5 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="col-span-5 rounded-2xl overflow-hidden cursor-default"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.32)" }}
              whileHover={{ y: -5, boxShadow: "0 22px 56px rgba(0,0,0,0.42)" }}
              transition={{ duration: 0.30, ease }}
            >
              <div className="relative h-[260px]" style={{ background: "#EDE3D4" }}>
                <Image src="/cocos/cocos-tote-lifestyle-model-navy.png" alt="Coco's Coffee lifestyle tote" fill className="object-contain" sizes="42vw" />
              </div>
              <div className="px-5 py-3.5 bg-[#F7F1E7] border-t-2 border-[#F47A5A]">
                <span className="font-sans text-[10px] font-bold tracking-[0.22em] uppercase text-[#F47A5A]">Tote Lifestyle</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="col-span-7 rounded-2xl overflow-hidden cursor-default"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.32)" }}
              whileHover={{ y: -5, boxShadow: "0 22px 56px rgba(0,0,0,0.42)" }}
              transition={{ duration: 0.30, ease }}
            >
              <div className="relative h-[260px]" style={{ background: "#F7F1E7" }}>
                <Image src="/cocos/cocos-loyalty-card-flatlay-navy.png" alt="Coco's Coffee loyalty card system" fill className="object-cover" sizes="58vw" />
              </div>
              <div className="px-5 py-3.5 bg-[#F7F1E7] border-t-2 border-[#F47A5A]">
                <span className="font-sans text-[10px] font-bold tracking-[0.22em] uppercase text-[#F47A5A]">Loyalty Card System</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Application rail */}
          <Reveal delay={0.1}>
            <div className="pt-6 border-t border-[#F7F1E7]/10 text-center">
              <p className="font-sans text-[11px] font-bold tracking-[0.28em] uppercase">
                {appItems.map((item, i) => (
                  <span key={item}>
                    {i > 0 && <span className="text-[#F47A5A] mx-2">&middot;</span>}
                    <span className="text-[#F7F1E7]" style={{ opacity: 0.65 }}>{item}</span>
                  </span>
                ))}
              </p>
            </div>
          </Reveal>

        </div>{/* end desktop grid */}

      </div>
    </section>
  );
}


// ─── 5 · Logo System ──────────────────────────────────────────────────────────

function LogoSystem() {
  const [paused, setPaused] = useState(false);

  const reelItems: Array<{
    label: string; sublabel: string; title: string; src: string;
    fit: "contain" | "cover";
  }> = [
    { label: "01", sublabel: "Primary Mark",  title: "Horizontal Lockup",    src: "/cocos/cocos-logo-horizontal-navy.png",             fit: "contain" },
    { label: "02", sublabel: "Stacked",        title: "Primary Stacked",     src: "/cocos/cocos-primary-logo-navy-approved.png",        fit: "contain" },
    { label: "03", sublabel: "Character",      title: "Mascot Mark",         src: "/cocos/cocos-mascot-cold-drink-navy.png",            fit: "contain" },
    { label: "04", sublabel: "Application",    title: "Bag + Cup System",    src: "/cocos/cocos-bag-cup-mockup-natural-coral.png",      fit: "cover"   },
    { label: "05", sublabel: "Trailer",        title: "Trailer Identity",    src: "/cocos/cocos-coffee-trailer-mockup-navy-coral.png",  fit: "cover"   },
    { label: "06", sublabel: "Print",          title: "Menu Trifold",        src: "/cocos/cocos-menu-trifold-navy-coral.png",           fit: "cover"   },
    { label: "07", sublabel: "Loyalty",        title: "Loyalty Card System", src: "/cocos/cocos-loyalty-card-flatlay-navy.png",         fit: "cover"   },
  ];

  return (
    <section id="logo" className="relative pt-24 pb-12 md:pt-32 md:pb-14 bg-[#F47A5A] overflow-hidden">

      {/* Ghosted mascot — background texture */}
      <div
        className="absolute right-[-60px] bottom-0 w-[560px] h-[560px] pointer-events-none select-none"
        aria-hidden
      >
        <Image
          src="/cocos/cocos-mascot-cold-drink-navy.png"
          alt=""
          fill
          className="object-contain"
          style={{ filter: "brightness(0) invert(1)", opacity: 0.05 }}
          sizes="560px"
        />
      </div>

      {/* Section header */}
      <Reveal>
        <div className="px-5 md:px-8 relative z-10">
          <div className="max-w-7xl mx-auto mb-14 md:mb-18">
            <span className="block font-sans text-[11px] font-bold tracking-[0.22em] uppercase text-[#223A70] mb-3 md:mb-4">
              Logo System
            </span>
            <h2
              className="font-display font-bold leading-[1.1] tracking-[-0.015em] text-[#223A70] mb-5"
              style={{ fontSize: "clamp(36px,5.5vw,62px)" }}
            >
              A mark for every touchpoint.
            </h2>
            <p className="font-sans text-[15px] md:text-[16px] text-[#223A70] leading-[1.72] max-w-2xl">
              A flexible identity system built for cups, bags, menus, signage, social, merchandise, and everyday brand moments.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Top coral film-track border */}
      <div className="relative z-10 h-[2px] bg-[#223A70]" />

      {/* Animated film reel */}
      <div
        className="relative z-10 overflow-hidden py-8"
        style={{ background: "rgba(34,58,112,0.10)" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-4 pl-4"
          style={{
            width: "max-content",
            animation: "ticker 28s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {[...reelItems, ...reelItems].map((item, i) => (
            <motion.div
              key={i}
              className="relative shrink-0 w-[400px] rounded-2xl overflow-hidden bg-[#F7F1E7] flex flex-col cursor-default"
              style={{ boxShadow: "0 4px 28px rgba(0,0,0,0.24), 0 1px 8px rgba(0,0,0,0.12)" }}
              whileHover={{ y: -7, scale: 1.015, boxShadow: "0 20px 64px rgba(0,0,0,0.34), 0 4px 18px rgba(0,0,0,0.18)" }}
              transition={{ duration: 0.30, ease }}
            >
              {/* Coral top bar */}
              <div className="h-[3px] bg-[#F47A5A]" />

              {/* Image area */}
              {item.fit === "contain" ? (
                <div className="relative flex items-center justify-center h-[220px] p-8">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-contain mix-blend-multiply"
                      sizes="350px"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative h-[220px]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
              )}

              {/* Card footer */}
              <div className="px-5 py-5 border-t-2 border-[#F47A5A]/20">
                <span className="block font-sans text-[10px] font-bold tracking-[0.22em] uppercase text-[#F47A5A] mb-1.5">
                  {item.label} — {item.sublabel}
                </span>
                <p className="font-sans font-bold text-[15px] text-[#223A70] leading-tight">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom coral film-track border */}
      <div className="relative z-10 h-[2px] bg-[#223A70]" />

    </section>
  );
}


// ─── 5b · Typography + Brand In Use ──────────────────────────────────────────

function BrandSystemShowcase() {
  const typeRows: Array<{
    num: string; label: string; sample: string;
    sampleClass: string; sampleSize: string; sampleWeight: number;
    sampleTracking: string; fontName: string; description: string;
  }> = [
    {
      num: "01", label: "PRIMARY DISPLAY",
      sample: "GOOD COFFEE",
      sampleClass: "font-display", sampleSize: "clamp(32px,7.5vw,96px)", sampleWeight: 900,
      sampleTracking: "-0.02em", fontName: "PP Agrandir Grand Heavy",
      description: "Bold, expressive, and full of personality. Used for hero headlines, posters, launch graphics, and high-impact brand moments.",
    },
    {
      num: "02", label: "SECONDARY DISPLAY",
      sample: "GOOD DAYS",
      sampleClass: "font-display", sampleSize: "clamp(30px,7.5vw,92px)", sampleWeight: 900,
      sampleTracking: "-0.02em", fontName: "PP Agrandir Grand Heavy",
      description: "Confident and warm. Used for supporting headlines, packaging statements, and brand-forward messaging.",
    },
    {
      num: "03", label: "SUBHEAD / UTILITY",
      sample: "WARM PEOPLE \xb7 SIP SMILE REPEAT",
      sampleClass: "font-sans", sampleSize: "clamp(15px,2.2vw,26px)", sampleWeight: 700,
      sampleTracking: "0.06em", fontName: "PP Air Medium",
      description: "Clean, direct, and versatile. Used for labels, menus, callouts, buttons, and short informational text.",
    },
    {
      num: "04", label: "BODY COPY",
      sample: "Good coffee starts with good people and good days.",
      sampleClass: "font-sans", sampleSize: "clamp(15px,1.4vw,19px)", sampleWeight: 400,
      sampleTracking: "0em", fontName: "PP Air Regular",
      description: "Friendly, readable, and easy on the eyes. Used for longer copy, descriptions, captions, and supporting content.",
    },
  ];

  return (
    <>
      {/* Panel A — Live Typography Specimen — Deep Navy */}
      <section id="typography" className="pt-14 pb-20 md:pt-5 md:pb-20 bg-[#223A70] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">

          {/* ── Header: compact horizontal split ── */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:gap-16 lg:gap-20 mb-4 md:mb-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "200px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          >
            {/* Left: eyebrow + heading */}
            <div className="shrink-0 max-w-[620px]">
              <motion.span
                className="block font-sans text-[11px] font-bold tracking-[0.22em] uppercase text-[#F47A5A] mb-3"
                variants={fadeUp}
              >
                Type System
              </motion.span>
              <motion.h2
                className="font-display font-bold leading-[1.06] tracking-[-0.015em] text-[#F7F1E7]"
                style={{ fontSize: "clamp(32px,4.5vw,56px)" }}
                variants={fadeUp}
              >
                Typography with personality.
              </motion.h2>
            </div>

            {/* Right: body copy — bottom-aligned to heading on desktop */}
            <motion.p
              className="font-sans text-[14px] md:text-[15px] text-[#F7F1E7] leading-[1.65] max-w-[440px] mt-3 md:mt-0"
              style={{ opacity: 0.82 }}
              variants={fadeUp}
            >
              A bold, coastal type system built for clarity, warmth, and confident brand moments.
            </motion.p>
          </motion.div>

          {/* Top coral rule — horizontal reveal */}
          <motion.div
            className="h-[2px] bg-[#F47A5A]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.75, ease }}
          />

          {/* ── Type specimen rows ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {typeRows.map((row, i) => (
              <motion.div key={row.num} variants={fadeUp}>
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] items-center py-4 md:py-8 gap-2 md:gap-0">

                  {/* Left — large type sample */}
                  <div className="md:pr-14">
                    <p
                      className={row.sampleClass + " text-[#F7F1E7]"}
                      style={{
                        fontSize: row.sampleSize,
                        fontWeight: row.sampleWeight,
                        letterSpacing: row.sampleTracking,
                        lineHeight: row.num === "04" ? 1.72 : 1.05,
                      }}
                    >
                      {row.sample}
                    </p>
                  </div>

                  {/* Right — detail block with vertical divider */}
                  <div className="relative md:pl-14 mt-1 md:mt-0">
                    {/* Vertical coral divider — desktop only */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#F47A5A]/25 hidden md:block" />

                    <div className="flex items-baseline gap-2.5 mb-1.5 md:mb-3">
                      <span className="font-display font-bold text-[22px] text-[#F47A5A] leading-none">
                        {row.num}
                      </span>
                      <span className="font-sans font-bold text-[9.5px] tracking-[0.22em] uppercase text-[#F47A5A]">
                        {row.label}
                      </span>
                    </div>
                    <p className="font-sans font-semibold text-[12.5px] text-[#F7F1E7] tracking-[0.02em] mb-1 md:mb-3">
                      {row.fontName}
                    </p>
                    <p className="font-sans text-[13px] text-[#F7F1E7] leading-[1.55] md:leading-[1.72]">
                      {row.description}
                    </p>
                  </div>
                </div>

                {/* Row divider */}
                {i < typeRows.length - 1 && (
                  <div className="h-[1px] bg-[#F47A5A]/20" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom coral rule */}
          <div className="h-[2px] bg-[#F47A5A]" />

        </div>
      </section>

      {/* Panel B — Brand in Use — Coconut Cream */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-[#F47A5A]">
        <div className="max-w-7xl mx-auto">
          <Reveal delay={0.06}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              <motion.div
                className="rounded-3xl overflow-hidden order-2 lg:order-1"
                style={{ boxShadow: "0 8px 40px rgba(34,58,112,0.18)" }}
                whileHover={{ y: -5, boxShadow: "0 22px 60px rgba(34,58,112,0.26)" }}
                transition={{ duration: 0.35, ease }}
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/cocos/cocos-bag-cup-mockup-natural-coral.png"
                    alt="Coco's Coffee bag and cup brand mockup"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              <div className="order-1 lg:order-2">
                <span className="block font-sans text-[11px] font-bold tracking-[0.22em] uppercase text-[#223A70] mb-4">
                  Brand in Use
                </span>
                <h3
                  className="font-display font-bold text-[#223A70] leading-[1.1] tracking-[-0.015em] mb-5"
                  style={{ fontSize: "clamp(28px,3.5vw,46px)" }}
                >
                  Packaging that travels<br className="hidden lg:block" /> with every customer.
                </h3>
                <p className="font-sans text-[15px] text-[#223A70] leading-[1.75] max-w-md">
                  The Coco&rsquo;s identity extends across takeaway bags, cups, and daily
                  customer touchpoints with a warm, recognizable system.
                </p>
              </div>

            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
// ─── 6 · Mascot System ────────────────────────────────────────────────────────

function MascotSystem() {
  return (
    <section id="mascot" className="relative pt-14 pb-12 md:py-20 px-5 md:px-8 bg-[#F7F1E7] overflow-hidden">

      {/* Mascot sticker variants — floating accents */}
      <StickerAccent
        src="/cocos/cocos-mascot-cold-drink-navy.png"
        size={128}
        rotate={-4}
        opacity={0.82}
        className="top-8 left-[3%] hidden xl:block"
        delay={0.25}
      />


      {/* Coral glow behind mascot card — right side */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 90% 50%, rgba(244,122,90,0.08) 0%, transparent 65%)",
        }}
      />
      {/* Faint navy wash — left side */}
      <div
        className="absolute left-0 top-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 0% 40%, rgba(34,58,112,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">

          {/* ── Left: text ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span
              className="block font-sans text-[11px] font-bold tracking-[0.22em] uppercase text-[#F47A5A] mb-3 md:mb-4"
              variants={fadeUp}
            >
              Mascot System
            </motion.span>
            <motion.h2
              className="font-display font-bold text-[#223A70] leading-[1.08] tracking-[-0.015em] mb-3 md:mb-5"
              style={{ fontSize: "clamp(34px,4vw,52px)" }}
              variants={fadeUp}
            >
              Coco is the memory hook.
            </motion.h2>
            <motion.p
              className="font-sans text-[15px] md:text-[16px] text-[#223A70] leading-[1.6] md:leading-[1.8] mb-6 md:mb-10 max-w-md"
              style={{ opacity: 0.82 }}
              variants={fadeUp}
            >
              The coconut character gives the brand warmth, recognition, and personality
              across cups, signage, stickers, merch, menus, social content, and launch materials.
            </motion.p>

            {/* Usage strip */}
            <motion.div
              className="flex flex-wrap items-baseline gap-x-3 gap-y-2 pt-4 md:pt-6 border-t border-[#223A70]/15"
              variants={fadeUp}
            >
              <span className="font-sans text-[10px] font-bold tracking-[0.26em] uppercase text-[#F47A5A] shrink-0">
                Built for
              </span>
              <span className="font-sans text-[13px] font-semibold text-[#223A70] tracking-[0.03em]">
                Cups &middot; Signage &middot; Stickers &middot; Merch &middot; Menus &middot; Social
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: mascot card ── */}
          <Reveal delay={0.14}>
            <motion.div
              className="relative rounded-3xl bg-[#EDE3D4] overflow-hidden h-[340px] md:h-[480px]"
              style={{
                border: "2px solid rgba(244,122,90,0.35)",
                boxShadow:
                  "0 24px 80px rgba(34,58,112,0.12), 0 4px 16px rgba(34,58,112,0.07)",
              }}
              whileHover={{ y: -6, boxShadow: "0 36px 100px rgba(34,58,112,0.16), 0 8px 24px rgba(34,58,112,0.09)" }}
              transition={{ duration: 0.4, ease }}
            >
              {/* Mascot image — padded above the coral label strip */}
              <div className="absolute inset-0 p-5 pb-[68px] md:p-8 md:pb-[68px]">
                <div className="relative w-full h-full">
                  <Image
                    src="/cocos/cocos-mascot-cold-drink-navy.png"
                    alt="Coco the cold drink mascot — Coco's Coffee brand character"
                    fill
                    className="object-contain drop-shadow-xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Coral label strip */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4"
                style={{ background: "#F47A5A" }}
              >
                <p className="font-display font-bold text-[#F7F1E7] text-[13px] leading-tight">
                  Coco™ Cold Drink
                </p>
                <p
                  className="font-sans text-[9px] font-bold tracking-[0.22em] uppercase text-[#F7F1E7] mt-0.5"
                  style={{ opacity: 0.75 }}
                >
                  Mascot Variant
                </p>
              </div>
            </motion.div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
// ─── 8 · Color Palette ────────────────────────────────────────────────────────

// ─── 7b · Sticker System ──────────────────────────────────────────────────────

function StickerSystem() {
  const applications = ["Cups", "Menus", "Stickers", "Loyalty", "Social", "Launch"];

  return (
    <section id="stickers" className="relative pt-12 pb-20 md:py-28 px-5 md:px-8 bg-[#223A70] overflow-hidden">

      {/* Coral glow — lower-right depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 100% 100%, rgba(244,122,90,0.13) 0%, transparent 65%), " +
            "radial-gradient(ellipse 55% 50% at 0% 0%, rgba(247,241,231,0.03) 0%, transparent 55%)",
        }}
      />

      {/* Floating sticker accents — desktop only */}
      <StickerAccent
        src="/cocos/cocos-sparkles-sticker-navy-coral.png"
        size={82}
        rotate={-5}
        opacity={0.7}
        className="top-10 right-[4%] hidden xl:block"
        delay={0.2}
      />
      <StickerAccent
        src="/cocos/cocos-coffee-beans-sticker-navy-coral.png"
        size={76}
        rotate={7}
        opacity={0.62}
        className="bottom-10 right-[7%] hidden xl:block"
        delay={0.45}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-20 items-center">

          {/* Left: text panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.div variants={fadeUp}>
              <Label>Sticker System</Label>
            </motion.div>

            <motion.h2
              className="font-display font-bold text-[#F7F1E7] leading-[1.08] tracking-[-0.015em] mt-4 mb-4 md:mt-5 md:mb-6"
              style={{ fontSize: "clamp(34px,3.8vw,52px)" }}
              variants={fadeUp}
            >
              A little brand world<br className="hidden md:block" /> customers can collect.
            </motion.h2>

            <motion.p
              className="font-sans text-[#F7F1E7] text-[15px] md:text-[16px] leading-[1.65] md:leading-[1.82] mb-5 md:mb-8 max-w-lg"
              style={{ opacity: 0.85 }}
              variants={fadeUp}
            >
              The Coco&rsquo;s sticker system extends the mascot, coffee cues, Tampa sunshine,
              and hand-drawn brand language into cups, packaging, social content, loyalty
              moments, and launch materials.
            </motion.p>

            <motion.div
              className="w-14 h-[2px] bg-[#F47A5A] rounded-full mb-5 md:mb-8"
              variants={fadeUp}
            />

            {/* Mobile: editorial application line */}
            <motion.div
              className="md:hidden flex flex-wrap gap-x-3 gap-y-1.5"
              style={{ opacity: 0.88 }}
              variants={fadeUp}
            >
              {applications.map((app, i) => (
                <span key={app} className="font-sans text-[11px] font-bold tracking-[0.14em] uppercase text-[#F7F1E7]">
                  {app}{i < applications.length - 1 && <span className="text-[#F47A5A] ml-1">·</span>}
                </span>
              ))}
            </motion.div>

            {/* Desktop: pill tags */}
            <motion.div className="hidden md:flex flex-wrap gap-2.5" variants={fadeUp}>
              {applications.map((app) => (
                <motion.span
                  key={app}
                  className="inline-block font-sans text-[11.5px] font-bold tracking-[0.06em] px-4 py-2 rounded-full"
                  style={{
                    background: "rgba(244,122,90,0.16)",
                    border: "1.5px solid rgba(244,122,90,0.38)",
                    color: "#F7F1E7",
                  }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.18, ease }}
                >
                  {app}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: sticker pack feature image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease }}
          >
            <motion.div
              className="relative"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.45, ease }}
            >
              {/* Coral accent stripe — left edge, desktop */}
              <div className="absolute -left-6 top-12 bottom-12 w-[3px] bg-[#F47A5A] rounded-full hidden lg:block" />

              {/* Coral scaleX reveal rule */}
              <motion.div
                className="h-[2.5px] bg-[#F47A5A] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left" }}
                transition={{ duration: 0.75, ease }}
              />

              {/* Image card */}
              <div
                className="relative rounded-b-[28px] overflow-hidden"
                style={{
                  background: "#EDE3D4",
                  border: "1.5px solid rgba(244,122,90,0.28)",
                  borderTop: "none",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.20), 0 6px 20px rgba(0,0,0,0.12)",
                }}
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/cocos/cocos-sticker-pack-cafe-scene-navy-coral.png"
                    alt="Coco's Coffee sticker pack — hand-drawn cafe scene with brand stickers"
                    fill
                    className="object-contain p-3 md:p-8"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </div>

              {/* Coral corner dot */}
              <div className="absolute -bottom-3 -right-3 w-[18px] h-[18px] rounded-full bg-[#F47A5A] opacity-55" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ColorPalette() {
  const chips = [
    { name: "Coconut Cream",  hex: "#F7F1E7", cream: true,  short: "Coconut"  },
    { name: "Espresso Brown", hex: "#4A2E24", cream: false, short: "Espresso" },
    { name: "Coral Foam",     hex: "#F47A5A", cream: false, short: "Coral"    },
    { name: "Deep Navy",      hex: "#223A70", cream: false, short: "Navy"     },
    { name: "Tampa Sun",      hex: "#FFC94A", cream: false, short: "Sun"      },
  ];

  return (
    <section className="relative pt-14 pb-20 md:py-28 px-5 md:px-8 bg-[#F47A5A] overflow-hidden">

      {/* Moka pot sticker — upper-right accent */}
      <StickerAccent
        src="/cocos/cocos-moka-pot-sticker-navy-cream.png"
        size={94}
        rotate={-4}
        opacity={0.70}
        className="top-10 right-[5%] hidden xl:block"
        delay={0.3}
      />

      {/* Coral glow — right side, behind image */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 90% 50%, rgba(34,58,112,0.12) 0%, transparent 65%)",
        }}
      />
      {/* Faint navy wash — upper-left */}
      <div
        className="absolute left-0 top-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 0% 0%, rgba(34,58,112,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-6 lg:gap-20 items-center">

          {/* ── Left: text + chips ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.span
              className="block font-sans text-[11px] font-bold tracking-[0.22em] uppercase text-[#223A70] mb-4"
              variants={fadeUp}
            >
              Color Palette
            </motion.span>

            <motion.h2
              className="font-display font-bold text-[#223A70] leading-[1.08] tracking-[-0.015em] mb-3 md:mb-4"
              style={{ fontSize: "clamp(34px,4.5vw,58px)" }}
              variants={fadeUp}
            >
              Warm Florida flavor.
            </motion.h2>

            {/* Pull quote */}
            <motion.p
              className="font-display italic text-[#223A70] text-[17px] md:text-[18px] leading-[1.55] mb-3 md:mb-5"
              variants={fadeUp}
            >
              Color built for sunshine, signage, and repeat recognition.
            </motion.p>

            <motion.p
              className="font-sans text-[15px] text-[#223A70] leading-[1.6] md:leading-[1.75] max-w-md mb-4 md:mb-7"
              variants={fadeUp}
            >
              A warm, coastal palette built for packaging, signage, and everyday
              brand moments that feel recognizable from the very first visit.
            </motion.p>

            <motion.div
              className="w-10 h-[2px] bg-[#223A70] rounded-full mb-4 md:mb-8"
              variants={fadeUp}
            />

            {/* Mobile: compact 5-column swatch grid */}
            <motion.div className="grid grid-cols-5 gap-2 md:hidden" variants={fadeUp}>
              {chips.map((chip) => (
                <div key={chip.name} className="flex flex-col items-center">
                  <div
                    className="w-full aspect-[2/3] rounded-xl mb-1"
                    style={{
                      background: chip.hex,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                      border: chip.cream ? "1.5px solid rgba(34,58,112,0.22)" : "none",
                    }}
                  />
                  <span className="font-sans font-bold text-[8px] text-[#223A70] text-center leading-tight">
                    {chip.short}
                  </span>
                  <span className="font-mono text-[7px] text-[#223A70] opacity-60 text-center">
                    {chip.hex}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Desktop: original chip list */}
            <div className="hidden md:block">
              {chips.map((chip) => (
                <motion.div
                  key={chip.name}
                  className="flex items-center gap-3 mb-2.5 cursor-default"
                  variants={fadeUp}
                  whileHover={{ x: 5 }}
                  transition={{ x: { duration: 0.2, ease }, y: { duration: 0.7, ease } }}
                >
                  <div
                    className="w-9 h-7 rounded-[6px] shrink-0"
                    style={{
                      background: chip.hex,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.13)",
                      border: chip.cream ? "1.5px solid rgba(34,58,112,0.20)" : "none",
                    }}
                  />
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans font-bold text-[12.5px] text-[#223A70]">
                      {chip.name}
                    </span>
                    <span className="font-mono text-[10.5px] text-[#223A70]">
                      {chip.hex}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: palette image ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease }}
          >
            {/* Coral accent top line */}
            <div className="h-[2.5px] bg-[#223A70] rounded-full" />

            <motion.div
              className="rounded-b-[28px] overflow-hidden"
              style={{
                background: "#EDE3D4",
                border: "1px solid rgba(247,241,231,0.30)",
                borderTop: "none",
                boxShadow:
                  "0 32px 80px rgba(34,58,112,0.13), 0 6px 20px rgba(34,58,112,0.08)",
              }}
              whileHover={{ y: -8, boxShadow: "0 44px 100px rgba(34,58,112,0.18), 0 10px 28px rgba(34,58,112,0.10)" }}
              transition={{ duration: 0.45, ease }}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/cocos/cocos-color-palette-packaging-board.png"
                  alt="Coco's Coffee color palette — packaging board"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </motion.div>

            {/* Coral corner dot */}
            <div className="absolute -bottom-3 -right-3 w-[16px] h-[16px] rounded-full bg-[#223A70] opacity-60" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
// ─── 11 · Cups & Packaging ────────────────────────────────────────────────────

function CupsPackaging() {
  const applications = ["Hot Cups", "Iced Cups", "Sleeves", "Stickers", "Loyalty", "Merch"];

  return (
    <section className="relative py-20 md:py-28 px-5 md:px-8 bg-[#223A70] overflow-hidden">

      {/* Sparkles accent — lower-right, desktop only */}
      <StickerAccent
        src="/cocos/cocos-sparkles-sticker-navy-coral.png"
        size={58}
        rotate={14}
        opacity={0.62}
        className="bottom-10 right-6 hidden xl:block"
        delay={0.5}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <Reveal>
          <Label>Cups & Packaging</Label>
          <Heading light className="mb-4">The cup becomes the billboard.</Heading>
          <p
            className="font-sans text-[14px] md:text-[15px] text-[#F7F1E7] mb-10 max-w-lg leading-relaxed"
            style={{ opacity: 0.68 }}
          >
            The packaging system carries the mascot, rounded typography, and warm coffee palette into every customer touchpoint.
          </p>
        </Reveal>

        {/* Featured cup mockup */}
        <Reveal>
          <div
            className="rounded-3xl overflow-hidden mb-5"
            style={{
              border: "1.5px solid rgba(244,122,90,0.5)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.38), 0 2px 8px rgba(244,122,90,0.12)",
            }}
          >
            <div className="relative w-full aspect-video bg-[#F7F1E7]">
              <Image
                src="/cocos/cocos-cup-mockup-coral-mascot-palm.png"
                alt="Coco's Coffee cup system — coral mascot palm motif"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </div>
        </Reveal>

        {/* Application strip — clean labels, no boxes */}
        <Reveal delay={0.1}>
          <div className="pt-5 border-t border-[#F47A5A]/25 text-center">
            <p className="font-sans text-[10px] md:text-[11px] font-bold tracking-[0.28em] uppercase flex flex-wrap justify-center gap-y-2.5">
              {applications.map((item, i) => (
                <span key={item} className="inline-flex items-center whitespace-nowrap">
                  {i > 0 && (
                    <span className="text-[#F47A5A] mx-2.5 md:mx-3">&middot;</span>
                  )}
                  <span className="text-[#F7F1E7]" style={{ opacity: 0.65 }}>
                    {item.toUpperCase()}
                  </span>
                </span>
              ))}
            </p>
            <p
              className="font-sans text-[11px] md:text-[12px] text-[#F7F1E7] mt-4 max-w-[560px] mx-auto leading-[1.7]"
              style={{ opacity: 0.42 }}
            >
              Designed to scale across every customer touchpoint — from cups and sleeves to loyalty, merch, signage, and launch materials.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}


// ─── 12 · Final CTA ───────────────────────────────────────────────────────────

function FinalCTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleApprove = async () => {
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xlgyjkbw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          project: "Coco's Coffee Brand Direction",
          action: "Approved direction",
          message: "Client approved the Coco's Coffee brand direction.",
          source: "Website approval button",
          timestamp: new Date().toISOString(),
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const refineHref =
    "mailto:blakedriskell@gmail.com?subject=Coco%E2%80%99s%20Coffee%20Refinement%20Request&body=Hi%20Blake%2C%0A%0AI%E2%80%99d%20like%20to%20request%20a%20few%20refinements%20to%20the%20Coco%E2%80%99s%20Coffee%20brand%20direction.%0A%0AHere%20are%20my%20notes%3A%0A";

  return (
    <section
      id="launch"
      className="relative py-32 md:py-40 px-5 md:px-8 bg-[#F47A5A] overflow-hidden"
    >

      {/* Ghosted mascot — upper-left watermark */}
      <div
        aria-hidden
        className="absolute pointer-events-none select-none"
        style={{ width: 540, height: 540, top: -180, left: -140 }}
      >
        <Image
          src="/cocos/cocos-mascot-cold-drink-navy.png"
          alt=""
          fill
          className="object-contain"
          style={{ opacity: 0.07, mixBlendMode: "multiply" }}
          sizes="540px"
        />
      </div>

      {/* Ghosted espresso machine — lower-right watermark */}
      <div
        aria-hidden
        className="absolute pointer-events-none select-none"
        style={{ width: 500, height: 500, bottom: -160, right: -140 }}
      >
        <Image
          src="/cocos/cocos-espresso-machine-sticker-navy-coral.png"
          alt=""
          fill
          className="object-contain"
          style={{ opacity: 0.065, mixBlendMode: "multiply" }}
          sizes="500px"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Reveal>
          <span className="block font-sans text-[11px] font-bold tracking-[0.22em] uppercase mb-4 text-[#223A70]">
            One Focused Direction
          </span>
          <h2
            className="font-display font-extrabold text-[#223A70] leading-[1.07] tracking-[-0.015em] mb-8"
            style={{ fontSize: "clamp(40px,8vw,96px)" }}
          >
            One focused
            <br />
            direction.
          </h2>
          <p className="text-[#223A70] text-[16px] md:text-[18px] max-w-2xl mx-auto mb-12 leading-[1.75]">
            Instead of disconnected logo options, this direction builds
            Coco&rsquo;s as a complete, launch-ready brand system — built for
            signage, cups, menus, social content, merchandise, and the daily
            coffee trailer experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary — Approve via Formspree */}
            <button
              onClick={handleApprove}
              disabled={status === "sending" || status === "success"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[15px] text-[#F7F1E7] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F1E7]/60 disabled:cursor-not-allowed disabled:opacity-75 disabled:translate-y-0"
              style={{
                backgroundColor: "#223A70",
                boxShadow: "0 4px 16px rgba(34,58,112,0.28)",
              }}
            >
              <Check size={16} strokeWidth={2.5} />
              {status === "sending" && "Sending…"}
              {status === "success" && "Direction approved"}
              {(status === "idle" || status === "error") && "Approve this direction"}
            </button>

            {/* Secondary — Request refinements via mailto */}
            <a
              href={refineHref}
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-[15px] text-[#223A70] border border-[#223A70]/35 cursor-pointer transition-all duration-200 hover:border-[#223A70]/65 hover:bg-[#223A70]/[0.08] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#223A70]/40"
            >
              Request refinements
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Inline status feedback */}
          {status === "success" && (
            <p
              className="mt-5 font-sans text-[13px] text-[#223A70] leading-relaxed"
              style={{ opacity: 0.82 }}
            >
              Thanks — your approval was received. Blake will follow up with next steps.
            </p>
          )}
          {status === "error" && (
            <p
              className="mt-5 font-sans text-[13px] text-[#223A70] leading-relaxed"
              style={{ opacity: 0.82 }}
            >
              Something went wrong. Please email Blake directly.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}


// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#223A70] border-t border-white/[0.07] py-7 px-5 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-display font-semibold text-[15px] text-[#F7F1E7]">
          Coco&rsquo;s Coffee
        </span>
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-5 text-[12px] text-[#F7F1E7]/55 text-center">
          <span>Brand Portal · Prepared for client review</span>
          <span className="hidden sm:block text-[#F7F1E7]/30">·</span>
          <span>Brand direction by Blake Driskell</span>
        </div>
      </div>
    </footer>
  );
}
