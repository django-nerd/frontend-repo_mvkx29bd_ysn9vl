import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-extrabold text-xl text-gray-900">
          <span className="inline-block w-8 h-8 rounded bg-yellow-500"></span>
          BuildRight Construction
        </a>
        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
