import React from "react";
import Home from "../home";
import renderer from "react-test-renderer";

test("Home Loading correctly", () => {
  const component = renderer.create(<Home></Home>);
  let tree = component.toJSON();
  expect(tree.children.length).toBe(3);
  expect(tree).toMatchSnapshot();
});
