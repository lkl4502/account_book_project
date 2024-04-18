import React, { useState } from "react";
import Text from "../components/Text";
import Divider from "../components/Divider";
import CustomCalendar from "../components/CustomCalendar";
import "../App.css";
import InputBox from "../components/InputBox";

function IncomeWrite() {
  const [date, setDate] = useState(new Date());
  const [content, setContent] = useState("");

  return (
    <>
      <Text type={"title"} margin={"0px 0px 15px 0px"}>
        Income Write
      </Text>
      <Text border={false} margin={"0px 0px 20px 0px"}>
        직접 입력하고 싶은 수입에 대해서 작성하고 등록 버튼을 통해서 등록하시면
        됩니다.
      </Text>

      <Divider margin={"0px 0px 15px 0px"} />

      <Text border={false} margin={"0px 0px 10px 0px"}>
        날짜
      </Text>
      <CustomCalendar value={date} onChange={setDate} />

      <Text border={false} margin={"50px 0px 10px 0px"}>
        거래명
      </Text>

      <InputBox
        type={"text"}
        value={content}
        setValue={setContent}
        placeholder={"테스트 한다."}
      />
    </>
  );
}

export default IncomeWrite;
