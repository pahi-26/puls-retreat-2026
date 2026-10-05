"use client";

import { motion } from "framer-motion";
import { speakers } from "@/data/people";

export default function Speakers() {
  return (
    <section id="speakers" className="relative">
      <div className="section-shell">
        <p className="section-eyebrow">Invited speakers</p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="glass-panel mt-8 rounded-[2rem] p-6 md:p-7"
        >
          <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-6 px-4 pb-3 text-xs uppercase tracking-[0.2em] text-ink/45 sm:grid">
            <p>Speaker</p>
            <p>Affiliation</p>
          </div>
          <div className="divide-y divide-ink/8 overflow-hidden rounded-2xl border border-white/70 bg-white/55">
            {speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="grid gap-1 px-4 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-6"
              >
                <p className="text-sm text-ink/80">{speaker.name}</p>
                <p className="text-sm text-ink/60">{speaker.affiliation}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
