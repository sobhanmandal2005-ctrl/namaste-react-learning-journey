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

  console.log(json);

  const formattedData = json.meals.map((meal) => ({
    id: meal.idMeal,
    name: meal.strMeal,
    cuisines: [meal.strCategory],
    image: meal.strMealThumb,

    avgRating: (Math.random() * 2 + 3).toFixed(1),

    costForTwo: `₹${Math.floor(Math.random() * 500 + 100)} `,

    deliveryTime: `${Math.floor(Math.random() * 30 + 20)} mins`,
  }));

  setListedRestaurants(formattedData);
};


  return listedRestaurants.length === 0 ? (<Shimmer />) : (
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