import {CARD_LOGO} from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="restaurantCard">
      <img
        alt="cardLogo"
        className="cardLogo"
        src={CARD_LOGO}
      ></img>
      <h3 className="title">{resData.restaurantName}</h3>
      <p className="cusine">{resData.restaurantCuisine.join(", ")}</p>
      <p className="rating">{resData.avgRating}⭐</p>
    </div>
  );
};

export default RestaurantCard;