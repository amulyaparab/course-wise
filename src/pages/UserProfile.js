import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <h1> {user?.name} </h1>
      <img src={user?.profilePic} alt={user?.name} />
      <p>Username: {user?.username}</p>
      <p>Email: {user?.email}</p>
      <p>Courses: {user?.enrolledCourses}</p>
    </div>
  );
};

export default UserProfile;
