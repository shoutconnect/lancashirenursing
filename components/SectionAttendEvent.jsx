import DataEVentsDays from "../data/DataEventsDays";
import CardEvent from "./CardEvent";

export default function SectionAttendEvent() {
  return (
    <div className="margin-x margin-y ">
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10">
        {DataEVentsDays.map((item, i) => {
          return <CardEvent key={i} item={item} />;
        })}
      </div>
    </div>
  );
}
