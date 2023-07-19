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

const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello Child1"),
    React.createElement("h2", {}, "Hello Child2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello Child1"),
    React.createElement("h2", {}, "Hello Child2"),
  ])]
);

console.log(parent);
//const heading = React.createElement('h1',{id:'head'},'Hello World using React External File');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
