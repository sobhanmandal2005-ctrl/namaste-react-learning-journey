import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

  const { idMeal } = useParams();

  const menuItems = useRestaurantMenu(idMeal);


  if(menuItems === null) return <Shimmer />;

  

  return (
    <div className="menu">

      <h1>{menuItems?.meals[0]?.strMeal}🍽️✨</h1>

      <h3>Restaurant Menu🥂🌃</h3>

      <h3>Menu Items🍕❤️</h3>

      <ul>
        {menuItems?.meals.map((item) => (
          <li key={item.idMeal}>
            {item.strMeal} - {item.strCategory} - {item.strArea} 
          </li>
        ))}
      </ul>

    </div>
  );
};

export default RestaurantMenu;