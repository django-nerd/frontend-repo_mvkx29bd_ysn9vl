export default function Services() {
  const services = [
    {
      title: "General Contracting",
      desc: "End-to-end project delivery with dependable scheduling and quality control.",
      icon: "🏗️",
    },
    {
      title: "Renovations",
      desc: "Kitchen, bathroom, and full-home remodels tailored to your lifestyle.",
      icon: "🧰",
    },
    {
      title: "Commercial Build-Outs",
      desc: "Office, retail, and hospitality spaces built to code and on-brand.",
      icon: "🏢",
    },
    {
      title: "Exterior & Roofing",
      desc: "Roof replacements, siding, windows, and exterior improvements.",
      icon: "🏠",
    },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Services</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          From planning to handoff, we manage every detail with craftsmanship and care.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-gray-200 bg-gray-50 hover:shadow-md transition-shadow">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
