import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  enrollToCourse,
  markCourseAsComplete,
  likeCourse,
  dislikeCourse,
} from "../store-and-slices/slices/userSlice";
import Syllabus from "../components/course-details/Syllabus";
import Students from "../components/course-details/Students";

export const CourseDetails = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courses.courses);
  const user = useSelector((state) => state.user.user);

  const currentCourse = courses?.find(
    (course) => course?.id === Number(courseId)
  );

  const isUserEnrolled = courses
    .filter((course) => user?.enrolledCourses?.includes(course.name))
    .find((course) => course.name.includes(currentCourse?.name));

  const canCourseBeEnrolledIn =
    (currentCourse?.enrollmentStatus === "Open" && !isUserEnrolled) ||
    (currentCourse?.enrollmentStatus === "In Progress" && !isUserEnrolled);

  const isCourseCompleted = courses
    .filter((course) => user?.completedCourses?.includes(course.name))
    .find((course) => course.name.includes(currentCourse?.name));

  const isCourseLiked = courses
    .filter((course) => user?.likedCourses?.includes(course.name))
    .find((course) => course.name.includes(currentCourse?.name));

  return (
    <>
      <h1 className="heading">{currentCourse?.name}</h1>
      <div className="course-info">
        <div className="course-image">
          <img src={currentCourse?.thumbnail} alt={currentCourse?.name} />
          <Students currentCourse={currentCourse} />
        </div>

        <div className="course-details">
          <div>
            <i
              className={`fa-solid fa-heart heart bigger ${
                isCourseLiked && "red-heart"
              }`}
              onClick={(event) => {
                event.stopPropagation();
                isCourseLiked
                  ? dispatch(dislikeCourse(currentCourse?.name))
                  : dispatch(likeCourse(currentCourse?.name));
              }}
            ></i>
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
            {isUserEnrolled && (
              <button
                className={
                  isCourseCompleted ? "completed-btn" : "mark-as-complete-btn"
                }
                onClick={() =>
                  dispatch(markCourseAsComplete(currentCourse?.name))
                }
              >
                {isCourseCompleted ? "Completed!" : "Mark As Complete"}
              </button>
            )}
          </div>

          <Syllabus currentCourse={currentCourse} />
        </div>
      </div>
    </>
  );
};
