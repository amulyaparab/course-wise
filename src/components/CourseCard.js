import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CourseCard = ({
  id,
  enrollmentStatus,
  thumbnail,
  name,
  duration,
  location,
  instructor,
}) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const courses = useSelector((state) => state.courses.courses);
  const isUserEnrolled = courses
    .filter((course) => user.enrolledCourses?.includes(course.name))
    .find((course) => course.name.includes(name));
  console.log(isUserEnrolled);
  const canCourseBeEnrolledIn =
    (enrollmentStatus === "Open" && !isUserEnrolled) ||
    (enrollmentStatus === "In Progress" && !isUserEnrolled);

  return (
    <div
      className="single-course"
      key={id}
      onClick={() => navigate(`/courses/${id}`)}
    >
      <div className="course-thumbnail">
        {isUserEnrolled && (
          <div className="enrolled-tag enrolled">Enrolled</div>
        )}
        {canCourseBeEnrolledIn && (
          <div className="enroll-now-tag">Enroll Now</div>
        )}
        <img src={thumbnail} alt={name} />
        <span>{duration}</span>
      </div>
      <div className="details">
        <small>{location}</small>
        <h3>{name}</h3>
        <p>Instructor: {instructor}</p>
      </div>
    </div>
  );
};

export default CourseCard;
