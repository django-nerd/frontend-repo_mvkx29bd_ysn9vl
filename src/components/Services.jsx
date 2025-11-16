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
      desc: "Office, retail, and hospitality spaces built to code and on-brand.
",
      icon: "🏢",
    },
    {
      title: "Exterior & Roofing",
      desc: "Roof replacements, siding, windows, and exterior improvements.",
      icon: "🏠",
    },
  ];

  return (
    <section id="services" className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(17,24,39,0.03),rgba(255,255,255,0)_55%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600">From planning to handoff, we manage every detail with craftsmanship and care.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative p-6 rounded-2xl border border-gray-200/80 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-gray-900/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
