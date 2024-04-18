import React from "react";
import styled from "styled-components";

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.bold};
  text-align: ${(props) => props.align};
`;

function Text({ bold, size, color, align, children }) {
  const styles = { color, size, bold, align };

  return (
    <>
      <P {...styles}>{children}</P>
    </>
  );
}

Text.defaultProps = {
  children: null,
  bold: "400",
  color: "#9b9b9b",
  size: "14px",
  align: "left",
};

export default Text;
