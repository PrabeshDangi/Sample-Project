import React from "react";
import styled from "styled-components";
import Button from "./Button";
import ConsumerForm from "./ConsumerForm";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ConsumerInterface() {
  const [showForm, setShowForm] = useState(false);

  const handleFormButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <Container>
      <div className="item">
        <button type="submit">
          <Link to="/consumerForm">Add Items</Link>
        </button>
      </div>

      <Button />
      {<div>{showForm ? <ConsumerForm /> : null}</div>}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #80c780;

  .item {
    width: 100%;
    padding: 1rem;

    display: flex;
    justify-content: flex-end;

    button {
      padding: 1rem;
    }
  }
`;
