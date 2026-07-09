export default function GlossaryList({ items }) {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-3.5"
      id="glossList"
    >
      {items.map((g) => (
        <div
          key={g.term}
          className="rounded-[10px] border-2 border-[#A20202] bg-white px-[18px] py-4 shadow-[0_1px_2px_rgba(31,41,55,0.04),0_4px_16px_rgba(31,41,55,0.06)] transition-shadow hover:shadow-[0_10px_30px_rgba(162,2,2,0.1)]"
        >
          <div className="mb-1.5 text-[14.5px] font-bold text-[#1F2937]">{g.term}</div>
          <div className="text-[13px] leading-[1.55] text-[#6B7280]">{g.def}</div>
        </div>
      ))}
    </div>
  );
}
