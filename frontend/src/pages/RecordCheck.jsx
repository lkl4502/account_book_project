import React, { useMemo, useState } from "react";
import Text from "../components/Text";
import Divider from "../components/Divider";
import styled from "styled-components";
import CustomCalendar from "../components/CustomCalendar";
import CustomButton from "../components/CustomButton";
import Select from "react-select";
import axios from "axios";
import CustomTable from "../components/CustomTable";
import { createColumnHelper } from "@tanstack/react-table";
import SummaryTable from "../components/SummaryTable";

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

  const types = [
    { value: "null", label: "소득/지출" },
    { value: true, label: "소득" },
    { value: false, label: "지출" },
  ];

  const [type, setType] = useState(types[0]);
  const [transactionList, setTransactionList] = useState();

  const insertComma = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("id", { header: "id", size: 30 }),
    columnHelper.accessor("category", { header: "거래명" }),
    columnHelper.accessor("type", {
      header: "거래 유형",
      size: 60,
      cell: (props) => (
        <div
          style={{
            color: props.getValue() ? "blue" : "red",
            fontWeight: 600,
          }}
        >
          {props.getValue() ? "소득" : "지출"}
        </div>
      ),
    }),
    columnHelper.accessor("sum", {
      header: "금액",
      size: 100,
      cell: (props) => {
        return (
          (props.row.original.type ? "+ " : "- ") +
          insertComma(props.getValue())
        );
      },
    }),
    columnHelper.accessor("date", {
      header: "거래 일자",
      cell: (props) => props.getValue().slice(0, props.getValue().indexOf(" ")),
    }),
    columnHelper.accessor("memo", {
      header: "메모",
    }),
  ];

  const summary_columns = [
    columnHelper.accessor("total_count", {
      header: "총 거래 수",
      size: 100,
      cell: (props) => <div>{props.getValue()}개</div>,
    }),
    columnHelper.accessor("total_spend_count", {
      header: "총 지출 수",
      size: 100,
      cell: (props) => (
        <div
          style={{
            color: "red",
          }}
        >
          {props.getValue()}개
        </div>
      ),
    }),
    columnHelper.accessor("total_income_count", {
      header: "총 소득 수",
      size: 100,
      cell: (props) => (
        <div
          style={{
            color: "blue",
          }}
        >
          {props.getValue()}개
        </div>
      ),
    }),
    columnHelper.accessor("total_spend_sum", {
      header: "총 지출 금액",
      cell: (props) => (
        <div style={{ color: "red" }}>- {insertComma(props.getValue())}</div>
      ),
    }),
    columnHelper.accessor("total_income_sum", {
      header: "총 소득 금액",
      cell: (props) => (
        <div style={{ color: "blue" }}>+ {insertComma(props.getValue())}</div>
      ),
    }),
    columnHelper.accessor("total_sum", {
      header: "총 합계 금액",
      cell: (props) => {
        const flag = props.getValue() >= 0;
        return (
          <div style={{ color: flag ? "blue" : "red" }}>
            {flag ? "+ " : ""}
            {insertComma(props.getValue())}
          </div>
        );
      },
    }),
  ];

  const data = useMemo(() => {
    return transactionList;
  }, [transactionList]);

  const summary_data = useMemo(() => {
    if (!data) return;
    const res = data.reduce(
      (previousValue, currentValue) => {
        previousValue["total_count"]++; // 총 거래 수

        // 거래 유형 수, 금액
        if (currentValue.type === true) {
          previousValue["total_income_count"]++; // 소득
          previousValue["total_income_sum"] += currentValue.sum;
        } else {
          previousValue["total_spend_count"]++; // 지출
          previousValue["total_spend_sum"] += currentValue.sum;
        }
        return previousValue;
      },
      {
        total_count: 0,
        total_spend_count: 0,
        total_income_count: 0,
        total_spend_sum: 0,
        total_income_sum: 0,
      }
    );
    res["total_sum"] = res["total_income_sum"] - res["total_spend_sum"];
    return [res];
  }, [data]);

  const handleCheck = async (e) => {
    e.preventDefault();

    if (startDate > endDate) {
      alert("시작 날짜가 마감 날짜보다 이후일 수 없습니다.");
      return;
    }

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
        setTransactionList(res.data.data);
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
            defaultValue={type}
            isSearchable={false}
          />
        </FormContainer>

        <CustomButton onClick={handleCheck} margin={"0px 0px 0px 0px"}>
          조회
        </CustomButton>
      </div>

      <SummaryTable columns={summary_columns} data={summary_data || []} />

      <CustomTable columns={columns} data={data || []} />
    </>
  );
}

export default RecordCheck;
