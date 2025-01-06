import { NAV_LOGO } from "../utils/constant";
import { useState } from "react";

const Heading = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div id="header">
      <div id="logoContainer">
        <img id="logo" src={NAV_LOGO} alt="logo"></img>
      </div>
      <div id="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
