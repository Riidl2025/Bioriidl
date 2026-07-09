import { SUP } from "../data/helpers";

const tagStyles = {
  grant: "bg-[#DCFCE7] text-[#15803D]",
  equity: "bg-[#F3E8FF] text-[#7E22CE]",
  loan: "bg-[#FFEDD5] text-[#C2410C]",
  incub: "bg-[#CFFAFE] text-[#0E7490]",
  market: "bg-[#DBEAFE] text-[#1D4ED8]",
  mixed: "bg-[#F3F4F6] text-[#6B7280]",
};

export default function SchemeCard({ scheme, onOpen }) {
  const k = SUP[scheme.support_type]?.k || "mixed";
  const secchips = (scheme.sectors || []).slice(0, 3);

  return (
    <div
      className="group relative flex cursor-pointer flex-col rounded-[12px] border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-[#A20202] hover:shadow-md"
      tabIndex={0}
      role="button"
      onClick={() => onOpen(scheme)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onOpen(scheme); }}
    >
      {/* Red Accent Bar: The dedicated red design element */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#A20202] rounded-t-[12px]" />
      
      <div className="mt-3 mb-3 flex items-center justify-between">
        <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${tagStyles[k]}`}>
          {scheme.support_type}
        </span>
        {scheme.abbr && (
          <span className="text-[11px] font-mono font-bold text-slate-400">
            {scheme.abbr}
          </span>
        )}
      </div>
      
      <h3 className="mb-2 text-[16px] font-bold text-slate-900 leading-tight">
        {scheme.name}
      </h3>
      
      <p className="mb-4 text-[13px] text-slate-500 leading-relaxed line-clamp-2 flex-1">
        {scheme.what_is}
      </p>
      
      <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap gap-2">
        {secchips.map((x) => (
          <span key={x} className="rounded-[4px] bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-500">
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}