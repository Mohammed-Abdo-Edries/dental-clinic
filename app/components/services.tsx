import {
  Siren,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "General Dentistry",
    description:
      "Routine checkups, cleanings, and preventive treatments. Get personalized care that keeps your teeth and gums healthy.",
    icon: Stethoscope,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Whitening and cosmetic treatments tailored to your smile. Explore your options with clear guidance from our team.",
    icon: Sparkles,
  },
  {
    title: "Emergency Care",
    description:
      "Support for tooth pain, broken teeth, and unexpected dental problems. Contact our team to arrange urgent care.",
    icon: Siren,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-24 bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Our services
        </p>

        <h2
          id="services-title"
          className="mt-4 text-4xl font-bold text-slate-800 md:text-5xl"
        >
          Complete care for every smile.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-slate-100 p-7 transition-colors duration-300 hover:bg-white hover:border hover:border-blue-500 focus-within:bg-blue-50 lg:p-9"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                />

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white transition-colors duration-300 group-hover:bg-blue-500 group-focus-within:bg-blue-500">
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="text-blue-500 transition-colors duration-300 group-hover:text-white group-focus-within:text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-800">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {service.description}
                </p>

                <a
                  href="#appointment"
                  className="mt-auto self-start pt-8 font-semibold text-blue-600 transition-colors hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                >
                  Book a visit
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}