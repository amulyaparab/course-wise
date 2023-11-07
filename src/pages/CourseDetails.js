import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Syllabus from "../components/course-details/Syllabus";
import Students from "../components/course-details/Students";
import CourseInfo from "../components/course-details/CourseInfo";

const CourseDetails = () => {
  const { courseId } = useParams();
  const courses = useSelector((state) => state.courses.courses);

  const currentCourse = courses?.find(
    (course) => course?.id === Number(courseId)
  );

  return (
    <>
      <h1 className="heading">{currentCourse?.name}</h1>
      <div className="course-info">
        <div className="course-image">
          <img src={currentCourse?.thumbnail} alt={currentCourse?.name} />
          <Students currentCourse={currentCourse} />
        </div>
        <div className="course-details">
          <CourseInfo courses={courses} currentCourse={currentCourse} />
          <Syllabus currentCourse={currentCourse} />
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
