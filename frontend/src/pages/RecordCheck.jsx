import React, { useState } from "react";
import Text from "../components/Text";
import Divider from "../components/Divider";
import styled from "styled-components";
import CustomCalendar from "../components/CustomCalendar";
import Select from "react-select";

const FormContainer = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;
  align-items: center;
`;

const StyledSelect = styled(Select)`
  width: 150px;
`;

function RecordCheck() {
  const [startDate, setStartDate] = useState(
    new Date(new Date().setHours(0, 0, 0, 0))
  );
  const [endDate, setEndDate] = useState(
    new Date(new Date().setHours(0, 0, 0, 0))
  );
  const [type, setType] = useState(null);

  const types = [
    { value: null, label: "소득/지출" },
    { value: true, label: "소득" },
    { value: false, label: "지출" },
  ];

  return (
    <>
      <Text type={"title"} margin={"0px 0px 15px 0px"}>
        거래 내역 확인
      </Text>
      <Text border={false} margin={"0px 0px 20px 0px"} lineHeight={"1.6"}>
        원하는 기간 내의 거래내역을 확인할 수 있습니다. <br />
        옵션으로는 거래 종류, 기간을 선택할 수 있습니다.
      </Text>

      <Divider margin={"0px 0px 15px 0px"} width={"75%"} />

      <FormContainer>
        <Text>시작 날짜</Text>
        <CustomCalendar value={startDate} onChange={setStartDate} />

        <Text>마감 날짜</Text>
        <CustomCalendar value={endDate} onChange={setEndDate} />

        <Text>유형</Text>
        <StyledSelect
          options={types}
          onChange={setType}
          placeholder="유형 선택"
          isSearchable={false}
        />
      </FormContainer>
    </>
  );
}

export default RecordCheck;
