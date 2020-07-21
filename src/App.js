import React, { useState } from "react";
import styled from "styled-components";

import Column from "./Column";
import AddColumn from "./AddColumn";
import Results from "./Results";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const [columns, setColumns] = useState([]);

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
      <AddColumn onClick={addColumn} />
      <Results columns={columns} />
    </Container>
  );
}

export default App;
