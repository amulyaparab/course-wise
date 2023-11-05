import React from "react";
import courseData from "../database/courseData";
import { useNavigate } from "react-router-dom";
const CourseListing = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Courses</h1>
      <div className="all-courses">
        {courseData.map(
          ({
            id,
            name,
            instructor,
            enrollmentStatus,
            thumbnail,
            duration,
            location,
          }) => (
            <div
              className="single-course"
              key={id}
              onClick={() => navigate(`/courses/${id}`)}
            >
              <div className="course-thumbnail">
                {(enrollmentStatus === "Open" ||
                  enrollmentStatus === "In Progress") && (
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
          )
        )}
      </div>
    </>
  );
};

export default CourseListing;
