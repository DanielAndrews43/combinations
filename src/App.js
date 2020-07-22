import React, { useState } from "react";
import styled from "styled-components";

import Column from "./Column";
import AddButton from "./AddButton";
import Results from "./Results";

const Container = styled.div`
  padding-left: 30px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 28px;
  font-family: sans-serif;
  font-weight: bold;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Spacer = styled.div`
  min-width: 20px;
`;

function App() {
  const [columns, setColumns] = useState([[]]);

  const addColumn = () => {
    setColumns([...columns, []]);
  };

  const removeColumn = index => {
    const firstHalf = columns.slice(0, index);
    const secondHalf = columns.slice(index + 1);
    setColumns([...firstHalf, ...secondHalf]);
  };

  const addItem = (colIndex, val) => {
    const column = columns[colIndex];
    const newColumn = [...column, val];

    const firstHalf = columns.slice(0, colIndex);
    const secondHalf = columns.slice(colIndex + 1);
    setColumns([...firstHalf, newColumn, ...secondHalf]);
  };

  const removeItem = (colIndex, itemIndex) => {
    const column = columns[colIndex];
    const newColumn = column.slice(0, itemIndex).concat(column.slice(itemIndex + 1));

    const firstHalf = columns.slice(0, colIndex);
    const secondHalf = columns.slice(colIndex + 1);
    setColumns([...firstHalf, newColumn, ...secondHalf]);
  };

  return (
    <Container>
      <Title>Combinations</Title>
      <ColumnContainer>
        {columns.map((c, i) => (
          <Column
            key={i}
            number={i}
            vals={c}
            addItem={val => addItem(i, val)}
            removeItem={itemIndex => removeItem(i, itemIndex)}
            removeColumn={() => removeColumn(i)}
          />
        ))}
        <Spacer />
        <AddButton onClick={addColumn} type="Column" />
      </ColumnContainer>
      <Results columns={columns} />
    </Container>
  );
}

export default App;
