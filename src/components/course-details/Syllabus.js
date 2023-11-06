import { useState } from "react";

const Syllabus = ({ currentCourse }) => {
  const [showSyllabus, setShowSyllabus] = useState(false);

  return (
    <div className="syllabus">
      <div className="syllabus-headline">
        <h3>Syllabus</h3>
        <i
          className={`fa-solid ${
            showSyllabus ? "fa-chevron-up" : "fa-chevron-down"
          }`}
          onClick={() => setShowSyllabus(!showSyllabus)}
        ></i>
      </div>

      {showSyllabus &&
        currentCourse?.syllabus?.map(({ week, topic, content }) => (
          <div key={week} className="syllabus-details">
            <div className="week">{week}</div>
            <div>
              <h3>{topic}</h3>
              <p>{content}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Syllabus;
