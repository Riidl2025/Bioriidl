import { STAGES, SUPPORT_TYPES, downloadCsv } from "../data/helpers";

export default function FilterOptions({ filters, sectorOptions, ministryOptions, filteredSchemes, onToggleFilter, onFilterChange, onReset }) {
  return (
    <div className="space-y-6">
      {/* Support Type Section */}
      <div>
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.09em] text-slate-500 flex items-center gap-2">
          💰 What kind of support do you need?
        </div>
        <div className="flex flex-wrap gap-2">
          {SUPPORT_TYPES.map((name) => (
            <button
              key={name}
              onClick={() => onToggleFilter("support", name)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                filters.support.includes(name) 
                  ? "bg-[#A20202] text-white border-[#A20202]" 
                  : "bg-white text-slate-600 border-[#A20202]/30 hover:border-[#A20202]"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Stage Section */}
      <div>
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.09em] text-slate-500 flex items-center gap-2">
          📈 Stage of your startup
        </div>
        <div className="flex flex-wrap gap-2">
          {STAGES.map((name) => (
            <button
              key={name}
              onClick={() => onToggleFilter("stage", name)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                filters.stage.includes(name) 
                  ? "bg-[#A20202] text-white border-[#A20202]" 
                  : "bg-white text-slate-600 border-[#A20202]/30 hover:border-[#A20202]"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Selects and Actions Row */}
      <div className="flex flex-wrap items-end gap-3">
        {[
          { key: "sector", opt: sectorOptions, label: "Sector", icon: "🏭" },
          { key: "ministry", opt: ministryOptions, label: "Ministry / Department", icon: "🏛️" },
          { key: "focus", opt: [{name: "Startup-Specific"}, {name: "Startup-Relevant"}], label: "Eligibility Focus", icon: "🎯" }
        ].map((item) => (
          <div key={item.key} className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold uppercase tracking-[0.09em] text-slate-500 pl-1">
              {item.icon} {item.label}
            </label>
            <select
              className="w-[260px] rounded-[10px] border border-[#A20202]/30 bg-white px-4 py-[11px] text-sm text-slate-700 outline-none focus:border-[#A20202]"
              value={filters[item.key]}
              onChange={(e) => onFilterChange(item.key, e.target.value)}
            >
              <option value="">All {item.label.toLowerCase()}</option>
              {item.opt.map((o) => (
                <option key={o.name} value={o.name}>{o.name}</option>
              ))}
            </select>
          </div>
        ))}

        <div className="flex gap-2">
          <button type="button" onClick={onReset} className="rounded-[10px] border border-[#A20202]/30 bg-white px-5 py-[11px] text-sm font-semibold text-slate-600 hover:border-[#A20202] hover:text-[#A20202]">
            ↺ Reset
          </button>
          <button type="button" onClick={() => downloadCsv(filteredSchemes)} className="rounded-[10px] bg-[#A20202] px-5 py-[11px] text-sm font-semibold text-white hover:bg-[#8B0202]">
            ⬇ Download CSV
          </button>
        </div>
      </div>
    </div>
  );
}