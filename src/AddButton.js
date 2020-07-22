import React from "react";
import styled from "styled-components";

const Button = styled.div`
  height: 46px;
  min-width: 150px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #85dcb0;
  border: 1px solid white;
  cursor: pointer;
  font-family: sans-serif;
  color: white;
`;

function AddButton({ onClick, type }) {
  return <Button onClick={onClick}>Add {type}</Button>;
}

export default AddButton;
