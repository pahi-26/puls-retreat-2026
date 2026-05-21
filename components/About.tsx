"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-shell">
        <motion.div
          className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div>
            <p className="section-eyebrow">About the Retreat</p>
            <h2 className="section-title">A space for scientific depth, exchange, and future directions.</h2>
            <p className="section-copy">
              An interdisciplinary retreat bringing together researchers across
              physics, biophysics, and computational chemistry to foster
              scientific exchange, collaboration, and future directions in life
              sciences.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-panel rounded-[2rem] p-6"
            >
              <div className="relative h-48 overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/research/overlay7phalloid-betacat-nucl-63x.jpg"
                  alt="Fluorescence microscopy visual"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-white/10" />
              </div>
              <p className="mt-4 text-lg font-medium text-ink">Interdisciplinary Exchange</p>
              <p className="mt-2 text-sm text-ink/65">
                Thoughtful discussion across scales, methods, and communities.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-panel rounded-[2rem] p-6 md:translate-y-10"
            >
              <div className="relative h-48 overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/research/epithelial.png"
                  alt="Epithelial microscopy visual"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-white/10" />
              </div>
              <p className="mt-4 text-lg font-medium text-ink">Shared Scientific Atmosphere</p>
              <p className="mt-2 text-sm text-ink/65">
                Calm, focused, and designed for meaningful conversations.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
