export default function Hero() {
  return (
    <section className="pt-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            We design, build, and renovate spaces you’ll love
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            A full-service construction company specializing in residential and commercial projects.
            Quality craftsmanship, transparent timelines, and safety-first execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-400 transition-colors">
              Get a Free Quote
            </a>
            <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors">
              View Projects
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900">10+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">120+</p>
              <p className="text-sm text-gray-600">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">4.9/5</p>
              <p className="text-sm text-gray-600">Client Rating</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gray-200 overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1740&auto=format&fit=crop"
              alt="Construction site"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-md px-6 py-4 border border-gray-100">
            <p className="text-sm text-gray-600">Licensed • Insured • Bonded</p>
          </div>
        </div>
      </div>
    </section>
  );
}
