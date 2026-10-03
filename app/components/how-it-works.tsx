import {
  Clock3,
  FileScan,
  MapPinCheck,
  Video,
  type LucideIcon,
} from "lucide-react";


type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
};

const steps: Step[] = [
  {
    title: "Smart Scan",
    description:
      "Take five guided photos from your phone and receive a quick oral health assessment.",
    icon: FileScan,
    color: "bg-cyan-500",
  },
  {
    title: "Get Your Score",
    description:
      "Receive a personalized score, findings, and practical next steps for your care.",
    icon: Clock3,
    color: "bg-blue-500",
  },
  {
    title: "Talk to a Dentist",
    description:
      "Connect with a licensed dentist through video or phone whenever you need support.",
    icon: Video,
    color: "bg-indigo-500",
  },
  {
    title: "Get In-Person Care",
    description:
      "Follow a clear care plan and find the right in-person provider for your needs.",
    icon: MapPinCheck,
    color: "bg-purple-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-800 text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            How it works
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Simple care, from your first click to your next smile.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every step is clear, connected, and designed around your comfort.
          </p>
        </div>

        <div className="relative mt-20 grid gap-12 md:grid-cols-4 md:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 md:block"
          />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="relative text-center"
              >
                <div
                  className={`relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full ${step.color} shadow-lg`}
                >
                  <Icon
                    size={32}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-7 text-xl font-bold">{step.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}