import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 onClick={() => navigate("/")}>
        CourseWise <span style={{ fontSize: "2rem" }}>🦉</span>
      </h1>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/user">
            <i className="fa-solid fa-circle-user user"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
