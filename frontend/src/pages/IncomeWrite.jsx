import React from "react";
import Text from "../components/Text";
import Divider from "../components/Divider";

function IncomeWrite() {
  return (
    <div>
      <Text type={"title"} margin={"0px 0px 15px 0px"}>
        Income Write
      </Text>
      <Text border={false} margin={"0px 0px 20px 0px"}>
        직접 입력하고 싶은 수입에 대해서 작성하고 등록 버튼을 통해서 등록하시면
        됩니다.
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
    </div>
  );
}

export default IncomeWrite;
