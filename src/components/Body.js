import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  //state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.900965&lng=75.8572758&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

    const json = await data.json();
    console.log(json.data.cards[2].card.card.info);

    // setListOfRestaurants(json);
  };

  // conditional rendering - A rendering based on some condition.
 /* if(listOfRestaurants.length === 0){
    return (<h1>Loading...</h1>); // this is a bad way for UX that's why we use shimmer UI
  } */ 
 //replacing above code by ternary operator below with return keyword
  
  return (listOfRestaurants.length === 0)? <Shimmer/> : (
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
