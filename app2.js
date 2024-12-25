import React from "react";
import ReactDOM from "react-dom/client";

//Using JSX from now on. Because React.createElement() is not efficient.
//JSX is converted to React.createElement() by Babel.
//JSX is a syntactic sugar for React.createElement()
//JSX is not HTML, it is a syntax extension for JavaScript.
//JSX is closer to JavaScript than HTML.
//JSX is faster because it performs optimization while compiling code to JavaScript.
//JSX is also easier to write and understand.
//JSX can be used in React Native.
//JSX is not a necessity to write React code. But it is recommended.
//JSX is optional but recommended.
//JSX is a syntax extension for JavaScript.
//JSX is used with React to describe what the UI should look like.

//JSX
var jsxHeading = <h1 id="heading">Namaste React from JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
