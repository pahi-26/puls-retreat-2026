"use client";

import { motion } from "framer-motion";
import { breakoutGroups, programme, talkFormats } from "@/data/programme";

export default function Timeline() {
  return (
    <section id="programme" className="relative">
      <div className="section-shell">
        <p className="section-eyebrow">Programme Timeline</p>
        <h2 className="section-title">Programme overview across the workshop dates.</h2>
        <div className="glass-panel mt-10 max-w-xl overflow-hidden rounded-2xl">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/60 text-ink/75">
              <tr>
                <th className="px-4 py-3 font-semibold">Type of talk</th>
                <th className="px-4 py-3 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/8 bg-white/40 text-ink/65">
              {talkFormats.map((format) => (
                <tr key={format.type}>
                  <td className="px-4 py-3">{format.type}</td>
                  <td className="px-4 py-3 tabular-nums">{format.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="glass-panel mt-6 max-w-xl rounded-2xl p-4">
          <p className="text-sm font-semibold text-ink/75">Breakout session groups</p>
          <dl className="mt-3 grid gap-2 sm:grid-cols-2">
            {breakoutGroups.map((group) => (
              <div key={group.code} className="flex items-center gap-3">
                <dt
                  className={`w-12 shrink-0 rounded-md border border-ink/10 py-0.5 text-center text-xs font-semibold tracking-wide text-ink/80 ${group.tint}`}
                >
                  {group.code}
                </dt>
                <dd className="text-sm text-ink/65">{group.name}</dd>
              </div>
            ))}
          </dl>
        </div>
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
                      {day.sessions.map((session) => (
                        <div
                          key={session.time}
                          className="grid grid-cols-[5.75rem_1fr] gap-4 px-4 py-3"
                        >
                          <p className="text-sm tabular-nums text-ink/55">{session.time}</p>
                          <div>
                            <p className="text-sm text-ink/80">{session.title}</p>
                            {session.detail && (
                              <p className="mt-1 text-sm text-ink/60">{session.detail}</p>
                            )}
                            {session.talks?.map((talk) => (
                              <p key={talk} className="mt-1 text-sm text-ink/60">
                                {talk}
                              </p>
                            ))}
                          </div>
                          {session.tracks && (
                            <div className="col-span-2 grid grid-cols-2 gap-1.5 sm:flex">
                              {session.tracks.map((track) => (
                                <div
                                  key={track.group.code}
                                  title={track.group.name}
                                  className={`min-w-0 rounded-lg border border-ink/10 p-2 sm:flex-1 ${track.group.tint}`}
                                >
                                  <p className="text-xs font-semibold uppercase leading-snug tracking-wide text-ink/80">
                                    {track.group.code}
                                  </p>
                                  {track.topic && (
                                    <p className="mt-1 break-words text-xs italic leading-snug text-ink/70">
                                      {track.topic}
                                    </p>
                                  )}
                                  {track.people?.map((person) => (
                                    <p
                                      key={person}
                                      className="mt-1 break-words text-xs leading-snug text-ink/60"
                                    >
                                      {person}
                                    </p>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
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
