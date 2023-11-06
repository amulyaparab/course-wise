import React from "react";
import { useSelector } from "react-redux";
import CourseCard from "../components/CourseCard";

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  const courses = useSelector((state) => state.courses.courses);
  const usersCourses = courses.filter((course) =>
    user.enrolledCourses?.includes(course.name)
  );

  return (
    <>
      <h1>My Dashboard</h1>
      <div className="welcome-user">
        <h1>Hi {user?.name}! 👋</h1>
      </div>
      <div className="all-courses users-courses">
        {usersCourses?.map((course) => (
          <div>
            <CourseCard {...course} onDashboard />
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
