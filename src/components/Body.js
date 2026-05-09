import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

   const [listedRestaurants, setListedRestaurants] = useState([]);


   useEffect(() => {
     fetchData();
   }, []);

   const fetchData = async () => {
  const data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );

  const json = await data.json();

  const formattedData = json.meals.map((meal) => ({
    id: meal.idMeal,
    name: meal.strMeal,
    cuisines: [meal.strCategory],
    image: meal.strMealThumb,
    avgRating: "4.0",
    costForTwo: "₹300",
    deliveryTime: "30 mins",
  }));

  setListedRestaurants(formattedData);
};

if(listedRestaurants.length === 0) {
  return <Shimmer />;
}

  return (
    <div className="body">
      <div className= "filter">
        <button className="filter-btn" onClick={() => {
          const filteredRestaurants = listedRestaurants.filter((res) => res.avgRating >= 4.2);
          setListedRestaurants(filteredRestaurants);
        }}>
          Top Rated Restaurants🚀
        </button>
      </div>
        <div className="res-container">
          {listedRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />           
          ))}
        </div>
    </div>
  );
}

export default Body;