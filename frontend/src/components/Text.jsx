import React from "react";
import styled from "styled-components";

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
`;

function Text({ bold, size, color, children }) {
  const styles = { color, size, bold };

  return (
    <>
      <P {...styles}>{children}</P>
    </>
  );
}

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#ffffff",
  size: "14px",
};

export default Text;
