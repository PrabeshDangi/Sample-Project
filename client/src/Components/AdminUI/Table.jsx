import React from "react";

const Table = () => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th
            style={{
              textAlign: "start",
              padding: "0.5rem",
              backgroundColor: "green",
            }}
          >
            Reported by
          </th>
          <th
            style={{
              textAlign: "start",
              padding: "0.5rem",
              backgroundColor: "green",
            }}
          >
            Product
          </th>
          <th
            style={{
              textAlign: "start",
              padding: "0.5rem",
              backgroundColor: "green",
            }}
          >
            Quantity
          </th>
          <th
            style={{
              textAlign: "start",
              padding: "0.5rem",
              backgroundColor: "green",
            }}
          >
            Area
          </th>
          <th
            style={{
              textAlign: "start",
              padding: "0.5rem",
              backgroundColor: "green",
            }}
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gopal</td>
          <td>Potato</td>
          <td>50kg</td>
          <td>Kathmandu</td>
          <td>
            <button
              onClick={() => alert("Further processing for effective actions.")}
            >
              Take Action
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
