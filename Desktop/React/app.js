import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
// import Header, { Title } from "./src/components/header";
// import Body from "./src/components/body";
// import Footer from "./src/components/footer";
// import {IMG_CDN_URL} from "./src/components/constants";

const Title = () => (
    <h1 id = "title" key = "h2">
    Food Villa </h1>
);

const Header = () => {
    return <div className="header">
        {/* <Title /> */}
        <div>
            <img className="logo" src={"https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" }/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}

const ReasturantCards = () => {
    return(
        <div className="card">
            <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg' />
            <h1>pizza hut</h1>
            <h3>pizza, Indians</h3>
            <h4>4.3 stars</h4>
        </div>
    )
}
const Body = () =>{
    return 
    <div>
        <ReasturantCards />
    </div>
        
}

const Footer = () =>{
    return <h4>footer</h4>
}
const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <ReasturantCards />
        <Footer />
        
        </>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);