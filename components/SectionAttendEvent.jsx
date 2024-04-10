"use client";
import { useEffect, useState } from "react";
import DataEventsDays from "../data/DataEventsDays";
import CardEvent from "./CardEvent";

export default function SectionAttendEvent() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const today = new Date();
    const formattedToday = today.toISOString().slice(0, 10);
    const todayDate = new Date(formattedToday);

    // Filter the events directly from the imported data
    const filteredEvents = DataEventsDays.filter((item) => {
      const eventDate = new Date(item.date);
      return eventDate >= todayDate;
    });

    // Update the state with the filtered events
    setUpcomingEvents(filteredEvents);
  }, []);

  return (
    <div className="bg-zinc-50" id="clinic-dates">
      <div className="margin-x margin-y flex flex-col items-center gap-10 text-center ">
        <div className="pb-16 flex flex-col items-center gap-10 text-center">
          <h2 className="max-sm:w-[70%]">
            {" "}
            Attend a <br />
            <span className="text-blue-600"> Nursing Career Clinic </span>
          </h2>
          <p className="w-[80%]">
            Are you interested in learning more about a career in nursing? We
            are hosting Nursing Career Clinics to give you the opportunity to
            find out more about the different nursing roles available at NHS
            Lancashire Teaching Hospitals. <br />
            <span className="text-blue-600 font-bold">
              {" "}
              Check below for the dates and times of our upcoming Nursing Career
              Clinics:
            </span>
          </p>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10">
          {upcomingEvents.slice(0, 6).map((item, i) => {
            return <CardEvent key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
