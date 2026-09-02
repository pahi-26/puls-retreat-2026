"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { themes } from "@/data/themes";

const researchUrl = "https://www.puls.nat.fau.de/category/research/";

function ThemeIcon({ index }: { index: number }) {
  const styles = [
    "from-[#dfeaff] to-white",
    "from-[#f3e7ff] to-white",
    "from-[#e0f3ef] to-white",
    "from-[#eae9ff] to-white"
  ];

  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${styles[index]} shadow-sm`}
    >
      <div className="h-6 w-6 rounded-full border border-ink/15 bg-white/90" />
    </div>
  );
}

export default function Themes() {
  return (
    <section id="themes" className="relative">
      <div className="section-shell">
        <p className="section-eyebrow">Scientific Themes</p>
        <h2 className="section-title">Three focal interdisciplinary fields</h2>
        <div className="mt-12 space-y-14">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex flex-wrap items-start gap-4">
                <ThemeIcon index={index} />
                <div className="min-w-[16rem] flex-1">
                  <h3 className="text-xl sm:text-2xl">{theme.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm text-ink/68">
                    {theme.copy}
                  </p>
                </div>
                <a
                  href={researchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 shrink-0 text-xs uppercase tracking-[0.24em] text-ink/55 transition hover:text-ink"
                >
                  Research &rarr;
                </a>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {theme.images.map((image, imageIndex) => (
                  <motion.figure
                    key={image.src}
                    className="glass-panel group overflow-hidden rounded-[1.75rem] p-2"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: imageIndex * 0.07,
                      ease: "easeOut"
                    }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-ink/5">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 400px"
                        className={`${image.imageClassName} transition duration-500 group-hover:scale-[1.03]`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-white/5" />
                    </div>
                    <figcaption className="px-2 pb-1 pt-3 text-xs leading-5 text-ink/62">
                      {image.caption}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
