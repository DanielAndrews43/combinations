import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Result = styled.div`
  font-size: 14px;
  font-family: sans-serif;
  background-color: yellow;
  border-radius: 20px;
  padding: 5px 10px;
  margin-right: 7px;
`;

function Results({ columns }) {
  if (!columns || !columns.length) return null;

  const results = columns.reduce((acc, cur) => acc.flatMap(c => cur.map(n => `${c} ${n}`)));

  return (
    <Container>
      {results.map((r, i) => (
        <Result key={i}>{`${r}`}</Result>
      ))}
    </Container>
  );
}

export default Results;
