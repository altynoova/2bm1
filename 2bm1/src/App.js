import React, { useState, useEffect } from "react";
import axios from "axios";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Socials from "./components/Socials/Socials";
import Students from "./components/Students/Students";
import Lessons from "./components/Lessons/Lessons";
import Timetable from "./components/Timetable/Timetable";
import AppContext from "./Context";

function App() {
  const [load, upadateLoad] = useState(true);
  const [students, upadateStudents] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    (async () => {
      //  https://6385ad5cbeaa645826652853.mockapi.io/students
      const studentsData = await axios.get('http://localhost:25420/api/student')
      upadateStudents(studentsData.data)
    })()
  }, [])

  return (
    <AppContext.Provider
    value={{
      students
    }}>
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/students" element={<Students />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
