import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {

    const [loginButton,setButton]= useState('Login');

    let onLineStatus = useOnlineStatus();
    return (
      <div className="flex justify-between items-center bg-pink-100  shadow-lg mb-2">
        <div className="logo-container">
          <img
            className="w-56"
            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design.jpg"
            alt="logo"
          />
        </div>
        <div className="navbar-menu">
          <ul className="flex p-4 m-5 justify-between">
            <li className="px-4">OnLine Status : {onLineStatus ? "Online" : "Offline"}</li>
            <li className="px-4">
              {" "}
              <Link to="/"> Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">Cart</li>
            <button
              className="login-btn"
              onClick={() =>
                loginButton === "Login"
                  ? setButton("Logout")
                  : setButton("Login")
              }
            >
              {loginButton}
            </button>
          </ul>
        </div>
      </div>
    );
  }

export  default HeaderComponent;