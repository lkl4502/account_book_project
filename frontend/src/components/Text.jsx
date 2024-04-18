import React from "react";
import styled from "styled-components";

const TitleP = styled.p`
  color: #333;
  font-size: 35px;
  font-weight: 600;
  text-align: left;
`;

const ContentP = styled(TitleP)`
  font-size: 16px;
  font-weight: 300;
  border: 1px solid #333;
  padding: 10px 10px;
  border-radius: 20px 20px 20px 20px;
`;

function Text({ type, children }) {
  switch (type) {
    case "title":
      return (
        <>
          <TitleP>{children}</TitleP>
        </>
      );

    default:
      return (
        <>
          <ContentP>{children}</ContentP>
        </>
      );
  }
}

Text.defaultProps = {
  type: "default",
  children: null,
};

export default Text;
