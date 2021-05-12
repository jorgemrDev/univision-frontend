import React from "react";
import VideosCatalog from "../VideosCatalog";
import renderer from "react-test-renderer";

const videos = [
  {
    videoId: "1",
    title: "title",
    thumbnailPath: "thumbnailPath",
    videoPath: "videoPath",
  },
  {
    videoId: "2",
    title: "title2",
    thumbnailPath: "thumbnailPath2",
    videoPath: "videoPath2",
  },
  {
    videoId: "3",
    title: "title3",
    thumbnailPath: "thumbnailPath3",
    videoPath: "videoPath2",
  },
];

test("Render VideosCatalog correctly", () => {
  const component = renderer.create(
    <VideosCatalog videos={videos}></VideosCatalog>
  );
  let tree = component.toJSON();
  expect(tree.length).toBe(3);
  expect(tree).toMatchSnapshot();
});
