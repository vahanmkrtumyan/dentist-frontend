import React from "react";
import { Breadcrumb, SimpleCard } from "matx";
import CalendarContainer from "./EventsCalendar/CalendarContainer";

function EventsContainer() {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Events", path: "/events" },
            { name: "Calendar" },
          ]}
        />
      </div>
      <SimpleCard title="Events Calendar">
        <CalendarContainer />
      </SimpleCard>
    </div>
  );
}

export default EventsContainer;
