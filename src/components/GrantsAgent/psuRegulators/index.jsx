import DATA from "../data/playbookData.json";
import PsuHeader from "./PsuHeader";
import PsuCardList from "./PsuCardList";

export default function PsuRegulators() {
  return (
    <section className="panel active py-[30px] pb-[70px]" id="view-psu">
      <div className="wrap mx-auto max-w-[1240px] px-[6%] md:px-10">
        <PsuHeader />
        <PsuCardList items={DATA.psu} />
      </div>
    </section>
  );
}