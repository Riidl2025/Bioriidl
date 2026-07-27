import { Gift, ArrowRight } from "lucide-react";

export default function StartupCard({ startup, onViewMore }) {
  return (
    <article className="group flex flex-col gap-8 rounded-3xl border border-[#A20202]/15 bg-white p-7 shadow-[0_2px_12px_rgba(20,32,46,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(20,32,46,0.1)] sm:p-8 lg:flex-row lg:items-center lg:gap-12">
      <div className="flex shrink-0 justify-center lg:justify-start">
      <div className="flex h-[170px] w-[170px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_2px_8px_rgba(20,32,46,0.06)]">
          <img
            src={startup.logo}
            alt={`${startup.name} logo`}
            className="h-[88%] w-[88%] object-contain"
          />
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <span className="inline-flex items-center rounded-full border border-emerald-200/70 bg-emerald-50/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
          Verified Partner
        </span>

        <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight text-[#14202e] sm:text-2xl">
          {startup.name}
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#5b6b7c]/75 sm:text-[15px] sm:leading-7">
          {startup.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <span className="rounded-full bg-slate-100 px-3.5 py-1.5 text-[11px] font-medium text-[#5b6b7c] transition-colors duration-200 hover:bg-slate-200/80">
            AI Tools
          </span>
          <span className="rounded-full bg-slate-100 px-3.5 py-1.5 text-[11px] font-medium text-[#5b6b7c] transition-colors duration-200 hover:bg-slate-200/80">
            Student Discounts
          </span>
          <span className="rounded-full bg-slate-100 px-3.5 py-1.5 text-[11px] font-medium text-[#5b6b7c] transition-colors duration-200 hover:bg-slate-200/80">
            Exclusive Credits
          </span>
        </div>
      </div>

      <div className="w-full shrink-0 lg:w-52 xl:w-56">
        <div className="flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_2px_10px_rgba(20,32,46,0.05)] sm:p-6">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#A20202]/8 text-[#A20202]">
            <Gift className="h-4 w-4" strokeWidth={2} />
          </div>

          <p className="text-3xl font-bold leading-none tracking-tight text-[#14202e]">
            1
          </p>
          <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-[#5b6b7c]/80">
            Active Deal
          </p>

          <button
            type="button"
            onClick={() => onViewMore(startup)}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#A20202] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(162,2,2,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8B0202] hover:shadow-[0_8px_20px_rgba(162,2,2,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A20202]/40 focus-visible:ring-offset-2"
          >
            View Deals
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </article>
  );
}
