import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams();
  const courseData = useSelector((state) => state.courses.filteredCourses);

  const currentCourse = courseData?.find(
    (course) => course?.id === Number(courseId)
  );

  const {
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
  } = currentCourse ?? {};

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
          <div>
            Prerequisites:{" "}
            {prerequisites?.map((requisite, index) => (
              <li key={index}>{requisite}</li>
            ))}
          </div>
          {(enrollmentStatus === "Open" ||
            enrollmentStatus === "In Progress") && <button>Enroll Now</button>}
        </div>
      </div>
      <div className="course-extra-info">
        <div className="students">
          <h3>Students</h3>
          {students?.map(({ id, name }) => (
            <div key={id} className="student">
              <i className="fa-solid fa-circle-user"></i>
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
