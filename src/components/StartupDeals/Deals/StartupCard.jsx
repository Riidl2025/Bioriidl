export default function StartupCard({ startup, onViewMore }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border-[3px] border-[#A20202] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(162,2,2,0.12)] sm:p-6">
      <div className="mb-5 flex items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-[#fff7f7] sm:h-24 sm:w-24">
          <img
            src={startup.logo}
            alt={`${startup.name} logo`}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <h3 className="mb-2 text-center text-[16px] font-bold leading-tight text-[#14202e] sm:text-[17px]">
        {startup.name}
      </h3>

      <p className="mb-6 flex-1 text-center text-[13px] leading-relaxed text-[#5b6b7c] line-clamp-4 sm:text-[14px]">
        {startup.description}
      </p>

      <button
        type="button"
        onClick={() => onViewMore(startup)}
        className="mt-auto w-full rounded-[10px] bg-[#A20202] px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#8B0202] hover:shadow-[0_6px_16px_rgba(162,2,2,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A20202]/40 focus-visible:ring-offset-2"
      >
        View More
      </button>
    </article>
  );
}
