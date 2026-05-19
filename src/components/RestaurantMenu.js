import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

  const { idMeal } = useParams();

  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {

    const data = await fetch(
      `https://proxy.corsfix.com/?https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );

    const json = await data.json();

    console.log(json);

    setMenuItems(json);
  };

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