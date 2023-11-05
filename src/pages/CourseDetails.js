import React from "react";
import { useParams } from "react-router-dom";
import courseData from "../database/courseData";
import { Fragment } from "react";
const CourseDetails = () => {
  const { courseId } = useParams();
  const currentCourse = courseData.find(
    (course) => course.id === Number(courseId)
  );
  const {
    id,
    name,
    instructor,
    description,
    enrollmentStatus,
    thumbnail,
    duration,
    schedule,
    location,
    prerequisites,
    syllabus,
    students,
  } = currentCourse;

  return (
    <>
      <h1>{name}</h1>
      <div className="course-info">
        <img src={thumbnail} alt={name} />
        <div className="course-details">
          <p className="instuctor">Instructor: {instructor}</p>
          <p>Description: {description}</p>
          <p>
            Enrollment Status:{" "}
            <span
              className={
                enrollmentStatus === "Open"
                  ? "open"
                  : enrollmentStatus === "Closed"
                  ? "closed"
                  : "progress"
              }
            >
              {enrollmentStatus}
            </span>
          </p>
          <p>Duration: {duration}</p>
          <p>Schedule: {schedule}</p>
          <p>Location: {location}</p>
          <p>Prerequisites: {prerequisites}</p>
        </div>
      </div>
      <div className="course-extra-info">
        <div className="students">
          <h3>Students</h3>
          {students?.map(({ id, name, email }) => (
            <div key={id} className="student">
              <p>{name}</p>
            </div>
          ))}
        </div>
        <div className="syllabus">
          <h3>Syllabus</h3>
          {syllabus?.map(({ week, topic, content }) => (
            <div key={week} className="syllabus-details">
              <div className="week">{week}</div>
              <div>
                <h3>{topic}</h3>
                <p>{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
