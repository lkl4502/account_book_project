import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import selectArrow from "../assets/date_arrow.svg";

const CalendarContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  width: 200px;
  height: 48px;
  border: 0.8px solid #949494;
  border-radius: 10px;
  padding: 0px 12px;
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  text-align: start;
  appearance: none;
  background-image: url(${selectArrow});
  background-color: white;
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 24px;
`;

const CalendarWrapper = styled.div`
  z-index: 11;
  position: absolute;
  top: 100%;
  left: 0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

function CustomCalendar({ value, onChange }) {
  const [date, setDate] = useState(moment(value).format("YYYY년 MM월 DD일"));
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    setIsOpen(false);
    setDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
  };

  return (
    <CalendarContainer>
      <DropdownButton onClick={handleToggleCalendar}>{date}</DropdownButton>
      <CalendarWrapper isOpen={isOpen}>
        <Calendar
          onChange={handleDateChange}
          value={value}
          formatDay={(locale, date) => moment(date).format("D")}
        ></Calendar>
      </CalendarWrapper>
    </CalendarContainer>
  );
}

export default CustomCalendar;
