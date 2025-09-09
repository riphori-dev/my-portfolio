import React from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jane Doe",
    role: "Product Manager",
    company: "Acme Corp",
    quote:
      "Rios delivered beyond expectations. Clean architecture, clear communication, and on-time delivery.",
  },
  {
    name: "John Smith",
    role: "CTO",
    company: "Startup XYZ",
    quote:
      "He translated complex requirements into a scalable solution. The developer experience was excellent.",
  },
  {
    name: "Alex Rivera",
    role: "Founder",
    company: "Binake ni Maria",
    quote:
      "Our site looks modern and loads fast. Customers found it easier to browse and order.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A few words from people I've worked with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <svg className="absolute -top-3 -left-3 w-8 h-8 text-blue-500/30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V22h8.27v-8.27H7.17V11.17A1.83 1.83 0 0 1 9 9.34V6H7.17Zm9.56 0A5.17 5.17 0 0 0 13.73 11.17V22H22v-8.27h-3.1V11.17A1.83 1.83 0 0 1 20.73 9.34V6h-4Z" />
              </svg>
              <p className="text-gray-300 leading-relaxed">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
