export default function SupportLegend() {
  const legendItems = [
    ["bg-[#1b7a52]", "Grant"], ["bg-[#5b3fa0]", "Equity"], ["bg-[#c2741a]", "Loan"],
    ["bg-[#0d7c86]", "Incubation"], ["bg-[#2563a8]", "Market Access"], ["bg-[#5a6b7b]", "Mixed"]
  ];

  return (
    <div className="w-full rounded-[16px] border-t-[5px] border-t-[#A20202] border border-slate-200 bg-white px-6 py-8 shadow-sm text-center">
      <h3 className="mb-5 flex items-center justify-center gap-2 text-[16px] font-bold text-[#14202e]">
        ⚡ Support-type legend
      </h3>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-[600px] mx-auto">
        {legendItems.map(([color, label]) => (
          <div key={label} className="flex items-center gap-2 text-[13.5px] text-[#5b6b7c]">
            <span className={`h-3 w-3 rounded-full ${color}`} />
            {label}
          </div>
        ))}
      </div>
      <div className="mt-8 pt-5 border-t border-slate-100 text-[13.5px] text-[#5b6b7c] max-w-[600px] mx-auto">
        <strong className="text-[#A20202]">Startup-Specific</strong> (Primary) | <strong className="text-[#A20202]">Startup-Relevant</strong> (Broader MSME/Industry)
      </div>
    </div>
  );
}