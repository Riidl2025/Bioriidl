import { Link, useParams } from "react-router-dom";
import { startups } from "../data/startups.js";

export default function StartupDetails() {
  const { startupId } = useParams();
  const startup = startups.find((item) => item.id === startupId);

  if (!startup) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="mb-8">
            <Link
              to="/startups"
              className="text-sm font-medium text-[#A20202] transition-colors duration-200 hover:text-[#7f0202]"
            >
              ← Back to Startups
            </Link>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm sm:p-12">
            <p className="text-base text-slate-600">Startup not found.</p>
          </div>
        </section>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="mb-8">
          <Link
            to="/startups"
            className="text-sm font-medium text-[#A20202] transition-colors duration-200 hover:text-[#7f0202]"
          >
            ← Back to Startups
          </Link>
        </div>

        <article className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[180px_1fr] lg:items-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-slate-100 bg-slate-50">
              {startup.logo ? (
                <img
                  src={startup.logo}
                  alt={`${startup.name} logo`}
                  className="max-h-20 object-contain"
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-200 text-sm text-slate-500">
                  No logo
                </div>
              )}
            </div>

            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#A20202]/70">
                STARTUP
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                {startup?.name}
              </h1>
              <p className="max-w-3xl text-[15px] leading-8 text-slate-500 sm:text-base">
                {startup?.description}
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-7">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-950">
                About {startup?.name}
              </h2>
              <p className="text-[15px] leading-8 text-slate-500">
                {startup?.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {startup?.links?.length > 0 ? (
                startup.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[#A20202]/20 bg-[#A20202]/5 px-5 py-3 text-sm font-semibold text-[#A20202] transition duration-200 hover:bg-[#A20202]/10 hover:text-[#7f0202]"
                  >
                    {link.label}
                  </a>
                ))
              ) : (
                <div className="text-sm text-slate-500">No public link available</div>
              )}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
