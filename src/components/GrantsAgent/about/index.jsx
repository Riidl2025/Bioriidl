import AboutHeader from "./AboutHeader";
import HowToUse from "./HowToUse";
import SupportLegend from "./SupportLegend";
import Coverage from "./Coverage";
import Disclaimer from "./Disclaimer";

export default function About() {
  return (
    <section className="block py-16 bg-slate-50/40" id="view-about">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 flex flex-col items-center justify-center">
        
        <AboutHeader />
        
        {/* Centered layout wrapper using uniform vertical gaps */}
        <div className="flex flex-col gap-6 w-full max-w-[780px] items-center">
          <HowToUse />
          <SupportLegend />
          <Coverage />
          <Disclaimer />
        </div>
        
      </div>
    </section>
  );
}