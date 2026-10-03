import { Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I had a dental emergency at 11pm. Within 20 minutes I was speaking with a licensed dentist who helped me understand my next steps.",
    name: "Sarah M.",
    role: "Patient, Cigna Member",
  },
  {
    quote:
      "The team made me feel comfortable from the moment I walked in. Everything was explained clearly and professionally.",
    name: "Dr. James R.",
    role: "General Dentist, Texas",
  },
  {
    quote:
      "Our family received excellent care. The process was simple, comfortable, and much easier than we expected.",
    name: "Maya T.",
    role: "Patient, New York",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
          What people say
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-slate-800 md:text-6xl">
          Trusted by patients, payers &amp; professionals.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-[330px] flex-col rounded-3xl border border-slate-300 bg-white p-10"
            >
              <div
                className="flex gap-1 text-amber-500"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    strokeWidth={1.5}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="mt-8 text-lg italic leading-8 text-slate-600">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-auto pt-8">
                <p className="font-bold text-slate-800">
                  {testimonial.name}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}