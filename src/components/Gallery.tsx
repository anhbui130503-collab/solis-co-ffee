"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const SPACES = [
  { src: "/images/gallery/gieng-troi.jpg" },
  { src: "/images/gallery/tang-1.jpg" },
  { src: "/images/gallery/tang-2.jpg" },
  { src: "/images/gallery/chat-lieu-go.jpg" },
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="bg-solis-paper px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Reveal>
            <p className="tracked-sm text-xs uppercase text-solis-ink-soft">
              {t.gallery.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-3xl text-solis-ink sm:text-4xl">
              {t.gallery.heading}
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SPACES.map((space, i) => {
            const copy = t.gallery.spaces[i];
            return (
              <Reveal key={space.src} delay={0.1 + i * 0.08}>
                <div className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-sm p-6">
                  <Image
                    src={space.src}
                    alt={copy.label}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <p className="relative font-serif text-lg text-solis-cream">
                    {copy.label}
                  </p>
                  <p className="relative mt-2 text-xs text-solis-cream/70">
                    {copy.note}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
