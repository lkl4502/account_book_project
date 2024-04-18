import React, { useState } from "react";
import Calendar from "react-calendar";

function CustomCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div width="100%">
      <Calendar onChange={onChange} value={value}></Calendar>
    </div>
  );
}

export default CustomCalendar;
