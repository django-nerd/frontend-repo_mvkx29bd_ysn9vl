import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
        const res = await fetch(`${base}/api/projects`);
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="projects" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Recent Projects</h2>
            <p className="mt-3 text-gray-600">A sample of our delivered work.</p>
          </div>
        </div>

        {loading ? (
          <p className="mt-10 text-gray-600">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="mt-10 text-gray-600">
            No projects yet. Add some via the API to showcase your portfolio.
          </p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.id} className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                <div className="aspect-[4/3] bg-gray-200">
                  <img
                    src={p.images?.[0] || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1740&auto=format&fit=crop"}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-3">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
