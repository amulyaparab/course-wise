import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CourseDetails,
  CourseListing,
  Dashboard,
  Error,
  Loader,
  Navbar,
  Route,
  Routes,
  UserProfile,
  fetchData,
  fetchUser,
} from "./pages";

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
