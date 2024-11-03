import { resturantLists } from "./constants";
import RestaurantCard from "./restaurantsCards";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

function filterData(searchText, restaurants){
  const filterdata = restaurants.filter((restaurant) =>
  restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
);
  return filterData;
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

    //not rendered component
    if(!allRestaurants) return null; //early return

    if (filteredrestaurants?.length === 0 )
      return <h1> No Restraunt match your Filter!!</h1>

    return (filteredrestaurants?.length === 0 ) ? (<Shimmer/>
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
          <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id} />
        );
      })}
    </div>
    </>
  );
};

export default Body;