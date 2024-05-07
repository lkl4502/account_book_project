import React, { useContext, useState } from "react";
import Text from "../components/Text";
import InputBox from "../components/InputBox";
import CustomButton from "../components/CustomButton";
import { AuthContext } from "../context/auth-context";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ButtonContainer = styled.div``;

function Login() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/user/login", {
        email: email,
        password: pw,
      });

      if (res.status === 200) {
        auth.login(res.data.data.id, res.data.data.email, res.data.data.name);
        navigate("/home");
      }
    } catch (err) {
      console.log(err.response.data);
      alert(`${err.response.data.message}`);
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

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
      <ButtonContainer>
        <CustomButton onClick={handleLogin} disabled={!email || !pw}>
          로그인
        </CustomButton>

        <CustomButton onClick={handleSignUp}>회원가입</CustomButton>
      </ButtonContainer>
    </>
  );
}

export default Login;
