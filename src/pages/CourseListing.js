import React from "react";
import CourseCard from "../components/CourseCard";
import { useSelector } from "react-redux";

const CourseListing = () => {
  const courseData = useSelector((state) => state.courses.courses);

  return (
    <>
      <h1>All Courses</h1>
      <input />
      <div className="all-courses">
        {courseData?.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </>
  );
};

export default CourseListing;
