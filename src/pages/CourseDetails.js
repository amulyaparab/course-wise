import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Syllabus from "../components/course-details/Syllabus";
import Students from "../components/course-details/Students";
import CourseInfo from "../components/course-details/CourseInfo";

const CourseDetails = () => {
  const { courseId } = useParams();
  const courses = useSelector((state) => state.courses.courses) || [];

  const currentCourse =
    courses.find((course) => course?.id === Number(courseId)) || {};

  const { name, thumbnail, students, syllabus } = currentCourse;
  return (
    <>
      <h1 className="heading">{name}</h1>
      <div className="course-info">
        <div className="course-image">
          <img src={thumbnail} alt={name} />
          <Students students={students} />
        </div>
        <div className="course-details">
          <CourseInfo courses={courses} currentCourse={currentCourse} />
          <Syllabus syllabus={syllabus} />
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
