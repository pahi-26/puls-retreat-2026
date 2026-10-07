"use client";

import { motion } from "framer-motion";
import { arrivalDay, breakoutGroups, days, slots, type Cell, type Track } from "@/data/programme";

const dayWidths = ["26%", "33%", "22%", "12%"];
const cellBorder = "border border-[#d9d9d4] p-2 align-top";

function TrackBox({ track }: { track: Track }) {
  return (
    <div
      title={track.group?.name}
      className={`min-w-0 rounded-md border border-ink/10 p-1.5 ${track.group?.tint ?? "bg-[#f3f8f6]"}`}
    >
      <p className="text-[11px] font-semibold uppercase leading-snug tracking-wide text-[#2f6f5e]">
        {track.group?.code ?? track.title}
      </p>
      {track.time && <p className="text-[11px] leading-snug text-ink/55">{track.time}</p>}
      {track.topic && (
        <p className="mt-1 break-words text-xs italic leading-snug text-ink/75">{track.topic}</p>
      )}
      {track.people?.map((person) => (
        <p key={person} className="mt-1 hyphens-auto break-words text-xs leading-snug text-ink/70">
          {person}
        </p>
      ))}
      {track.detail && (
        <p className="mt-1 break-words text-xs leading-snug text-ink/60">{track.detail}</p>
      )}
    </div>
  );
}

function ScheduleCell({ cell }: { cell: Cell }) {
  switch (cell.kind) {
    case "talks":
      return (
        <td className={`${cellBorder} bg-[#fde2e4]`}>
          {cell.invited.map((name) => (
            <p key={name} className="text-sm font-medium leading-snug text-ink/85">
              {name}
            </p>
          ))}
          {cell.contributed && (
            <>
              <p className="mt-2 text-[11px] uppercase leading-snug tracking-wide text-ink/50">
                Contributed
              </p>
              {cell.contributed.map((name) => (
                <p key={name} className="text-sm leading-snug text-ink/75">
                  {name}
                </p>
              ))}
            </>
          )}
        </td>
      );
    case "break":
      return (
        <td className={`${cellBorder} bg-[#eef2f7] text-center align-middle font-semibold text-ink/50`}>
          {cell.label}
        </td>
      );
    case "event":
      return (
        <td className={`${cellBorder} bg-[#d6e6ff] text-center align-middle font-semibold text-ink/80`}>
          {cell.label}
        </td>
      );
    case "tracks":
      return (
        <td className={`${cellBorder} bg-white`}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(3.5rem,1fr))] gap-1">
            {cell.tracks.map((track) => (
              <TrackBox key={track.group?.code ?? track.title} track={track} />
            ))}
          </div>
        </td>
      );
    case "empty":
      return <td className={`${cellBorder} bg-white`} />;
  }
}

export default function Timeline() {
  return (
    <section id="programme" className="relative">
      <div className="section-shell pb-0">
        <p className="section-eyebrow">Programme Timeline</p>
        <h2 className="section-title">Programme overview across the workshop dates.</h2>
        <div className="mt-10 flex flex-wrap items-start gap-6">
          <div className="glass-panel max-w-xl rounded-2xl p-4">
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
          <div className="glass-panel rounded-2xl p-4">
            <p className="text-sm font-semibold text-ink/75">Arrival: {arrivalDay.day}</p>
            {arrivalDay.sessions.map((session) => (
              <p key={session.time} className="mt-2 text-sm text-ink/65">
                <span className="tabular-nums text-ink/55">{session.time}</span> {session.title}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[100rem] px-6 pb-20 pt-8 md:px-10 lg:px-12">
        <p className="mb-2 text-xs text-ink/50 xl:hidden">Scroll sideways to see all days →</p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45 }}
          className="glass-panel overflow-x-auto rounded-2xl"
        >
          <table className="w-full min-w-[1280px] table-fixed border-collapse text-left">
            <colgroup>
              <col style={{ width: "7%" }} />
              {dayWidths.map((width, index) => (
                <col key={days[index]} style={{ width }} />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th className="sticky left-0 z-10 border border-[#d9d9d4] bg-[#2f6f5e] p-2 text-sm font-semibold text-white">
                  Time
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="border border-[#d9d9d4] bg-[#2f6f5e] p-2 text-center text-sm font-semibold tracking-wide text-white"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slots.map((slot) => (
                <tr key={slot.time}>
                  <th className="sticky left-0 z-10 border border-[#d9d9d4] bg-[#fafaf8] p-2 align-top font-normal">
                    <p className="text-sm font-semibold tabular-nums text-ink/60">{slot.time}</p>
                    {slot.note && (
                      <p className="mt-1 text-xs leading-snug text-ink/50">{slot.note}</p>
                    )}
                  </th>
                  {slot.cells.map((cell, index) => (
                    <ScheduleCell key={days[index]} cell={cell} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
