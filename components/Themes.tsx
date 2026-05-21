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
      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${styles[index]} shadow-sm`}
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
        <h2 className="section-title">Four focal strands for an immersive interdisciplinary programme.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {themes.map((theme, index) => (
            <motion.a
              key={theme.title}
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
                <div className="relative aspect-[4/3]">
                  <Image
                    src={theme.image}
                    alt={theme.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className={`${theme.imageClassName} transition duration-500 group-hover:scale-[1.03]`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-white/10" />
                </div>
                <div className="absolute left-4 top-4">
                  <ThemeIcon index={index} />
                </div>
              </div>
              <h3 className="mt-5 text-xl">{theme.title}</h3>
              <p className="mt-3 text-sm text-ink/68">{theme.copy}</p>
            </motion.a>
          ))}
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="glass-panel overflow-hidden rounded-[2rem] p-3"
          >
            <div className="relative aspect-[16/7] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/research/Picture3.png"
                alt="Protein-scale structural rendering"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center scale-[1.1]"
              />
              <div className="absolute inset-x-5 bottom-5 max-w-md rounded-2xl bg-white/80 px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/62">
                  Molecular Complexity
                </p>
                <p className="mt-2 text-lg font-semibold leading-7 text-ink/88">
                  Visualising structure, interaction, and scale across computational research.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="glass-panel overflow-hidden rounded-[2rem] p-3"
          >
            <div className="relative aspect-[16/7] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/research/Picture5.png"
                alt="Simulation environment rendering"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center scale-[0.96]"
              />
              <div className="absolute inset-x-5 bottom-5 ml-auto max-w-md rounded-2xl bg-white/82 px-4 py-4 text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/62">
                  Scientific Environments
                </p>
                <p className="mt-2 text-lg font-semibold leading-7 text-ink/88">
                  From cells to simulations, the workshop spans complementary ways of seeing living systems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
