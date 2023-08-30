import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurentMenu from "./src/components/RestaurentMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent></HeaderComponent>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <BodyComponent /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "restaurent/:resId", element: <RestaurentMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
