const RestaurantCard = ({ resData }) => {


const {name, cuisines, avgRating, deliveryTime, image, costForTwo} = resData;

  return (
    <div className="flex-wrap border-solid shadow-lg p-4 m-2 w-[200px]">
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