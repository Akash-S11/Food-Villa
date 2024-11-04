import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/header";
import Body from "./src/components/body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/components/about";
import Contact from "./src/components/contact";
import Error from "./src/components/error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const AppRouter = createBrowserRouter ([
  {
    path : "/",
    element : <AppLayout />,
    errorElement : <Error />,
  },
  {
    path : "/about",
    element: <About />,
  },
  {
    path : "/contact",
    element : <Contact />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);