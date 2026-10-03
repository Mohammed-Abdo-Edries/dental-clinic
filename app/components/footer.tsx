import { ArrowUp } from "lucide-react";

type FooterColumn = {
  title: string;
  items: string[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Solutions",
    items: [
      "Family dental care",
      "Preventive care",
      "Smile consultations",
      "Personalized treatment",
      "Community programs",
      "Patient support",
    ],
  },
  {
    title: "Services",
    items: [
      "General dentistry",
      "Cosmetic dentistry",
      "Emergency care",
      "Teeth whitening",
      "Routine checkups",
      "Dental hygiene",
    ],
  },
  {
    title: "Company",
    items: [
      "About our clinic",
      "Meet our team",
      "Patient stories",
      "Dental health guides",
      "Contact information",
      "Privacy information",
    ],
  },
];

const highlights: string[] = [
  "Gentle care",
  "Modern clinic",
  "Personal support",
];

export default function Footer() {
  return (
    <footer className="bg-slate-800 px-6 pb-8 pt-16 text-slate-300">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.8fr]">
          <div>
            <p className="text-3xl font-bold tracking-tight text-white">
              Luma<span className="text-cyan-400">Dental</span>
            </p>

            <p className="mt-5 max-w-sm leading-8">
              A welcoming place for healthier smiles. Thoughtful care,
              clear guidance, and a team focused on your comfort.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-md border border-slate-600 bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-200"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {column.title}
                </h3>

                <ul className="mt-6 space-y-4">
                  {column.items.map((item) => (
                    <li key={item} className="text-base leading-7">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-slate-600 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-slate-400">
            © 2026 Luma Dental. Portfolio demonstration.
          </p>

          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-12 w-12 shrink-0 items-center justify-center self-end rounded-full border border-slate-500 text-white transition-colors hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            <ArrowUp
              size={22}
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}