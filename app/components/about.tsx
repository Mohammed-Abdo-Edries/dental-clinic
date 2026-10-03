type CarePoint = {
  title: string;
  description: string;
};

const carePoints: CarePoint[] = [
  {
    title: "Care that starts with listening",
    description:
      "We take time to understand your concerns and explain your options.",
  },
  {
    title: "Comfort at every step",
    description:
      "A welcoming environment and gentle approach to every treatment.",
  },
  {
    title: "A plan built around you",
    description:
      "Clear next steps that fit your needs, preferences, and schedule.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 bg-blue-50 px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            About our clinic
          </p>

          <h2
            id="about-title"
            className="mt-4 text-4xl font-bold leading-tight text-blue-950 md:text-5xl"
          >
            Feel understood.
            <br />
            Feel at ease.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            We believe dental care should feel personal. From your first
            conversation to your next checkup, we help you make informed
            decisions about your smile.
          </p>

          <a
            href="#appointment"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Plan your first visit
          </a>
        </div>

        <div className="divide-y divide-blue-200">
          {carePoints.map((point) => (
            <article key={point.title} className="py-6 first:pt-0">
              <h3 className="text-2xl font-bold text-blue-950">
                {point.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}