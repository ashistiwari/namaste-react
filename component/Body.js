import { useState } from "react";
import { resList } from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  const [ListofRestaurant,setListOfRestaurant]= useState([{
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
        "id": "121835",
        "name": "Bob's Bar",
        "cloudinaryImageId": "8d4ff13d105acd0118f505d3f5d218d9",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "South Indian",
            "Biryani",
            "Desserts",
            "Bakery"
        ],
        "avgRating": 3.9,
        "parentId": "10956",
        "avgRatingString": "4.3",
        "totalRatingsString": "4.4K+",
    }
},
{
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
        "id": "121836",
        "name": "Bob's Bar",
        "cloudinaryImageId": "8d4ff13d105acd0118f505d3f5d218d9",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "South Indian",
            "Biryani",
            "Desserts",
            "Bakery"
        ],
        "avgRating": 4.3,
        "parentId": "10956",
        "avgRatingString": "4.3",
        "totalRatingsString": "4.4K+",
    }
},]);
    return (<div className="body">
        <div className="filter" >
            <button className="filter-btn" onClick={
                () => {
                    filteredList= ListofRestaurant.filter((res) => res.info.avgRating > 4);
                   setListOfRestaurant(filteredList);
                    
                 }

            }

            >Top Rated Res</button></div>

        <div className="res-container">
            {ListofRestaurant.map(restaurant => <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />)}
        </div>
    </div>)
}

export default Body;