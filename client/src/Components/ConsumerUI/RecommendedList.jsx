import React from "react";
import recommendedList from "./RecommendData";
import { likeItems } from "./RecommendData";
export default function () {
  console.log(recommendedList);
  const cards = recommendedList.map((items) => {
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
  const likeItemsData = likeItems.map((items) => {
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
    <div>
      <h1>Recommended For You</h1>
      <div>{cards}</div>
      <h1>You May Also Like: </h1>
      <div>{likeItemsData}</div>
    </div>
  );
}
