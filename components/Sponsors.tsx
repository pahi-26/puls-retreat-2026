"use client";

// import Image from "next/image"; // re-enable when a portrait replaces the placeholder
import { motion } from "framer-motion";
import { organizers, supervisor } from "@/data/people";

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative">
      <div className="section-shell py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-[2rem] px-6 py-8 md:px-8"
        >
          <p className="section-eyebrow">Scientific Lead & Organizers</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <a
              href="https://www.puls.nat.fau.de/faudir/prof-dr-ana-suncana-smith/"
              target="_blank"
              rel="noreferrer"
              className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-white/80 via-[#f7f2ff] to-[#e8f5f3] p-6 shadow-glow transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-[radial-gradient(circle_at_22%_20%,_rgba(139,124,200,0.28),_transparent_24%),radial-gradient(circle_at_72%_30%,_rgba(106,166,161,0.24),_transparent_22%),linear-gradient(180deg,_rgba(249,244,255,0.96),_rgba(234,243,250,0.92)_45%,_rgba(255,255,255,0.82))] p-2 text-center">
                  <span className="text-[10px] uppercase leading-3 tracking-[0.18em] text-ink/48">
                    Portrait pending
                  </span>
                </div>
                <div>
                  <p className="section-eyebrow">Retreat Supervisor</p>
                  <h3 className="mt-2 text-2xl">{supervisor.name}</h3>
                </div>
              </div>
              <p className="mt-5 text-base text-ink/72">{supervisor.role}</p>
              <p className="mt-2 text-sm text-ink/60">{supervisor.affiliation}</p>
              <p className="mt-5 max-w-xl text-sm text-ink/68">
                Scientific lead of the retreat and the main academic host for the
                event.
              </p>
            </a>

            <div className="grid gap-4">
              {organizers.map((person) => (
                <div
                  key={person.name}
                  className="rounded-[1.75rem] border border-white/60 bg-white/60 p-5"
                >
                  <p className="section-eyebrow">Organizer</p>
                  <h3 className="mt-3 text-xl">{person.name}</h3>
                  <p className="mt-2 text-sm text-ink/70">{person.role}</p>
                  <p className="mt-1 text-sm text-ink/58">{person.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
