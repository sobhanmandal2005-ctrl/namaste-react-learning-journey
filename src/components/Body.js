import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredListedRestaurants, setFilteredListedRestaurants] = useState([]);

   
   const [searchText, setSearchText] = useState("");


   useEffect(() => {
     fetchData();
   }, []);

    const fetchData = async () => {
  const data = await fetch(
    "https://proxy.corsfix.com/?https://www.themealdb.com/api/json/v1/1/search.php?s="
  );

  const json = await data.json();

  

  const formattedData = json.meals.map((meal) => ({
    id: meal.idMeal,
    name: meal.strMeal,
    cuisines: [meal.strCategory],
    image: meal.strMealThumb,

    avgRating: (Math.random() * 2 + 3).toFixed(1),

    costForTwo: `₹${Math.floor(Math.random() * 500 + 100)} `,

    deliveryTime: `${Math.floor(Math.random() * 30 + 20)} mins`,
  }));

  setListOfRestaurants(formattedData);
  setFilteredListedRestaurants(formattedData);
};




  return listOfRestaurants.length === 0 ? (<Shimmer />) : (
    <div className="body"> 
      <div className= "filter">
        <div className="search">
          <input className="search-box" type="text" placeholder="Search for restaurants..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />

          <button className="search-btn" onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res) => res.cuisines[0].toLowerCase().includes(searchText.toLowerCase()));

            
            setFilteredListedRestaurants(filteredRestaurants);
            
          }}>
            Search🔍
          </button>
        </div>
        <button className="filter-btn" onClick={() => {
          const filteredRestaurants = listOfRestaurants.filter((res) => res.avgRating >= 4.0);

          setFilteredListedRestaurants(filteredRestaurants);
        }}> 
          Top Rated Restaurants🚀
        </button>
      </div>
        <div className="res-container">
          {filteredListedRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />           
          ))}
        </div>
    </div>
  );
}

export default Body;