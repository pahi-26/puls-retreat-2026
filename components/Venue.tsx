"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const zadarImages = {
  waterfront:
    "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Sea%20Organ%20on%20the%20waterfront%20of%20Zadar%2C%20Croatia%20%2848607630256%29.jpg",
  oldTown:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Old%20Town%2C%20Zadar%20%28P1080755%29.jpg",
  sunset:
    "https://i.natgeofe.com/n/6bc66ae6-76ef-4873-a4c0-e112789b6feb/Zadar1_3x4.jpeg"
};

const hotelUrl = "https://hotel-kolovare.com/";

const kolovareImages = {
  exterior:
    "https://hotel-kolovare.com/wp-content/uploads/2020/12/h4.jpg",
  conferenceHall:
    "https://hotel-kolovare.com/wp-content/uploads/2020/12/MAX_7204.jpg",
  lobby:
    "https://hotel-kolovare.com/wp-content/uploads/2020/12/h1.jpg",
  interior:
    "https://hotel-kolovare.com/wp-content/uploads/2020/12/h3.jpg"
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
            <p className="section-eyebrow">Venue</p>
            <h2 className="section-title">Scientific exchange in a Mediterranean setting</h2>
            <p className="section-copy">
              📍 Hotel Kolovare, Ul. Bože Peričića 14, 23000 Zadar, Croatia
            </p>
            {/* <p className="mt-4 max-w-xl text-base text-ink/70 md:text-lg">
              A historic Mediterranean coastal city where scientific exchange,
              interdisciplinary collaboration, and reflection meet.
            </p> */}
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
                <p className="absolute bottom-5 left-5 text-sm uppercase tracking-[0.26em] text-white/90">
                  Beachfront
                </p>
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
                  <p className="absolute bottom-5 left-5 text-sm uppercase tracking-[0.26em] text-white/90">
                    Old Town
                  </p>
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
                  <p className="absolute bottom-5 left-5 text-sm uppercase tracking-[0.26em] text-white/90">
                    Sunset in Zadar
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <motion.a
            href={hotelUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.7 }}
            className="glass-panel group relative block overflow-hidden rounded-[2rem] p-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <Image
                src={kolovareImages.exterior}
                alt="Aerial view of Hotel Kolovare, its pool, and private beach in Zadar"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/28 via-transparent to-white/10" />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/74">
                  Hotel Kolovare
                </p>
                <p className="mt-1 text-sm text-white/90">
                  Aerial view of the hotel
                </p>
              </div>
            </div>
          </motion.a>
          <motion.a
            href={hotelUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.7, delay: 0.06 }}
            className="glass-panel group relative block overflow-hidden rounded-[2rem] p-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <Image
                src={kolovareImages.conferenceHall}
                alt="Conference hall at Hotel Kolovare set up for an event"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/28 via-transparent to-white/10" />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/74">
                  Hotel Kolovare
                </p>
                <p className="mt-1 text-sm text-white/90">
                  Conference Hall
                </p>
              </div>
            </div>
          </motion.a>
          <motion.a
            href={hotelUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="glass-panel group relative block overflow-hidden rounded-[2rem] p-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <Image
                src={kolovareImages.lobby}
                alt="Lobby of Hotel Kolovare"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/28 via-transparent to-white/10" />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/74">
                  Hotel Kolovare
                </p>
                <p className="mt-1 text-sm text-white/90">
                  Lobby
                </p>
              </div>
            </div>
          </motion.a>
          <motion.a
            href={hotelUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="glass-panel group relative block overflow-hidden rounded-[2rem] p-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <Image
                src={kolovareImages.interior}
                alt="Interior of Hotel Kolovare"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/28 via-transparent to-white/10" />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/74">
                  Hotel Kolovare
                </p>
                <p className="mt-1 text-sm text-white/90">
                  Interior
                </p>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
