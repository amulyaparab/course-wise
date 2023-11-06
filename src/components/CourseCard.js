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
  onDashboard,
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
  const navigateToDetails = (id) => {
    navigate(`/courses/${id}`);
  };
  return (
    <div
      className="single-course"
      key={id}
      onClick={() => !onDashboard && navigateToDetails(id)}
    >
      <div
        className="course-thumbnail"
        onClick={() => onDashboard && navigateToDetails(id)}
      >
        {isUserEnrolled && (
          <div className="enrolled-tag enrolled">Enrolled</div>
        )}
        {canCourseBeEnrolledIn && (
          <div className="enroll-now-tag">Enroll Now</div>
        )}
        <img src={thumbnail} alt={name} />
        <span>{duration}</span>
      </div>
      {onDashboard && (
        <div className="progress-bar">
          <div className="icon"></div>
        </div>
      )}
      <div className="details">
        <small>{location}</small>
        <h3 onClick={() => onDashboard && navigateToDetails(id)}>{name}</h3>
        <p>Instructor: {instructor}</p>
        {onDashboard && (
          <>
            <em>
              <strong>Due date:</strong> {duration} weeks from now
            </em>
            <button className="mark-as-complete-btn">Mark As Complete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
