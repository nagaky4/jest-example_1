import React from "react";
import { shallow, mount } from "../enzyme";

import ListPet from "../components/ListPet";

describe("<ListPet /> component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ListPet />);
  });

  // it("should be render list correctly", () => {
  //   const listPet = ["lily", "miku", "susu", "mick", "susu"];
  //   wrapper.setProps({ listPet: listPet });
  //   expect(wrapper.find("li")).toHaveLength(listPet.length);
  // });

  // it("find li element , should have lily text is a first pet of list pet", () => {
  //   const listPet = ["lily", "miku", "susu", "mick", "susu"];
  //   wrapper.setProps({ listPet: listPet });
  //   expect(
  //     wrapper
  //       .find("li")
  //       .at(0)
  //       .text()
  //   ).toMatch(/lily/);
  // });

  // it("find first li of ul element , should have lily text is a first pet of list pet ", () => {
  //   const listPet = ["lily", "miku", "susu", "mick", "susu"];
  //   wrapper.setProps({ listPet: listPet });
  //   expect(
  //     wrapper
  //       .find("ul")
  //       .childAt(0)
  //       .text()
  //   ).toMatch(/lily/);
  // });

  // it("li should have 2 parent ul < div ", () => {
  //   expect(
  //     wrapper
  //       .find("li")
  //       .first()
  //       .parents()
  //   ).toHaveLength(3);
  // });

  // it("ul should have parent is h1 element ", () => {
  //   wrapper = shallow(<ListPet />);
  //   expect(
  //     wrapper
  //       .find("ul")
  //       .parent()
  //       .is("h1")
  //   ).toEqual(true);
  // });

  // it("ul should have class .haha is a className of h1", () => {
  //   wrapper = shallow(<ListPet />);
  //   expect(
  //     wrapper
  //       .find("ul")
  //       .closest(".haha")
  //       .is("h1")
  //   ).toEqual(true);
  // });

  // it("should enough li corresponding listPett", () => {
  //   const listPet = ["lily", "miku", "susu", "mick", "susu"];
  //   wrapper = shallow(<ListPet />);
  //   wrapper.setProps({ listPet: listPet });
  //   expect(wrapper.find("ul").children()).toHaveLength(listPet.length);
  // });

  // it("should have <div className.hihi >hihi</div> ", () => {
  //   expect(wrapper.contains(<div className="hihi">hihi</div>)).toEqual(true);
  // });

  // it("should have li with test miku ", () => {
  //   expect(
  //     wrapper.containsAllMatchingElements([
  //       <li>
  //         miku
  //         <button type="button">choose pet</button>
  //       </li>
  //     ])
  //   ).toEqual(true);
  // });

  // it("should have any li with test lily ", () => {
  //   expect(
  //     wrapper.containsAnyMatchingElements([
  //       <li>
  //         mika
  //         <button type="button">choose pet</button>
  //       </li>,
  //       <li>
  //         lily
  //         <button type="button">choose pet</button>
  //       </li>
  //     ])
  //   ).toEqual(true);
  // });

  // it("should have props listPet", () => {
  //   wrapper = mount(<ListPet />);
  //   wrapper.setProps({ listPet: ["misu", "lulu"], x: "123" });
  //   console.log(wrapper.props());
  //   expect(wrapper.props().listPet).toContain("misu");
  // });

  it("should render when click", () => {
    wrapper = shallow(<ListPet />);
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(wrapper.find("h1").text()).toContain("lily");
    wrapper.unmount();
  });


});
