const RestaurantCard = ({ resData }) => {


const {name, cuisines, avgRating, deliveryTime, image, costForTwo} = resData;

  return (
    <div className="res-card">
      <img className="res-logo"
  src={image} 
  alt="food"
/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}🍽️</h4>
      <h4>Rating: {avgRating}⭐</h4>
      <h4>Delivery Time: {deliveryTime}⏱️</h4>
      <h4>Cost for Two: {costForTwo}💰</h4>
    </div>
  );
}

export default RestaurantCard;