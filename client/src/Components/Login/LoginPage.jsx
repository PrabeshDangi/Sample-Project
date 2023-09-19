import React, { useState } from "react";
import axios from "axios";
import { login } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      if (data.user.role === "Producer") navigate("/producerUI");
      else if (data.user.role === "Consumer") navigate("/consumerUI");
      // console.log("LOGIN RESPONSE", data);

      // save in local storage
      localStorage.setItem("user", JSON.stringify(data));

      dispatch(login(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>LogIn</h1>
      {/* <form action="submit.php" method="POST"> */}

      <div className="form">
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

        <button
          onClick={handleSubmit}
          className="buttonClass"
          style={{ backgroundColor: "#1324F1" }}
        >
          Login
        </button>
      </div>
      {/* </form> */}
    </div>
  );
}
