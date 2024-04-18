import React from "react";
import Text from "../components/Text";
import Divider from "../components/Divider";

function IncomeWrite() {
  return (
    <>
      <Text type={"title"} margin={"0px 0px 15px 0px"}>
        Income Write
      </Text>
      <Text border={false} margin={"0px 0px 20px 0px"}>
        직접 입력하고 싶은 수입에 대해서 작성하고 등록 버튼을 통해서 등록하시면
        됩니다.
      </Text>

      <Divider margin={"0px 0px 15px 0px"} />
    </>
  );
}

export default IncomeWrite;
