import React from "react";
import { useSelector } from "react-redux";

const Error = () => {
  const error = useSelector((state) => state.courses.error);
  return <div className="blue-text">Error: {error}</div>;
};

export default Error;
