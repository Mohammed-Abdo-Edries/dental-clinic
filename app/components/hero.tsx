"use client";

import { useEffect, useState } from "react";

const heroImages: string[] = [
  "/hero-1.jpg",
  "/hero-2.avif",
  "/hero-3.avif",
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState<number>(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((currentImage) => {
        return (currentImage + 1) % heroImages.length;
      });
    }, 3000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section
  aria-labelledby="hero-title"
  className="relative isolate m-0 overflow-hidden border-0 bg-white"
>
      <div className="absolute inset-y-0 right-0 z-0 w-[58%]">
        <div
          key={heroImages[activeImage]}
          aria-hidden="true"
          className="hero-image-zoom absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImages[activeImage]})`,
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/60 to-transparent backdrop-blur-[4px]"
        />
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/90 to-white/30" />

      <div className="relative z-10 mx-auto flex max-w-6xl items-start px-6 pb-24 pt-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
            Modern dental care
          </p>

          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-6xl leading-[0.92] text-slate-800 md:text-8xl"
          >
            Dental care
            <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              starts here.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Know what to do next with thoughtful guidance, modern technology,
            and a dental team focused on your comfort.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#appointment"
              className="rounded-lg bg-blue-600 px-7 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Book appointment
            </a>

            <a
              href="#services"
              className="rounded-lg border border-blue-200 bg-white/85 px-7 py-3 text-center font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}