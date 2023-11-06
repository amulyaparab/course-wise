import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { enrollToCourse } from "../store/slices/userSlice";
import Syllabus from "../components/course-details/Syllabus";
import Students from "../components/course-details/Students";

const CourseDetails = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courses.courses);
  const user = useSelector((state) => state.user.user);

  const currentCourse = courses?.find(
    (course) => course?.id === Number(courseId)
  );

  const isUserEnrolled = courses
    .filter((course) => user.enrolledCourses?.includes(course.name))
    .find((course) => course.name.includes(currentCourse?.name));

  const canCourseBeEnrolledIn =
    (currentCourse?.enrollmentStatus === "Open" && !isUserEnrolled) ||
    (currentCourse?.enrollmentStatus === "In Progress" && !isUserEnrolled);

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
        <Syllabus currentCourse={currentCourse} />
        <Students currentCourse={currentCourse} />
      </div>
    </>
  );
};

export default CourseDetails;
