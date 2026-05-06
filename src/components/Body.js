import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

   const [listedRestaurants, setListedRestaurants] = useState(resList);


  return (
    <div className="body">
      <div className= "filter">
        <button className="filter-btn" onClick={() => {
          const filteredRestaurants = listedRestaurants.filter((res) => res.rating >= 4.2);
          setListedRestaurants(filteredRestaurants);
        }}>
          Top Rated Restaurants🚀
        </button>
      </div>
        <div className="res-container">
          {listedRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} resData={restaurant} />           
          ))}
        </div>
    </div>
  );
}

export default Body;