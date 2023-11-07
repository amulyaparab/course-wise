import CourseCard from "../components/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { searchCourses } from "../store/slices/courseSlice";
import { useDebounce } from "../hooks/useDebounce";

export const CourseListing = () => {
  const dispatch = useDispatch();
  const { filteredCourses } = useSelector((state) => state.courses);
  const searchforCourses = (event) =>
    dispatch(searchCourses(event.target.value));
  const debouncedSearch = useDebounce(searchforCourses, 300);
  return (
    <>
      <div className="course-nav">
        <h1>All Courses</h1>
        <div className="search-bar">
          <input
            placeholder="Search here for course or instructor"
            onChange={debouncedSearch}
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
      </div>
      {filteredCourses?.length ? (
        <div className="container">
          <div className="all-courses">
            {filteredCourses?.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      ) : (
        <h2 className="blue-text"> Course Not Found.</h2>
      )}
    </>
  );
};
