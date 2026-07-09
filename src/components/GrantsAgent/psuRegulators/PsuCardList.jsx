import { linkify } from "../data/helpers";

export default function PsuCardList({ items }) {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-6 p-4"
      id="psuList"
    >
      {items.map((p) => {
        const isRegulator = p.type === "Regulator";
        
        // Custom color logic: 
        // PSU = #A20202 (Red)
        // Regulator = #8B0000 (Dark Red/Maroon)
        const primaryColor = isRegulator ? "#8B0000" : "#A20202";
        const bgColor = isRegulator ? "bg-[#fdf2f2]" : "bg-[#f7e2e2]";
        const textColor = isRegulator ? "text-[#8B0000]" : "text-[#A20202]";

        return (
          <div
            key={`${p.org}-${p.initiative}`}
            className="group relative overflow-hidden rounded-[20px] border border-black/[0.08] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(162,2,2,0.15)]"
          >
            {/* Dynamic Top Border */}
            <div
              className="absolute inset-x-0 top-0 h-[4px]"
              style={{ backgroundColor: primaryColor }}
            />

            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-10 w-10 flex-none items-center justify-center rounded-full text-sm font-bold ${bgColor} ${textColor}`}
                >
                  {p.org.slice(0, 1)}
                </div>
                <div className="pt-1.5 text-base font-semibold text-[#14202e] tracking-tight">
                  {p.org}
                </div>
              </div>
              <span
                className={`mt-1 flex-none rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${bgColor} ${textColor}`}
              >
                {isRegulator ? "Regulator" : "PSU"}
              </span>
            </div>

            <div className="mb-6 text-sm text-[#555] leading-relaxed">
              {p.initiative}
            </div>

            <div className="flex items-center justify-between border-t border-black/[0.06] pt-4">
              <a
                className="inline-flex items-center gap-2 text-xs font-bold transition-colors"
                style={{ color: "#A20202" }}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="truncate">{linkify(p.link)}</span>
              </a>
              <span 
                className="flex-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "#A20202" }}
              >
                ↗
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}