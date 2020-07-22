import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 150px;
  height: 23px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 7px;
  outline: none;

  &:focus {
    opacity: 0.6;
    border-color: blue;
  }
`;

function Value({ value, setValue }) {
  const onChange = e => {
    setValue(e.target.value);
  };
  return <Input value={value} onChange={onChange} disabled={setValue === undefined} />;
}

export default Value;
