import React from "react";

const Students = ({ currentCourse }) => {
  return (
    <div className="students">
      <h3>Students</h3>
      {currentCourse?.students?.map(({ id, name }, index) =>
        index < 2 ? (
          <div key={id} className="student">
            <i className="fa-solid fa-circle-user"></i>
            <p>{name}</p>
          </div>
        ) : null
      )}
      <p> . . . {currentCourse?.students.length - 2} More Students</p>
    </div>
  );
};

export default Students;
