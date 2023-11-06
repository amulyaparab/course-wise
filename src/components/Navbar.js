import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 onClick={() => navigate("/")}>CourseWise</h1>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li>
          <i class="fa-solid fa-circle-user user"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
