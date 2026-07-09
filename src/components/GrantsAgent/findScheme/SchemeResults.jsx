import SchemeCard from "./SchemeCard";

export default function SchemeResults({
  filteredSchemes,
  totalSchemes,
  sort,
  onSortChange,
  onOpenScheme,
}) {
  return (
    <div className="mx-auto max-w-[1240px] px-[6%] md:px-10">
      <div className="flex flex-wrap items-center justify-between gap-2.5 py-[18px] pb-1">
        <div className="text-sm text-[#6B7280]">
          Showing{" "}
          <b className="font-['JetBrains_Mono',monospace] text-[#1F2937]">
            {filteredSchemes.length}
          </b>{" "}
          of{" "}
          <b className="font-['JetBrains_Mono',monospace] text-[#1F2937]">{totalSchemes}</b>{" "}
          schemes
        </div>
        <div className="flex items-center gap-2 text-[12.5px] text-[#6B7280]">
          Sort{" "}
          <select
            id="sortSel"
            className="w-auto cursor-pointer rounded-[10px] border-[1.5px] border-[#E5E7EB] bg-white px-2.5 py-[7px] text-[12.5px] font-medium text-[#1F2937] focus:border-[#A20202] focus:outline-none"
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="default">Playbook order</option>
            <option value="az">Name A→Z</option>
            <option value="support">Support type</option>
            <option value="ministry">Ministry</option>
          </select>
        </div>
      </div>
      <div
        className="grid grid-cols-1 gap-4 py-[18px] pb-[60px] min-[640px]:grid-cols-[repeat(auto-fill,minmax(310px,1fr))]"
        id="grid"
      >
        {filteredSchemes.length === 0 ? (
          <div className="col-span-full px-5 py-[70px] text-center text-[#6B7280]">
            <svg
              className="mx-auto mb-3.5 opacity-50"
              width="46"
              height="46"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <h3 className="mb-1.5 text-lg font-semibold text-[#6B7280]">
              No schemes match your filters
            </h3>
            <p>Try removing a filter or resetting.</p>
          </div>
        ) : (
          filteredSchemes.map((s) => (
            <SchemeCard key={s.name} scheme={s} onOpen={onOpenScheme} />
          ))
        )}
      </div>
    </div>
  );
}
