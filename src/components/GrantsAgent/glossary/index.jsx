import DATA from "../data/playbookData.json";
import GlossaryHeader from "./GlossaryHeader";
import GlossaryList from "./GlossaryList";

export default function Glossary() {
  return (
    <section className="block bg-[#FAFAFA] py-[30px] pb-[70px]" id="view-glossary">
      <div className="mx-auto max-w-[1240px] px-[6%] md:px-10">
        <GlossaryHeader />
        <GlossaryList items={DATA.glossary} />
      </div>
    </section>
  );
}
