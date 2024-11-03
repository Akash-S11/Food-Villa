import { IMG_CDN_URL } from './constants'; 


const RestaurantsCards = (props) => {
    console.log(props);
    //const imageBaseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    return(
        <div className="card">
            <img 
            src= {IMG_CDN_URL + props.info?.cloudinaryImageId }/>
            <h2>{props.info?.name}</h2>
            <h4>{props.info?.cuisines.join(", ")}</h4>
            <h4>{props.info?.sla.lastMileTravelString} minutes</h4>

        </div>
    );
};

export default RestaurantsCards;
