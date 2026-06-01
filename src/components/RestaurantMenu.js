import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

  const { idMeal } = useParams();

  const menuItems = useRestaurantMenu(idMeal);


  if(menuItems === null) return <Shimmer />;

  
 const categories = menuItems?.meals[0]?.strCategory.split(",").filter((c) => c) || [];

  return (
    <div className="text-center w-60 p-4 m-4 shadow-lg rounded-md bg-gray-200 mx-auto">

      
      <img className="rounded-lg w-50"
        src={menuItems?.meals[0]?.strMealThumb} 
        alt="food"
      />

      <h1 className="text-lg font-bold py-2">{menuItems?.meals[0]?.strMeal?.toUpperCase()}🍽️✨</h1>

      <h3 className=" py-2">Restaurant Menu🥂🌃</h3>

      <h3>Menu Items🍕❤️</h3>

      <ul className="py-3 text-xl font-semibold">
        {menuItems?.meals.map((item) => (
          <li key={item.idMeal}>
            {item.strMeal} - {item.strCategory} - {item.strArea} 
          </li>
        ))}
      </ul>
      


      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md ">Add to Cart +</button>

    </div>
  );
};

export default RestaurantMenu;