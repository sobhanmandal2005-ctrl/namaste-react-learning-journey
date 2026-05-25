import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredListedRestaurants, setFilteredListedRestaurants] = useState([]);

   
   const [searchText, setSearchText] = useState("");


   useEffect(() => {
     fetchData();
   }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);

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


 const onlinestatus = useOnlineStatus();

 if(onlinestatus === false) return <h1>🔴 You are offline. Please check your internet connection. </h1>;


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
            <Link  key={restaurant.id} className="res-link" to= { "/restaurants/" + restaurant.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
    </div>
  );
}

export default Body;