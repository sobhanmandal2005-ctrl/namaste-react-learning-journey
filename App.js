import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
  return (
    <div  className="header">
      <div className="logo-container">
       <img className="logo" src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const resList = [
  {
    name: "Burger King",
    cuisine: "Fast Food",
    rating: "4.3",
    deliveryTime: "30 mins",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    name: "Dominos",
    cuisine: "Pizza",
    rating: "4.1",
    deliveryTime: "25 mins",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
  },
  {
    name: "KFC",
    cuisine: "Fried Chicken",
    rating: "4.2",
    deliveryTime: "28 mins",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58"
  },
  {
    name: "Subway",
    cuisine: "Sandwich",
    rating: "4.0",
    deliveryTime: "20 mins",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    name: "Biryani House",
    cuisine: "Indian",
    rating: "4.5",
    deliveryTime: "35 mins",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
  },
  {
    name: "Chinese Wok",
    cuisine: "Chinese",
    rating: "4.2",
    deliveryTime: "30 mins",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246"
  },
  {
    name: "Pizza Hut",
    cuisine: "Pizza",
    rating: "4.1",
    deliveryTime: "27 mins",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
  },
  {
    name: "Cafe Coffee Day",
    cuisine: "Beverages",
    rating: "4.0",
    deliveryTime: "15 mins",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    name: "Sweet Corner",
    cuisine: "Desserts",
    rating: "4.4",
    deliveryTime: "22 mins",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307"
  },
  {
    name: "South Indian Tiffin",
    cuisine: "South Indian",
    rating: "4.3",
    deliveryTime: "25 mins",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
  }
];

const RestaurantCard = ({ resData }) => {


const {name, cuisine, rating, deliveryTime, image} = resData;

  return (
    <div className="res-card">
      <img className="res-logo"
  src={image} 
  alt="food"
/>
      <h3>{name}</h3>
      <h4>{cuisine}🍽️</h4>
      <h4>Rating: {rating}⭐</h4>
      <h4>Delivery Time: {deliveryTime}⏱️</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search" input="search" >search</div>
        <div className="res-container">
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.name} resData={restaurant} />
          ))}
        </div>
    </div>
  );
}



const AppLayout = () => {
  return (
    <div className="app">
     <Header/>
     <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);