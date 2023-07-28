/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>Hello Child1</h1>
 *      <h1>Hello Child2</h1>
 *  </div>
 * </div>
 *
 *
 *
 *
 *
 *
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";

//Create Elements using core React

/* const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello Child1"),
    React.createElement("h2", {}, "Hello Child2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello Child1"),
    React.createElement("h2", {}, "Hsfsfsfsdfsfd"),
  ])]
  ); */
  
//const heading = React.createElement('h1',{id:'head'},'Hello World using React External File');


//Create Element using JSX

const heading = <h1>Hello JSX</h1>;

//Using Jsx create functional component


const RestaurantCard=(props)=>{
  console.log(props);
 return (<div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
    <img className="img-card" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design.jpg"/>
    <h3>{props.resname}</h3>
    <h4>Biryani, North Indian, Indian</h4>
    <h4>4.3 Star</h4>
    <h4>38 Minutes</h4>
  </div>)
}

const HeaderComponent = () => (
  <div className="header">
    <img
      className="logo"
      src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design.jpg"
      alt="logo"
      width={100}
      height={100}
    />
    <div className="navbar-menu">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const BodyComponent =()=>{
return  (
<div className="body">
  <div className="search">Search</div>
  <div className="res-container">
    <RestaurantCard resname="Meghana Sweets"/>
    
  </div>
</div>)
}

const AppLayout =()=>{
  return (<div className="app">
    <HeaderComponent></HeaderComponent>
    <BodyComponent/>
  </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
