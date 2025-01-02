import {NAV_LOGO} from "../utils/constant";
const Heading = () => {
    return (
      <div id="header">
        <div id="logoContainer">
          <img
            id="logo"
            src={NAV_LOGO}
            alt="logo"
          ></img>
        </div>
        <div id="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Heading;