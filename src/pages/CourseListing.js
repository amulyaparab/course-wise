import React from "react";
import courseData from "../database/courseData";
import CourseCard from "../components/CourseCard";

const CourseListing = () => {
  return (
    <>
      <h1>All Courses</h1>
      <input />
      <div className="all-courses">
        {courseData.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </>
  );
};

export default CourseListing;
