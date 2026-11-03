"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  // { label: "About", href: "#about" }, // re-enable with the About section
  { label: "Themes", href: "#themes" },
  { label: "Programme", href: "#programme" },
  { label: "Speakers", href: "#speakers" },
  { label: "Venue", href: "#venue" }
];

export default function Navbar() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 mx-auto flex justify-center px-4 pt-4"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav className="glass-panel flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 md:px-7">
        <a href="#top" className="flex items-center gap-2 text-sm tracking-[0.24em] text-ink sm:gap-3">
          <Image
            src="/images/research/PULSlogo.png"
            alt="PULS logo"
            width={148}
            height={32}
            className="h-auto w-[68px] sm:w-[100px] xl:w-[148px]"
            priority
          />
          <span className="h-6 w-px bg-ink/15" aria-hidden="true" />
          <Image
            src="/images/research/ChemPrint_logo-768x398.png"
            alt="ChemPrint logo"
            width={768}
            height={398}
            className="h-5 w-auto sm:h-[28px] xl:h-[38px]"
            priority
          />
          <Image
            src="/images/research/hrzz_logo.jpg"
            alt="HRZZ (Croatian Science Foundation) logo"
            width={800}
            height={333}
            className="h-5 w-auto mix-blend-multiply sm:h-[28px] xl:h-[38px]"
            priority
          />
          <Image
            src="/images/research/dfg_logo.png"
            alt="DFG (Deutsche Forschungsgemeinschaft) logo"
            width={738}
            height={93}
            className="h-2.5 w-auto sm:h-3.5 xl:h-[18px]"
            priority
          />
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/65 transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#programme"
          className="hidden rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-sm text-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:block"
        >
          Explore Programme
        </a>
      </nav>
    </motion.header>
  );
}
