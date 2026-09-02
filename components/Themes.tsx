"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { themes } from "@/data/themes";

const researchUrl = "https://www.puls.nat.fau.de/category/research/";
const slideIntervalMs = 8000;

function ThemeIcon({ index }: { index: number }) {
  const styles = [
    "from-[#dfeaff] to-white",
    "from-[#f3e7ff] to-white",
    "from-[#e0f3ef] to-white",
    "from-[#eae9ff] to-white"
  ];

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${styles[index]} shadow-sm`}
    >
      <div className="h-6 w-6 rounded-full border border-ink/15 bg-white/90" />
    </div>
  );
}

function ThemeCard({
  theme,
  index
}: {
  theme: (typeof themes)[number];
  index: number;
}) {
  const [active, setActive] = useState(0);
  const slideCount = theme.images.length;

  useEffect(() => {
    if (slideCount <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slideCount);
    }, slideIntervalMs);

    return () => window.clearInterval(timer);
  }, [slideCount]);

  return (
    <motion.a
      href={researchUrl}
      target="_blank"
      rel="noreferrer"
      className="glass-panel group block rounded-[2rem] p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: "easeOut"
      }}
    >
      <div className="relative mb-6 overflow-hidden rounded-[1.5rem]">
        <div className="relative aspect-[4/3] bg-ink/5">
          {theme.images.map((image, imageIndex) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              aria-hidden={imageIndex !== active}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className={`${image.imageClassName} transition-all duration-1000 group-hover:scale-[1.03] ${
                imageIndex === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-white/10" />
        </div>
        <div className="absolute left-4 top-4">
          <ThemeIcon index={index} />
        </div>
      </div>
      <p className="min-h-8 text-xs leading-4 text-ink/55">
        {theme.images[active].caption}
      </p>
      <h3 className="mt-3 text-xl">{theme.title}</h3>
      <p className="mt-3 text-sm text-ink/68">{theme.copy}</p>
    </motion.a>
  );
}

export default function Themes() {
  return (
    <section id="themes" className="relative">
      <div className="section-shell">
        <p className="section-eyebrow">Scientific Themes</p>
        <h2 className="section-title">Three focal interdisciplinary fields</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {themes.map((theme, index) => (
            <ThemeCard key={theme.title} theme={theme} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
