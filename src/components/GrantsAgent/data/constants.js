import DATA from "./playbookData.json";

const M = DATA.meta;

export const TABS = [
  ["schemes", "🔎", "Find a Scheme", M.total_schemes],
  ["psu", "🏢", "PSU & Regulators", M.psu_count],
  ["states", "🗺️", "State Portals", M.state_count],
  ["glossary", "📖", "Glossary", DATA.glossary.length],
  ["about", "ℹ️", "About", ""],
];

export const STATS = [
  [M.total_schemes, "Central Schemes"],
  [M.specific, "Startup-Specific"],
  [M.relevant, "Startup-Relevant"],
  [M.ministries, "Ministries/Depts"],
  [M.psu_count, "PSU & Regulators"],
  [M.state_count, "State/UT Portals"],
];

export const INITIAL_FILTERS = {
  q: "",
  support: [],
  stage: [],
  sector: "",
  ministry: "",
  focus: "",
  sort: "default",
};
