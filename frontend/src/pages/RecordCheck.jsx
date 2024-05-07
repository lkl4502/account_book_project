import React from "react";
import Text from "../components/Text";

function RecordCheck() {
  return (
    <>
      <Text type={"title"} margin={"0px 0px 15px 0px"}>
        거래 내역 확인
      </Text>
      <Text border={false} margin={"0px 0px 20px 0px"} lineHeight={"1.6"}>
        원하는 기간 내의 거래내역을 확인할 수 있습니다. <br />
        옵션으로는 거래 종류, 기간을 선택할 수 있습니다.
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

export default RecordCheck;
