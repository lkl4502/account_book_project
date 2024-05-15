import React, { useContext, useEffect, useState } from "react";
import Text from "../components/Text";
import Divider from "../components/Divider";
import CustomCalendar from "../components/CustomCalendar";
import "../App.css";
import InputBox from "../components/InputBox";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import { AuthContext } from "../context/auth-context";

function WritePage({ type }) {
  const auth = useContext(AuthContext);
  const [date, setDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
  const [content, setContent] = useState("");
  const [sum, setSum] = useState();
  const [memo, setMemo] = useState("");

  useEffect(() => {
    clearInput();
  }, [type]);

  const sumHandleChange = (e) => {
    if (e.toString().match(/[^0-9]/g)) {
      alert("숫자 이외의 입력은 할 수 없습니다.");
      e = e.toString().replace(/[^0-9]/g, "");
    }
    if (e >= 0) {
      if (e.length > 8) {
        if (e > 99999999) {
          alert("최대 99,999,999원 까지 입력 가능");
        }
        e = e.slice(0, 8);
      }
    }
    setSum(e);
  };

  const clearInput = () => {
    setContent("");
    setDate(new Date(new Date().setHours(0, 0, 0, 0)));
    setSum("");
    setMemo("");
  };

  const checkContent = () => {
    return !!content?.trim();
  };

  const checkInput = () => {
    if (!checkContent()) {
      alert("거래 명을 입력해주세요");
      return false;
    }

    if (sum <= 0) {
      alert("금액은 0보다 커야합니다.");
      setSum("");
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!checkInput()) {
      return;
    }

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/transaction/register",
        {
          user_id: auth.user.id,
          type: type,
          sum: sum,
          date: date,
          category: content,
          memo: memo,
        }
      );

      if (res.status === 200) {
        alert("거래 내역이 추가되었습니다.");
        clearInput();
        return;
      }
    } catch (err) {
      console.log(err.response.data);
      alert(`${err.response.data.message}`);
    }
  };

  return (
    <>
      <Text type={"title"} margin={"0px 0px 15px 0px"}>
        {type ? "Income" : "Spending"} Write
      </Text>
      <Text border={false} margin={"0px 0px 20px 0px"}>
        직접 입력하고 싶은 {type ? "소득" : "지출"}에 대해서 작성하고 등록
        버튼을 통해서 등록하시면 됩니다.
      </Text>

      <Divider margin={"0px 0px 15px 0px"} width={"75%"} />

      <Text border={false} margin={"0px 0px 10px 0px"}>
        날짜
      </Text>
      <CustomCalendar value={date} onChange={setDate} />

      <Text border={false} margin={"30px 0px 10px 0px"}>
        거래명
      </Text>

      <InputBox
        type={"text"}
        value={content}
        setValue={setContent}
        placeholder={"거래명을 입력해주세요."}
        maxLength={20}
      />

      <Text border={false} margin={"30px 0px 10px 0px"}>
        금액
      </Text>

      <InputBox
        type={"text"}
        value={sum}
        setValue={sumHandleChange}
        placeholder={"금액을 입력해주세요."}
        minValue={1}
        maxValue={99999999}
        step={10}
      />

      <Text border={false} margin={"30px 0px 10px 0px"}>
        메모
      </Text>

      <InputBox
        type={"text"}
        value={memo}
        setValue={setMemo}
        placeholder={"간단한 메모 할 것이 있다면 입력해주세요."}
        maxLength={40}
      />

      <CustomButton onClick={handleRegister}>등록</CustomButton>
    </>
  );
}

export default WritePage;
