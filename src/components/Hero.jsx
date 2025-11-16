export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(253,224,71,0.25),rgba(255,255,255,0)_40%)]" />
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full blur-3xl bg-yellow-400/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-600/80 bg-gray-900/5 border border-gray-900/10 px-3 py-1 rounded-full">Trusted builders • Licensed • Insured</p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.05]">
            Spaces built to last. Crafted with precision.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            We deliver high-end residential and commercial construction with uncompromising quality, clear timelines, and safety-first execution.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition-colors shadow-sm">
              Get a Free Quote
            </a>
            <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-semibold hover:bg-gray-50 transition-colors">
              View Projects
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-extrabold text-gray-900">10+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-gray-900">120+</p>
              <p className="text-sm text-gray-600">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-gray-900">4.9/5</p>
              <p className="text-sm text-gray-600">Client Rating</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1740&auto=format&fit=crop"
              alt="Construction site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur rounded-2xl shadow-xl px-6 py-4 border border-gray-100">
            <p className="text-sm text-gray-700">Licensed • Insured • Bonded</p>
          </div>
        </div>
      </div>
    </section>
  );
}
