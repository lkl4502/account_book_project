import React from "react";
import styled from "styled-components";

const DividerLine = styled.line`
  background-color: #9b9b9b;
  border-radius: 10px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

function Divider({ width, height, margin }) {
  return <DividerLine width={width} height={height} margin={margin} />;
}

Divider.defaultProps = {
  width: "100%",
  height: "2px",
  margin: "15px 0",
};

export default Divider;
