import React, { useMemo, useState } from "react";
import Text from "../components/Text";
import Divider from "../components/Divider";
import styled from "styled-components";
import CustomCalendar from "../components/CustomCalendar";
import CustomButton from "../components/CustomButton";
import Select from "react-select";
import axios from "axios";
import CustomTable from "../components/CustomTable";

const FormContainer = styled.div`
  display: grid;
  width: 75%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 10px 0px;
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
  const [type, setType] = useState("null");

  const types = [
    { value: "null", label: "소득/지출" },
    { value: true, label: "소득" },
    { value: false, label: "지출" },
  ];

  const columns = useMemo(() => [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "content",
      Header: "거래명",
    },
    {
      accessor: "type",
      Header: "거래 유형",
    },
    {
      accessor: "sum",
      Header: "금액",
    },
    {
      accessor: "date",
      Header: "거래 일자",
    },
  ]);

  const data = useMemo(
    () => [
      {
        id: "3",
        content: "test",
        type: "지출",
        sum: "30000",
        date: "2021-08-03 01:15:49",
      },
    ],
    []
  );

  const handleCheck = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/transaction/check",
        {
          params: {
            id: JSON.parse(localStorage.getItem("user")).id,
            start: startDate,
            end: endDate,
            type: type.value,
          },
        }
      );
      if (res.status === 200) {
        console.log(res.data.data);
      }
    } catch (err) {
      console.log(err.response.data);
      alert(`${err.response.data.message}`);
    }
  };

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

      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FormContainer>
          <Text>시작 날짜</Text>
          <Text>마감 날짜</Text>
          <Text>유형</Text>

          <CustomCalendar value={startDate} onChange={setStartDate} />
          <CustomCalendar value={endDate} onChange={setEndDate} />
          <StyledSelect
            options={types}
            onChange={setType}
            placeholder="유형 선택"
            isSearchable={false}
          />
        </FormContainer>

        <CustomButton onClick={handleCheck} margin={"0px 0px 0px 0px"}>
          조회
        </CustomButton>
      </div>

      <CustomTable columns={columns} data={data} />
    </>
  );
}

export default RecordCheck;
