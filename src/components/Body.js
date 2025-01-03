import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
  return (
    <div id="body">
      <div id="search_bar"></div>
      <button
        className="filter_button"
        onClick={() => {
          filteredRestaurantList = restaurantList.filter(
            (res) => res.avgRating > 4
          );
          setListOfRestaurants(filteredRestaurantList);
        }}
      >
        Top rated restaurants
      </button>

      <div id="restaurantCardContainer">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.restaurantId}
              resData={restaurant}
            />
          );
        })}
        {/* follow the consistency of code. Using both individual attributes to pass props and obj will give you error. So use either one. */}
      </div>
    </div>
  );
};

export default Body;
