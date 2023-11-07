import { useDispatch, useSelector } from "react-redux";
import {
  dislikeCourse,
  enrollToCourse,
  likeCourse,
  markCourseAsComplete,
  markCourseAsIncomplete,
  unEnrollFromCourse,
} from "../../store-and-slices/slices/userSlice";

const CourseInfo = ({ courses, currentCourse }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

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
      {(canCourseBeEnrolledIn || isUserEnrolled) && (
        <button
          className={`${isUserEnrolled && "enrolled-button"}`}
          onClick={() =>
            isUserEnrolled
              ? dispatch(unEnrollFromCourse(currentCourse?.name))
              : dispatch(enrollToCourse(currentCourse?.name))
          }
        >
          {isUserEnrolled ? "Already Enrolled" : "Enroll Now"}
        </button>
      )}
      {isUserEnrolled && (
        <button
          className={
            isCourseCompleted ? "completed-btn" : "mark-as-complete-btn"
          }
          onClick={() =>
            isCourseCompleted
              ? dispatch(markCourseAsIncomplete(currentCourse?.name))
              : dispatch(markCourseAsComplete(currentCourse?.name))
          }
        >
          {isCourseCompleted ? "Completed!" : "Mark As Complete"}
        </button>
      )}
    </div>
  );
};

export default CourseInfo;
