const RestaurantCard = ({ resData }) => {


const {name, cuisines, avgRating, deliveryTime, image, costForTwo} = resData;

  return (
    <div className="p-4 m-2 w-56 shadow-lg rounded-md bg-gray-200  hover:bg-gray-100">
      <img className="rounded-lg"
  src={image} 
  alt="food"
/>
      <h3 className="text-md font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}⭐</h4>
      <h4>Cost for Two: {costForTwo}</h4>
      <h4>Delivery Time: {deliveryTime}</h4>
    </div>
  );
}


export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-green-700 text-white p-1 rounded-md">PROMOTED</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
}; 

export default RestaurantCard;