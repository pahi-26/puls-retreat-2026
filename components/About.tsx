"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p className="section-eyebrow">About the Retreat</p>
          <p className="section-copy">
            An interdisciplinary retreat bringing together researchers across
            physics, biophysics, and computational chemistry to foster
            scientific exchange, collaboration, and future directions in life
            sciences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
