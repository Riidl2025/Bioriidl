import { SUP, STAGES, SUPPORT_TYPES, downloadCsv } from "../data/helpers";

const swatchColors = {
  grant: "#16A34A",
  equity: "#7C3AED",
  loan: "#EA580C",
  incub: "#0891B2",
  market: "#2563EB",
  mixed: "#6B7280",
};

export default function FilterOptions({ filters, sectorOptions, ministryOptions, filteredSchemes, onToggleFilter, onFilterChange, onReset }) {
  return (
    <>
      <div className="mb-2 ml-0.5 text-[11px] font-bold uppercase tracking-[0.09em] text-[#6B7280]">
        🔎 What kind of support do you need?
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        {SUPPORT_TYPES.map((name) => (
          <button
            key={name}
            onClick={() => onToggleFilter("support", name)}
            className={`flex items-center gap-2 rounded-full border border-[#A20202] px-4 py-2 text-[13px] font-semibold transition-all duration-150 ${
              filters.support.includes(name) ? "bg-[#A20202] text-white" : "bg-white text-[#A20202] hover:bg-[#A20202]/5"
            }`}
          >
            <span className="h-2 w-2 rounded-full" style={{ background: swatchColors[SUP[name].k] }} />
            {name}
          </button>
        ))}
      </div>

      {/* Row containing Title + Reset/Download buttons */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="ml-0.5 text-[11px] font-bold uppercase tracking-[0.09em] text-[#6B7280]">
          📊 Stage of your startup
        </div>
        
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onReset}
            className="rounded-full border border-[#A20202] bg-white px-4 py-1.5 text-[12px] font-semibold text-[#A20202] transition-all hover:bg-[#A20202]/5"
          >
            ↺ Reset
          </button>
          <button
            type="button"
            onClick={() => downloadCsv(filteredSchemes)}
            className="rounded-full border border-[#A20202] bg-[#A20202] px-4 py-1.5 text-[12px] font-semibold text-white transition-all hover:bg-[#8C0101]"
          >
            ⬇ Download CSV
          </button>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {STAGES.map((name) => (
          <button
            key={name}
            onClick={() => onToggleFilter("stage", name)}
            className={`rounded-full border border-[#A20202] px-4 py-2 text-[13px] font-semibold transition-all duration-150 ${
              filters.stage.includes(name) ? "bg-[#A20202] text-white" : "bg-white text-[#A20202] hover:bg-[#A20202]/5"
            }`}
          >
            {name}
          </button>
        ))}
      </div>
      
      {/* Sector, Ministry, Focus selects would follow here */}
    </>
  );
}