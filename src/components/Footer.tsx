"use client";

import Reveal from "@/components/Reveal";
import Logotype from "@/components/Logotype";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-solis-brown px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex flex-col items-center gap-3 text-center">
            <Logotype className="text-2xl text-solis-cream" />
            <p className="tracked-sm text-[10px] uppercase text-solis-cream/60">
              Coffee &middot; Brunch &middot; Beer
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-6 border-t border-solis-cream/15 pt-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="max-w-xs text-xs text-solis-cream/60">
              36 An Thượng 30, Mỹ An, Ngũ Hành Sơn, Đà Nẵng
              <br />
              0375 496 604 &middot; 07:30 – 22:30 {t.footer.dailyLabel}
            </p>

            <div className="flex gap-6 text-xs tracked-sm uppercase text-solis-cream/80">
              <a
                href="https://www.facebook.com/solis.danang"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block py-1 transition-colors hover:text-solis-cream"
              >
                Facebook
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
              <a
                href="https://www.instagram.com/solis.danang/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block py-1 transition-colors hover:text-solis-cream"
              >
                Instagram
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-[10px] text-solis-cream/40">
            {`© ${year} Solis Coffee, Brunch & Beer.`}
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
