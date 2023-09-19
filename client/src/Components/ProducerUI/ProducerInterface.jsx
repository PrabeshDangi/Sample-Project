import React from "react";
import styled from "styled-components";
import ProducerForm from "./ProducerForm";
import { useState } from "react";
export default function ProducerInterface() {
  const [clicked, setClicked] = useState(false);
  const inputData = () => {
    setClicked(true);
  };

  return (
    <div>
      <h1>Your Products</h1>

      {clicked ? <ProducerForm /> : console.log("Click the +")}
      <Container>
        <h1 onClick={inputData}>+</h1>
      </Container>
    </div>
  );
}

const Container = styled.div`
  height: 19rem;
  width: 15rem;
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid red;
    border-radius: 50%;
    cursor: pointer;
  }
`;
