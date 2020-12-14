import React, { useState, useCallback } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AddEvent from './AddEvent';

const localizer = momentLocalizer(moment);

function CalendarContainer() {
  const [slot, setSlot] = useState(null);

  const slotHandler = useCallback((e) => {
    setSlot(e);
  }, []);

  console.log(slot);

  function handleSubmit(e) {
    console.log(e);
  }

  return (
    <div>
      <Calendar
        selectable={true}
        localizer={localizer}
        timeslots={4}
        defaultView={Views.WEEK}
        events={[]}
        step={15}
        onSelectSlot={slotHandler}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        min={
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate(),
            8
          )
        }
      />
      {slot && (
        <div>
          <AddEvent slotHandler={slotHandler} handleSubmit={handleSubmit} />
        </div>
      )}
    </div>
  );
}

export default CalendarContainer;
