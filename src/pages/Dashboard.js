import { useSelector } from "react-redux";
import CourseCard from "../components/CourseCard";

export const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  const courses = useSelector((state) => state.courses.courses);

  const usersCourses = courses.filter((course) =>
    user?.enrolledCourses?.includes(course.name)
  );

  return (
    <>
      <h1>My Dashboard</h1>
      <div className="welcome-user">
        <h1>Hi {user?.name}! 👋</h1>
      </div>
      {usersCourses?.length ? (
        <div className="all-courses users-courses">
          {usersCourses?.map((course) => (
            <CourseCard key={course.id} {...course} onDashboard />
          ))}
        </div>
      ) : (
        <h2 className="blue-text">
          No Courses here! Enroll now and learn something new today! 🦉
        </h2>
      )}
    </>
  );
};
