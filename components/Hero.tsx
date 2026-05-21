"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const retreatDate = new Date("2026-10-09T16:30:00+02:00").getTime();

function getCountdown(): CountdownState {
  const diff = Math.max(retreatDate - Date.now(), 0);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

const circles = [
  "left-[8%] top-[22%] h-24 w-24",
  "left-[42%] top-[18%] h-40 w-40",
  "right-[12%] top-[28%] h-32 w-32",
  "left-[18%] bottom-[20%] h-28 w-28",
  "right-[28%] bottom-[12%] h-44 w-44"
];

const molecules = [
  {
    className: "left-[6%] top-[14%] hidden lg:block",
    scale: 1.22
  },
  {
    className: "right-[15%] top-[14%] hidden xl:block",
    scale: 1.08
  },
  {
    className: "left-[18%] bottom-[12%] hidden lg:block",
    scale: 1.02
  }
];

const cells = [
  {
    className: "left-[-4%] bottom-[6%] h-48 w-48 md:h-64 md:w-64",
    delay: 0
  },
  {
    className: "right-[4%] bottom-[1%] h-44 w-44 md:h-60 md:w-60",
    delay: 1.2
  },
  {
    className: "right-[34%] top-[10%] h-36 w-36 md:h-48 md:w-48",
    delay: 0.5
  }
];

const researchCells = [
  {
    src: "/images/research/Cluster.png",
    alt: "Microscopy cluster",
    className: "left-[-2%] top-[24%] h-28 w-28 md:h-40 md:w-40 lg:h-48 lg:w-48",
    delay: 0.2,
    opacity: "opacity-55"
  },
  {
    src: "/images/research/dapiheart.png",
    alt: "Cell nuclei microscopy",
    className: "right-[2%] top-[22%] h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40",
    delay: 0.8,
    opacity: "opacity-50"
  },
  {
    src: "/images/research/epithelial.png",
    alt: "Epithelial microscopy",
    className: "right-[9%] bottom-[14%] h-24 w-24 md:h-36 md:w-36 lg:h-44 lg:w-44",
    delay: 1.5,
    opacity: "opacity-50"
  },
  {
    src: "/images/research/overlay7phalloid-betacat-nucl-63x.jpg",
    alt: "Fluorescence microscopy",
    className: "left-[28%] bottom-[6%] hidden md:block h-24 w-24 lg:h-32 lg:w-32",
    delay: 1.1,
    opacity: "opacity-45"
  }
];

function MoleculeGraphic({ scale = 1 }: { scale?: number }) {
  return (
    <svg
      viewBox="0 0 220 160"
      className="h-[170px] w-[235px] opacity-100 drop-shadow-[0_18px_40px_rgba(149,166,214,0.16)]"
      style={{ transform: `scale(${scale})` }}
      aria-hidden="true"
    >
      <g stroke="rgba(92,110,170,0.42)" strokeWidth="1.6" fill="none">
        <path d="M42 42L88 58L124 34L166 58L138 104L82 112L42 82Z" />
        <path d="M88 58L82 112" />
        <path d="M124 34L138 104" />
        <path d="M166 58L190 96" />
      </g>
      {[
        [42, 42, 10],
        [88, 58, 13],
        [124, 34, 9],
        [166, 58, 12],
        [138, 104, 10],
        [82, 112, 11],
        [42, 82, 8],
        [190, 96, 7]
      ].map(([cx, cy, r], index) => (
        <circle
          key={`${cx}-${cy}-${index}`}
          cx={cx}
          cy={cy}
          r={r}
          fill={
            index % 3 === 0
              ? "rgba(139,124,200,0.34)"
              : index % 3 === 1
                ? "rgba(106,166,161,0.34)"
                : "rgba(255,255,255,0.88)"
          }
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 18, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 18, mass: 0.4 });
  const driftX = useTransform(springX, [-1, 1], [-10, 10]);
  const driftY = useTransform(springY, [-1, 1], [-10, 10]);

  useEffect(() => {
    setCountdown(getCountdown());
    const interval = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => ({
        id: index,
        left: `${8 + ((index * 7) % 84)}%`,
        top: `${10 + ((index * 13) % 70)}%`,
        delay: index * 0.25,
        duration: 8 + (index % 4)
      })),
    []
  );

  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden bg-hero-mesh pt-28"
      onMouseMove={(event) => {
        if (prefersReducedMotion) return;
        const { innerWidth, innerHeight } = window;
        mouseX.set((event.clientX / innerWidth) * 2 - 1);
        mouseY.set((event.clientY / innerHeight) * 2 - 1);
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.85),_transparent_32%)]" />
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={prefersReducedMotion ? undefined : { x: driftX, y: driftY }}
      >
        {molecules.map((molecule, index) => (
          <motion.div
            key={molecule.className}
            className={`absolute ${molecule.className}`}
            animate={
              prefersReducedMotion
                ? { opacity: 0.52 }
                : { y: [0, -8, 0], rotate: [0, 1.4, 0], opacity: [0.34, 0.72, 0.34] }
            }
            transition={{
              duration: 12 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          >
            <MoleculeGraphic scale={molecule.scale} />
          </motion.div>
        ))}
        {cells.map((cell) => (
          <motion.div
            key={cell.className}
            className={`absolute rounded-full border border-white/45 bg-[radial-gradient(circle_at_35%_35%,_rgba(255,255,255,0.92),_rgba(220,240,238,0.58)_18%,_rgba(176,152,224,0.34)_44%,_rgba(255,255,255,0.12)_74%,_transparent_100%)] shadow-[0_0_90px_rgba(173,196,221,0.24)] backdrop-blur-[2px] ${cell.className}`}
            animate={
              prefersReducedMotion
                ? { opacity: 0.3 }
                : { y: [0, -10, 0], scale: [1, 1.04, 1], opacity: [0.24, 0.42, 0.24] }
            }
            transition={{
              duration: 11,
              delay: cell.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-[18%] rounded-full border border-white/30" />
            <div className="absolute left-[26%] top-[28%] h-[14%] w-[14%] rounded-full bg-white/45 blur-[1px]" />
            <div className="absolute right-[28%] top-[42%] h-[10%] w-[10%] rounded-full bg-[#b8d9d5]/40 blur-[1px]" />
            <div className="absolute bottom-[24%] left-[44%] h-[12%] w-[12%] rounded-full bg-[#d7ccff]/35 blur-[1px]" />
          </motion.div>
        ))}
        {researchCells.map((cell) => (
          <motion.div
            key={cell.src}
            className={`absolute overflow-hidden rounded-full border border-white/35 shadow-[0_16px_50px_rgba(126,145,195,0.18)] backdrop-blur-[1px] ${cell.opacity} ${cell.className}`}
            animate={
              prefersReducedMotion
                ? { opacity: 0.45, y: 0 }
                : { y: [0, -12, 0], rotate: [0, 2, 0], opacity: [0.34, 0.58, 0.34] }
            }
            transition={{
              duration: 14,
              delay: cell.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          >
            <Image
              src={cell.src}
              alt={cell.alt}
              fill
              sizes="200px"
              className="object-cover object-center saturate-[1.05]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,_transparent_0%,_transparent_45%,_rgba(255,255,255,0.28)_72%,_rgba(255,255,255,0.1)_100%)]" />
          </motion.div>
        ))}
        {circles.map((circle, index) => (
          <motion.div
            key={circle}
            className={`absolute rounded-full border border-white/45 bg-white/20 backdrop-blur-2xl ${circle}`}
            animate={
              prefersReducedMotion
                ? { opacity: 0.55 }
                : { y: [0, -10, 0], opacity: [0.45, 0.8, 0.45] }
            }
            transition={{
              duration: 8 + index,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          />
        ))}
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute h-2 w-2 rounded-full bg-white/60 shadow-[0_0_18px_rgba(255,255,255,0.65)]"
            style={{ left: particle.left, top: particle.top }}
            animate={
              prefersReducedMotion
                ? { opacity: 0.28 }
                : { y: [0, -16, 0], opacity: [0.18, 0.72, 0.18] }
            }
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      <div className="section-shell relative flex min-h-[calc(100vh-7rem)] items-center">
        <div className="grid w-full gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="section-eyebrow">Interdisciplinary Scientific Workshop</p>
            <h1 className="mt-6 text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-7xl">
              Physics Underlying Life Sciences Workshop 2026
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink/72 sm:text-xl">
              Zadar, Croatia • 9–13 October 2026
            </p>
            <p className="mt-8 max-w-2xl text-base text-ink/68 md:text-lg">
              An interdisciplinary workshop for researchers in biophysics,
              computational chemistry, and related fields to share ideas,
              deepen collaborations, and explore new directions in living,
              active, and functional materials across the life sciences.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#programme"
                className="rounded-full bg-ink px-6 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:bg-ink/92"
              >
                Explore Programme
              </a>
              <a
                href="#about"
                className="rounded-full border border-ink/12 bg-white/70 px-6 py-3 text-sm text-ink transition hover:-translate-y-0.5"
              >
                Discover the Workshop
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.12, ease: "easeOut" }}
            className="glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-8"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-14 top-10 h-52 w-52 overflow-hidden rounded-full border border-white/30 opacity-30 blur-[1px]">
                <Image
                  src="/images/research/Cluster.png"
                  alt=""
                  fill
                  sizes="208px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="section-eyebrow">Countdown to Arrival</p>
                <p className="mt-4 text-2xl font-medium text-ink">
                  Opening in Zadar
                </p>
              </div>
              <div className="rounded-full border border-white/60 bg-white/55 px-4 py-2 text-xs uppercase tracking-[0.28em] text-ink/55">
                Workshop 2026
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {Object.entries(countdown).map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/60 bg-white/55 p-4"
                >
                  <p className="text-3xl font-medium text-ink">
                    {String(value).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-ink/48">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-white/60 bg-white/45 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-ink/48">
                From the Lab
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="relative h-24">
                    <Image
                      src="/images/research/Cluster.png"
                      alt="Microscopy cluster image"
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                  </div>
                  <p className="absolute bottom-3 left-3 text-sm text-white/92">Microscopy</p>
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="relative h-24">
                    <Image
                      src="/images/research/dapiheart.png"
                      alt="Cell nuclei image"
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                  </div>
                  <p className="absolute bottom-3 left-3 text-sm text-white/92">Cell Dynamics</p>
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="relative h-24">
                    <Image
                      src="/images/research/overlay7phalloid-betacat-nucl-63x.jpg"
                      alt="Fluorescence microscopy image"
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                  </div>
                  <p className="absolute bottom-3 left-3 text-sm text-white/92">Biophysics</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
