import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  return (
    <div className="user-profile">
      <img src={user?.profilePic} alt={user?.name} />
      <h1> {user?.name} </h1>
      <p>@{user?.username}</p>
      <p>Email: {user?.email}</p>
      <div className="no-of-courses" onClick={() => navigate("/")}>
        {user?.enrolledCourses?.length} Courses
      </div>
    </div>
  );
};

export default UserProfile;
