import { TABS } from "./data/constants";

export default function TabNavigation({ activeTab, onTabChange }) {
  return (
    <nav className="sticky top-0 z-40 bg-[#A20202] shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
      <div className="mx-auto flex max-w-[1240px] gap-0.5 overflow-x-auto px-[6%] [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden">
        {TABS.map(([id, icon, label, count]) => (
          <button
            key={id}
            type="button"
            className={`flex shrink-0 cursor-pointer items-center gap-[7px] whitespace-nowrap border-b-[3px] border-transparent px-[18px] py-3.5 text-[13.5px] transition-all duration-200 ${
              activeTab === id
                ? "border-white font-semibold text-white"
                : "text-white/90 hover:text-white"
            }`}
            onClick={() => onTabChange(id)}
          >
            <span className="text-[15px] text-white opacity-90">{icon}</span>
            {label}
            {count !== "" && (
              <span className="rounded-[20px] bg-white px-1.5 py-px font-['JetBrains_Mono',monospace] text-[11px] font-bold text-[#A20202]">
                {count}
              </span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
