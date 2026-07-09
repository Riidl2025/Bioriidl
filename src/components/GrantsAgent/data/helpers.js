export const SUP = {
  Grant: { k: "grant" },
  Equity: { k: "equity" },
  "Loan / Credit": { k: "loan" },
  Incubation: { k: "incub" },
  "Market Access": { k: "market" },
  Mixed: { k: "mixed" },
};

export const STAGES = [
  "Ideation",
  "Prototype / PoC",
  "Seed / Early-Stage",
  "Growth / Scaling",
  "Market Access & IP",
  "Any Stage",
];

export const SUPPORT_TYPES = Object.keys(SUP);

export function linkify(url) {
  let label = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  if (label.length > 54) label = `${label.slice(0, 54)}…`;
  return label;
}

export function buildSearchBlob(scheme) {
  return [
    scheme.name,
    scheme.abbr,
    scheme.ministry,
    scheme.what_is,
    scheme.objectives,
    scheme.who_can_apply,
    scheme.what_you_get,
    (scheme.sectors || []).join(" "),
    scheme.support_type,
    scheme.stage,
    scheme.group,
  ]
    .join(" ")
    .toLowerCase();
}

export function matchScheme(scheme, state) {
  if (state.q && !scheme._blob.includes(state.q)) return false;
  if (state.support.length && !state.support.includes(scheme.support_type)) return false;
  if (
    state.stage.length &&
    !state.stage.some((st) => (scheme.lifecycle || []).includes(st))
  )
    return false;
  if (state.sector && !(scheme.sectors || []).includes(state.sector)) return false;
  if (state.ministry && scheme.ministry !== state.ministry) return false;
  if (state.focus && scheme.group !== state.focus) return false;
  return true;
}

export function sortSchemes(list, sort) {
  const l = [...list];
  if (sort === "az") l.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === "support")
    l.sort(
      (a, b) =>
        a.support_type.localeCompare(b.support_type) || a.name.localeCompare(b.name)
    );
  else if (sort === "ministry")
    l.sort(
      (a, b) => a.ministry.localeCompare(b.ministry) || a.name.localeCompare(b.name)
    );
  return l;
}

export function downloadCsv(schemes) {
  const cols = [
    "No",
    "Scheme Name",
    "Abbreviation",
    "Focus",
    "Support Type",
    "Best Suited / Stage",
    "Sectors",
    "Nodal Ministry / Department",
    "What Is This",
    "Who Can Apply",
    "What You Get",
    "How To Apply",
    "Website",
    "All Links",
    "Source Page",
  ];
  const q = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const rows = [cols.map(q).join(",")];
  schemes.forEach((s, i) => {
    rows.push(
      [
        i + 1,
        s.name,
        s.abbr,
        s.group,
        s.support_type,
        s.stage,
        (s.sectors || []).join("; "),
        s.ministry,
        s.what_is,
        s.who_can_apply,
        s.what_you_get,
        s.how_to_apply,
        s.website || "",
        (s.links || []).join(" | "),
        s.page,
      ]
        .map(q)
        .join(",")
    );
  });
  const blob = new Blob(["\ufeff" + rows.join("\r\n")], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Government_Startup_Schemes.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
