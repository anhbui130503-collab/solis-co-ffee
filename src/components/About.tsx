"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-solis-paper px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="tracked-sm text-xs uppercase text-solis-ink-soft">
            {t.about.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 font-serif text-3xl text-solis-ink sm:text-4xl">
            {t.about.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-solis-ink-soft sm:text-lg">
            {t.about.body}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 grid max-w-lg grid-cols-2 gap-8 text-center sm:grid-cols-2">
            <div>
              <p className="font-serif text-3xl text-solis-brown">2</p>
              <p className="mt-2 text-xs tracked-sm uppercase text-solis-ink-soft">
                {t.about.stat1Label}
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-solis-brown">5.0</p>
              <p className="mt-2 text-xs tracked-sm uppercase text-solis-ink-soft">
                {t.about.stat2Label}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
