import React from "react";
import { act, create } from "react-test-renderer";
import Button from "../Button";

// 渲染组件
let root;
act(() => {
  root = create(<Button data="a" />);
});

it("demo", () => {
  expect(root.toJSON().children[1]).toBe("a");
  act(() => {
    root.update(<Button data="b" />);
  });
  expect(root.toJSON().children[1]).toBe("b");
});
