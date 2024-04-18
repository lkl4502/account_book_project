import React from "react";
import styled from "styled-components";

const DividerLine = styled.line`
  background-color: #9b9b9b;
  border-radius: 10px;
  height: 2px;
  width: ${(props) => props.width || "100%"};
  margin-top: 15px;
  margin-bottom: 15px;
`;

function Divider(props) {
  return <DividerLine width={props.width} />;
}

export default Divider;
