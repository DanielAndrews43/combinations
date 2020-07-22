import React, { useState } from "react";
import styled from "styled-components";

import Value from "./Value";
import AddButton from "./AddButton";

const Container = styled.div`
  min-height: 70vh;
  height: 100%;
  width: 200px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-width: 0 1px 0 0;
`;

const Title = styled.div`
  margin-bottom: 15px;
  font-size: 18px;
  font-family: sans-serif;
  text-align: center;
`;

function Column({ vals, number, addItem, removeItem, removeColumn }) {
  const [newValue, setNewValue] = useState("");

  const addHelper = () => {
    if (newValue) {
      addItem(newValue);
      setNewValue("");
    }
  };

  return (
    <Container>
      <Title>Column {number + 1}</Title>
      {vals.map((v, i) => (
        <Value key={i} value={v} />
      ))}
      <Value value={newValue} setValue={setNewValue} />
      <AddButton onClick={addHelper} type="Item" />
    </Container>
  );
}

export default Column;
