import React from "react";
import styled from "styled-components";
import DataStats from "./DataStats";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
export default function Goverment() {
  const [showForm, setShowForm] = useState(false);

  const handleFormButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {<div>{showForm && <DataStats />}</div>}
      <Section>
        <nav>
          <button
            style={{ padding: "0.4rem 1.5rem" }}
            onClick={handleFormButtonClick}
          >
            <Link
              to="/datastats"
              style={{ color: "white", textDecoration: "none" }}
            >
              Data
            </Link>
          </button>
          <button style={{ padding: "0.4rem 1.5rem", marginLeft: "1rem" }}>
            <Link
              to="/receivedOrder"
              style={{ color: "white", textDecoration: "none" }}
            >
              Received Order{" "}
            </Link>
            <span
              style={{
                fontSize: "0.7rem",
                color: "red",
              }}
            >
              <AiFillStar size={15} />
            </span>
          </button>
        </nav>
      </Section>
    </>
  );
}

const Section = styled.div`
  width: 100%;
  height: 100vh;

  background-color: green;

  nav {
    width: 100%;
    padding: 1rem;

    background-color: pink;

    button {
      border: none;
      background-color: blue;
      color: white;
      font-size: 1rem;
    }
  }
`;
