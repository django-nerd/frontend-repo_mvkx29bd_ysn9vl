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
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Request a Free Quote</h2>
          <p className="mt-3 text-gray-600">
            Tell us about your project and we’ll respond within one business day.
          </p>
          <div className="mt-6 space-y-4 text-gray-700">
            <p>• Licensed, insured, and bonded</p>
            <p>• Clear timelines and communication</p>
            <p>• Trusted local crews</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input name="phone" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Service</label>
              <select name="service" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-yellow-500 focus:border-yellow-500">
                <option>General Contracting</option>
                <option>Renovations</option>
                <option>Commercial Build-Outs</option>
                <option>Exterior & Roofing</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
          </div>
          <button disabled={loading} className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-400 disabled:opacity-60">
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
