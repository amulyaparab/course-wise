import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import owl from "./owl.png";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div>
        {" "}
        <h1 onClick={() => navigate("/")}>CourseWise</h1>
        {/* <img src={owl} style={{ width: "50px" }} /> */}
      </div>

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
