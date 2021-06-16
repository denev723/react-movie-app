import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  h1 {
    font-size: 20px;
  }
`;

export default function Loader() {
  return (
    <Container>
      <h1>로딩중....</h1>
    </Container>
  );
}
