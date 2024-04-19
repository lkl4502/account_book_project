import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 11px 20px;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid gray;
  border-radius: 10px;
  width: fit-content;
  margin: 50px 0;
  color: ${(props) => (props.disabled ? "white" : "#333")};
  background-color: ${(props) => (props.disabled ? "gray" : "white")};
`;

function CustomButton({ onClick, disabled, children }) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}

CustomButton.defaultProps = {
  disabled: false,
};

export default CustomButton;
