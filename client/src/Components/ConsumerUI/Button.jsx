import { useState } from "react";
import styled from "styled-components";
import products from "./ConsumerCardsData";
export default function Button() {
  const [showdata, setShowdata] = useState(false);

  const [description, setDescription] = useState("Show Description");

  const handleData = () => {
    if (showdata) {
      // <p>Hello world</p>

      setDescription("Show Description");
      setShowdata(false);
    } else {
      setDescription("Hide Description");

      setShowdata(true);
    }
  };
  const consumerProductsData = products.map((items) => {
    return (
      <div>
        <img src={items.img} alt="" style={{ width: "150px" }} />
        <p>Name: {items.name}</p>
        <p>Price: {items.price}</p>
        <p>Available Qty: {items.quantity}</p>
        <p>Location: {items.location}</p>
        <button onClick={() => alert("Processing further for purchase")}>
          Purchase
        </button>
      </div>
    );
  });
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {consumerProductsData}
      </div>
    </div>
  );
}

const Box = styled.div`
  width: 17rem;

  border: 2px solid red;

  border-radius: 1rem;

  position: relative;

  padding-bottom: 0.5rem;

  .image {
    width: 15rem;
    height: 9rem;

    margin: 1rem auto;

    img {
      min-width: 15rem;
      min-height: 9rem;
      border: 1px solid red;

      border-radius: 2rem;
    }
  }

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0rem 0rem 0rem 1rem;
    align-items: start;
  }
`;
