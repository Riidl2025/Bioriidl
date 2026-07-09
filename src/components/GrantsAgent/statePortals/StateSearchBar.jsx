export default function StateSearchBar({ value, onChange }) {
  return (
    <input
      id="stateSearch"
      type="text"
      placeholder="Filter States / UTs…"
      // mr-auto ensures it stays pinned to the left if the parent is a flex container
      className="mb-8 block mr-auto w-full max-w-[360px] rounded-[16px] border border-slate-200 bg-white px-5 py-[13px] text-sm text-[#14202e] shadow-sm transition-all duration-300 placeholder:text-slate-400 focus:border-[#A20202] focus:ring-2 focus:ring-[#A20202]/10 focus:outline-none"
      value={value}
      onChange={onChange}
    />
  );
}