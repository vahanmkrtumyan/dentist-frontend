import React, { useState, useCallback } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddEvent from "./AddEvent";

const localizer = momentLocalizer(moment);

function CalendarContainer() {
  const [slot, setSlot] = useState(null);

  const slotHandler = useCallback((e) => {
    setSlot(e);
  }, []);

  console.log(slot);
  return (
    <div>
      <Calendar
        selectable={true}
        localizer={localizer}
        events={[]}
        onSelectSlot={slotHandler}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      {slot && (
        <div>
          <AddEvent slotHandler={slotHandler} />
        </div>
      )}
    </div>
  );
}

export default CalendarContainer;
