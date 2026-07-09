export default function Section({ icon, title, children }) {
  if (!children) return null;
  return (
    <div className="border-b border-[#E5E7EB] py-[19px] last:border-b-0">
      <h4 className="mb-[11px] flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#A20202]">
        {icon} {title}
      </h4>
      {children}
    </div>
  );
}
