import React from "react";
import styled from "styled-components";

const Plus = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: gray;
  text-align: center;
  vertical-align: center;
`;

function AddColumn({ onClick }) {
  return <Plus onClick={onClick}>+</Plus>;
}

export default AddColumn;
