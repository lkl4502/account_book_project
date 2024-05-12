import React, { useEffect, useState } from "react";
import Text from "../components/Text";
import CustomButton from "../components/CustomButton";
import axios from "axios";

function AccountConnect() {
  const client_id = "8ce0d21a-47fc-4714-b083-80327501ab96";
  const authorize_url = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${client_id}&redirect_uri=http://localhost:3000/authResult&scope=login%20inquiry%20transfer&state=12345678901234567890123456789012&auth_type=0`;

  const handleOpenPopup = (e) => {
    e.preventDefault();

    document.location.href = authorize_url;
  };

  return (
    <>
      <CustomButton onClick={handleOpenPopup}>계좌 연결</CustomButton>
      <Text size={"16px"} color={"#333"} bold={"300"}>
        프로젝트의 주제로 정한 개인재무관리 서비스는 서비스를 사용하는 사용자의
        지출 및 수입 내역을 수집하여 한 눈에 확인할 수 있도록 하여 사용자로
        하여금 올바른 소비 계획을 세울 수 있도록 돕는 서비스입니다.
      </Text>
      <Text size={"35px"} color={"#333"} bold={"600"}>
        목적
      </Text>
      <Text size={"16px"} color={"#333"} bold={"300"}>
        서비스를 사용하는 사용자가 직접 지출 및 수입 내역을 입력하거나, 계좌
        연동시 자동으로 일정 기간의 거래 내역을 가져와 한 눈에 확인할 수
        있도록하여 올바른 소비계획을 세울 수 있도록 도움을 줄 수 있는 웹
        서비스를 만드는 것입니다.
      </Text>
    </>
  );
}

export default AccountConnect;
