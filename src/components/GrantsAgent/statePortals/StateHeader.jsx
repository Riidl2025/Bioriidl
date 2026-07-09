export default function StateHeader() {
  return (
    // 'mr-auto' ensures that even if the container has extra space, 
    // the component stays pinned to the left.
    <div className="my-1.5 mb-[32px] mr-auto text-left">
      <h2 className="mb-3 font-['Fraunces',serif] text-[32px] font-semibold text-[#14202e] tracking-tight">
        State &amp; UT Startup Portals
      </h2>
      <p className="max-w-[70ch] text-[15px] leading-relaxed text-[#5b6b7c]">
        Official startup-policy and support portals for all States and Union Territories. 
        <span className="block mt-1 font-medium text-[#A20202]">
          Central schemes often stack with State incentives — check your home State too.
        </span>
      </p>
    </div>
  );
}