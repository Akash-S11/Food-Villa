import { resturantLists } from "./constants";
import RestaurantCard from "./restaurantsCards";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants){
  const filterdata = restaurants.filter((restaurants) =>
    restaurants.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
);
  console.log("data : " + filterdata);
  return filterdata;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] =useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => { //API Call
    getRestaurants();
  }, []);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    }

      console.log("render");

    return allRestaurants?.length === 0 ? (
    <Shimmer/>
    ) : (
    <>
    <div className ="search-container">
      <input type ="text" className="search-input" placeholder="Search" value = {searchText}
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
    />
    <button className = "search-btn"
    onClick={() =>{
      const data = filterData(searchText, allRestaurants);
      setFilteredRestaurants(data);
    }}
    >
      Search
    </button>
    </div>
    <div className = "restaurant-list">
      {filteredrestaurants.map((restaurant) => {
        return (
          <Link to= {"/restaurant/" + restaurant?.info?.id}
          key={restaurant?.info?.id}>
          <RestaurantCard {...restaurant?.info}  />
          </Link>
        );
      })}
    </div>
    </>
  );
};

export default Body;