import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 11px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  border: 1px solid gray;
  border-radius: 10px;
  width: fit-content;
  margin: 50px 0;
  background-color: white;
`;

function CustomButton({ children }) {
  return <Button>{children}</Button>;
}

export default CustomButton;
