import React from "react";
import styled from "styled-components";

const TitleP = styled.p`
  color: #333;
  font-size: 35px;
  font-weight: 600;
  text-align: left;
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
`;

const ContentP = styled(TitleP)`
  font-size: 16px;
  font-weight: 300;
  padding: 10px 10px;
  border: ${(props) => (props.border ? "1px solid #333" : "none")};
  border-radius: ${(props) => (props.border ? "20px" : "none")};
`;

function Text({ type, margin, border, children }) {
  switch (type) {
    case "title":
      return (
        <>
          <TitleP margin={margin} border={border}>
            {children}
          </TitleP>
        </>
      );

    default:
      return (
        <>
          <ContentP margin={margin} border={border}>
            {children}
          </ContentP>
        </>
      );
  }
}

Text.defaultProps = {
  type: "default",
  children: null,
  margin: "0px 0px 0px 0px",
  border: true,
};

export default Text;
