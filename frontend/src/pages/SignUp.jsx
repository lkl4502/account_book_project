import React, { useState } from "react";
import Text from "../components/Text";
import InputBox from "../components/InputBox";
import Select from "react-select";
import CustomButton from "../components/CustomButton";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledSelect = styled(Select)`
  width: 150px;
`;

function SignUp() {
  const navigate = useNavigate();

  const genders = [
    { value: "남자", label: "남자" },
    { value: "여자", label: "여자" },
  ];

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [phone, setPhone] = useState("");

  const ageHandleChange = (e) => {
    if (e > 100) {
      e = 100;
    } else if (e < 1) {
      e = 0;
    }
    setAge(e);
  };

  const phoneHandleChange = (e) => {
    e = e
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");
    setPhone(e);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email || !pw || !name || !age || !phone || !gender) {
      alert("항목을 모두 채워주세요.");
      return;
    }
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/user/signUp", {
        email: email,
        password: pw,
        name: name,
        age: age,
        phone: phone,
        sex: gender.value,
      });
      if (res.status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.log(err.response.data);
      alert(`${err.response.data.message}`);
    }
  };

  return (
    <>
      <style></style>
      <Text type={"title"} margin={"0px 0px 10px 0px"}>
        이메일
      </Text>

      <InputBox
        type={"email"}
        value={email}
        setValue={setEmail}
        placeholder={"이메일을 입력해주세요."}
      />

      <Text type={"title"} margin={"20px 0px 10px 0px"}>
        비밀번호
      </Text>
      <InputBox
        type={"password"}
        value={pw}
        setValue={setPw}
        placeholder={"비밀번호를 입력해주세요."}
      />

      <Text type={"title"} margin={"20px 0px 10px 0px"}>
        이름
      </Text>
      <InputBox
        type={"text"}
        value={name}
        setValue={setName}
        placeholder={"이름을 입력해주세요."}
      />

      <Text type={"title"} margin={"20px 0px 10px 0px"}>
        나이
      </Text>
      <InputBox
        type={"number"}
        value={age}
        setValue={ageHandleChange}
        minValue={0}
        maxValue={100}
        step={1}
        placeholder={"나이를 입력해주세요."}
      />

      <Text type={"title"} margin={"20px 0px 10px 0px"}>
        성별
      </Text>

      <StyledSelect
        options={genders}
        onChange={setGender}
        placeholder="성별 선택"
        isSearchable={false}
      />

      <Text type={"title"} margin={"20px 0px 10px 0px"}>
        휴대폰 번호
      </Text>

      <InputBox
        type={"text"}
        value={phone}
        setValue={phoneHandleChange}
        placeholder={"휴대폰 번호를 입력해주세요."}
        maxLength={13}
      />

      <CustomButton onClick={handleSignUp}>회원가입</CustomButton>
    </>
  );
}

export default SignUp;
