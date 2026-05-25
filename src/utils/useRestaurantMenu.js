import { useState, useEffect } from "react";
import RestaurantMenu from "../components/RestaurantMenu";



const useRestaurantMenu = (idMeal) => {

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


  return menuItems;
}

export default useRestaurantMenu;