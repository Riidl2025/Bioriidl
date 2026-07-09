export default function StateGrid({ states }) {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4"
      id="statesList"
    >
      {states.map((s) => (
        <div
          key={s.name}
          className="group flex items-center justify-between rounded-[12px] border border-slate-200 border-l-[4px] border-l-[#A20202] bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <span className="text-[14px] font-semibold text-slate-800">
            {s.name}
          </span>
          <a
            className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider transition-colors hover:text-[#650000]"
            style={{ color: "#A20202" }}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Portal 
            <span className="opacity-60 transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
      ))}
    </div>
  );
}