import "./App.css";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CourseDetails from "./pages/CourseDetails";
import CourseListing from "./pages/CourseListing";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="navbar">
        <h1 onClick={() => navigate("/")}>CourseWise</h1>
        <ul>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <i class="fa-solid fa-circle-user user"></i>
          </li>
        </ul>
      </header>
      <div className="app-background">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<CourseListing />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
