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
import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";
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



const AppLayout =()=>{
  return (<div className="app">
    <HeaderComponent></HeaderComponent>
    <BodyComponent/>
  </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
