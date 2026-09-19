"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function HoursLocation() {
  const { t } = useLanguage();

  return (
    <section id="hours" className="bg-solis-paper px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-14 sm:grid-cols-2">
        <Reveal>
          <p className="tracked-sm text-xs uppercase text-solis-ink-soft">
            {t.hours.openingEyebrow}
          </p>
          <h2 className="mt-6 font-serif text-3xl text-solis-ink sm:text-4xl">
            {t.hours.openingHours}
          </h2>
          <p className="mt-4 text-sm text-solis-ink-soft">
            {t.hours.openDaily}
          </p>

          <div className="mt-10 h-px w-16 bg-solis-brown/40" />

          <p className="mt-10 tracked-sm text-xs uppercase text-solis-ink-soft">
            {t.hours.contactEyebrow}
          </p>
          <a
            href="tel:0375496604"
            className="mt-3 inline-block font-serif text-2xl text-solis-brown transition-transform duration-300 ease-out hover:translate-x-1 hover:opacity-80"
          >
            0375 496 604
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="tracked-sm text-xs uppercase text-solis-ink-soft">
            {t.hours.locationEyebrow}
          </p>
          <p className="mt-6 max-w-xs font-serif text-2xl leading-snug text-solis-ink">
            36 An Thượng 30, Mỹ An, Ngũ Hành Sơn, Đà Nẵng
          </p>
          <p className="mt-4 max-w-xs text-sm text-solis-ink-soft">
            {t.hours.locationNote}
          </p>

          <a
            href="https://www.google.com/maps/place/Solis+Coffee+Brunch+%26+Beer/@16.0511786,108.2432564,17z/data=!3m1!4b1!4m6!3m5!1s0x31421700529c0189:0x21ae1111d6b13856!8m2!3d16.0511735!4d108.2458313!16s%2Fg%2F11yds37mwq"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 border-b border-solis-brown pb-1 text-xs tracked-sm uppercase text-solis-brown transition-opacity hover:opacity-70"
          >
            {t.hours.directions}
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
