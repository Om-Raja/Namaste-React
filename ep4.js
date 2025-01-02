import React from "react";
import ReactDOM from "react-dom/client";

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
const Heading = () => {
  return (
    <div id="header">
      <div id="logoContainer">
        <img
          id="logo"
          src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"
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

//Body
const restaurantList = [
  {
    restaurantName: "Starbucks",
    restaurantCuisine: ["Cold coffee", "Hot coffee", "capaccino"], //subtitle
    avgRating: "4.1",
    restaurantId: "1",
  },
  {
    restaurantName: "KFC",
    restaurantCuisine: ["Burger", "Chicken tikka", "Leg piece"],
    avgRating: "2.4",
    restaurantId: "2",
  },
  {
    restaurantName: "Dominos",
    restaurantCuisine: ["pizza", "hot pizza", "chilli pizza"],
    avgRating: "4.3",
    restaurantId: "3",
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="restaurantCard">
      <img
        alt="cardLogo"
        className="cardLogo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAeWRITf66R82FWfwKBYjhQtF01KTs-5oW_g&s"
      ></img>
      <h3 className="title">{resData.restaurantName}</h3>
      <p className="cusine">{resData.restaurantCuisine.join(", ")}</p>
      <p className="rating">{resData.avgRating}⭐</p>
    </div>
  );
};
const Body = () => {
  return (
    <div id="body">
      <div id="search_bar"></div>
      <div id="restaurantCardContainer">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.restaurantId} resData={restaurant} />;
        })}
        {/* follow the consistency of code. Using both individual attributes to pass props and obj will give you error. So use either one. */}
      </div>
    </div>
  );
};

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
