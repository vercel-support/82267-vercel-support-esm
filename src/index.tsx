/* @refresh reload */
import type { Component } from "solid-js";
import { render } from "solid-js/web";

const App: Component = () => {
  return (
    <h1>Hello, World !</h1>
  );
};

render(
    () => <App />,
    document.getElementById("root") as HTMLDivElement
);

