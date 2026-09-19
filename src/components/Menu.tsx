"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

type MenuItem = { name: string; slug: string };

const MENU_GROUPS: { title: string; items: MenuItem[] }[] = [
  {
    title: "Phin vs Esp",
    items: [
      { name: "Coconut Coffee", slug: "coconut-coffee" },
      { name: "Morning Dew", slug: "yogurt-kafe" },
      { name: "White Coffee", slug: "white-coffee" },
      { name: "Milk Coffee", slug: "milk-coffee" },
      { name: "Espresso Colada", slug: "espresso-colada-v2" },
      { name: "Creamy", slug: "creamy-v2" },
    ],
  },
  {
    title: "Cold Brew",
    items: [
      { name: "Margarita", slug: "margarita-v2" },
      { name: "Apple Cinnamon", slug: "apple-cinnamon-v2" },
      { name: "Coldbrew Berry", slug: "coldbrew-berry" },
      { name: "“Phở” Coldbrew", slug: "pho-coldbrew-v2" },
      { name: "Citrus Dreamy", slug: "citrus-dreamy-v2" },
      { name: "Apricot Coldbrew", slug: "apricot-coldbrew" },
    ],
  },
  {
    title: "Tea",
    items: [
      { name: "Warm Citrus", slug: "warm-citrus-v2" },
      { name: "Chai Latte", slug: "chai-latte-v2" },
      { name: "Hanoi Autumn", slug: "hanoi-autumn-v2" },
      { name: "Cinnamon Glow", slug: "cinnamon-glow-v2" },
      { name: "Cascara Sunset", slug: "cascara-sunset-v2" },
      { name: "Berry Tea", slug: "berry-tea-v2" },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Citrus Rush", slug: "citrus-rush-v2" },
      { name: "Yuzucha", slug: "matcha-yuzu-tonic" },
      { name: "Matcha Whisk", slug: "matcha-coldwhisk" },
      { name: "Flamingo", slug: "mango-strawberry-smoothie" },
      { name: "Greek Kefir Bowl", slug: "greek-kefir-bowl-v2" },
      { name: "Chocolate Marshmallow", slug: "chocolate-marshmallow-v2" },
    ],
  },
  {
    title: "Salad",
    items: [
      { name: "Caesar Salad", slug: "caesar-salad-v2" },
      { name: "Shrimp Salad", slug: "shrimp-salad-v2" },
      { name: "Salmon Salad Feta", slug: "salmon-salad-feta-v2" },
      { name: "Tropical Salad", slug: "tropical-salad-v2" },
    ],
  },
  {
    title: "Foods",
    items: [
      { name: "Chicken Sourdough", slug: "chicken-sourdough-v2" },
      { name: "Avocado Toast", slug: "avocado-toast-v2" },
      { name: "English Breakfast", slug: "english-breakfast-v2" },
      { name: "Healthy Breakfast", slug: "healthy-breakfast-v2" },
      { name: "Vietnamese Breakfast Skillet", slug: "vietnamese-breakfast-skillet-v2" },
      { name: "Steak & Eggs", slug: "steak-eggs-v2" },
    ],
  },
  {
    title: "Burger, Sandwich & Pasta",
    items: [
      { name: "Solis Pasta", slug: "solis-pasta-v2" },
      { name: "Shrimp Pasta", slug: "shrimp-pasta-v2" },
      { name: "Pesto Pasta", slug: "pesto-pasta-v2" },
      { name: "Chicken Sandwich", slug: "chicken-sandwich-v2" },
      { name: "Bacon Cheeseburger", slug: "bacon-cheeseburger-v2" },
      { name: "Croissant Sandwich", slug: "croissant-sandwich-v2" },
    ],
  },
  {
    title: "Dessert",
    items: [
      { name: "Crème Brûlée", slug: "creme-brulee-v2" },
      { name: "Tropical French Toast", slug: "tropical-french-toast-v2" },
      { name: "Tropical Crêpes", slug: "tropical-crepes-v2" },
    ],
  },
];

export default function Menu() {
  const { t } = useLanguage();

  return (
    <section id="menu" className="bg-solis-brown px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <h2 className="font-serif text-3xl text-solis-cream sm:text-4xl">
            {t.menu.heading}
          </h2>
        </Reveal>

        <div className="mt-16 space-y-16 text-left">
          {MENU_GROUPS.map((group) => (
            <div key={group.title}>
              <Reveal>
                <h3 className="tracked-sm text-center text-xs uppercase text-solis-cream/60">
                  {group.title}
                </h3>
              </Reveal>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3">
                {group.items.map((item, i) => (
                  <Reveal key={item.slug} delay={Math.min(0.1 + i * 0.05, 0.4)}>
                    <div className="relative aspect-square overflow-hidden rounded-sm bg-solis-brown-dark">
                      <Image
                        src={`/images/menu/${item.slug}.webp`}
                        alt={item.name}
                        fill
                        sizes="(min-width: 640px) 30vw, 45vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <p className="mt-4 text-center text-sm text-solis-cream">
                      {item.name}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}