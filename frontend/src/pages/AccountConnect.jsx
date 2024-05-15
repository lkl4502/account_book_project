import React from "react";
import Text from "../components/Text";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Divider from "../components/Divider";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 75%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 30px 0;
`;

function AccountConnect() {
  const client_id = "8ce0d21a-47fc-4714-b083-80327501ab96";
  const client_secret = "92530d2c-7bcb-4bec-bd6a-4c257d0ca2e3";
  const authorize_url = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${client_id}&redirect_uri=http://localhost:3000/authResult&scope=login%20inquiry%20transfer&state=12345678901234567890123456789012&auth_type=0`;

  const { state } = useLocation();
  const code = state?.code;

  const navigate = useNavigate();

  const handleOpenPopup = async (e) => {
    e.preventDefault();
    let flag = false;
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/account/", {
        params: {
          user_id: JSON.parse(localStorage.getItem("user")).id,
        },
      });

      if (res.status === 200) {
        if (!!res.data.data) {
          alert("이미 연결된 계좌가 존재합니다.");
          flag = true;
        } else {
          flag = false;
        }
      } else {
        flag = true;
        alert("계좌 정보 조회에 실패하였습니다.");
      }
    } catch (err) {
      console.log(err.response.data);
      alert(`${err.response.data.message}`);
    }
    if (!flag) {
      document.location.href = authorize_url;
    }
  };

  const handleToken = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://127.0.0.1:8000/api/account/token", {
        params: {
          code: code,
          client_id: client_id,
          client_secret: client_secret,
          user_id: JSON.parse(localStorage.getItem("user")).id,
        },
      });

      if (res.status === 200) {
        alert("계좌 등록 완료");
        navigate("/home");
      }
    } catch (err) {
      console.log(err.response.data);
      alert(`${err.response.data.message}`);
    }
  };

  return (
    <>
      <Text type={"title"} margin={"0px 0px 15px 0px"}>
        Account Connect
      </Text>
      <Text border={false} margin={"0px 0px 20px 0px"} lineHeight={"1.6"}>
        계정에 자신의 계좌를 연결할 수 있습니다. <br />
      </Text>

      <Divider margin={"0px 0px 15px 0px"} width={"75%"} />

      <Wrapper>
        <CustomButton onClick={handleOpenPopup} margin={"0px 30px 0px 0px"}>
          사용자 인증
        </CustomButton>
        <Text>
          {code === undefined
            ? "사용자 인증이 이루어지지 않았습니다."
            : "사용자 인증 완료"}
        </Text>
      </Wrapper>

      <Wrapper>
        <CustomButton
          onClick={handleToken}
          disabled={!code}
          margin={"0px 30px 0px 0px"}
        >
          계좌 연동
        </CustomButton>
      </Wrapper>
    </>
  );
}

export default AccountConnect;
