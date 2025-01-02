import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";

// Making project like swiggy
/* 
    -Navbar
        * logo
        * nav links
    -Body
        * Search Bar
        * Reastaurants container
            -restaurant cards
                --img
                --rating
                --title
    -footer
        * copyright
        * contacts
        * address
*/

const AppLayout = () => {
  return (
    <div>
      <Heading />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
