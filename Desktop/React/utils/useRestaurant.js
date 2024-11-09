import { useState, useEffect } from "react";

const useRestaurant =(rest) =>{
    const [restaurant, setRestaurant] = useState(null);


useEffect(() => {
    getRestaurantInfo();
}, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId" +{rest}); 
        console.log(data);
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json?.data);
    }   

    return restaurant;
};

export default useRestaurant;