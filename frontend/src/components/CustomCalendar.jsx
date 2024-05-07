import React, { useEffect, useState } from "react";
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

  .react-calendar {
    border: none;
    border-radius: 0.5rem;
    box-shadow: 4px 2px 10px 0px rgba(0, 0, 0, 0.13);
    padding: 3% 5%;
    background-color: white;
  }

  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    justify-content: center;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: 800;
    font-size: 1rem;
  }

  /* 네비게이션 버튼 컬러 */
  .react-calendar__navigation button:focus {
    background-color: white;
  }

  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }

  .react-calendar__month-view__days__day--weekend {
    // 주말 글씨 빨간색 없애기
    color: #333;
  }

  /* 일요일에만 빨간 폰트 */
  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: ${(props) => "red"};
  }

  .react-calendar__tile--now {
    background: white;
    color: #333;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    //hover 했을 때 색상 변경
    background: #ff7a00;
    border-radius: 50px;
  }

  .react-calendar__tile--active {
    background: #ff7a00;
    color: #ffffff;
    border-radius: 50px;
  }
`;

function CustomCalendar({ value, onChange }) {
  const [date, setDate] = useState(moment(value).format("YYYY년 MM월 DD일"));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setDate(moment(value).format("YYYY년 MM월 DD일"));
  }, [value]);

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
          next2Label={null}
          prev2Label={null}
          calendarType="gregory"
          showNeighboringMonth={false}
        ></Calendar>
      </CalendarWrapper>
    </CalendarContainer>
  );
}

export default CustomCalendar;
