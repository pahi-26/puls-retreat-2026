"use client";

import Image from "next/image";
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
                <div className="flex min-h-16 min-w-16 items-center justify-center rounded-2xl border border-white/70 bg-white/80">
                  <Image
                    src="/images/research/PULSlogo.png"
                    alt="PULS logo"
                    width={122}
                    height={26}
                    className="h-auto w-[122px]"
                  />
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
