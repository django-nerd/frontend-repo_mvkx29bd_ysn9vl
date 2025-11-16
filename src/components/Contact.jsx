import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const base = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
      const res = await fetch(`${base}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus({ ok: true, msg: "Thanks! We'll be in touch soon." });
        e.currentTarget.reset();
      } else {
        const err = await res.json().catch(() => ({}));
        setStatus({ ok: false, msg: err.detail || "Something went wrong." });
      }
    } catch (e) {
      setStatus({ ok: false, msg: e.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,rgba(17,24,39,0.03),rgba(255,255,255,0)_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Request a Free Quote</h2>
          <p className="mt-4 text-gray-600 max-w-md">
            Tell us about your project and we’ll respond within one business day.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div className="rounded-xl border border-gray-200 p-4 bg-white">
              <dt className="text-gray-500">Response Time</dt>
              <dd className="mt-1 font-semibold text-gray-900">Under 24 hours</dd>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 bg-white">
              <dt className="text-gray-500">Coverage</dt>
              <dd className="mt-1 font-semibold text-gray-900">Metro & Suburbs</dd>
            </div>
          </dl>
        </div>
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-gray-900 focus:border-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-gray-900 focus:border-gray-900" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input name="phone" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-gray-900 focus:border-gray-900" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Service</label>
              <select name="service" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-gray-900 focus:border-gray-900">
                <option>General Contracting</option>
                <option>Renovations</option>
                <option>Commercial Build-Outs</option>
                <option>Exterior & Roofing</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-gray-900 focus:border-gray-900" />
            </div>
          </div>
          <button disabled={loading} className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black disabled:opacity-60 shadow-sm">
            {loading ? "Sending..." : "Send Request"}
          </button>
          {status && (
            <p className={`mt-3 text-sm ${status.ok ? "text-green-700" : "text-red-700"}`}>
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
