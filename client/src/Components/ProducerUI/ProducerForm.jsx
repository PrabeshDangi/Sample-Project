import styled from "styled-components";
import "../../App.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function ProducerForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const navigate = useNavigate();

  const handleAppealBtnClick = () => {
    toast.info("Your appeal to local bodies have been placed!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleProductsView = () => {
    navigate("/products");
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // try {
    //   const data = await axios.post("http://localhost:8000/api/product/new", {
    //     name,
    //     price,
    //     quantity,
    //     description,
    //     location,
    //     expiryDate,
    //   });
    //   // console.log("DATA", data);

    //   dispatch(login(data));
    // } catch (err) {
    //   console.log(err);
    // }

    window.alert("Your Product has been recorded.");
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Button
        sx={{ margin: "1rem 1rem 1rem 0" }}
        onClick={handleAppealBtnClick}
        size="small"
        color="success"
        variant="contained"
      >
        Appeal for help!
      </Button>
      <Button
        size="small"
        color="success"
        variant="contained"
        onClick={handleProductsView}
      >
        View All Products
      </Button>
      <Container>
        {/* <div className="box">
          <div className="img">
            <img src="" alt="Photo" />
          </div> */}

        <div className="box1">
          <label htmlFor="first">Product Name:</label>
          <br />
          <input
            onChange={(ev) => {
              setName(ev.target.value);
            }}
            id="first"
            type="text"
          />
        </div>

        <div className="box1">
          <label htmlFor="second">Price:</label>
          <br />
          <input
            onChange={(ev) => {
              setPrice(+ev.target.value);
            }}
            id="second"
            type="text"
          />
        </div>

        <div className="box1">
          <label htmlFor="third">Available quantity(KGs):</label>
          <br />
          <input
            onChange={(ev) => {
              setQuantity(parseInt(ev.target.value));
            }}
            id="third"
            type="text"
          />
        </div>

        <div className="box1">
          <label htmlFor="fourth">Description:</label>
          <br />
          <input
            onChange={(ev) => {
              setDescription(ev.target.value);
            }}
            id="fourth"
            type="text"
          />
        </div>

        <div className="box1">
          <label htmlFor="fifth">Location:</label>
          <br />
          <input
            onChange={(ev) => {
              setLocation(ev.target.value);
            }}
            id="fifth"
            type="text"
          />
        </div>

        <div className="box1">
          <label htmlFor="sixth">Expiry Days:</label>
          <br />
          <input
            onChange={(ev) => {
              setExpiryDate(+ev.target.value);
            }}
            id="sixth"
            type="text"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="buttonClass"
          style={{ backgroundColor: "#1324F1" }}
        >
          Submit
        </button>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  .box {
    display: flex;
    flex-direction: column;

    .box1 {
      display: flex;
      margin-top: 0.5rem;

      input {
        border-top: none;
        border-right: none;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;
