import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CourseDetails from "./pages/CourseDetails";
import CourseListing from "./pages/CourseListing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
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
