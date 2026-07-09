import { useCallback, useMemo, useState } from "react";
import DATA from "../data/playbookData.json";
import { INITIAL_FILTERS } from "../data/constants";
import { buildSearchBlob, matchScheme, sortSchemes } from "../data/helpers";
import SearchBar from "./SearchBar";
import FilterOptions from "./FilterOptions";
import SchemeResults from "./SchemeResults";
import SchemeModal from "./SchemeModal";

export default function FindScheme() {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [selectedScheme, setSelectedScheme] = useState(null);

  const schemes = useMemo(
    () => DATA.schemes.map((s) => ({ ...s, _blob: buildSearchBlob(s) })),
    []
  );

  const { sectorOptions, ministryOptions } = useMemo(() => {
    const secset = {};
    const minset = {};
    schemes.forEach((s) => {
      (s.sectors || []).forEach((x) => {
        secset[x] = (secset[x] || 0) + 1;
      });
      minset[s.ministry] = (minset[s.ministry] || 0) + 1;
    });
    return {
      sectorOptions: Object.entries(secset)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([name, count]) => ({ name, count })),
      ministryOptions: Object.entries(minset)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([name, count]) => ({ name, count })),
    };
  }, [schemes]);

  const filteredSchemes = useMemo(() => {
    const matched = schemes.filter((s) => matchScheme(s, filters));
    return sortSchemes(matched, filters.sort);
  }, [schemes, filters]);

  const toggleFilter = useCallback((key, value) => {
    setFilters((prev) => {
      const arr = [...prev[key]];
      const i = arr.indexOf(value);
      if (i < 0) arr.push(value);
      else arr.splice(i, 1);
      return { ...prev, [key]: arr };
    });
  }, []);

  const handleFilterChange = useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(INITIAL_FILTERS);
  }, []);

  return (
    <section id="view-schemes">
      <div className="border-b border-[#E5E7EB] bg-[#FAFAFA] py-5">
        <div className="mx-auto max-w-[1240px] px-[6%] md:px-10">
          <SearchBar
            value={filters.q}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, q: e.target.value.toLowerCase().trim() }))
            }
          />
          <FilterOptions
            filters={filters}
            sectorOptions={sectorOptions}
            ministryOptions={ministryOptions}
            filteredSchemes={filteredSchemes}
            onToggleFilter={toggleFilter}
            onFilterChange={handleFilterChange}
            onReset={resetFilters}
          />
        </div>
      </div>
      <SchemeResults
        filteredSchemes={filteredSchemes}
        totalSchemes={schemes.length}
        sort={filters.sort}
        onSortChange={(sort) => setFilters((prev) => ({ ...prev, sort }))}
        onOpenScheme={setSelectedScheme}
      />
      {selectedScheme && (
        <SchemeModal scheme={selectedScheme} onClose={() => setSelectedScheme(null)} />
      )}
    </section>
  );
}
