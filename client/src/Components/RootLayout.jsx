import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import "../App.css";

import Logo from "../assets/img/logo.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function RootLayout() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/");
    axios.get("http://localhost:8000/api/logout");
    window.alert("Logged out!");
  };

  return (
    <div>
      <NavBar style={{ height: "5rem" }}>
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt=""
              style={{ width: "80px", mixBlendMode: "multiply" }}
            />
          </Link>
        </div>

        {user === null ? (
          <div>
            <Link
              className="buttonClass"
              to="/login"
              style={{ backgroundColor: "#1324F1", textDecoration: "none" }}
            >
              Login
            </Link>
            <Link
              className="buttonClass"
              to="/register"
              style={{ backgroundColor: "#1324F1", textDecoration: "none" }}
            >
              Register
            </Link>
          </div>
        ) : (
          <div>
            {user.user.name}
            <Link
              onSubmit={handleLogout}
              style={{ backgroundColor: "#1324F1", textDecoration: "none" }}
            >
              Logout
            </Link>
          </div>
        )}
      </NavBar>

      <Main>
        <Outlet />
      </Main>

      <footer>
        <div className="row">
          <div className="column">
            <img src={Logo} alt="" style={{ width: "120px" }} />
          </div>
          <div className="column">
            <ul>
              <li>
                <a href="/" style={{ color: "black" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" style={{ color: "black" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" style={{ color: "black" }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <a
              href="tel:+977-9876543210"
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "1rem",
                color: "black",
              }}
            >
              +977-9876543210
            </a>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              <BsFacebook size={25} color="blue" />
              <AiFillInstagram size={25} color="#BA3442" />
              <AiFillTwitterCircle size={25} color="#4284F5" />
              <AiOutlineMail size={25} />
            </div>
          </div>
        </div>
        <p
          style={{
            textAlign: "center",
            padding: "1rem 0",
            fontSize: "0.8rem",
          }}
        >
          &copy; All Rights Reserved, TeraByte Co.
        </p>
      </footer>
    </div>
  );
}

const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  padding: 0.8rem;

  button {
    padding: 0.6rem;
    cursor: pointer;
  }
`;

const Main = styled.div`
  width: 90%;
  margin: auto;
  min-height: 55vh;
  p {
    font-size: 1.4rem;

    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
`;

// Define your Button component here

const ButtonBox = styled.div`
  width: fit-content;
  padding: 1rem;

  button {
    color: white;
    padding: 0.8rem 1.8rem;
    margin: 
`;
