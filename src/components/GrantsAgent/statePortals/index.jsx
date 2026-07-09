import { useMemo, useState } from "react";
import DATA from "../data/playbookData.json";
import StateHeader from "./StateHeader";
import StateSearchBar from "./StateSearchBar";
import StateGrid from "./StateGrid";

export default function StatePortals() {
  const [stateSearch, setStateSearch] = useState("");

  const filteredStates = useMemo(() => {
    const q = stateSearch.toLowerCase().trim();
    return DATA.states.filter((s) => !q || s.name.toLowerCase().includes(q));
  }, [stateSearch]);

  return (
    // Applied a neutral, clean background common in scientific interface design
    <section className="block py-16 bg-[#fafafa]" id="view-states">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        
        {/* Adjusted spacing to create a clear focal point */}
        <div className="mb-12 flex flex-col items-center text-center">
          <StateHeader />
        </div>

        <div className="flex justify-center mb-12">
          {/* Search bar is kept prominent to maintain user-centric focus */}
          <StateSearchBar
            value={stateSearch}
            onChange={(e) => setStateSearch(e.target.value)}
          />
        </div>

        {/* Content grid remains structured and organized */}
        <div className="transition-all duration-500 ease-in-out">
          <StateGrid states={filteredStates} />
        </div>
        
      </div>
    </section>
  );
}