import React from "react";
import { shallow, mount } from "../enzyme";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carosel from "../components/Carosel";

describe("s", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should render no error", () => {
    // console.log(wrapper.debug({ verbose: true }));
    expect(wrapper.find(Nav)).toHaveLength(1);
    expect(wrapper.find(Carosel)).toHaveLength(1);
    expect(wrapper.find(".marginBody")).toHaveLength(1);
  });

  it("should have text home in nav", () => {
    // console.log(
    //   wrapper
    //     .find(Nav)
    //     .dive()
    //     .debug()
    // );
    // expect(
    //   wrapper
    //     .find(Nav)
    //     .dive()
    //     .find("a")
    //     .at(1)
    //     .text()
    // ).toMatch(/Home/);

    let x = wrapper
      .find(Nav)
      .dive()
      .find("a")
      .map(node => {
        return node.text();
      });
    expect(x).toContain("Home");
  });
});
