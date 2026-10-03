"use client";
import { useState, type FormEvent } from "react";
type FieldType = "text" | "email" | "tel";

type FormField = {
  id: string;
  label: string;
  type: FieldType;
  placeholder: string;
};

const formFields: FormField[] = [
  {
    id: "name",
    label: "Full name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    id: "email",
    label: "Email address",
    type: "email",
    placeholder: "you@example.com",
  },
  {
    id: "phone",
    label: "Phone number",
    type: "tel",
    placeholder: "+249 00 000 0000",
  },
];

export default function Appointment() {
    const [submitted, setSubmitted] = useState(false);

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setSubmitted(true);
}
  return (
    <section
      id="appointment"
      aria-labelledby="appointment-title"
      className="bg-blue-950 px-6 py-24 text-white"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Book a visit
          </p>

          <h2
            id="appointment-title"
            className="mt-4 text-4xl font-bold leading-tight md:text-5xl"
          >
            Let&apos;s take care of your smile.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-blue-100">
            Tell us a little about yourself and our team will contact you to
            find the best appointment time.
          </p>
        </div>

        <form className="rounded-3xl bg-white p-8 text-slate-900 shadow-xl" onSubmit={handleSubmit}>
          <div className="grid gap-5">
            {formFields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="mb-2 block text-sm font-semibold"
                >
                  {field.label}
                </label>

                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-semibold"
              >
                Preferred service
              </label>

              <select
                id="service"
                name="service"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option>General Dentistry</option>
                <option>Cosmetic Dentistry</option>
                <option>Emergency Care</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Request appointment
            </button>
            {submitted && (
  <p role="status" className="text-sm leading-6 text-blue-700">
    Demo: form validation passed. No appointment request has been sent.
  </p>
)}
          </div>
        </form>
      </div>
    </section>
  );
}