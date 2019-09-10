import React from "react";

const Nav = props => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-faded">
        <a className="navbar-brand" href="/123">
          JEST TEST
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/123">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/123">
              Contact
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Nav;
