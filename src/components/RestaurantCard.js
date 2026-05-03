const RestaurantCard = ({ resData }) => {


const {name, cuisine, rating, deliveryTime, image} = resData;

  return (
    <div className="res-card">
      <img className="res-logo"
  src={image} 
  alt="food"
/>
      <h3>{name}</h3>
      <h4>{cuisine}🍽️</h4>
      <h4>Rating: {rating}⭐</h4>
      <h4>Delivery Time: {deliveryTime}⏱️</h4>
    </div>
  )
}

export default RestaurantCard;