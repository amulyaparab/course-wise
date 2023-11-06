import React from "react";
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
  const canCourseBeEnrolledIn =
    enrollmentStatus === "Open" || enrollmentStatus === "In Progress";

  return (
    <div
      className="single-course"
      key={id}
      onClick={() => navigate(`/courses/${id}`)}
    >
      <div className="course-thumbnail">
        {canCourseBeEnrolledIn && (
          <div className="enrolled-tag">Enroll Now</div>
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
