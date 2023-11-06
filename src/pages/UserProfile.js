import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="user-profile">
      <img src={user?.profilePic} alt={user?.name} />
      <h1> {user?.name} </h1>
      <table>
        <tr>
          <td>Username</td>
          <td>{user?.username}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{user?.email}</td>
        </tr>
        {/* <tr>
          <td>Courses</td>
          <td>
            {user?.enrolledCourses?.map((course) => (
              <div>{course}</div>
            ))}
          </td>
        </tr> */}
      </table>
    </div>
  );
};

export default UserProfile;
