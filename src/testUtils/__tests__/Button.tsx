import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils, { act } from "react-dom/test-utils"; // ES6
import Button from "../Button";

let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render and update a counter", () => {
  // 首先测试 render 和 componentDidMount
  act(() => {
    ReactDOM.render(<Button data="a" />, container);
  });
  const button = container.querySelector("#btn");
  expect(button.textContent).toBe("btna");

  // 再测试 render 和 componentDidUpdate
  act(() => {
    ReactDOM.render(<Button data="b" />, container);
  });
  expect(button.textContent).toBe("btnb");
});
