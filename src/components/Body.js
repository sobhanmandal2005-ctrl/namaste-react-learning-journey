import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {

   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredListedRestaurants, setFilteredListedRestaurants] = useState([]);

   
   const [searchText, setSearchText] = useState("");


   const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);


   useEffect(() => {
     fetchData();
   }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);

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

  setListOfRestaurants(formattedData);
  setFilteredListedRestaurants(formattedData);
};


 const onlinestatus = useOnlineStatus();

 if(onlinestatus === false) return <h1>🔴 You are offline. Please check your internet connection. </h1>;


 const {loggedInUser, setUserName} = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (<Shimmer />) : (
    <div className="bg-orange-50"> 
      <div className= "flex justify-between m-4 px-4  rounded-md">
        <div className=" shadow-lg p-2 gap-4 border-collapse border-2 border-gray-300 rounded-md">
          <input className="px-2 " type="text" placeholder="Search for restaurants..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />

          <button className="bg-teal-500 hover:bg-teal-600 text-white px-2 rounded-sm" onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res) => res.cuisines[0].toLowerCase().includes(searchText.toLowerCase()));

            
            setFilteredListedRestaurants(filteredRestaurants);
            
          }}>
            Search🔍
          </button>
          <label htmlFor="username" className="font-medium m-2">Username : </label>
          <input type="text" id="username" placeholder="Username" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
        </div>
     <div>
        <button className="bg-orange-400 hover:bg-orange-500 p-2 rounded-md text-white shadow-lg rounded-md" onClick={() => {
          const filteredRestaurants = listOfRestaurants.filter((res) => res.avgRating >= 4.0);

          setFilteredListedRestaurants(filteredRestaurants);
        }}> 
          Top Rated Restaurants🚀
        </button>
        </div>
      </div>
        <div className="flex flex-wrap p-4 m-2 gap-6 justify-center">
          {filteredListedRestaurants.map((restaurant) => (
            <Link  key={restaurant.id} className="" to= { "/restaurants/" + restaurant.id}>
              {restaurant.avgRating >= 4.2 ? <PromotedRestaurantCard resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
            </Link>
          ))}
        </div>
    </div>
  );
}

export default Body;