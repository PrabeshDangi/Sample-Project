import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import { login } from "../../store/slices/authSlice";

export default function Consumer() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const role = "Consumer";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    // console.log("NAME", name)
    try {
      const { data } = await axios.post("http://localhost:8000/api/register", {
        role,
        name,
        email,
        password,
      });

      navigate("/consumerUI");
      // console.log("DATA", data);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", token);

      dispatch(login(data));
    } catch (err) {
      console.log(err);
    }
  };

  // const handleForm = ()=>{
  //   setName("");
  //   setEmail("");
  //   setPassword("");
  //   window.alert("Registration successful. You will now be redirected to Consumer Interface.")
  // }
  return (
    <div>
      <h1>Consumer</h1>
      {/* <form action="submit.php" method="POST"> */}
      <div className="form">
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
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
        {/* <Link to="/consumerUI"> */}
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
}
