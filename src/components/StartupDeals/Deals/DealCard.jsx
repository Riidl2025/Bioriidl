export default function DealCard({ deal, onViewMore }) {
  return (
    <article className="group flex flex-col gap-8 rounded-3xl border border-[#A20202]/15 bg-white p-7 shadow-[0_2px_12px_rgba(20,32,46,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(20,32,46,0.1)] sm:p-8 lg:flex-row lg:items-center lg:gap-10">
      <div className="flex shrink-0 justify-center lg:justify-start">
        <div className="flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_2px_8px_rgba(20,32,46,0.06)] sm:h-[128px] sm:w-[128px]">
          <img
            src={deal.image}
            alt={`${deal.startupName} logo`}
            className="h-[80%] w-[80%] object-contain"
          />
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-xl font-bold leading-tight tracking-tight text-[#14202e] sm:text-2xl">
          {deal.title}
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#5b6b7c]/75 sm:text-[15px] sm:leading-7">
          {deal.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100/90 px-3 py-1 text-[10px] font-medium text-[#5b6b7c]/90">
            Instant Access
          </span>
          <span className="rounded-full bg-slate-100/90 px-3 py-1 text-[10px] font-medium text-[#5b6b7c]/90">
            Secure Payment
          </span>
          <span className="rounded-full bg-slate-100/90 px-3 py-1 text-[10px] font-medium text-[#5b6b7c]/90">
            Best Pricing
          </span>
        </div>
      </div>

      <div className="w-full shrink-0 lg:w-52 xl:w-56">
        <div className="flex flex-col items-center rounded-2xl bg-slate-50/80 p-5 shadow-[0_2px_10px_rgba(20,32,46,0.04)] sm:p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-[#5b6b7c]/70">
            Starting from
          </p>
          <p className="mt-1.5 text-3xl font-bold leading-none tracking-tight text-[#14202e]">
            ₹50
          </p>

          <button
            type="button"
            onClick={() => onViewMore(deal)}
            className="mt-5 w-full rounded-xl bg-[#A20202] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(162,2,2,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8B0202] hover:shadow-[0_8px_20px_rgba(162,2,2,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A20202]/40 focus-visible:ring-offset-2"
          >
            View Details →
          </button>
        </div>
      </div>
    </article>
  );
}
