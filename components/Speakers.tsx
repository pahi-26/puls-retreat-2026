"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { speakers } from "@/data/people";

function SpeakerCard({
  name,
  affiliation,
  topic,
  image
}: (typeof speakers)[number]) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="glass-panel overflow-hidden rounded-[2rem]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`${name} portrait`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-end bg-[radial-gradient(circle_at_22%_20%,_rgba(139,124,200,0.28),_transparent_24%),radial-gradient(circle_at_72%_30%,_rgba(106,166,161,0.24),_transparent_22%),linear-gradient(180deg,_rgba(249,244,255,0.96),_rgba(234,243,250,0.92)_45%,_rgba(255,255,255,0.82))] p-6">
            <div className="rounded-3xl border border-white/70 bg-white/55 px-4 py-3 text-xs uppercase tracking-[0.24em] text-ink/48">
              Portrait pending
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="section-eyebrow">Speaker</p>
        <h3 className="mt-3 text-2xl">{name}</h3>
        <p className="mt-2 text-sm text-ink/65">{affiliation}</p>
        <p className="mt-5 text-sm text-ink/72">
          {topic || "Topic to be announced."}
        </p>
      </div>
    </motion.article>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="relative">
      <div className="section-shell">
        <p className="section-eyebrow">Speakers</p>
        <h2 className="section-title">Invited speakers and scientific contributors.</h2>
        <p className="section-copy">
          Speaker entries are now wired to editable people data, with room to add
          portraits, topics, and further contributors as the programme evolves.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <SpeakerCard {...speaker} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
