import React, { useState } from "react";
import Text from "../components/Text";
import InputBox from "../components/InputBox";
import Select from "react-select";

function SignUp() {
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

  return (
    <>
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
        setValue={setAge}
        placeholder={"나이를 입력해주세요."}
      />

      <Text type={"title"} margin={"20px 0px 10px 0px"}>
        성별
      </Text>

      <Select
        options={genders}
        onChange={setGender}
        placeholder="성별 선택"
        isSearchable={false}
      />
    </>
  );
}

export default SignUp;
