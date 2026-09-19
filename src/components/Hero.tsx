"use client";

import { motion } from "framer-motion";
import Logotype from "@/components/Logotype";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-solis-brown px-6 text-center"
    >
      {/* near-flat background, matching the reference image's solid tone */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.05)_100%)]" />

      <div className="relative flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="tracked-sm absolute bottom-full left-1/2 mb-[1.55rem] -translate-x-1/2 whitespace-nowrap text-[0.825rem] uppercase text-solis-cream/90 sm:mb-[2.9rem] sm:text-[0.9625rem] md:mb-[3.7rem]"
        >
          Coffee <span className="mx-2 inline-block sm:mx-3">&middot;</span> Brunch{" "}
          <span className="mx-2 inline-block sm:mx-3">&middot;</span> Beer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logotype className="text-7xl text-solis-cream sm:text-[8.5rem] md:text-[11rem]" />
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-solis-cream/70"
      >
        <span className="text-[10px] tracked-sm uppercase">
          {t.hero.scrollDown}
        </span>
        <span className="h-8 w-px bg-solis-cream/50" />
      </motion.div>
    </section>
  );
}
