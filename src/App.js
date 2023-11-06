import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CourseDetails from "./pages/CourseDetails";
import CourseListing from "./pages/CourseListing";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/slices/courseSlice";
import UserProfile from "./pages/UserProfile";
import { fetchUser } from "./store/slices/userSlice";
import Error from "./components/Error";
import Loader from "./components/Loader";

function App() {
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.user.status);
  const courseStatus = useSelector((state) => state.courses.status);

  const isLoading = userStatus === "Loading" || courseStatus === "Loading";
  const hasError = userStatus === "Error" || courseStatus === "Error";

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <div className="app-background">
        {isLoading ? (
          <Loader />
        ) : hasError ? (
          <Error />
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/courses" element={<CourseListing />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
