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
  Navigate,
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

import AdminHome from "./components/Admin/pages/Home";
import AdminAbout from "./components/Admin/pages/About";
import AdminLessons from "./components/Admin/pages/Lessons";
import AdminStudents from "./components/Admin/pages/Students";
import AdminTimetable from "./components/Admin/pages/Timetable";

import AppContext from "./Context";

function App() {
  //https://1d23-212-42-96-202.in.ngrok.io
  const url = "https://6385ad5cbeaa645826652853.mockapi.io";
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
      fetch(`${url}/students`, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "3000",
        }),
      })
        .then((response) => response.json())
        .then((data) => upadateStudents(data));

      fetch(`${url}/lessons`, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "3000",
        }),
      })
        .then((response) => response.json())
        .then((data) => upadateLessons(data));

      fetch(`${url}/timetable`, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "3000",
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    })();
  }, []);

  const lessonsRequest = async (obj, method) => {
    console.log(JSON.stringify(obj), method)
    if (method === 'PUT') {
      const response = await fetch(`${url}/api/lesson/${obj.id}`, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "3000"
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(obj) // body data type must match "Content-Type" header
      })
    } else if (method === 'DELETE') {
      const response = await fetch(`${url}/api/lesson/${obj.id}`,{
          method: method, // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "3000"
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        })
    } else if (method === 'POST') {
      const response = await fetch(`${url}/api/lesson`, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "3000"
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(obj) // body data type must match "Content-Type" header
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        students,
        lessons,
        timetable,
        lessonsRequest
      }}
    >
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
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
