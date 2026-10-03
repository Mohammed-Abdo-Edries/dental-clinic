import {
  CalendarDays,
  Clock3,
  Star,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type Stat = {
  label: string;
  value: string;
  icon: LucideIcon;
};

const stats: Stat[] = [
  {
    label: "Years of experience",
    value: "15+",
    icon: CalendarDays,
  },
  {
    label: "Happy patients",
    value: "10k+",
    icon: UsersRound,
  },
  {
    label: "Patient rating",
    value: "4.9/5",
    icon: Star,
  },
  {
    label: "Care support",
    value: "24/7",
    icon: Clock3,
  },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-white px-6 py-2">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className={[
                "flex items-center gap-4 px-4 py-4",
                index > 0 ? "md:border-l md:border-slate-200" : "",
              ].join(" ")}
            >
              <Icon
                size={30}
                strokeWidth={1.8}
                className="shrink-0 text-blue-500"
                aria-hidden="true"
              />

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {stat.label}
                </p>

                <p className="mt-1 text-2xl font-bold text-blue-950">
                  {stat.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}