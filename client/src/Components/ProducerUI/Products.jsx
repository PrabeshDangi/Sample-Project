import React from "react";
import producerList from "../../utils/products";
const Products = () => {
  const producerListItems = producerList.map((items) => {
    return (
      <div>
        <img src={items.img} alt="" style={{ width: "150px" }} />
        <p>Name: {items.name}</p>
        <p>Price: {items.price}</p>
        <p>Available Qty: {items.quantity}</p>
        <p>Location: {items.location}</p>
        <button>Purchase</button>
      </div>
    );
  });
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {producerListItems}
    </div>
  );
};

export default Products;
