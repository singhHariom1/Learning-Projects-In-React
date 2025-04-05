import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

// This will not work as it is a JavaScript Object not a React Element
/*
const reactElement = {
    type: 'a',
    props: {
        href: "http://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}
*/

//Correct way to make a React Element.
const reactElement = React.createElement(
  "a",
  { href: "http://google.com", target: "_blank" },
  "Click me to visit google"
);

const anotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Google!
  </a>
);

function MyApp() {
  return <h1>Custom React App!</h1>;
}

createRoot(document.getElementById("root")).render(<App />);
