import React from "react";
import ModalVideo from "../ModalVideo";
import renderer from "react-test-renderer";

const props = {
  videoPath: "videoPath",
  isOpen: false,
  close: function () {},
};

test("Render ModalVideo correctly", () => {
  const component = renderer.create(
    <ModalVideo
      videoPath={props.videoPath}
      isOpen={props.isOpen}
      close={props.close}
    ></ModalVideo>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
