import React from "react";
import { shallow } from "enzyme";
import VideosCatalog from "../VideosCatalog";
describe("VideosCatalog", () => {
  const testProps = {
    props: {
      a: { id: "a" },
      b: { id: "b" },
    },
  };

  it("renders correctly", () => {
    const wrapper = shallow(<VideosCatalog {...testProps} />);

    expect(wrapper.find("VideosCatalog").length).toBe(2);

    expect(wrapper).toMatchSnapshot();
  });
});
