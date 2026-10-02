export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title" className="min-h-screen bg-blue-50 px-6 py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Modern dental care
          </p>

          <h1
            id="hero-title"
            className="max-w-xl text-5xl font-bold leading-tight text-blue-950 md:text-6xl"
          >
            Your smile,
            <span className="block text-blue-600">our priority.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Professional dental care with modern technology and a comfortable
            experience for the whole family.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#appointment"
              className="rounded-lg bg-blue-600 px-7 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Book appointment
            </a>

            <a
              href="#services"
              className="rounded-lg border border-blue-200 bg-white px-7 py-3 text-center font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              Explore services
            </a>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <p className="text-2xl font-bold text-blue-950">15+</p>
              <p className="text-sm text-slate-500">Years of experience</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-blue-950">4.9/5</p>
              <p className="text-sm text-slate-500">Patient rating</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl">
          <p className="text-sm font-medium text-blue-100">Your care starts here</p>

          <h2 className="mt-4 text-3xl font-bold">
            A healthier smile begins with one visit.
          </h2>

          <p className="mt-4 leading-7 text-blue-100">
            Gentle care, clear communication, and treatment designed around you.
          </p>

          <div className="mt-8 rounded-2xl bg-white/10 p-5">
            <p className="text-sm text-blue-100">Opening hours</p>
            <p className="mt-2 text-xl font-semibold">Mon – Sat · 08:00 – 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}