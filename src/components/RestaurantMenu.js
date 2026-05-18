import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {

  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {

    const data = await fetch(
      "https://proxy.corsfix.com/?https://www.themealdb.com/api/json/v1/1/search.php?s="
    );

    const json = await data.json();

    console.log(json);

    setMenuItems(json);
  };

  if(menuItems === null) return <Shimmer />;

  return (
    <div className="menu">

      <div>{menuItems?.meals[0]?.strMeal}</div>

      <h1>Restaurant Menu</h1>

      <h2>Menu Items</h2>

      <ul>
        {menuItems?.meals.map((item) => (
          <li key={item.idMeal}>
            {item.strMeal}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default RestaurantMenu;