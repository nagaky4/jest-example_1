import React from "react";
import Nav from "./Nav";
import Carosel from "./Carosel";

const Header = props => {
  return (
    <div>
      <Nav />
      <Carosel />
      <div className="marginBody" style={{ margin: "10px 0 0 10px" }}></div>
    </div>
  );
};
export default Header;
