import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Making project like swiggy
/* 
    -Navbar
        * logo
        * nav links
    -Body
        * Search Bar
        * Reastaurants container
            -restaurant cards
                --img
                --rating
                --title
    -footer
        * copyright
        * contacts
        * address
*/

const AppLayout = () => {
  return (
    <div>
      <Heading />
      <Outlet /> 
    </div>
  );
};
// assigning configuration to appRouter
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);
