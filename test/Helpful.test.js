import Helpful from "../src/components/Helpful";

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({
  adapter: new Adapter(),
});

describe("Helpful Component Test Suite", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Helpful storedCount={5} />);
  });

  test("Should increment Helpful Count when clicked", () => {
    expect(wrapper.exists(".clicks-5")).toBe(true);
    wrapper.find("#helpfulClick").simulate("click");
  });

});
