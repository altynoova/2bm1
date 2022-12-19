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
import Admin from "./components/Admin/Admin";

import AdminHome from './components/Admin/pages/Home'
import AdminAbout from './components/Admin/pages/About'
import AdminLessons from './components/Admin/pages/Lessons'
import AdminStudents from './components/Admin/pages/Students'
import AdminTimetable from './components/Admin/pages/Timetable'

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
<<<<<<< HEAD
      fetch('https://6385ad5cbeaa645826652853.mockapi.io/students', { 
=======
      //  http://localhost:25420/api/student
      //

      fetch('https://34f4-46-251-199-95.eu.ngrok.io/api/student', { 
>>>>>>> d7d5d71572d8a80dfade6e797ba144d71d3bc107
        method: "get", 
        headers: new Headers({ 
          "ngrok-skip-browser-warning": "3000", 
        }), 
      }) 
        .then((response) => response.json()) 
        .then((data) => upadateStudents(data)) 
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
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
