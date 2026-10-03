type ContactInfo = {
  label: string;
  value: string;
};

const contactInfo: ContactInfo[] = [
  {
    label: "Call us",
    value: "+1 (000) 123-4567",
  },
  {
    label: "Email us",
    value: "hello@lumadental.com",
  },
  {
    label: "Visit us",
    value: "123 Smile Avenue, New York",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Contact us
        </p>

        <h2
          id="contact-title"
          className="mt-4 text-4xl font-bold text-blue-950 md:text-5xl"
        >
          We are here to help.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-blue-100 bg-blue-50 p-6"
            >
              <p className="text-sm font-semibold text-blue-600">
                {item.label}
              </p>

              <p className="mt-3 text-lg font-semibold text-blue-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}