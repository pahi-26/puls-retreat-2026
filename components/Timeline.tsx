"use client";

import { motion } from "framer-motion";
import { programme } from "@/data/programme";

export default function Timeline() {
  return (
    <section id="programme" className="relative">
      <div className="section-shell">
        <p className="section-eyebrow">Programme Timeline</p>
        <h2 className="section-title">Programme overview across the workshop dates.</h2>
        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-plum/10 via-plum/50 to-teal/30 md:left-1/2" />
          <div className="absolute left-4 top-0 h-full w-px origin-top animate-line-grow bg-gradient-to-b from-plum/30 via-plum to-teal md:left-1/2" />
          <div className="space-y-8">
            {programme.map((day, index) => (
              <motion.article
                key={day.date}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className={`relative grid gap-4 md:grid-cols-2 ${
                  index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="hidden md:block" />
                <div className="absolute left-4 top-8 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-white/90 bg-white shadow-[0_0_0_7px_rgba(255,255,255,0.45)] md:left-1/2" />
                <div className="pl-10 md:pl-0">
                  <div className="glass-panel rounded-[2rem] p-6 md:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-ink/55">
                        Day {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl">{day.date}</h3>
                    <div className="mt-5 divide-y divide-ink/8 overflow-hidden rounded-2xl border border-white/70 bg-white/55">
                      {day.sessions.map((session) => {
                        const isBreak = session.title === "Break" || session.title === "Lunch";
                        return (
                          <div
                            key={session.time}
                            className={`grid grid-cols-[5.75rem_1fr] gap-4 px-4 py-3 ${
                              isBreak
                                ? "bg-ink/[0.04] bg-[repeating-linear-gradient(135deg,rgba(23,37,84,0.05)_0_1px,transparent_1px_8px)]"
                                : ""
                            }`}
                          >
                            <p
                              className={`text-sm tabular-nums ${isBreak ? "text-ink/35" : "text-ink/55"}`}
                            >
                              {session.time}
                            </p>
                            <div>
                              <p className={`text-sm ${isBreak ? "text-ink/45" : "text-ink/80"}`}>
                                {session.title}
                              </p>
                              {session.detail && (
                                <p className={`mt-1 text-sm ${isBreak ? "text-ink/35" : "text-ink/60"}`}>
                                  {session.detail}
                                </p>
                              )}
                              {session.rooms?.map((room) => (
                                <p key={room.name} className="mt-1 text-sm text-ink/60">
                                  <span className="font-semibold text-ink/75">{room.name}</span>
                                  {" — "}
                                  {room.detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
