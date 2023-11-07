import { useSelector } from "react-redux";

export const Error = () => {
  const error = useSelector((state) => state.courses.error);
  return <div className="blue-text">Error: {error}</div>;
};
