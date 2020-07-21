import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 150px;
  height: 23px;
  border: 1px solid black;
`;

function Value({ value, setValue }) {
  const onChange = e => {
    setValue(e.target.value);
  };
  return <Input value={value} onChange={onChange} disabled={setValue === undefined} />;
}

export default Value;
