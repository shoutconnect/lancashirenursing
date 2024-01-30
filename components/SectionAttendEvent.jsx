import DataEVentsDays from "../data/DataEventsDays";
import CardEvent from "./CardEvent";

export default function SectionAttendEvent() {
  return (
    <div className="margin-x margin-y flex flex-col items-center gap-10 text-center">
      <div className="margin-y flex flex-col items-center gap-10 text-center">
        <h2> Attend a Nursing Career Clinic </h2>
        <p className="w-[80%]">
          Are you interested in learn more about a career in nursing? We are
          hosting a series of Nursing Career Clinics to give you the opportunity
          to find out more about the different nursing roles available at NHS
          Lancashire Teaching Hospitals. <br />
          <br />
          Check below for the dates and times of our upcoming Nursing Career
          Clinics:
        </p>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10">
        {DataEVentsDays.map((item, i) => {
          return <CardEvent key={i} item={item} />;
        })}
      </div>
    </div>
  );
}
