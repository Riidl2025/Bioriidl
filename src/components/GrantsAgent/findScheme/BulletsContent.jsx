export default function BulletsContent({ text }) {
  if (!text) return null;
  const parts = text
    .split("•")
    .map((x) => x.trim())
    .filter(Boolean);
  if (parts.length > 1) {
    return (
      <ul className="flex list-none flex-col gap-[9px]">
        {parts.map((p) => (
          <li
            key={p}
            className="relative pl-[22px] text-sm leading-[1.55] text-[#1F2937] before:absolute before:left-0.5 before:top-2 before:h-[7px] before:w-[7px] before:rounded-full before:bg-[#A20202] before:opacity-80 before:content-['']"
          >
            {p}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="text-[14.5px] leading-[1.62] text-[#1F2937]">{text.replace(/^•\s*/, "")}</p>;
}
