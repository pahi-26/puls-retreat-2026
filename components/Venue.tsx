"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const zadarImages = {
  waterfront:
    "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Sea%20Organ%20on%20the%20waterfront%20of%20Zadar%2C%20Croatia%20%2848607630256%29.jpg",
  oldTown:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Old%20Town%2C%20Zadar%20%28P1080755%29.jpg",
  sunset:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Sunset%20over%20St.%20Elias.png"
};

export default function Venue() {
  return (
    <section id="venue" className="relative">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow">Venue / Zadar</p>
            <h2 className="section-title">A Mediterranean setting for scientific reflection and exchange.</h2>
            <p className="section-copy">
              Zadar, Croatia
            </p>
            <p className="mt-4 max-w-xl text-base text-ink/70 md:text-lg">
              A historic Mediterranean coastal city where scientific exchange,
              interdisciplinary collaboration, and reflection meet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.8 }}
            className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={zadarImages.waterfront}
                  alt="Sea Organ waterfront in Zadar, Croatia"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/28 via-transparent to-white/10" />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={zadarImages.oldTown}
                    alt="Old Town of Zadar, Croatia"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/24 via-transparent to-white/10" />
                </div>
              </div>
              <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={zadarImages.sunset}
                    alt="Sunset over St. Elias in Zadar"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/36 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 max-w-[18rem]">
                    <p className="text-sm uppercase tracking-[0.26em] text-white/74">
                      Retreat Atmosphere
                    </p>
                    <p className="mt-3 text-lg text-white/90">
                      Coastal light, historic texture, and quiet space for ideas to deepen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
