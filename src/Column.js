import React, { useState } from "react";
import styled from "styled-components";

import Value from "./Value";

const Container = styled.div`
  width: 200px;
`;

const Title = styled.div``;

const AddButton = styled.button``;

function Carline({ vals, number, addItem, removeItem, removeColumn }) {
  const [newValue, setNewValue] = useState("");

  const addHelper = () => {
    addItem(newValue);
    setNewValue("");
  };

  return (
    <Container>
      <Title>Column {number + 1}</Title>
      {vals.map((v, i) => (
        <Value key={i} value={v} />
      ))}
      <Value value={newValue} setValue={setNewValue} />
      <AddButton onClick={addHelper}>Add</AddButton>
    </Container>
  );
}

export default Carline;
