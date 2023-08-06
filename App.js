import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";

const heading = <h1>Hello JSX</h1>;

const AppLayout =()=>{
  return (<div className="app">
    <HeaderComponent></HeaderComponent>
    <BodyComponent/>
  </div>)
}

const appRouter =createBrowserRouter(
  [{path:'/',element:<AppLayout/>,errorElement:<Error/>},
  {path:'/about',element:<About/>},
  {path:'/contact',element:<Contact/>}
]
  
  )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
