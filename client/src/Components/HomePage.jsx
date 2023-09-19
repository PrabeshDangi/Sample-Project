import React from "react";
import styled from "styled-components";
import "../App.css";
import indexImage from "../assets/img/index.jpg";
import marketValue from "../assets/img/marketValue.png";
export default function () {
  return (
    <>
      <div className="hero-page">
        <Main>
          <h1 style={{ color: "green", fontSize: "3rem" }}>
            Your Market
            <br /> for Your Product
          </h1>
          <p>
            Our solution is a digital platform that connects farmers directly
            with businesses in agriculture, eliminating informal middlemen. It
            offers a user-friendly marketplace for farmers to showcase their
            produce, access real-time pricing data, and negotiate with buyers.
          </p>
        </Main>

        <div className="hero-photo">
          <img src={indexImage} alt="" />
        </div>
      </div>
      <hr style={{ marginTop: "3rem" }} />
      <div style={{ marginTop: "5rem" }}>
        <h1 style={{ textAlign: "center" }}>Today's Market Value</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "1.5rem" }}>
          The market value is fetched using API. For now, an image of sample
          data is placed via{" "}
          <a href="https://kalimatimarket.gov.np/price#" target="_blank">
            kalimati site.
          </a>
        </p>
        <img
          src={marketValue}
          alt=""
          style={{ margin: "0.5rem auto", width: "100%" }}
        />
      </div>
    </>
  );
}

const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: gray;
  padding: 0.8rem;

  button {
    padding: 0.6rem;
    cursor: pointer;
  }
`;

const Main = styled.div`
  margin: 2rem auto;
  position: relative;
  p {
    font-size: 1.4rem;
    padding: 1rem;

    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
`;

//     @media (min-width: 720px){
//         width: 100%;
//         margin:2rem 2rem;
//         }
// `;
