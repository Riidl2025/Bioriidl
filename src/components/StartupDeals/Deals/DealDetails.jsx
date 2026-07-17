export default function DealDetails({ deal }) {
  return (
    <div className="mx-auto -mt-1 w-full max-w-4xl sm:-mt-2">
      <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm sm:px-4 sm:py-3.5">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-[#fff7f7] sm:h-14 sm:w-14">
            <img
              src={deal.image}
              alt={`${deal.startupName} logo`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="mb-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A20202] sm:text-xs">
              {deal.startupName}
            </p>

            <h2 className="mb-0.5 font-['Fraunces',Georgia,serif] text-lg font-bold leading-snug text-[#14202e] sm:text-xl">
              {deal.title}
            </h2>

            <p className="mx-auto max-w-2xl text-[14px] leading-[1.5] text-[#5b6b7c] sm:mx-0 sm:max-w-none sm:text-[15px]">
              {deal.fullDescription}
            </p>
          </div>
        </div>

        <div className="mt-2">
          <h3 className="mb-1.5 text-base font-bold text-[#14202e]">
            How to Claim
          </h3>

          <ol className="space-y-0.5">
            {deal.claimSteps.map((step, index) => (
              <li
                key={`${deal.id}-step-${index}`}
                className="flex items-center gap-2 rounded-lg border border-slate-100 bg-[#f6f7f9] px-2 py-1 sm:px-2.5 sm:py-1"
              >
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#A20202] text-[11px] font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-left text-[13px] leading-snug text-[#14202e] sm:text-[14px]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-2 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
          <button
            type="button"
            onClick={() =>
              alert("Claim functionality will be integrated later.")
            }
            className="inline-flex items-center justify-center rounded-[10px] bg-[#A20202] px-6 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#8B0202] hover:shadow-[0_6px_16px_rgba(162,2,2,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A20202]/40 focus-visible:ring-offset-2"
          >
            Claim Now
          </button>
        </div>
      </div>
    </div>
  );
}
