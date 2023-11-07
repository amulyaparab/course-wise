import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { markCourseAsComplete } from "../store/slices/userSlice";

const CourseCard = ({
  id,
  enrollmentStatus,
  thumbnail,
  name,
  duration,
  location,
  instructor,
  onDashboard,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const courses = useSelector((state) => state.courses.courses);

  const isUserEnrolled = courses
    .filter((course) => user.enrolledCourses?.includes(course.name))
    .find((course) => course.name.includes(name));

  const isCourseCompleted = courses
    .filter((course) => user.completedCourses?.includes(course.name))
    .find((course) => course.name.includes(name));

  const canCourseBeEnrolledIn =
    (enrollmentStatus === "Open" && !isUserEnrolled) ||
    (enrollmentStatus === "In Progress" && !isUserEnrolled);

  const navigateToDetails = (id) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div
      className="single-course"
      key={id}
      onClick={() => !onDashboard && navigateToDetails(id)}
    >
      <div
        className="course-thumbnail"
        onClick={() => onDashboard && navigateToDetails(id)}
      >
        <i className="fa-solid fa-heart heart"></i>
        {isUserEnrolled && (
          <div className="enrolled-tag enrolled">Enrolled</div>
        )}
        {canCourseBeEnrolledIn && (
          <div className="enroll-now-tag">Enroll Now</div>
        )}
        <img src={thumbnail} alt={name} />
        <span>{duration}</span>
      </div>
      {onDashboard && (
        <div className={isCourseCompleted ? "complete" : "progress-bar"}>
          <div className="icon"></div>
        </div>
      )}
      <div className="details">
        <small>{location}</small>
        <h3 onClick={() => onDashboard && navigateToDetails(id)}>{name}</h3>
        <p>Instructor: {instructor}</p>
        {onDashboard && (
          <>
            <em>
              <strong>Due date:</strong> {duration} weeks from now
            </em>
            <button
              className={
                isCourseCompleted ? "completed-btn" : "mark-as-complete-btn"
              }
              onClick={() => dispatch(markCourseAsComplete(name))}
            >
              {isCourseCompleted ? "Completed!" : "Mark As Complete"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
