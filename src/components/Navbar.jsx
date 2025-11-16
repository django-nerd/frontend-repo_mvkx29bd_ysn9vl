import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="group flex items-center gap-3">
          <span className="relative inline-grid place-items-center w-9 h-9 rounded-lg overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-amber-500 to-orange-600" />
            <span className="relative text-white font-black">B</span>
          </span>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-gray-900">
            BuildRight Construction
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">Services</a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-4 py-2 shadow-sm hover:shadow-md hover:bg-black transition-all"
          >
            Get a Quote
          </a>
        </nav>
        <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300/70 bg-white/70">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
