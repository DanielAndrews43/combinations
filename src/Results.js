import React from "react";
import styled from "styled-components";

const Container = styled.div``;

function Results({ columns }) {
  if (!columns || !columns.length) return null;

  const results = columns.reduce((acc, cur) => acc.flatMap(c => cur.map(n => `${c} ${n}`)));

  return (
    <Container>
      {results.map((r, i) => (
        <div>{r}</div>
      ))}
    </Container>
  );
}

export default Results;
