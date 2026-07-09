export default function Coverage() {
  return (
    <div className="w-full rounded-[16px] border-t-[5px] border-t-[#A20202] border border-slate-200 bg-white px-6 py-8 shadow-sm text-center">
      <h3 className="mb-4 flex items-center justify-center gap-2 text-[16px] font-bold text-[#14202e]">
        <span className="text-[20px]">📄</span> Coverage
      </h3>
      <p className="text-[14.5px] leading-relaxed text-[#5b6b7c] max-w-[650px] mx-auto">
        This tool reproduces the full content of the{" "}
        <span className="italic font-medium text-slate-800">
          Playbook of Government Schemes and Initiatives for Startups
        </span>{" "}
        (June 2026):{" "}
        <strong className="text-[#A20202]">69 scheme one-pagers</strong> (30 startup-specific + 39 startup-relevant),{" "}
        <strong className="text-[#A20202]">17 PSU &amp; regulator initiatives</strong>,{" "}
        <strong className="text-[#A20202]">36 State/UT portals</strong>, and a{" "}
        <strong className="text-[#A20202]">16-term glossary</strong> — across 36 ministries and departments.
      </p>
    </div>
  );
}