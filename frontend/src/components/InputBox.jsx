import React from "react";
import styled from "styled-components";

const CustomInput = styled.input`
  width: 100%;
  height: auto;
  border: 1px solid gray;
  border-radius: 10px;

  font-weight: 400;
  font-size: 16px;
  color: #333;
  padding: 8px 12px;
  line-height: 24px;

  &::placeholder {
    color: gray;
  }
`;

function InputBox({ type, value, setValue, placeholder }) {
  return (
    <CustomInput
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></CustomInput>
  );
}

export default InputBox;
