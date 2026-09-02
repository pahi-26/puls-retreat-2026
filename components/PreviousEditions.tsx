"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { previousEditions } from "@/data/previous-editions";

export default function PreviousEditions() {
  return (
    <section id="previous-editions" className="relative">
      <div className="section-shell">
        <p className="section-eyebrow">Previous Editions</p>
        <h2 className="section-title">A growing workshop series with a shared scientific history.</h2>
        <p className="section-copy">
          This section can document the earlier meetings in the PULS workshop
          series and show how the scientific exchange has evolved across
          editions.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {previousEditions.map((edition, index) => (
            <motion.article
              key={edition.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="glass-panel group overflow-hidden rounded-[2rem] p-3"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-ink/5">
                <Image
                  src={edition.image}
                  alt={edition.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/38 via-transparent to-white/5" />
                <p className="absolute left-5 top-4 text-xs uppercase tracking-[0.28em] text-white/90">
                  {edition.year}
                </p>
              </div>
              <div className="px-3 pb-2 pt-5">
                <h3 className="text-2xl">{edition.title}</h3>
                <p className="mt-3 text-sm font-medium text-ink/72">
                  {edition.location}
                </p>
                <div className="mt-5 h-px bg-gradient-to-r from-ink/10 to-transparent" />
                <p className="mt-3 text-[11px] leading-4 text-ink/40">
                  {edition.credit}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
