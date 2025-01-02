import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
  return (
    <div id="body">
      <div id="search_bar"></div>
      <div id="restaurantCardContainer">
        {restaurantList.map((restaurant) => {
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
