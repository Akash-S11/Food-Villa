import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/header";
import Body from "./src/components/body";
import Footer from "./src/components/footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/about";
import Contact from "./src/components/contact";
import Error from "./src/components/error";
import RestaurantMenu from "./src/components/restaurantMenu";
import UserInput from "./src/components/profile";
import UserLogin from "./src/components/login.js"
import Instamart from "./src/components/instamart.js";
//import UserInput from "./src/components/profileCLass";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const AppRouter = createBrowserRouter ([
  {
    path : "/",
    element : <AppLayout />,
    errorElement : <Error />,
    children : [
    {
      path : "/",
      element: <Body />,
    },
    {
      path : "/about",
      element: <About />,
    },
    {
      path : "/contact",
      element : <Contact />,
    },
    {
      path : "/restaurant/:rest",
      element : <RestaurantMenu />,
    },
    {
      path : "/userinput",
      element: <UserInput />,
    },
    {
      path : "/login",
      element : <UserLogin />
    },
    {
      path : "/instamart",
      element : <Instamart />
    }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);