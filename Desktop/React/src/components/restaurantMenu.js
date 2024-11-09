import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {CDN_URL} from "./constants";
import Shimmer from "./shimmer";
import useRestaurant from "../../utils/useRestaurant";
//import { resturantLists } from "./constants";

const RestaurantMenu = () => {
    const {rest} = useParams();
    console.log(rest);

    const restaurant = useRestaurant(resId);
    console.log(restaurant);

    return (!restaurant) ? <Shimmer /> :(
    <div className="Menu">
        <div>
        <h1>Restaurant id : {rest} </h1>
        <h2>{restaurant.cards?.[2]?.card?.card?.info?.name}</h2>
        <img className = "img-menu" src={CDN_URL + restaurant.cards?.[2]?.card?.card?.info?.cloudinaryImageId}  />
        <h2>{restaurant.cards?.[2]?.card?.card?.info?.city}</h2>
        <h2>{restaurant.cards?.[2]?.card?.card?.info?.areaName}</h2>
        <h2>{restaurant.cards?.[2]?.card?.card?.info?.locality}</h2>
        <h2>{restaurant.cards?.[2]?.card?.card?.info?.avgRating} : stars</h2>
        <h2>{restaurant.cards?.[2]?.card?.card?.info?.cuisines.join(", ")}</h2>
        {console.log(Object.values(restaurant.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards))}
        </div>
        <div>
            <h1>Menu</h1>
            <div>
                <ul>{
                    Object.values(restaurant.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards).map((item)=> <li key = {item.id}>{item.card.info.name}</li>)
                    }
                </ul>
            </div>
        </div>
    </div>
    );
};

export default RestaurantMenu;

    
// .map((item)=> ( 
//     <li key = {item?.[0]?.card?.info?.id}>{item.name}</li>

//{console.log(restaurant.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards)}

// <div>
// <h1> Menu </h1>   
// <ul>
// <h1> {console.log((restaurant.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards)
// .map((item) => ( <li key = {item.id}>{item.name}</li>)))}
// </h1>
// </ul> 
// </div>
