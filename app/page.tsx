"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  Sun,
  Star,
  Sparkles,
  Check,
  ArrowRight,
  Menu,
  Package,
  CupSoda,
  Car,
  Award,
  Zap,
  Circle,
} from "lucide-react";

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

// ─── Shared UI ────────────────────────────────────────────────────────────────

function Label({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`block text-[11px] font-bold tracking-[0.22em] uppercase mb-4 ${
        light ? "text-[#FFC94A]" : "text-[#FF765C]"
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
      className={`font-display font-black leading-[1.04] tracking-tight text-[clamp(36px,5.5vw,64px)] ${
        light ? "text-white" : "text-[#3A2416]"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-[#F8F1E7] text-[#3A2416] overflow-x-hidden">
      <Header />
      <Hero />
      <BrandStrategy />
      <LogoSystem />
      <MascotSystem />
      <ColorPalette />
      <Typography />
      <DriveThruSignage />
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
    <header className="sticky top-0 z-50 bg-[#F8F1E7]/90 backdrop-blur-lg border-b border-[#3A2416]/[0.07]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[60px] flex items-center justify-between gap-8">
        <span className="font-display font-bold text-[17px] tracking-tight shrink-0">
          Coco&rsquo;s Coffee
        </span>

        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#3A2416]/50">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#3A2416] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="hidden md:flex items-center gap-1.5 bg-[#FF765C] hover:bg-[#e8664e] active:scale-95 text-white px-4 py-2 rounded-full text-[13px] font-semibold transition-all shrink-0">
          <Check size={12} strokeWidth={3} />
          Approve Direction
        </button>

        <button className="md:hidden p-1 text-[#3A2416]/60 hover:text-[#3A2416]">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

// ─── 2 · Hero ─────────────────────────────────────────────────────────────────

function Hero() {
  const tags = [
    "Tampa, Florida",
    "Drive-Thru Coffee",
    "Cold Foam",
    "Matcha",
    "3-Ingredient Syrups",
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center px-5 md:px-8 pt-8 pb-24 overflow-hidden">
      {/* Background sun shape */}
      <div
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-[38%] w-[580px] h-[580px] rounded-full bg-[#FFC94A]"
      />
      <div
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-[42%] w-[760px] h-[760px] rounded-full bg-[#FFC94A]/25 blur-3xl"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Label>Brand Portal · Tampa, FL</Label>
            </motion.div>

            <motion.h1
              className="font-display font-black text-[#3A2416] leading-[0.92] tracking-tight mb-5"
              style={{ fontSize: "clamp(56px,10.5vw,116px)" }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease }}
            >
              Coco&rsquo;s
              <br />
              Coffee
            </motion.h1>

            <motion.p
              className="font-display italic text-[#3A2416]/55 mb-5"
              style={{ fontSize: "clamp(18px,2.8vw,30px)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              Sunshine in the Drive-Thru
            </motion.p>

            <motion.p
              className="text-[15px] md:text-[17px] text-[#3A2416]/50 max-w-[480px] mb-9 leading-[1.75]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26 }}
            >
              A warm, playful brand world for a Tampa drive-thru serving premium
              coffee, matcha, tea, specialty cold foam, and clean 3-ingredient
              syrups.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-[#3A2416]/15 text-[13px] font-medium text-[#3A2416]/55 bg-white/50"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Mascot placeholder */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.28, ease }}
          >
            <div className="relative w-[300px] h-[300px]">
              <div className="absolute inset-0 rounded-full border-2 border-[#3A2416]/12" />
              <div className="absolute inset-5 rounded-full border border-[#3A2416]/8" />
              <div className="absolute inset-[52px] rounded-full bg-white/40 backdrop-blur-sm flex flex-col items-center justify-center gap-2">
                <Coffee size={34} strokeWidth={1.2} className="text-[#3A2416]/22" />
                <p className="text-[10px] font-bold text-[#3A2416]/30 tracking-[0.18em] uppercase text-center leading-snug">
                  Coco
                  <br />
                  Mascot
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 3 · Brand Strategy ───────────────────────────────────────────────────────

function BrandStrategy() {
  const cards = [
    { label: "Fast", icon: Zap, bg: "#FFC94A", fg: "#3A2416" },
    { label: "Warm", icon: Sun, bg: "#FF765C", fg: "#fff" },
    { label: "Premium", icon: Award, bg: "#3A2416", fg: "#fff" },
    { label: "Playful", icon: Star, bg: "#8FAE75", fg: "#fff" },
    { label: "Recognizable", icon: Sparkles, bg: "#FFC94A", fg: "#3A2416" },
    { label: "Drive-thru ready", icon: Car, bg: "#173465", fg: "#fff" },
  ];

  return (
    <section id="strategy" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Label>Brand Strategy</Label>
          <Heading className="mb-5">Built for the daily stop.</Heading>
          <p className="text-[15px] md:text-[17px] text-[#3A2416]/50 max-w-xl mb-16 leading-[1.75]">
            Coco&rsquo;s needs to work beyond a logo. This system is designed for the
            real drive-thru experience — signage, cups, menus, stickers, social
            posts, uniforms, and launch materials.
          </p>
        </Reveal>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {cards.map(({ label, icon: Icon, bg, fg }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-3 p-4 text-center cursor-default hover:scale-[1.03] transition-transform duration-300"
              style={{ backgroundColor: bg, color: fg }}
            >
              <Icon size={26} strokeWidth={1.5} />
              <span className="text-[13px] font-bold leading-tight">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4 · Logo System ──────────────────────────────────────────────────────────

function LogoSystem() {
  const logos = [
    { label: "Primary Logo", sub: "Full stacked lockup", icon: Coffee },
    { label: "Horizontal Logo", sub: "Wide-format lockup", icon: Coffee },
    { label: "Mascot Icon", sub: "Standalone character", icon: Star },
    { label: "Circle Badge", sub: "Stamp / seal format", icon: Circle },
    { label: "One-Color Mark", sub: "Monotone version", icon: Sparkles },
    { label: "Social Avatar", sub: "1:1 square format", icon: Award },
  ];

  return (
    <section id="logo" className="py-24 md:py-32 px-5 md:px-8 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Label>Logo System</Label>
          <Heading className="mb-4">A mark for every touchpoint.</Heading>
          <p className="text-[14px] text-[#3A2416]/38 mb-16 max-w-lg leading-relaxed">
            Final logo artwork will replace these cards. The system covers every
            surface — digital, print, signage, and packaging.
          </p>
        </Reveal>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {logos.map(({ label, sub, icon: Icon }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="aspect-[4/3] bg-[#F8F1E7] rounded-2xl border border-[#3A2416]/[0.07] flex flex-col items-center justify-center gap-3 group hover:border-[#3A2416]/15 hover:shadow-md transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#3A2416]/[0.05] group-hover:bg-[#3A2416]/[0.09] flex items-center justify-center transition-colors duration-300">
                <Icon size={22} strokeWidth={1.4} className="text-[#3A2416]/25" />
              </div>
              <div className="text-center">
                <p className="text-[13px] font-semibold text-[#3A2416]/55">{label}</p>
                <p className="text-[11px] text-[#3A2416]/28 mt-0.5">{sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 5 · Mascot System ────────────────────────────────────────────────────────

function MascotSystem() {
  const poses: { label: string; bg: string }[] = [
    { label: "Coco waving", bg: "rgba(255,201,74,0.18)" },
    { label: "Coco with iced coffee", bg: "rgba(255,118,92,0.13)" },
    { label: "Coco with matcha", bg: "rgba(143,174,117,0.2)" },
    { label: "Coco with cold foam", bg: "rgba(255,253,247,0.9)" },
    { label: "Coco in sunglasses", bg: "rgba(255,201,74,0.13)" },
    { label: "Coco at the drive-thru", bg: "rgba(23,52,101,0.07)" },
  ];

  return (
    <section id="mascot" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Label>Mascot System</Label>
          <Heading className="mb-4">Coco is the memory hook.</Heading>
          <p className="text-[15px] md:text-[17px] text-[#3A2416]/50 max-w-2xl mb-16 leading-[1.75]">
            The coconut character gives the brand warmth and recognizability
            while keeping the identity playful, friendly, and ownable.
          </p>
        </Reveal>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {poses.map(({ label, bg }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="aspect-square rounded-3xl border border-[#3A2416]/[0.06] flex flex-col items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-md transition-all duration-300 cursor-default"
              style={{ backgroundColor: bg }}
            >
              <div className="w-[72px] h-[72px] rounded-full bg-white/50 flex items-center justify-center">
                <Coffee size={28} strokeWidth={1.2} className="text-[#3A2416]/22" />
              </div>
              <div className="text-center px-6">
                <p className="text-[13px] font-semibold text-[#3A2416]/48">{label}</p>
                <p className="text-[10px] text-[#3A2416]/22 mt-1 tracking-wide">
                  Illustration coming soon
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 6 · Color Palette ────────────────────────────────────────────────────────

function ColorPalette() {
  const swatches = [
    { name: "Coconut Cream", hex: "#F8F1E7", hasBorder: true },
    { name: "Espresso Brown", hex: "#3A2416" },
    { name: "Tampa Sun", hex: "#FFC94A" },
    { name: "Coral Foam", hex: "#FF765C" },
    { name: "Matcha Green", hex: "#8FAE75" },
    { name: "Cold Foam", hex: "#FFFDF7", hasBorder: true },
    { name: "Deep Navy", hex: "#173465" },
  ];

  return (
    <section className="py-24 md:py-32 px-5 md:px-8 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Label>Color Palette</Label>
          <Heading className="mb-16">Warm Florida flavor.</Heading>
        </Reveal>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {swatches.map(({ name, hex, hasBorder }) => (
            <motion.div key={name} variants={fadeUp} className="flex flex-col gap-3">
              <div
                className="aspect-square rounded-2xl shadow-sm"
                style={{
                  backgroundColor: hex,
                  border: hasBorder ? "1px solid rgba(58,36,22,0.13)" : undefined,
                }}
              />
              <div>
                <p className="text-[13px] font-semibold text-[#3A2416] leading-snug">
                  {name}
                </p>
                <p className="text-[11px] text-[#3A2416]/32 font-mono mt-0.5">{hex}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 7 · Typography ───────────────────────────────────────────────────────────

function Typography() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Label>Typography</Label>
          <Heading className="mb-16">
            Friendly headlines.
            <br />
            Clean ordering.
          </Heading>
        </Reveal>

        <div className="space-y-0">
          <Reveal>
            <div className="py-9 border-t border-[#3A2416]/[0.08]">
              <p className="text-[10px] text-[#3A2416]/22 uppercase tracking-[0.2em] mb-4 font-semibold">
                Display — Hero
              </p>
              <p
                className="font-display font-black text-[#3A2416] leading-none tracking-tight"
                style={{ fontSize: "clamp(38px,7.5vw,88px)" }}
              >
                Coconut Cold Brew
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="py-9 border-t border-[#3A2416]/[0.08]">
              <p className="text-[10px] text-[#3A2416]/22 uppercase tracking-[0.2em] mb-4 font-semibold">
                Heading — Italic
              </p>
              <p
                className="font-display font-bold italic text-[#3A2416]/70 leading-tight"
                style={{ fontSize: "clamp(26px,4.5vw,54px)" }}
              >
                Matcha Cloud
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="py-9 border-t border-[#3A2416]/[0.08]">
              <p className="text-[10px] text-[#3A2416]/22 uppercase tracking-[0.2em] mb-4 font-semibold">
                Subheading
              </p>
              <p
                className="font-display font-semibold text-[#3A2416]"
                style={{ fontSize: "clamp(20px,3vw,34px)" }}
              >
                Vanilla Cold Foam
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="py-9 border-t border-[#3A2416]/[0.08] grid md:grid-cols-3 gap-8 md:gap-12">
              <div>
                <p className="text-[10px] text-[#3A2416]/22 uppercase tracking-[0.2em] mb-4 font-semibold">
                  Menu Category
                </p>
                <p className="text-[14px] font-bold tracking-[0.12em] uppercase text-[#3A2416]">
                  Drive-Thru Coffee
                </p>
              </div>
              <div>
                <p className="text-[10px] text-[#3A2416]/22 uppercase tracking-[0.2em] mb-4 font-semibold">
                  Menu Item
                </p>
                <p className="text-[15px] font-medium text-[#3A2416]">
                  Honey Vanilla Latte
                </p>
                <p className="text-[13px] text-[#3A2416]/38 mt-1">
                  Oat milk · Brown sugar · Vanilla
                </p>
              </div>
              <div>
                <p className="text-[10px] text-[#3A2416]/22 uppercase tracking-[0.2em] mb-4 font-semibold">
                  Body Copy
                </p>
                <p className="text-[14px] text-[#3A2416]/50 leading-[1.75]">
                  Premium coffee, matcha, and cold foam served daily. Warm, fast,
                  and made right every time.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="py-9 border-t border-b border-[#3A2416]/[0.08]">
              <p className="text-[10px] text-[#3A2416]/22 uppercase tracking-[0.2em] mb-4 font-semibold">
                Label / Tag
              </p>
              <div className="flex flex-wrap gap-5 items-center">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF765C]">
                  Cold Foam
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8FAE75]">
                  Matcha
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FFC94A]">
                  Tampa Sun
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#3A2416]/28">
                  Seasonal
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── 8 · Drive-Thru Signage ───────────────────────────────────────────────────

function DriveThruSignage() {
  return (
    <section id="mockups" className="py-24 md:py-32 px-5 md:px-8 bg-[#173465]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Label light>Drive-Thru Signage</Label>
          <Heading light className="mb-4">
            Designed for the
            <br />
            real drive-thru.
          </Heading>
          <p className="text-white/38 mb-14 max-w-md text-[15px] leading-relaxed">
            The most important sales touchpoint. The brand must read instantly at
            15&thinsp;mph from inside a car.
          </p>
        </Reveal>

        <Reveal>
          <div className="relative rounded-3xl overflow-hidden bg-[#3A2416] w-full aspect-[16/9] md:aspect-[21/9]">
            {/* Decorative sun rings */}
            <div
              aria-hidden
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 520,
                height: 520,
                right: -170,
                top: -170,
                background: "rgba(255,201,74,0.1)",
              }}
            />
            <div
              aria-hidden
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 300,
                height: 300,
                right: -60,
                top: -60,
                background: "rgba(255,201,74,0.16)",
              }}
            />

            {/* Sign content */}
            <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 lg:px-24">
              <div className="flex items-center gap-2.5 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#FFC94A" }}
                >
                  <Coffee size={14} strokeWidth={2} style={{ color: "#3A2416" }} />
                </div>
                <span className="text-white/28 text-[10px] tracking-[0.22em] uppercase font-semibold">
                  Drive-Thru Experience
                </span>
              </div>

              <h3
                className="font-display font-black text-white leading-none tracking-tight mb-3"
                style={{ fontSize: "clamp(34px,6.5vw,84px)" }}
              >
                COCO&rsquo;S
                <br />
                COFFEE
              </h3>

              <p
                className="font-display italic mb-7"
                style={{
                  color: "#FFC94A",
                  fontSize: "clamp(14px,2.2vw,24px)",
                }}
              >
                Sunshine in the Drive-Thru
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12px] md:text-[13px]">
                <span className="flex items-center gap-1.5 text-white/60">
                  <ArrowRight size={12} />
                  Order Here
                </span>
                <span className="text-white/15">·</span>
                <span className="text-white/35">Premium Coffee</span>
                <span className="text-white/15">·</span>
                <span className="text-white/35">Matcha</span>
                <span className="text-white/15">·</span>
                <span className="text-white/35">Cold Foam</span>
              </div>
            </div>

            <p className="absolute bottom-4 right-5 text-white/12 text-[9px] font-mono uppercase tracking-widest">
              /public/cocos/drive-thru.jpg
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── 9 · Cups & Packaging ─────────────────────────────────────────────────────

function CupsPackaging() {
  const items = [
    { label: "Hot Cup", sub: "12 · 16 · 20 oz", icon: Coffee, bg: "rgba(255,201,74,0.18)" },
    { label: "Iced Cup", sub: "16 · 24 oz", icon: CupSoda, bg: "rgba(255,118,92,0.13)" },
    { label: "Cup Sleeve", sub: "Universal fit", icon: Package, bg: "rgba(58,36,22,0.07)" },
    { label: "Sticker Sheet", sub: "8-up sheet", icon: Sparkles, bg: "rgba(143,174,117,0.2)" },
    { label: "Loyalty Card", sub: "10-punch card", icon: Star, bg: "rgba(255,201,74,0.22)" },
    { label: "Tote / Apron", sub: "Merch items", icon: Award, bg: "rgba(23,52,101,0.08)" },
  ];

  return (
    <section className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Label>Cups & Packaging</Label>
          <Heading className="mb-4">The cup becomes the billboard.</Heading>
          <p className="text-[15px] text-[#3A2416]/48 mb-16 max-w-lg leading-relaxed">
            Every takeaway item is a moving impression. Final artwork will
            replace these placeholder cards.
          </p>
        </Reveal>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {items.map(({ label, sub, icon: Icon, bg }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="aspect-[3/4] rounded-2xl flex flex-col items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-md transition-all duration-300 cursor-default border border-[#3A2416]/[0.05]"
              style={{ backgroundColor: bg }}
            >
              <div className="w-14 h-14 rounded-full bg-white/50 flex items-center justify-center">
                <Icon size={22} strokeWidth={1.4} className="text-[#3A2416]/40" />
              </div>
              <div className="text-center px-3">
                <p className="text-[13px] font-semibold text-[#3A2416]/55">{label}</p>
                <p className="text-[11px] text-[#3A2416]/28 mt-0.5">{sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 10 · Final CTA ───────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section id="launch" className="relative py-32 md:py-40 px-5 md:px-8 bg-[#3A2416] overflow-hidden">
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 580,
          height: 580,
          right: -200,
          bottom: -200,
          background: "rgba(255,201,74,0.08)",
        }}
      />
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 420,
          height: 420,
          left: -160,
          top: -160,
          background: "rgba(255,118,92,0.07)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Reveal>
          <Label light>One Focused Direction</Label>
          <h2
            className="font-display font-black text-white leading-[1.0] tracking-tight mb-8"
            style={{ fontSize: "clamp(40px,8vw,96px)" }}
          >
            One focused
            <br />
            direction.
          </h2>
          <p className="text-white/42 text-[16px] md:text-[18px] max-w-2xl mx-auto mb-12 leading-[1.75]">
            Instead of disconnected logo options, this direction builds
            Coco&rsquo;s as a complete, launch-ready brand system — built for
            signage, cups, menus, social content, merchandise, and the daily
            drive-thru experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[15px] text-[#3A2416] hover:scale-[1.03] active:scale-[0.98] transition-transform"
              style={{ backgroundColor: "#FFC94A" }}
            >
              <Check size={16} strokeWidth={2.5} />
              Approve this direction
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-[15px] text-white border border-white/15 hover:border-white/32 hover:bg-white/[0.04] transition-all">
              Request refinements
              <ArrowRight size={15} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#3A2416] border-t border-white/[0.07] py-7 px-5 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-display font-semibold text-[15px] text-white/45">
          Coco&rsquo;s Coffee
        </span>
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-5 text-[12px] text-white/22 text-center">
          <span>Brand Portal · Prepared for client review</span>
          <span className="hidden sm:block text-white/12">·</span>
          <span>Brand direction by Blake Driskell</span>
        </div>
      </div>
    </footer>
  );
}
