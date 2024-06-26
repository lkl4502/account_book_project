import React from "react";
import Text from "../components/Text";

function Home() {
  return (
    <div style={{ width: "75%" }}>
      <Text type={"title"} margin={"0px 0px 15px 0px"}>
        홈
      </Text>
      <Text margin={"0px 0px 20px 0px"}>
        프로젝트의 주제로 정한 개인재무관리 서비스는 서비스를 사용하는 사용자의
        지출 및 수입 내역을 수집하여 한 눈에 확인할 수 있도록 하여 사용자로
        하여금 올바른 소비 계획을 세울 수 있도록 돕는 서비스입니다.
      </Text>
      <Text type={"title"} margin={"0px 0px 15px 0px"}>
        목적
      </Text>
      <Text margin={"0px 0px 20px 0px"}>
        서비스를 사용하는 사용자가 직접 지출 및 수입 내역을 입력하거나, 계좌
        연동시 자동으로 일정 기간의 거래 내역을 가져와 한 눈에 확인할 수
        있도록하여 올바른 소비계획을 세울 수 있도록 도움을 줄 수 있는 웹
        서비스를 만드는 것입니다.
      </Text>
    </div>
  );
}

export default Home;
