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
  const url = 'https://2bb7-46-251-194-193.eu.ngrok.io';
  const [load, upadateLoad] = useState(true);
  const [students, upadateStudents] = useState([]);
  const [lessons, upadateLessons] = useState([]);
  const [timetable, upadateTiemtable] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    (async () => {

      fetch(`${url}/api/student`, { 
        method: "get", 
        headers: new Headers({ 
          "ngrok-skip-browser-warning": "3000", 
        }), 
      }) 
        .then((response) => response.json()) 
        .then((data) => upadateStudents(data)) 

      fetch(`${url}/api/lesson`, { 
        method: "get", 
        headers: new Headers({ 
          "ngrok-skip-browser-warning": "3000", 
        }), 
      }) 
        .then((response) => response.json()) 
        .then((data) => upadateLessons(data)) 
      
      fetch(`${url}/api/timetable`, { 
        method: "get", 
        headers: new Headers({ 
          "ngrok-skip-browser-warning": "3000", 
        }), 
      }) 
        .then((response) => response.json()) 
        .then((data) => console.log(data)) 
    })()
  }, [])

  return (
    <AppContext.Provider
    value={{
      students,
      lessons,
      timetable
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
