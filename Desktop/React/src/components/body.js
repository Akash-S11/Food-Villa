import { reasturantLists } from "./constants"; 
import RestaurantsCards from "./restaurantsCards"; 

const Body = () => {
    return (
        <div className='rcards'>
            {reasturantLists.restaurants.map((restaurant, index) => (
                <RestaurantsCards key={index} info={restaurant.info} />
            ))}
        </div>
    );
};


export default Body;
