export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative mb-4">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        id="search"
        type="text"
        placeholder="Search 69 schemes — by name, ministry, sector, eligibility…"
        autoComplete="off"
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border-[1.5px] border-[#E5E7EB] bg-white py-3.5 pl-[46px] pr-4 text-[15.5px] text-[#1F2937] shadow-[0_1px_2px_rgba(31,41,55,0.04),0_4px_16px_rgba(31,41,55,0.06)] transition-[0.15s] focus:border-[#A20202] focus:outline-none focus:shadow-[0_0_0_4px_rgba(162,2,2,0.12)]"
      />
    </div>
  );
}
