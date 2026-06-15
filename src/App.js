import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../style.css";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";




const Grocery = lazy(() => import("./components/Grocery")); 



const AppLayout = () => {


const [userName, setUserName] = useState();

useEffect(() => {
  const data = {
    name: "Sobhan Mandal"
  }
  setUserName(data.name);
}, []);


  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
    path: "/about",
    element: <AboutUs />
  },

  {
    path: "/contact",
    element: <Contact />
  },

  {
    path: "/restaurant/:id",
    element: <RestaurantCard />
  },
  {
    path: "/restaurants/:idMeal",
    element: <RestaurantMenu />
  },

  {
    path: "/restaurants/:idMeal",
    element: <RestaurantMenu />
  },
  {
    path: "/grocery",
    element: <Suspense fallback="Loading..."><Grocery /></Suspense>
  }
    ],
    
    errorElement: <Error />
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);