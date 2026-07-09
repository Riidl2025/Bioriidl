export default function ProcessBox({ title, children }) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">

      <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#A20202]/10 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-6 w-1 rounded-full bg-[#A20202]" />
          <h3 className="text-2xl font-bold text-slate-900">
            {title}
          </h3>
        </div>

        {children}
      </div>
    </section>
  );
}