import React from "react";
import CourseCard from "../components/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { searchCourses } from "../store/slices/courseSlice";

const CourseListing = () => {
  const dispatch = useDispatch();

  const { status, error, filteredCourses } = useSelector(
    (state) => state.courses
  );

  return (
    <>
      {status === "Loading" ? (
        <div>Loading...</div>
      ) : status === "Error" ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <div className="course-nav">
            <h1>All Courses</h1>
            <div className="search-bar">
              <input
                placeholder="Search here for course or instructor"
                onChange={(event) =>
                  dispatch(searchCourses(event.target.value))
                }
              />
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </div>
          </div>
          <div className="container">
            <div className="all-courses">
              {filteredCourses?.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseListing;
