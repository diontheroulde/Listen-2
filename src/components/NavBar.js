import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#ccccff",
  textDecoration: "none",
  color: "white",
};

const Navbar = () => {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#4d4dff",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/favorites"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#4d4dff",
        }}
      >
        Favorites
      </NavLink>
      <NavLink
        to="/videos"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#4d4dff",
        }}
      >
        Videos
      </NavLink>
    </div>
  );
}

export default Navbar; 