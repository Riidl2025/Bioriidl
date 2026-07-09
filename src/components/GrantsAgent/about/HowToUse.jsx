export default function HowToUse() {
  return (
    // Added border-t-[5px] border-t-[#A20202] as a top accent
    <div className="w-full rounded-[16px] border-t-[5px] border-t-[#A20202] border border-slate-200 bg-white px-6 py-8 shadow-sm text-center">
      <h3 className="mb-6 flex items-center justify-center gap-[9px] text-[16px] font-bold text-[#14202e]">
        <span>🕘</span> How to use this finder
      </h3>
      <div className="space-y-4 max-w-[650px] mx-auto text-left md:text-center">
        {/* Using a flex-based list for perfect center alignment */}
        {[
          "Search by scheme name, ministry, sector or eligibility keyword.",
          "Filter by need — pick the kind of support (grant, equity, loan, etc).",
          "Filter by stage — from ideation to scaling.",
          "Narrow further by sector, ministry, or eligibility focus.",
          "Click any card to open its full one-pager details.",
          "Download CSV to get the full structured dataset of all 69 schemes."
        ].map((item, i) => (
          <p key={i} className="text-sm leading-relaxed text-[#5b6b7c]">
            • {item}
          </p>
        ))}
      </div>
    </div>
  );
}