type Service = {
  number: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "General Dentistry",
    description:
      "Routine checkups, cleanings, fillings, and preventive care for a healthy smile.",
  },
  {
    number: "02",
    title: "Cosmetic Dentistry",
    description:
      "Personalized treatments that improve the appearance, confidence, and brightness of your smile.",
  },
  {
    number: "03",
    title: "Emergency Care",
    description:
      "Fast and gentle support for tooth pain, broken teeth, swelling, and unexpected dental problems.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our services
          </p>
          <h2
            id="services-title"
            className="mt-4 text-4xl font-bold text-blue-950 md:text-5xl"
          >
            Complete care for every smile.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            From regular checkups to urgent care, our team is here to make
            every visit comfortable and clear.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-3xl border border-blue-100 bg-blue-50 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl"
            >
              <span className="text-sm font-bold text-blue-600">
                {service.number}
              </span>

              <h3 className="mt-8 text-2xl font-bold text-blue-950">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
              <a
                href="#appointment"
                className="mt-8 inline-block font-semibold text-blue-600 transition group-hover:text-blue-800"
              >
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}