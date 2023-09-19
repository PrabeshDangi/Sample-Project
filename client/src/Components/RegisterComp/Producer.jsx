import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../../App.css";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";

export default function Producer() {
  const role = "Producer";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const data = await axios.post("http://localhost:8000/api/register", {
        role,
        name,
        email,
        password,
      });
      navigate("/producerUI");
      // console.log("DATA", data);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", token);

      dispatch(login(data));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Producer</h1>
      <div className="producerDesc">
        Register yourself as a producer. The Producer, basically, are the
        farmers who produces crops.
      </div>
      {/* <form action="#" method="POST"> */}
      <div className="form">
        <div>
          <label for="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label for="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* <Link to="/producerUI"> */}
        <button
          onClick={handleSubmit}
          className="buttonClass"
          style={{ backgroundColor: "#1E8903" }}
        >
          Register
        </button>
      </div>
      {/* </Link> */}
      {/* </form> */}
    </div>
  );
  };


