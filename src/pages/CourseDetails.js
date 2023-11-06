import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { enrollToCourse } from "../store/slices/userSlice";

const CourseDetails = () => {
  const [showSyllabus, setShowSyllabus] = useState(false);
  const { courseId } = useParams();
  const courseData = useSelector((state) => state.courses.filteredCourses);

  const currentCourse = courseData?.find(
    (course) => course?.id === Number(courseId)
  );
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const courses = useSelector((state) => state.courses.filteredCourses);
  const isUserEnrolled = courses
    .filter((course) => user.enrolledCourses?.includes(course.name))
    .find((course) => course.name.includes(currentCourse?.name));
  const canCourseBeEnrolledIn =
    (currentCourse?.enrollmentStatus === "Open" && !isUserEnrolled) ||
    (currentCourse?.enrollmentStatus === "In Progress" && !isUserEnrolled);
  // const {
  //   name,
  //   instructor,
  //   description,
  //   enrollmentStatus,
  //   thumbnail,
  //   duration,
  //   schedule,
  //   location,
  //   prerequisites,
  //   syllabus,
  //   students,
  // } = currentCourse;

  return (
    <>
      <h1>{currentCourse?.name}</h1>
      <div className="course-info">
        <img src={currentCourse?.thumbnail} alt={currentCourse?.name} />
        <div className="course-details">
          <p className="instuctor">Instructor: {currentCourse?.instructor}</p>
          <p>Description: {currentCourse?.description}</p>
          <p>
            Enrollment Status:{" "}
            <span
              className={
                currentCourse?.enrollmentStatus === "Open"
                  ? "open"
                  : currentCourse?.enrollmentStatus === "Closed"
                  ? "closed"
                  : "progress"
              }
            >
              {currentCourse?.enrollmentStatus}
            </span>
          </p>
          <p>Duration: {currentCourse?.duration}</p>
          <p>Schedule: {currentCourse?.schedule}</p>
          <p>Location: {currentCourse?.location}</p>
          <div>
            Prerequisites:
            {currentCourse?.prerequisites?.map((requisite, index) => (
              <li key={index}>{requisite}</li>
            ))}
          </div>
          {canCourseBeEnrolledIn && (
            <button
              onClick={() => dispatch(enrollToCourse(currentCourse?.name))}
            >
              Enroll Now
            </button>
          )}
          {isUserEnrolled && (
            <button disabled className="enrolled-button">
              Already Enrolled
            </button>
          )}
        </div>
      </div>
      <div className="course-extra-info">
        <div className="syllabus">
          <div className="syllabus-headline">
            {" "}
            <h3>Syllabus</h3>
            <i
              className={`fa-solid ${
                showSyllabus ? "fa-chevron-up" : "fa-chevron-down"
              }`}
              onClick={() => setShowSyllabus(!showSyllabus)}
            ></i>
          </div>
          {showSyllabus &&
            currentCourse?.syllabus?.map(({ week, topic, content }) => (
              <div key={week} className="syllabus-details">
                <div className="week">{week}</div>
                <div>
                  <h3>{topic}</h3>
                  <p>{content}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="students">
          <h3>Students</h3>
          {currentCourse?.students?.map(({ id, name }, index) =>
            index < 2 ? (
              <div key={id} className="student">
                <i className="fa-solid fa-circle-user"></i>
                <p>{name}</p>
              </div>
            ) : null
          )}
          <p> . . . {currentCourse?.students.length - 2} More Students</p>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
