import React from "react";
import Loading from "../Loading";
import renderer from "react-test-renderer";

test("Render Loading correctly", () => {
  const component = renderer.create(<Loading></Loading>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
