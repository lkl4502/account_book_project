import React, { useEffect, useState } from "react";
import Text from "../components/Text";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import { useLocation } from "react-router-dom";
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
  const authorize_url = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${client_id}&redirect_uri=http://localhost:3000/authResult&scope=login%20inquiry%20transfer&state=12345678901234567890123456789012&auth_type=0`;

  const { state } = useLocation();
  const code = state?.code;

  const handleOpenPopup = (e) => {
    e.preventDefault();

    document.location.href = authorize_url;
  };

  const handleToken = async (e) => {
    e.preventDefault();

    console.log(code);
  };

  return (
    <>
      <Wrapper>
        <CustomButton onClick={handleOpenPopup} margin={"0px 30px 0px 0px"}>
          계좌 연결
        </CustomButton>
        <Text>
          {code === undefined
            ? "사용자 인증이 이루어지지 않았습니다."
            : "사용자 인증 완료"}
        </Text>
      </Wrapper>

      <Divider width={"75%"} />
      <Wrapper>
        <CustomButton
          onClick={handleToken}
          disabled={!code}
          margin={"0px 30px 0px 0px"}
        >
          토큰 발급
        </CustomButton>
      </Wrapper>
    </>
  );
}

export default AccountConnect;
