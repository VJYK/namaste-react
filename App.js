import React from "react";
import ReactDOM from "react-dom/client";

//Create element using core react
// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Hello React H1"),
//     React.createElement("h2", {}, "Hello React H2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hello React H1"),
//     React.createElement("h2", {}, "Hello React H2"),
//   ]),
// ]);



//Create element using JSX
// const jsxHeading = <h1>Namaste React using JSX</h1>;



const Title = ()=> (
<h1 className="head" tabIndex={1}> Namaste React JSX 
</h1>
);

//React Fragment
const HeadingComponent = () => (
//   <React.Fragment>
   <>
   <div id="container">
      <Title />
      <h1 className="heading"> Namaste React Functional Components</h1>
    </div>
    <div id="container-2">
      <Title />
      <h1 className="heading"> Namaste React Functional Components</h1>
    </div>
    </>
  //</React.Fragment>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)
